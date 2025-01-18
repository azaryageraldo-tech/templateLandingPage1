'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Portofolio', href: '#portofolio' },
    { name: 'Tentang Kami', href: '#tentang-kami' },
    { name: 'Hubungi Kami', href: '#hubungi-kami' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/placeholder.svg" alt="Logo" width={32} height={32} />
          <span className="font-bold">TechSolusi</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              className="text-sm font-medium hover:underline underline-offset-4"
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden ml-auto">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <Button className="ml-4 hidden md:inline-flex" asChild>
          <Link href="#hubungi-kami">Hubungi Kami</Link>
        </Button>
      </div>
    </header>
  )
}

export default Header

