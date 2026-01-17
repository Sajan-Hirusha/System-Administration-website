import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Users, BookOpen, Award, ArrowRight, MapPin } from "lucide-react"
import { universityData } from "@/lib/university-data"

const stats = [
  { icon: Users, value: "8,000+", label: "Students" },
  { icon: GraduationCap, value: "15+", label: "Degree Programs" },
  { icon: BookOpen, value: "4", label: "Faculties" },
  { icon: Award, value: "17+", label: "Years of Excellence" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary py-20 md:py-32">
          <div className="absolute inset-0 bg-[url('/university.jpg')] bg-cover bg-center opacity-20" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance">
                Uva Wellassa University of Sri Lanka
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/90 leading-relaxed md:text-xl">
                Empowering future leaders through excellence in education, innovative research, and community engagement
                since 2007.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" variant="secondary" className="font-semibold">
                  <Link href="/academics">
                    Explore Programs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground/50 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-b border-border bg-card py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                    <stat.icon className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                  A Legacy of Excellence in Education
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Established in 2007, Uva Wellassa University has grown to become one of Sri Lanka&apos;s premier
                  institutions of higher education. Located in the scenic Uva Province, our university offers a unique
                  blend of academic rigor and natural beauty.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We are committed to producing graduates who are not only academically accomplished but also socially
                  responsible and ready to contribute to national development.
                </p>
                <Button asChild className="mt-6 bg-transparent" variant="outline">
                  <Link href="/about">
                    About Our University
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
                <Image src="/uvaWellassaUniversity.jpg" alt="UWU Campus" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Faculties Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">Our Faculties</h2>
              <p className="mt-4 text-muted-foreground">
                Discover diverse academic programs across our four faculties, each designed to prepare you for success
                in your chosen field.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {universityData.map((faculty) => (
                <Card key={faculty.id} className="group overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={faculty.image || "/placeholder.svg"}
                      alt={faculty.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{faculty.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-2">{faculty.description}</CardDescription>
                    <div className="mt-3 text-sm text-muted-foreground">
                      {faculty.departments.length} Departments •{" "}
                      {faculty.departments.reduce((acc, dept) => acc + dept.degrees.length, 0)} Degrees
                    </div>
                    <Link
                      href={`/academics?faculty=${faculty.id}`}
                      className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      View Programs
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-16 text-center md:px-12">
              <div className="relative z-10">
                <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
                  Begin Your Journey at UWU
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/90">
                  Join thousands of students who have chosen Uva Wellassa University to shape their future. Explore our
                  programs and discover your path to success.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button asChild size="lg" variant="secondary">
                    <Link href="/academics">Browse Programs</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-primary-foreground border-primary-foreground/50 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <GraduationCap className="h-96 w-96" />
              </div>
            </div>
          </div>
        </section>

        {/* Location Preview */}
        <section className="border-t border-border bg-card py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg lg:order-2">
                <Image src="/beautiful-mountain-landscape-badulla-sri-lanka-tea.jpg" alt="Badulla, Sri Lanka" fill className="object-cover" />
              </div>
              <div className="lg:order-1">
                <div className="flex items-center gap-2 text-secondary">
                  <MapPin className="h-5 w-5" />
                  <span className="font-medium">Badulla, Sri Lanka</span>
                </div>
                <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                  Study in the Heart of Uva Province
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Nestled in the beautiful highlands of Sri Lanka, our campus offers a peaceful and inspiring
                  environment for learning. The region is known for its stunning landscapes, rich biodiversity, and
                  pleasant climate.
                </p>
                <Button asChild className="mt-6 bg-transparent" variant="outline">
                  <Link href="/contact">
                    Visit Our Campus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
