import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Users, Globe, Lightbulb, Heart } from "lucide-react"

const milestones = [
  {
    year: "2007",
    title: "University Established",
    description: "Uva Wellassa University was established by a parliamentary act as a national university.",
  },
  {
    year: "2009",
    title: "First Graduates",
    description: "The university produced its first batch of graduates, marking a significant milestone.",
  },
  {
    year: "2011",
    title: "Faculty Expansion",
    description: "Addition of new faculties and expansion of academic programs to meet growing demand.",
  },
  {
    year: "2015",
    title: "Research Excellence",
    description: "Established research centers and partnerships with international institutions.",
  },
  {
    year: "2019",
    title: "Infrastructure Development",
    description: "Major campus expansion including new laboratories and student facilities.",
  },
  {
    year: "2024",
    title: "Digital Transformation",
    description: "Implementation of modern digital learning platforms and smart campus initiatives.",
  },
]

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Fostering creativity and innovative thinking in education and research.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Upholding the highest standards of academic and professional ethics.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description: "Creating an inclusive environment that celebrates diversity and equal opportunity.",
  },
  {
    icon: Globe,
    title: "Sustainability",
    description: "Committed to environmental stewardship and sustainable practices.",
  },
]

const achievements = [
  { number: "50+", label: "Research Publications Annually" },
  { number: "95%", label: "Graduate Employment Rate" },
  { number: "20+", label: "International Partnerships" },
  { number: "100+", label: "Industry Collaborations" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary py-16 md:py-24">
          <div className="absolute inset-0 bg-[url('/aboutHead.jpg')] bg-cover bg-center opacity-20" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl text-balance">
                About Uva Wellassa University
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/90">
                A premier institution dedicated to academic excellence and national development
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
                <Image src="/university.jpg" alt="UWU Main Building" fill className="object-cover" />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">Our Story</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Uva Wellassa University of Sri Lanka was established in 2007 under the Universities Act No. 16 of
                  1978. Located in the picturesque Uva Province, the university was founded with a vision to provide
                  quality higher education that addresses the socio-economic needs of the nation.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Over the years, UWU has grown from a small institution to a comprehensive university offering diverse
                  programs across multiple faculties. Our commitment to excellence has earned us recognition as one of
                  Sri Lanka&apos;s leading universities.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Today, we continue to evolve, embracing modern pedagogical approaches while staying true to our core
                  mission of producing graduates who can contribute meaningfully to society.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                    <Target className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="font-serif text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide quality higher education through innovative teaching, cutting-edge research, and
                    meaningful community engagement. We strive to develop graduates who possess knowledge, skills, and
                    values necessary to excel in their careers and contribute to national development.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                    <Eye className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <CardTitle className="font-serif text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To be a world-class university recognized for academic excellence, innovative research, and
                    transformative impact on society. We aspire to be the university of choice for students seeking a
                    holistic education that prepares them for global challenges.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">Our Core Values</h2>
              <p className="mt-4 text-muted-foreground">
                The principles that guide everything we do at Uva Wellassa University
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <Card key={value.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">Our Achievements</h2>
              <p className="mt-4 text-primary-foreground/90">Numbers that reflect our commitment to excellence</p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
              {achievements.map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-4xl font-bold text-secondary md:text-5xl">{item.number}</div>
                  <div className="mt-2 text-sm text-primary-foreground/80">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">Our Journey</h2>
              <p className="mt-4 text-muted-foreground">Key milestones in the history of Uva Wellassa University</p>
            </div>
            <div className="mx-auto mt-12 max-w-3xl">
              <div className="relative space-y-8 before:absolute before:left-4 before:top-2 before:h-[calc(100%-16px)] before:w-0.5 before:bg-border md:before:left-1/2 md:before:-translate-x-1/2">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`relative flex gap-6 md:gap-0 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground md:absolute md:left-1/2 md:-translate-x-1/2">
                      {milestone.year.slice(-2)}
                    </div>
                    <Card
                      className={`flex-1 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
                    >
                      <CardHeader className="pb-2">
                        <div className="text-sm font-medium text-primary">{milestone.year}</div>
                        <CardTitle className="text-lg">{milestone.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">University Leadership</h2>
              <p className="mt-4 text-muted-foreground">Guided by experienced academics and administrators</p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Prof. Jayantha Lal Ratnasekera",
                  title: "Vice Chancellor",
                  image: "professional academic man in formal attire portrait",
                },
                {
                  name: "Prof. Samantha Perera",
                  title: "Deputy Vice Chancellor",
                  image: "professional academic woman in formal attire portrait",
                },
                {
                  name: "Mr. Dinesh Kumara",
                  title: "Registrar",
                  image: "professional administrator man in suit portrait",
                },
              ].map((leader) => (
                <Card key={leader.name} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
                      <Image
                        src={`/.jpg?height=96&width=96&query=${leader.image}`}
                        alt={leader.name}
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    <CardTitle className="text-lg">{leader.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{leader.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
