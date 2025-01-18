'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Developed a full-featured e-commerce platform with inventory management and payment integration.',
    image: '/placeholder.svg?text=E-commerce',
    caseStudy: 'Our client saw a 200% increase in online sales after launching this new e-commerce platform. The responsive design and user-friendly interface significantly improved customer engagement and conversion rates.'
  },
  {
    title: 'Fitness Tracking App',
    description: 'Created a mobile app for tracking workouts, nutrition, and health metrics.',
    image: '/placeholder.svg?text=Fitness+App',
    caseStudy: 'This fitness app has been downloaded over 100,000 times and maintains a 4.8-star rating. Users report increased motivation and better health outcomes due to the app\'s personalized recommendations and progress tracking features.'
  },
  {
    title: 'Corporate Website Redesign',
    description: 'Redesigned and developed a modern, responsive website for a Fortune 500 company.',
    image: '/placeholder.svg?text=Corporate+Site',
    caseStudy: 'The redesigned website resulted in a 150% increase in organic traffic and a 50% improvement in user engagement metrics. The new design also significantly enhanced the company\'s brand image and online presence.'
  },
]

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="portofolio" className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Portofolio Kami
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer transition-all hover:shadow-lg">
                  <CardContent className="p-0">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{project.title}</DialogTitle>
                </DialogHeader>
                <p>{project.caseStudy}</p>
              </DialogContent>
            </Dialog>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Lihat Semua
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio

