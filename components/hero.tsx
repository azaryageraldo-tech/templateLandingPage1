import Link from 'next/link'
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section id="beranda" className="py-24 md:py-32 lg:py-40">
      <div className="container flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Solusi Digital untuk Bisnis Anda
        </h1>
        <p className="mt-4 max-w-[700px] text-muted-foreground sm:text-xl">
          Kami menciptakan website & aplikasi sesuai kebutuhan
        </p>
        <Button className="mt-8" size="lg" asChild>
          <Link href="#layanan">Pelajari Lebih Lanjut</Link>
        </Button>
      </div>
    </section>
  )
}

export default Hero

