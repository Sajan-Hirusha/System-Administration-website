"use client"

import { useState, useMemo, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { universityData, type Faculty, type Department, type Degree, type Course } from "@/lib/university-data"
import { ChevronRight, BookOpen, Clock, GraduationCap, Building, X, Filter } from "lucide-react"
import Image from "next/image"

type ViewType = "faculties" | "faculty" | "department" | "degree" | "course"

interface Selection {
  view: ViewType
  facultyId?: string
  departmentId?: string
  degreeId?: string
  courseId?: string
}

function AcademicsContent() {
  const searchParams = useSearchParams()
  const initialFaculty = searchParams.get("faculty")

  const [selection, setSelection] = useState<Selection>({
    view: initialFaculty ? "faculty" : "faculties",
    facultyId: initialFaculty || undefined,
  })

  const [filters, setFilters] = useState({
    faculty: "all",
    degreeType: "all",
  })

  const [showFilters, setShowFilters] = useState(false)

  // Update selection when URL changes
  useEffect(() => {
    if (initialFaculty && initialFaculty !== selection.facultyId) {
      setSelection({
        view: "faculty",
        facultyId: initialFaculty,
      })
    }
  }, [initialFaculty])

  // Get current data based on selection
  const currentFaculty = useMemo(
    () => (selection.facultyId ? universityData.find((f) => f.id === selection.facultyId) : null),
    [selection.facultyId],
  )

  const currentDepartment = useMemo(
    () =>
      currentFaculty && selection.departmentId
        ? currentFaculty.departments.find((d) => d.id === selection.departmentId)
        : null,
    [currentFaculty, selection.departmentId],
  )

  const currentDegree = useMemo(
    () =>
      currentDepartment && selection.degreeId
        ? currentDepartment.degrees.find((d) => d.id === selection.degreeId)
        : null,
    [currentDepartment, selection.degreeId],
  )

  const currentCourse = useMemo(
    () => (currentDegree && selection.courseId ? currentDegree.courses.find((c) => c.id === selection.courseId) : null),
    [currentDegree, selection.courseId],
  )

  // Filter faculties
  const filteredFaculties = useMemo(() => {
    let result = universityData
    if (filters.faculty !== "all") {
      result = result.filter((f) => f.id === filters.faculty)
    }
    return result
  }, [filters.faculty])

  // Navigation functions
  const goToFaculties = () => setSelection({ view: "faculties" })

  const goToFaculty = (facultyId: string) => setSelection({ view: "faculty", facultyId })

  const goToDepartment = (facultyId: string, departmentId: string) =>
    setSelection({ view: "department", facultyId, departmentId })

  const goToDegree = (facultyId: string, departmentId: string, degreeId: string) =>
    setSelection({ view: "degree", facultyId, departmentId, degreeId })

  const goToCourse = (facultyId: string, departmentId: string, degreeId: string, courseId: string) =>
    setSelection({ view: "course", facultyId, departmentId, degreeId, courseId })

  // Reset filters
  const resetFilters = () => setFilters({ faculty: "all", degreeType: "all" })

  // Breadcrumb component
  const Breadcrumb = () => (
    <nav className="flex items-center gap-2 text-sm overflow-x-auto pb-2">
      <button
        onClick={goToFaculties}
        className="text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
      >
        All Faculties
      </button>
      {currentFaculty && (
        <>
          <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
          <button
            onClick={() => goToFaculty(currentFaculty.id)}
            className={`transition-colors whitespace-nowrap ${selection.view === "faculty" ? "text-foreground font-medium" : "text-muted-foreground hover:text-primary"}`}
          >
            {currentFaculty.name}
          </button>
        </>
      )}
      {currentDepartment && (
        <>
          <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
          <button
            onClick={() => goToDepartment(currentFaculty!.id, currentDepartment.id)}
            className={`transition-colors whitespace-nowrap ${selection.view === "department" ? "text-foreground font-medium" : "text-muted-foreground hover:text-primary"}`}
          >
            {currentDepartment.name}
          </button>
        </>
      )}
      {currentDegree && (
        <>
          <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
          <button
            onClick={() => goToDegree(currentFaculty!.id, currentDepartment!.id, currentDegree.id)}
            className={`transition-colors whitespace-nowrap ${selection.view === "degree" || selection.view === "course" ? "text-foreground font-medium" : "text-muted-foreground hover:text-primary"}`}
          >
            {currentDegree.name}
          </button>
        </>
      )}
    </nav>
  )

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary py-12 md:py-16">
          <div className="absolute inset-0 bg-[url('/contacthero.jpg')] bg-cover bg-center opacity-20" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl text-balance">
                Academic Programs
              </h1>
              <p className="mt-4 text-primary-foreground/90">
                Explore our faculties, departments, degrees, and courses
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            {/* Filters - Only show on faculties view */}
            {selection.view === "faculties" && (
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Filter Programs</h2>
                  <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setShowFilters(!showFilters)}>
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </div>
                <div className={`flex flex-col md:flex-row gap-4 ${showFilters ? "block" : "hidden md:flex"}`}>
                  <div className="flex-1 max-w-xs">
                    <Select
                      value={filters.faculty}
                      onValueChange={(value) => setFilters((f) => ({ ...f, faculty: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Faculty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Faculties</SelectItem>
                        {universityData.map((faculty) => (
                          <SelectItem key={faculty.id} value={faculty.id}>
                            {faculty.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex-1 max-w-xs">
                    <Select
                      value={filters.degreeType}
                      onValueChange={(value) => setFilters((f) => ({ ...f, degreeType: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Degree Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="Bachelor">Bachelor&apos;s</SelectItem>
                        <SelectItem value="Master">Master&apos;s</SelectItem>
                        <SelectItem value="PhD">PhD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {(filters.faculty !== "all" || filters.degreeType !== "all") && (
                    <Button variant="outline" onClick={resetFilters} className="shrink-0 bg-transparent">
                      <X className="h-4 w-4 mr-2" />
                      Clear Filters
                    </Button>
                  )}
                </div>
              </div>
            )}

            {/* Breadcrumb - Show on detail views */}
            {selection.view !== "faculties" && (
              <div className="mb-6">
                <Breadcrumb />
              </div>
            )}

            {/* Faculties Grid View */}
            {selection.view === "faculties" && (
              <div className="grid gap-6 md:grid-cols-2">
                {filteredFaculties.map((faculty) => (
                  <FacultyCard
                    key={faculty.id}
                    faculty={faculty}
                    degreeTypeFilter={filters.degreeType}
                    onClick={() => goToFaculty(faculty.id)}
                  />
                ))}
              </div>
            )}

            {/* Faculty Detail View */}
            {selection.view === "faculty" && currentFaculty && (
              <FacultyDetail
                faculty={currentFaculty}
                onDepartmentClick={(deptId) => goToDepartment(currentFaculty.id, deptId)}
              />
            )}

            {/* Department Detail View */}
            {selection.view === "department" && currentDepartment && currentFaculty && (
              <DepartmentDetail
                department={currentDepartment}
                faculty={currentFaculty}
                onDegreeClick={(degreeId) => goToDegree(currentFaculty.id, currentDepartment.id, degreeId)}
              />
            )}

            {/* Degree Detail View */}
            {selection.view === "degree" && currentDegree && currentDepartment && currentFaculty && (
              <DegreeDetail
                degree={currentDegree}
                department={currentDepartment}
                onCourseClick={(courseId) =>
                  goToCourse(currentFaculty.id, currentDepartment.id, currentDegree.id, courseId)
                }
              />
            )}

            {/* Course Detail View - Shows Parent Degree Info */}
            {selection.view === "course" && currentCourse && currentDegree && currentDepartment && (
              <CourseDetail course={currentCourse} degree={currentDegree} department={currentDepartment} />
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

// Faculty Card Component
function FacultyCard({
  faculty,
  degreeTypeFilter,
  onClick,
}: { faculty: Faculty; degreeTypeFilter: string; onClick: () => void }) {
  const totalDegrees = faculty.departments.reduce((acc, dept) => {
    if (degreeTypeFilter === "all") return acc + dept.degrees.length
    return acc + dept.degrees.filter((d) => d.type === degreeTypeFilter).length
  }, 0)

  if (degreeTypeFilter !== "all" && totalDegrees === 0) return null

  return (
    <Card className="group cursor-pointer overflow-hidden transition-all hover:shadow-lg" onClick={onClick}>
      <div className="relative h-48 overflow-hidden">
        <Image
          src={faculty.image || "/placeholder.svg"}
          alt={faculty.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-serif text-xl font-bold text-white">{faculty.name}</h3>
          <p className="mt-1 text-sm text-white/80">Established {faculty.established}</p>
        </div>
      </div>
      <CardContent className="pt-4">
        <p className="text-sm text-muted-foreground line-clamp-2">{faculty.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge variant="secondary" className="gap-1">
            <Building className="h-3 w-3" />
            {faculty.departments.length} Departments
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <GraduationCap className="h-3 w-3" />
            {totalDegrees} Degrees
          </Badge>
        </div>
        <div className="mt-4 flex items-center text-sm text-primary font-medium">
          View Details
          <ChevronRight className="ml-1 h-4 w-4" />
        </div>
      </CardContent>
    </Card>
  )
}

// Faculty Detail Component
function FacultyDetail({ faculty, onDepartmentClick }: { faculty: Faculty; onDepartmentClick: (id: string) => void }) {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Faculty Header */}
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="relative aspect-video overflow-hidden rounded-xl">
          <Image src={faculty.image || "/placeholder.svg"} alt={faculty.name} fill className="object-cover" />
        </div>
        <div>
          <h2 className="font-serif text-2xl font-bold md:text-3xl">{faculty.name}</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge variant="outline">Est. {faculty.established}</Badge>
            <Badge variant="outline">{faculty.departments.length} Departments</Badge>
          </div>
          <p className="mt-4 text-muted-foreground leading-relaxed">{faculty.description}</p>
          <div className="mt-4 p-4 rounded-lg bg-muted/50">
            <div className="text-sm text-muted-foreground">Dean</div>
            <div className="font-medium">{faculty.dean}</div>
          </div>
        </div>
      </div>

      {/* Departments */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Departments</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {faculty.departments.map((dept) => (
            <Card
              key={dept.id}
              className="cursor-pointer transition-all hover:shadow-md hover:border-primary/50"
              onClick={() => onDepartmentClick(dept.id)}
            >
              <CardHeader>
                <CardTitle className="text-lg">{dept.name}</CardTitle>
                <CardDescription className="line-clamp-2">{dept.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <GraduationCap className="h-4 w-4" />
                    {dept.degrees.length} Degrees
                  </span>
                </div>
                <div className="mt-3 flex items-center text-sm text-primary font-medium">
                  View Department
                  <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

// Department Detail Component
function DepartmentDetail({
  department,
  faculty,
  onDegreeClick,
}: { department: Department; faculty: Faculty; onDegreeClick: (id: string) => void }) {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Department Header */}
      <div className="max-w-3xl">
        <div className="text-sm text-primary mb-2">{faculty.name}</div>
        <h2 className="font-serif text-2xl font-bold md:text-3xl">{department.name}</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">{department.description}</p>
        <div className="mt-4 p-4 rounded-lg bg-muted/50">
          <div className="text-sm text-muted-foreground">Head of Department</div>
          <div className="font-medium">{department.head}</div>
        </div>
      </div>

      {/* Degrees */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Degree Programs</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {department.degrees.map((degree) => (
            <Card
              key={degree.id}
              className="cursor-pointer transition-all hover:shadow-md hover:border-primary/50"
              onClick={() => onDegreeClick(degree.id)}
            >
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={
                      degree.type === "Bachelor" ? "default" : degree.type === "Master" ? "secondary" : "outline"
                    }
                  >
                    {degree.type}
                  </Badge>
                  <Badge variant="outline" className="gap-1">
                    <Clock className="h-3 w-3" />
                    {degree.duration}
                  </Badge>
                </div>
                <CardTitle className="text-lg mt-2">{degree.name}</CardTitle>
                <CardDescription className="line-clamp-2">{degree.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  {degree.courses.length} Courses
                </div>
                <div className="mt-3 flex items-center text-sm text-primary font-medium">
                  View Degree
                  <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

// Degree Detail Component
function DegreeDetail({
  degree,
  department,
  onCourseClick,
}: { degree: Degree; department: Department; onCourseClick: (id: string) => void }) {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Degree Header */}
      <div className="max-w-3xl">
        <div className="text-sm text-primary mb-2">{department.name}</div>
        <h2 className="font-serif text-2xl font-bold md:text-3xl">{degree.name}</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge variant={degree.type === "Bachelor" ? "default" : degree.type === "Master" ? "secondary" : "outline"}>
            {degree.type}&apos;s Degree
          </Badge>
          <Badge variant="outline" className="gap-1">
            <Clock className="h-3 w-3" />
            {degree.duration}
          </Badge>
          <Badge variant="outline" className="gap-1">
            <BookOpen className="h-3 w-3" />
            {degree.courses.length} Courses
          </Badge>
        </div>
        <p className="mt-4 text-muted-foreground leading-relaxed">{degree.description}</p>
      </div>

      {/* Courses */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Course Modules</h3>
        <div className="grid gap-3">
          {degree.courses.map((course) => (
            <Card
              key={course.id}
              className="cursor-pointer transition-all hover:shadow-md hover:border-primary/50"
              onClick={() => onCourseClick(course.id)}
            >
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="outline" className="font-mono text-xs">
                      {course.code}
                    </Badge>
                    <span className="font-medium truncate">{course.name}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-1">{course.description}</p>
                </div>
                <div className="flex items-center gap-4 ml-4">
                  <Badge variant="secondary">{course.credits} Credits</Badge>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

// Course Detail Component - Shows parent degree info
function CourseDetail({ course, degree, department }: { course: Course; degree: Degree; department: Department }) {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Course Header */}
      <div className="max-w-3xl">
        <Badge variant="outline" className="font-mono mb-3">
          {course.code}
        </Badge>
        <h2 className="font-serif text-2xl font-bold md:text-3xl">{course.name}</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge variant="secondary">{course.credits} Credits</Badge>
        </div>
        <p className="mt-4 text-muted-foreground leading-relaxed">{course.description}</p>
      </div>

      {/* Parent Degree Info */}
      <Card className="bg-muted/30">
        <CardHeader>
          <CardTitle className="text-lg">Part of Degree Program</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="text-sm text-muted-foreground">Degree</div>
            <div className="font-medium">{degree.name}</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Department</div>
            <div className="font-medium">{department.name}</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Duration</div>
            <div className="font-medium">{degree.duration}</div>
          </div>
          <p className="text-sm text-muted-foreground">{degree.description}</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default function AcademicsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </div>
      }
    >
      <AcademicsContent />
    </Suspense>
  )
}
