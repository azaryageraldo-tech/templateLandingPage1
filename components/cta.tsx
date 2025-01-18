'use client'

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from 'react'
import ContactForm from './contact-form'

const CTA = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section id="hubungi-kami" className="py-24 bg-primary text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
          Siap Memulai? Hubungi Kami!
        </h2>
        <p className="mb-8 text-lg">
          Kami siap membantu mewujudkan solusi digital untuk bisnis Anda.
        </p>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button>
              Hubungi Kami
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Hubungi Kami</DialogTitle>
            </DialogHeader>
            <ContactForm onSuccess={() => setIsOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

export default CTA

