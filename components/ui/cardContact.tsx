import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { ContactForm } from "./contactForm"

export default function CardContact() 
{
    return (
        <Card className="px-4 py-10 gap-2">
            <CardHeader className="text-xl md:text-2xl font-bold p-0">
                Do you have a challenge? Then let's talk
            </CardHeader>
            <CardDescription>
                Available to collaborate on frontend and full-stack projects, create MVPs, and optimize performance/UX.
            </CardDescription>
            <CardContent className="p-0">
                <ContactForm />
            </CardContent>
        </Card>
    )
}
