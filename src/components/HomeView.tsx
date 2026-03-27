import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { Terminal, BarChart3, Database, ArrowRight, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const Icon = project.icon === 'terminal' ? Terminal : project.icon === 'analytics' ? BarChart3 : Database;
  
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group bg-surface-container p-8 rounded-xl transition-all duration-500 hover:bg-surface-container-high border-b border-transparent hover:border-primary/30"
    >
      <Link to={`/project/${project.id}`} className="block">
        <div className="flex justify-between items-start mb-12">
          <Icon className="w-10 h-10 text-primary" />
          <span className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">{project.year}</span>
        </div>
        <h3 className="font-headline text-xl font-bold mb-4 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-8">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="bg-surface-container-high text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase">
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
};

export default function HomeView() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#projects') {
      const el = document.getElementById('projects');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full">
          <div className="md:col-span-7 z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primary/10 px-3 py-1 rounded-full mb-6 border border-primary/10"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary text-xs font-bold uppercase tracking-widest font-label">Available for Internship</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter text-on-surface mb-4 leading-tight"
            >
              ปุญญพัฒน์ <br /> มังคะละ
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-2 mb-10"
            >
              <p className="text-2xl md:text-3xl font-light text-on-surface-variant font-body">
                นิสิตคณะวิทยาศาตร์ สาขา IT
              </p>
              <p className="text-xl md:text-2xl text-primary font-medium font-body italic opacity-90">
                มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนาตาก
              </p>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-on-surface-variant max-w-xl leading-relaxed mb-12 font-body"
            >
              มุ่งมั่นในการสร้างสรรค์นวัตกรรมดิจิทัลที่ผสมผสานความแม่นยำมเข้ากับการออกแบบที่เรียบง่ายแต่ทรงพลัง 
              สนใจการพัฒนาระบบที่เน้นประสบการณ์ผู้ใช้เป็นหัวใจสำคัญ
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <Link 
                to="/#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-primary text-on-primary px-8 py-4 rounded-md font-bold text-base transition-all hover:shadow-[0_0_30px_rgba(78,222,163,0.3)] active:scale-95"
              >
                ดูผลงานของฉัน
              </Link>
              <Link to="/contact" className="group flex items-center space-x-2 text-on-surface-variant hover:text-primary transition-colors">
                <span className="font-semibold underline decoration-2 underline-offset-8 decoration-outline-variant group-hover:decoration-primary">ติดต่อสอบถาม</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="md:col-span-5 relative"
          >
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-low border border-white/5">
              <img 
                alt="ปุญญพัฒน์ มังคะละ Profile" 
                className="w-full h-full object-cover transition-all duration-700" 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 blur-3xl rounded-full"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary/10 blur-3xl rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Mini Projects Section */}
      <section id="projects" className="py-32 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-4">
                Mini Projects
              </h2>
              <div className="h-1 w-20 bg-primary"></div>
            </div>
            <p className="text-on-surface-variant font-body max-w-md leading-relaxed">
              รวบรวมโปรเจกต์ขนาดเล็กที่เกิดจากความท้าทายในห้องเรียนและการเรียนรู้ด้วยตัวเองในช่วงเวลาว่าง
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto bg-surface-container-high rounded-2xl p-12 md:p-20 text-center relative z-10">
          <h2 className="font-headline text-4xl md:text-5xl font-black mb-6">เริ่มงานด้วยกันไหม?</h2>
          <p className="text-on-surface-variant font-body text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            กำลังมองหาโอกาสในการฝึกงานหรือร่วมโปรเจกต์ที่น่าสนใจ สามารถทักมาพูดคุยแลกเปลี่ยนไอเดียกันได้ตลอดเวลา
          </p>
          <Link to="/contact" className="inline-flex items-center space-x-3 bg-primary text-on-primary px-10 py-5 rounded-md font-extrabold text-lg transition-transform hover:scale-105 active:scale-95">
            <span>ส่งข้อความหาฉัน</span>
            <Mail className="w-6 h-6" />
          </Link>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full -z-0"></div>
      </section>
    </motion.div>
  );
}
