export interface Student {
  registrationNumber: string
  name: string
  rollNumber: string
  email: string
  department: string
  year: number
  semester: number
  section: string
  phoneNumber: string
  address: string
  parentName: string
  parentPhone: string
  bloodGroup: string
  dateOfBirth: string
  admissionDate: string
  profileImage?: string
  // New fields
  course: string
  batch: string
  academicYear: string
  gender: string
  fatherName: string
  motherName: string
  fatherOccupation: string
  motherOccupation: string
  annualIncome: string
  residentialAddress: string
  studentContactNo: string
  studentEmail: string
  parentContactNo: string
  parentEmail: string
  community: string
  nationality: string
  religion: string
  hosteller: "Yes" | "No"
  district: string
}

export interface InternalMark {
  subject: string
  subjectCode: string
  test1: number
  test2: number
  assignment: number
  total: number
  maxMarks: number
  percentage: number
}

export interface AttendanceRecord {
  subject: string
  subjectCode: string
  totalClasses: number
  attendedClasses: number
  percentage: number
  status: "Good" | "Average" | "Poor"
}

export interface Achievement {
  id: string
  title: string
  description: string
  date: string
  category: "Academic" | "Sports" | "Cultural" | "Technical"
  certificate?: string
}

export interface LibraryBook {
  id: string
  title: string
  author: string
  isbn: string
  issueDate: string
  dueDate: string
  status: "Issued" | "Returned" | "Overdue"
  fine?: number
}

export interface Course {
  code: string
  name: string
  credits: number
  instructor: string
  schedule: string
  room: string
  type: "Theory" | "Lab" | "Project"
}

export interface SemesterMark {
  semester: number
  subjects: {
    code: string
    name: string
    credits: number
    internalMarks: number
    externalMarks: number
    totalMarks: number
    grade: string
    gradePoints: number
  }[]
  sgpa: number
  cgpa: number
}

export interface ArrearDetail {
  semester: number
  subjectCode: string
  subjectName: string
  credits: number
  examDate: string
  status: "Pending" | "Cleared"
  attempts: number
}

// Mock data generator based on registration number
export function getStudentData(registrationNumber: string): Student {
  const lastDigits = registrationNumber.slice(-2)
  const studentNumber = Number.parseInt(lastDigits) || 1

  const names = [
    "Arjun Kumar",
    "Priya Sharma",
    "Rahul Patel",
    "Sneha Reddy",
    "Vikram Singh",
    "Ananya Gupta",
    "Karthik Raj",
    "Divya Nair",
    "Arun Krishnan",
    "Meera Iyer",
  ]

  const departments = ["Computer Science", "Electronics", "Mechanical", "Civil", "Electrical"]
  const courses = ["B.E Computer Science", "B.E Electronics", "B.E Mechanical", "B.E Civil", "B.E Electrical"]
  const communities = ["OC", "BC", "MBC", "SC", "ST"]
  const religions = ["Hindu", "Christian", "Muslim", "Sikh", "Buddhist"]
  const districts = ["Chennai", "Coimbatore", "Madurai", "Salem", "Trichy", "Vellore", "Tirunelveli"]
  const genders = ["Male", "Female"]

  const selectedName = names[studentNumber % names.length]
  const selectedDept = departments[studentNumber % departments.length]

  // Generate year (1-4) and corresponding semester
  const year = Math.min(4, Math.floor(studentNumber / 20) + 1) // 1-4
  const semesterInYear = (studentNumber % 2) + 1 // 1 or 2
  const semester = (year - 1) * 2 + semesterInYear // 1-8

  return {
    registrationNumber,
    name: selectedName,
    rollNumber: `${registrationNumber.slice(-4)}`,
    email: `${registrationNumber.toLowerCase()}@licet.ac.in`,
    department: selectedDept,
    course: courses[studentNumber % courses.length],
    year: year,
    semester: semester,
    section: String.fromCharCode(65 + (studentNumber % 3)), // A, B, C
    batch: `2020-2024`,
    academicYear: `2024-25`,
    phoneNumber: `+91 ${9000000000 + studentNumber}`,
    address: `${studentNumber} Main Street, Chennai, Tamil Nadu`,
    parentName: `Parent of ${selectedName}`,
    parentPhone: `+91 ${8000000000 + studentNumber}`,
    bloodGroup: ["A+", "B+", "O+", "AB+", "A-", "B-", "O-", "AB-"][studentNumber % 8],
    dateOfBirth: `${1998 + (studentNumber % 5)}-${String((studentNumber % 12) + 1).padStart(2, "0")}-${String((studentNumber % 28) + 1).padStart(2, "0")}`,
    admissionDate: `2020-07-${String((studentNumber % 30) + 1).padStart(2, "0")}`,
    gender: genders[studentNumber % 2],
    fatherName: `Father of ${selectedName}`,
    motherName: `Mother of ${selectedName}`,
    fatherOccupation: ["Engineer", "Doctor", "Teacher", "Business", "Government Employee"][studentNumber % 5],
    motherOccupation: ["Homemaker", "Teacher", "Nurse", "Business", "Government Employee"][studentNumber % 5],
    annualIncome: `₹${((studentNumber % 10) + 3) * 100000}`,
    residentialAddress: `${studentNumber} Residential Street, ${districts[studentNumber % districts.length]}, Tamil Nadu - ${600000 + studentNumber}`,
    studentContactNo: `+91 ${9000000000 + studentNumber}`,
    studentEmail: `${registrationNumber.toLowerCase()}@licet.ac.in`,
    parentContactNo: `+91 ${8000000000 + studentNumber}`,
    parentEmail: `parent.${registrationNumber.toLowerCase()}@gmail.com`,
    community: communities[studentNumber % communities.length],
    nationality: "Indian",
    religion: religions[studentNumber % religions.length],
    hosteller: studentNumber % 3 === 0 ? "Yes" : "No",
    district: districts[studentNumber % districts.length],
  }
}

export function getInternalMarks(registrationNumber: string): InternalMark[] {
  const subjects = [
    { name: "Data Structures", code: "CS301" },
    { name: "Database Management", code: "CS302" },
    { name: "Computer Networks", code: "CS303" },
    { name: "Operating Systems", code: "CS304" },
    { name: "Software Engineering", code: "CS305" },
  ]

  const studentNumber = Number.parseInt(registrationNumber.slice(-2)) || 1

  return subjects.map((subject, index) => {
    const base = 15 + ((studentNumber + index) % 10)
    const test1 = Math.min(20, base + Math.floor(Math.random() * 5))
    const test2 = Math.min(20, base + Math.floor(Math.random() * 5))
    const assignment = Math.min(10, 7 + Math.floor(Math.random() * 3))
    const total = test1 + test2 + assignment

    return {
      subject: subject.name,
      subjectCode: subject.code,
      test1,
      test2,
      assignment,
      total,
      maxMarks: 50,
      percentage: (total / 50) * 100,
    }
  })
}

export function getAttendanceRecords(registrationNumber: string): AttendanceRecord[] {
  const subjects = [
    { name: "Data Structures", code: "CS301" },
    { name: "Database Management", code: "CS302" },
    { name: "Computer Networks", code: "CS303" },
    { name: "Operating Systems", code: "CS304" },
    { name: "Software Engineering", code: "CS305" },
  ]

  const studentNumber = Number.parseInt(registrationNumber.slice(-2)) || 1

  return subjects.map((subject, index) => {
    const totalClasses = 45 + index * 5
    const attendedClasses = Math.floor(totalClasses * (0.7 + (studentNumber % 20) / 100))
    const percentage = (attendedClasses / totalClasses) * 100

    let status: "Good" | "Average" | "Poor" = "Good"
    if (percentage < 75) status = "Poor"
    else if (percentage < 85) status = "Average"

    return {
      subject: subject.name,
      subjectCode: subject.code,
      totalClasses,
      attendedClasses,
      percentage,
      status,
    }
  })
}

export function getAchievements(registrationNumber: string): Achievement[] {
  const achievements = [
    { title: "Best Student Award", description: "Awarded for academic excellence", category: "Academic" as const },
    {
      title: "Coding Competition Winner",
      description: "First place in inter-college coding contest",
      category: "Technical" as const,
    },
    { title: "Sports Championship", description: "Winner in college sports meet", category: "Sports" as const },
    {
      title: "Cultural Fest Participant",
      description: "Active participation in cultural events",
      category: "Cultural" as const,
    },
  ]

  const studentNumber = Number.parseInt(registrationNumber.slice(-2)) || 1

  return achievements.slice(0, (studentNumber % 3) + 1).map((achievement, index) => ({
    id: `ach_${index + 1}`,
    ...achievement,
    date: `2024-${String(((studentNumber + index) % 12) + 1).padStart(2, "0")}-${String(((studentNumber + index) % 28) + 1).padStart(2, "0")}`,
  }))
}

export function getLibraryBooks(registrationNumber: string): LibraryBook[] {
  const books = [
    { title: "Introduction to Algorithms", author: "Thomas H. Cormen", isbn: "978-0262033848" },
    { title: "Clean Code", author: "Robert C. Martin", isbn: "978-0132350884" },
    { title: "Design Patterns", author: "Gang of Four", isbn: "978-0201633612" },
  ]

  const studentNumber = Number.parseInt(registrationNumber.slice(-2)) || 1

  return books.slice(0, (studentNumber % 2) + 1).map((book, index) => ({
    id: `book_${index + 1}`,
    ...book,
    issueDate: `2024-${String(((studentNumber + index) % 12) + 1).padStart(2, "0")}-${String(((studentNumber + index) % 28) + 1).padStart(2, "0")}`,
    dueDate: `2024-${String(((studentNumber + index + 1) % 12) + 1).padStart(2, "0")}-${String(((studentNumber + index + 15) % 28) + 1).padStart(2, "0")}`,
    status: index === 0 ? ("Issued" as const) : ("Returned" as const),
    fine: index === 0 && studentNumber % 3 === 0 ? 50 : undefined,
  }))
}

export function getCourses(registrationNumber: string): Course[] {
  return [
    {
      code: "CS301",
      name: "Data Structures",
      credits: 4,
      instructor: "Dr. Smith",
      schedule: "Mon, Wed, Fri 9:00-10:00",
      room: "CS-101",
      type: "Theory",
    },
    {
      code: "CS302",
      name: "Database Management",
      credits: 3,
      instructor: "Prof. Johnson",
      schedule: "Tue, Thu 10:00-11:30",
      room: "CS-102",
      type: "Theory",
    },
    {
      code: "CS303",
      name: "Computer Networks",
      credits: 3,
      instructor: "Dr. Williams",
      schedule: "Mon, Wed 2:00-3:30",
      room: "CS-103",
      type: "Theory",
    },
    {
      code: "CS304L",
      name: "OS Lab",
      credits: 2,
      instructor: "Prof. Brown",
      schedule: "Fri 2:00-5:00",
      room: "CS-Lab1",
      type: "Lab",
    },
    {
      code: "CS305",
      name: "Software Engineering",
      credits: 3,
      instructor: "Dr. Davis",
      schedule: "Tue, Thu 2:00-3:30",
      room: "CS-104",
      type: "Theory",
    },
  ]
}
