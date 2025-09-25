"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"
// Si no usas shadcn/input/textarea, usa tus inputs nativos estilizados
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  email: z.string().email("Introduce un correo válido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
  botField: z.string().optional(), // honeypot
})

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", message: "", botField: "" },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error("Request failed")
      // Reset y feedback simple
      form.reset()
      alert("Mensaje enviado 🚀")
    } catch {
      alert("No se pudo enviar el mensaje ❌")
    }
  }

  return (
    <div className="w-full max-w-lg mx-auto rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900 p-6 md:p-10 shadow-sm">
      <h3 className="text-xl md:text-2xl font-semibold mb-2">¿Hablamos?</h3>
      <p className="text-neutral-600 dark:text-neutral-300 mb-6">
        Déjame tu correo y un mensaje y te responderé pronto.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Honeypot oculto para bots */}
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            {...form.register("botField")}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensaje</FormLabel>
                <FormControl>
                  <Textarea
                    rows={5}
                    placeholder="Escribe tu mensaje aquí…"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Enviando..." : "Enviar"}
          </Button>
        </form>
      </Form>
    </div>
  )
}
