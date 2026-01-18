import Link from "next/link"
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-15 w-15 items-center justify-center">
                <Image
                    src="/unilogo.png"
                    alt="University Logo"
                    width={100}
                    height={100}
                    className="h-20 w-20 object-contain"
                />
              </div>

            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A premier national university committed to excellence in education, research, and community service in Sri
              Lanka.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-muted-foreground hover:text-primary transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Faculties */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Faculties</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/academics?faculty=fos"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Science & Technology
                </Link>
              </li>
              <li>
                <Link
                  href="/academics?faculty=fom"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Management
                </Link>
              </li>
              <li>
                <Link
                  href="/academics?faculty=foa"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Animal Science
                </Link>
              </li>
              <li>
                <Link
                  href="/academics?faculty=foaqs"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Applied Sciences
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Passara Road, Badulla, Sri Lanka 90000</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+94 55 222 6622</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@uwu.ac.lk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Uva Wellassa University of Sri Lanka. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
