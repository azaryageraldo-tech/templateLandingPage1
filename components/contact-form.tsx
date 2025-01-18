'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

interface ContactFormProps {
  onSuccess: () => void
}

const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: formData,
    })

    setIsLoading(false)

    if (response.ok) {
      toast({
        title: "Pesan Terkirim",
        description: "Terima kasih telah menghubungi kami. Kami akan segera merespons.",
      })
      onSuccess()
    } else {
      toast({
        title: "Error",
        description: "Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.",
        variant: "destructive",
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input name="name" placeholder="Nama" required />
      </div>
      <div>
        <Input name="email" type="email" placeholder="Email" required />
      </div>
      <div>
        <Textarea name="message" placeholder="Pesan" required />
      </div>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Mengirim...' : 'Kirim Pesan'}
      </Button>
    </form>
  )
}

export default ContactForm

