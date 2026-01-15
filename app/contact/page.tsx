import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Globe, Building } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["Passara Road", "Badulla", "Sri Lanka 90000"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+94 55 222 6622", "+94 55 222 6633", "Fax: +94 55 222 6644"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@uwu.ac.lk", "admissions@uwu.ac.lk", "registrar@uwu.ac.lk"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Friday: 8:30 AM - 4:30 PM", "Saturday: 8:30 AM - 12:30 PM", "Sunday: Closed"],
  },
]

const departments = [
  { name: "Admissions Office", email: "admissions@uwu.ac.lk", phone: "+94 55 222 6625" },
  { name: "Student Affairs", email: "studentaffairs@uwu.ac.lk", phone: "+94 55 222 6626" },
  { name: "Academic Affairs", email: "academic@uwu.ac.lk", phone: "+94 55 222 6627" },
  { name: "Finance Division", email: "finance@uwu.ac.lk", phone: "+94 55 222 6628" },
  { name: "Library", email: "library@uwu.ac.lk", phone: "+94 55 222 6629" },
  { name: "IT Services", email: "it@uwu.ac.lk", phone: "+94 55 222 6630" },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary py-12 md:py-16">
          <div className="absolute inset-0 bg-[url('/university-reception-desk-modern-interior.jpg')] bg-cover bg-center opacity-20" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl text-balance">
                Contact Us
              </h1>
              <p className="mt-4 text-primary-foreground/90">Get in touch with Uva Wellassa University</p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((item) => (
                <Card key={item.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {item.details.map((detail, index) => (
                        <p key={index} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-muted/30 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center mb-8">
              <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">Find Us</h2>
              <p className="mt-2 text-muted-foreground">Located in the beautiful Uva Province of Sri Lanka</p>
            </div>
            <div className="relative aspect-video max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3!2d81.0556!3d6.9853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae462ee3d5ec75b%3A0x8b0a0a0a0a0a0a0a!2sUva%20Wellassa%20University!5e0!3m2!1sen!2slk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Uva Wellassa University Location"
              />
            </div>
          </div>
        </section>

        {/* Department Contacts */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center mb-8">
              <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">Department Contacts</h2>
              <p className="mt-2 text-muted-foreground">Reach out to specific departments for specialized inquiries</p>
            </div>
            <div className="max-w-4xl mx-auto grid gap-4 md:grid-cols-2">
              {departments.map((dept) => (
                <Card key={dept.name}>
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Building className="h-5 w-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold">{dept.name}</h3>
                      <div className="mt-1 space-y-1 text-sm text-muted-foreground">
                        <p className="flex items-center gap-2">
                          <Mail className="h-3 w-3 shrink-0" />
                          <span className="truncate">{dept.email}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <Phone className="h-3 w-3 shrink-0" />
                          {dept.phone}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="bg-primary py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <Globe className="mx-auto h-12 w-12 text-secondary" />
              <h2 className="mt-4 font-serif text-2xl font-bold text-primary-foreground md:text-3xl">
                Connect With Us Online
              </h2>
              <p className="mt-4 text-primary-foreground/90">
                Visit our official website for the latest news, announcements, and online services.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary-foreground/10 px-6 py-3">
                <Globe className="h-5 w-5 text-primary-foreground" />
                <span className="text-primary-foreground font-medium">www.uwu.ac.lk</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
