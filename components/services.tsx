'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Globe, Smartphone, Palette } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Website',
    description: 'Kami membuat website responsif dan modern untuk bisnis Anda.',
    details: 'Layanan pembuatan website kami mencakup desain UI/UX yang menarik, pengembangan frontend dan backend, optimisasi SEO, dan integrasi dengan berbagai sistem manajemen konten.'
  },
  {
    icon: Smartphone,
    title: 'Aplikasi Mobile',
    description: 'Kembangkan aplikasi mobile yang inovatif untuk Android dan iOS.',
    details: 'Tim kami ahli dalam pengembangan aplikasi native dan cross-platform menggunakan teknologi terkini seperti React Native, Flutter, dan Swift.'
  },
  {
    icon: Palette,
    title: 'UI/UX',
    description: 'Desain antarmuka yang intuitif dan pengalaman pengguna yang menarik.',
    details: 'Kami fokus pada menciptakan desain yang tidak hanya menarik secara visual, tetapi juga mudah digunakan dan meningkatkan keterlibatan pengguna.'
  },
]

const Services = () => {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <section id="layanan" className="py-24 bg-muted">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Layanan Kami
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer transition-all hover:shadow-lg">
                  <CardContent className="flex flex-col items-center p-6">
                    <service.icon className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-center text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{service.title}</DialogTitle>
                </DialogHeader>
                <p>{service.details}</p>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

