export interface Course {
  id: string
  name: string
  code: string
  credits: number
  description: string
}

export interface Degree {
  id: string
  name: string
  type: "Bachelor" | "Master" | "PhD"
  duration: string
  description: string
  courses: Course[]
}

export interface Department {
  id: string
  name: string
  description: string
  head: string
  degrees: Degree[]
}

export interface Faculty {
  id: string
  name: string
  description: string
  dean: string
  established: string
  departments: Department[]
  image: string
}

export const universityData: Faculty[] = [
  {
    id: "fos",
    name: "Faculty of Science & Technology",
    description:
      "The Faculty of Science & Technology is dedicated to advancing scientific knowledge and technological innovation. Our programs combine theoretical foundations with hands-on practical experience, preparing students for careers in research, industry, and academia.",
    dean: "Prof. Samantha Perera",
    established: "2007",
    image: "/modern-university-science-building-with-laboratori.jpg",
    departments: [
      {
        id: "cs",
        name: "Department of Computer Science & Technology",
        description:
          "Offering cutting-edge programs in computer science, software engineering, and information technology. Our state-of-the-art labs and industry partnerships ensure students gain relevant skills for the digital economy.",
        head: "Dr. Nimal Fernando",
        degrees: [
          {
            id: "bsc-cs",
            name: "BSc (Hons) in Computer Science",
            type: "Bachelor",
            duration: "4 years",
            description:
              "A comprehensive program covering algorithms, software development, artificial intelligence, and data science.",
            courses: [
              {
                id: "cs101",
                name: "Introduction to Programming",
                code: "CS101",
                credits: 3,
                description: "Fundamentals of programming using Python and Java.",
              },
              {
                id: "cs201",
                name: "Data Structures & Algorithms",
                code: "CS201",
                credits: 4,
                description: "Advanced data structures and algorithm design techniques.",
              },
              {
                id: "cs301",
                name: "Database Systems",
                code: "CS301",
                credits: 3,
                description: "Design and implementation of relational and NoSQL databases.",
              },
              {
                id: "cs401",
                name: "Artificial Intelligence",
                code: "CS401",
                credits: 4,
                description: "Machine learning, neural networks, and AI applications.",
              },
            ],
          },
          {
            id: "msc-cs",
            name: "MSc in Computer Science",
            type: "Master",
            duration: "2 years",
            description:
              "Advanced studies in specialized areas of computer science including machine learning and cybersecurity.",
            courses: [
              {
                id: "cs501",
                name: "Advanced Machine Learning",
                code: "CS501",
                credits: 4,
                description: "Deep learning architectures and advanced ML techniques.",
              },
              {
                id: "cs502",
                name: "Cybersecurity",
                code: "CS502",
                credits: 3,
                description: "Security protocols, ethical hacking, and threat analysis.",
              },
            ],
          },
        ],
      },
      {
        id: "bio",
        name: "Department of Biological Sciences",
        description:
          "Exploring the complexities of life through research and education. Our programs span molecular biology, ecology, and biotechnology.",
        head: "Dr. Kamala Jayawardena",
        degrees: [
          {
            id: "bsc-bio",
            name: "BSc (Hons) in Applied Biology",
            type: "Bachelor",
            duration: "4 years",
            description:
              "Study of biological systems with applications in agriculture, medicine, and environmental conservation.",
            courses: [
              {
                id: "bio101",
                name: "Cell Biology",
                code: "BIO101",
                credits: 3,
                description: "Structure and function of cells at the molecular level.",
              },
              {
                id: "bio201",
                name: "Genetics & Molecular Biology",
                code: "BIO201",
                credits: 4,
                description: "Principles of heredity and gene expression.",
              },
              {
                id: "bio301",
                name: "Ecology & Conservation",
                code: "BIO301",
                credits: 3,
                description: "Ecosystem dynamics and biodiversity conservation strategies.",
              },
            ],
          },
        ],
      },
      {
        id: "phys",
        name: "Department of Physical Sciences",
        description:
          "Advancing understanding of the physical world through physics, chemistry, and materials science research.",
        head: "Dr. Rohan Silva",
        degrees: [
          {
            id: "bsc-phys",
            name: "BSc (Hons) in Physical Science",
            type: "Bachelor",
            duration: "4 years",
            description: "Comprehensive study of physics and chemistry with emphasis on practical applications.",
            courses: [
              {
                id: "phys101",
                name: "Classical Mechanics",
                code: "PHYS101",
                credits: 4,
                description: "Newton's laws, energy, momentum, and rotational dynamics.",
              },
              {
                id: "phys201",
                name: "Quantum Physics",
                code: "PHYS201",
                credits: 4,
                description: "Fundamentals of quantum mechanics and atomic structure.",
              },
              {
                id: "chem101",
                name: "Organic Chemistry",
                code: "CHEM101",
                credits: 3,
                description: "Structure, properties, and reactions of organic compounds.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "fom",
    name: "Faculty of Management",
    description:
      "The Faculty of Management prepares future business leaders with skills in entrepreneurship, finance, marketing, and strategic management. Our programs emphasize ethical leadership and sustainable business practices.",
    dean: "Prof. Anura Bandara",
    established: "2009",
    image: "/modern-business-school-building-university-campus.jpg",
    departments: [
      {
        id: "bm",
        name: "Department of Business Management",
        description:
          "Developing business acumen and leadership skills through innovative curricula and industry engagement.",
        head: "Dr. Priya Rajapaksa",
        degrees: [
          {
            id: "bba",
            name: "Bachelor of Business Administration",
            type: "Bachelor",
            duration: "4 years",
            description: "Comprehensive business education covering all aspects of modern management.",
            courses: [
              {
                id: "bm101",
                name: "Principles of Management",
                code: "BM101",
                credits: 3,
                description: "Fundamentals of planning, organizing, leading, and controlling.",
              },
              {
                id: "bm201",
                name: "Marketing Management",
                code: "BM201",
                credits: 3,
                description: "Consumer behavior, market research, and marketing strategy.",
              },
              {
                id: "bm301",
                name: "Financial Management",
                code: "BM301",
                credits: 4,
                description: "Corporate finance, investment analysis, and financial planning.",
              },
              {
                id: "bm401",
                name: "Strategic Management",
                code: "BM401",
                credits: 3,
                description: "Competitive strategy and organizational transformation.",
              },
            ],
          },
          {
            id: "mba",
            name: "Master of Business Administration",
            type: "Master",
            duration: "2 years",
            description: "Advanced management education for aspiring executives and entrepreneurs.",
            courses: [
              {
                id: "mba501",
                name: "Leadership & Organizational Behavior",
                code: "MBA501",
                credits: 4,
                description: "Advanced leadership theories and organizational dynamics.",
              },
              {
                id: "mba502",
                name: "Global Business Strategy",
                code: "MBA502",
                credits: 4,
                description: "International business and global market strategies.",
              },
            ],
          },
        ],
      },
      {
        id: "tourism",
        name: "Department of Tourism & Hospitality",
        description:
          "Training professionals for Sri Lanka's vital tourism industry with focus on sustainable tourism practices.",
        head: "Dr. Malini Gunasekara",
        degrees: [
          {
            id: "bsc-tourism",
            name: "BSc (Hons) in Tourism Management",
            type: "Bachelor",
            duration: "4 years",
            description:
              "Comprehensive study of tourism industry operations, hospitality management, and sustainable tourism.",
            courses: [
              {
                id: "tm101",
                name: "Introduction to Tourism",
                code: "TM101",
                credits: 3,
                description: "Overview of tourism industry and its economic impact.",
              },
              {
                id: "tm201",
                name: "Hospitality Operations",
                code: "TM201",
                credits: 3,
                description: "Hotel management, food service, and guest relations.",
              },
              {
                id: "tm301",
                name: "Sustainable Tourism",
                code: "TM301",
                credits: 3,
                description: "Environmental and social responsibility in tourism.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "foa",
    name: "Faculty of Animal Science & Export Agriculture",
    description:
      "The Faculty of Animal Science & Export Agriculture focuses on agricultural innovation, animal husbandry, and sustainable farming practices. Our programs support Sri Lanka's agricultural sector and food security.",
    dean: "Prof. Chandra Wickramasinghe",
    established: "2007",
    image: "/agricultural-university-farm-with-modern-facilitie.jpg",
    departments: [
      {
        id: "as",
        name: "Department of Animal Science",
        description: "Research and education in animal nutrition, health, breeding, and production systems.",
        head: "Dr. Sunil Ratnayake",
        degrees: [
          {
            id: "bsc-as",
            name: "BSc (Hons) in Animal Science",
            type: "Bachelor",
            duration: "4 years",
            description: "Comprehensive study of animal biology, nutrition, and livestock management.",
            courses: [
              {
                id: "as101",
                name: "Animal Physiology",
                code: "AS101",
                credits: 4,
                description: "Physiological processes in domestic animals.",
              },
              {
                id: "as201",
                name: "Animal Nutrition",
                code: "AS201",
                credits: 3,
                description: "Nutritional requirements and feed formulation.",
              },
              {
                id: "as301",
                name: "Animal Breeding & Genetics",
                code: "AS301",
                credits: 4,
                description: "Genetic improvement of livestock.",
              },
            ],
          },
        ],
      },
      {
        id: "ea",
        name: "Department of Export Agriculture",
        description: "Advancing knowledge in plantation crops, spice cultivation, and export-oriented agriculture.",
        head: "Dr. Nalini Karunaratne",
        degrees: [
          {
            id: "bsc-ea",
            name: "BSc (Hons) in Export Agriculture",
            type: "Bachelor",
            duration: "4 years",
            description: "Study of export crops including tea, rubber, coconut, and spices.",
            courses: [
              {
                id: "ea101",
                name: "Plantation Crop Science",
                code: "EA101",
                credits: 4,
                description: "Cultivation and processing of tea, rubber, and coconut.",
              },
              {
                id: "ea201",
                name: "Spice Crops",
                code: "EA201",
                credits: 3,
                description: "Production and processing of cinnamon, pepper, and other spices.",
              },
              {
                id: "ea301",
                name: "Post-Harvest Technology",
                code: "EA301",
                credits: 3,
                description: "Processing, preservation, and quality control of agricultural products.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "foaqs",
    name: "Faculty of Applied Sciences",
    description:
      "The Faculty of Applied Sciences bridges theoretical knowledge with practical applications in emerging fields like renewable energy, environmental science, and industrial technology.",
    dean: "Prof. Dinesh Amaratunga",
    established: "2011",
    image: "/modern-applied-sciences-laboratory-research-facili.jpg",
    departments: [
      {
        id: "env",
        name: "Department of Environmental Science",
        description:
          "Addressing environmental challenges through research and education in sustainability and conservation.",
        head: "Dr. Lakshmi Hewage",
        degrees: [
          {
            id: "bsc-env",
            name: "BSc (Hons) in Environmental Science",
            type: "Bachelor",
            duration: "4 years",
            description: "Study of environmental systems, pollution control, and sustainable development.",
            courses: [
              {
                id: "env101",
                name: "Environmental Chemistry",
                code: "ENV101",
                credits: 3,
                description: "Chemical processes in natural and polluted environments.",
              },
              {
                id: "env201",
                name: "Climate Change Science",
                code: "ENV201",
                credits: 3,
                description: "Understanding climate systems and global warming impacts.",
              },
              {
                id: "env301",
                name: "Environmental Impact Assessment",
                code: "ENV301",
                credits: 4,
                description: "Methods for assessing and mitigating environmental impacts.",
              },
            ],
          },
        ],
      },
      {
        id: "re",
        name: "Department of Renewable Energy",
        description: "Pioneering education and research in solar, wind, and other renewable energy technologies.",
        head: "Dr. Asanka Pallewela",
        degrees: [
          {
            id: "bsc-re",
            name: "BSc (Hons) in Renewable Energy",
            type: "Bachelor",
            duration: "4 years",
            description: "Comprehensive study of renewable energy systems and sustainable energy solutions.",
            courses: [
              {
                id: "re101",
                name: "Solar Energy Systems",
                code: "RE101",
                credits: 4,
                description: "Photovoltaic and solar thermal technologies.",
              },
              {
                id: "re201",
                name: "Wind Energy",
                code: "RE201",
                credits: 3,
                description: "Wind turbine design and wind farm development.",
              },
              {
                id: "re301",
                name: "Energy Storage Systems",
                code: "RE301",
                credits: 3,
                description: "Battery technologies and grid storage solutions.",
              },
            ],
          },
        ],
      },
    ],
  },
]
