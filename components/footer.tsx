import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold mb-4">Kontak</h3>
          <address className="not-italic">
            <p className="flex items-center mb-2">
              <MapPin className="mr-2 h-4 w-4" />
              Jl. Janti No. 123, Bantul, Yogyakarta, Indonesia
            </p>
            <p className="flex items-center mb-2">
              <Mail className="mr-2 h-4 w-4" />
              <a href="mailto:info@techsolusi.com">example@techsolusi.com</a>
            </p>
            <p className="flex items-center">
              <Phone className="mr-2 h-4 w-4" />
              <a href="tel:+62123456789">+62 123 456 789</a>
            </p>
          </address>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Media Sosial</h3>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <p className="text-sm text-muted-foreground">
            © 2025 TechSolusi. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

