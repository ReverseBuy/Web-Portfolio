import { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "ecommerce",
    title: "E-commerce Management System",
    description: "ระบบจัดการร้านค้าอีคอมเมิร์ซแบบครบวงจรที่ออกแบบมาเพื่อช่วยให้เจ้าของธุรกิจขนาดกลางและขนาดย่อม",
    year: "2023 - 2024",
    category: "Fullstack Web Development",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS", "AWS S3"],
    icon: "terminal",
    mainImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    fullDescription: "ระบบจัดการร้านค้าอีคอมเมิร์ซแบบครบวงจรที่ออกแบบมาเพื่อช่วยให้เจ้าของธุรกิจขนาดกลางและขนาดย่อมสามารถบริหารจัดการสต็อกสินค้า คำสั่งซื้อ และข้อมูลลูกค้าได้อย่างมีประสิทธิภาพ ผ่านอินเทอร์เฟซที่ทันสมัยและใช้งานง่าย\n\nโปรเจกต์นี้เริ่มต้นจากความต้องการในการแก้ปัญหาความซับซ้อนของระบบหลังบ้านทั่วไป โดยเราเน้นการใช้หลักการ Minimalism ในการออกแบบ UI เพื่อลดภาระทางความคิดของผู้ใช้งาน และเพิ่มความเร็วในการประมวลผลข้อมูลขนาดใหญ่ด้วยการทำ Indexing ในระดับฐานข้อมูลและการใช้ Caching",
    features: [
      {
        title: "ประสิทธิภาพสูง",
        description: "รองรับการโหลดหน้าเว็บที่รวดเร็วด้วย Server-side Rendering และการจัดการ State ที่มีประสิทธิภาพ",
        icon: "bolt"
      },
      {
        title: "ความปลอดภัย",
        description: "ระบบยืนยันตัวตนด้วย JWT และการป้องกันช่องโหว่พื้นฐานอย่าง SQL Injection และ XSS",
        icon: "security"
      }
    ],
    stats: [
      { label: "Uptime", value: "99.9%" },
      { label: "Response Time", value: "< 200ms" },
      { label: "Daily Trans.", value: "5,000+" }
    ],
    images: [
      "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: "iot-dashboard",
    title: "Smart Home IoT Dashboard",
    description: "ระบบควบคุมอุปกรณ์ไฟฟ้าภายในบ้านผ่าน NodeMCU และ Firebase ออกแบบ UI ด้วยสไตล์ Neumorphism",
    year: "2023",
    category: "IoT & Web",
    tags: ["React", "Firebase"],
    icon: "terminal"
  },
  {
    id: "traffic-sim",
    title: "Traffic Flow Simulation",
    description: "โปรแกรมจำลองการจราจรในเขตกรุงเทพฯ เพื่อหาจุดวิกฤตที่ทำให้เกิดปัญหาคอขวด พัฒนาด้วย Python",
    year: "2024",
    category: "Data Science",
    tags: ["Python", "Matplotlib"],
    icon: "analytics"
  },
  {
    id: "library-api",
    title: "Library Management API",
    description: "RESTful API สำหรับระบบยืม-คืนหนังสือในห้องสมุดคณะ พร้อมระบบยืนยันตัวตน JWT",
    year: "2024",
    category: "Backend Development",
    tags: ["Go", "PostgreSQL"],
    icon: "database"
  }
];
