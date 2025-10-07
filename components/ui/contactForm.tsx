"use client"

import * as React from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  email: z.string().email("Introduce un correo válido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
  botField: z.string().optional(),
})

type FeedbackState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string }

type ContactFormProps = {
  descriptionId?: string
}

export function ContactForm({ descriptionId }: ContactFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", message: "", botField: "" },
  })

  const [feedback, setFeedback] = React.useState<FeedbackState>({ status: "idle" })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setFeedback({ status: "idle" })
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error("Request failed")
      }

      form.reset()
      setFeedback({
        status: "success",
        message: "¡Gracias! Recibí tu mensaje y te responderé en las próximas 48 horas.",
      })
    } catch (error) {
      console.error(error)
      setFeedback({
        status: "error",
        message: "No pude enviar el mensaje. Puedes escribirme directo a jean@jeanbravo.dev.",
      })
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5"
        aria-describedby={descriptionId}
      >
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
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
                <Input inputMode="email" placeholder="tu@email.com" {...field} />
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
                  placeholder="Cuéntame sobre tu producto, equipo o retos actuales…"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={form.formState.isSubmitting} className="w-full">
          {form.formState.isSubmitting ? "Enviando…" : "Enviar mensaje"}
        </Button>
        {feedback.status === "success" && (
          <p
            className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-800 dark:border-emerald-500/40 dark:bg-emerald-900/20 dark:text-emerald-200"
            role="status"
          >
            {feedback.message}
          </p>
        )}
        {feedback.status === "error" && (
          <p
            className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800 dark:border-red-500/40 dark:bg-red-900/20 dark:text-red-200"
            role="alert"
          >
            {feedback.message}
          </p>
        )}
      </form>
    </Form>
  )
}
