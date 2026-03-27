import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Terminal, 
  ExternalLink, 
  Github, 
  Zap, 
  ShieldCheck,
  Code2,
  Palette,
  Cloud,
  Database,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { PROJECTS } from '../constants';

export default function ProjectDetailView() {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) return <div className="pt-32 px-8 text-center">Project not found</div>;

  const prevProject = PROJECTS[(PROJECTS.findIndex(p => p.id === project.id) - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(PROJECTS.findIndex(p => p.id === project.id) + 1) % PROJECTS.length];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="pt-32 pb-24"
    >
      <header className="max-w-7xl mx-auto px-8 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-primary font-label text-sm tracking-widest uppercase">
              <Terminal className="w-4 h-4" />
              <span>{project.category}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-black tracking-tighter text-on-surface leading-tight">
              {project.title}
            </h1>
          </div>
          <div className="flex gap-4 pb-2">
            <div className="flex flex-col items-end">
              <span className="text-on-surface-variant text-xs font-label uppercase tracking-widest mb-1">ปีที่ทำ</span>
              <span className="text-on-surface font-headline font-bold">{project.year}</span>
            </div>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-8 mb-20">
        <div className="relative aspect-video rounded-xl overflow-hidden bg-surface-container-low">
          <img 
            alt={project.title} 
            className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" 
            src={project.mainImage || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-40"></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-16">
        <aside className="md:col-span-4 space-y-12">
          <div className="p-8 rounded-xl bg-surface-container-low border-l-2 border-primary">
            <h3 className="text-on-surface-variant text-xs font-label uppercase tracking-widest mb-6">เครื่องมือที่ใช้พัฒนา</h3>
            <div className="flex flex-wrap gap-3">
              {project.tags.map(tag => (
                <div key={tag} className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high text-on-surface text-sm font-medium">
                  {tag === 'React' && <Code2 className="w-4 h-4" />}
                  {tag === 'Node.js' && <Code2 className="w-4 h-4" />}
                  {tag === 'MongoDB' && <Database className="w-4 h-4" />}
                  {tag === 'Tailwind CSS' && <Palette className="w-4 h-4" />}
                  {tag === 'AWS S3' && <Cloud className="w-4 h-4" />}
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-on-surface-variant text-xs font-label uppercase tracking-widest">ลิงก์ที่เกี่ยวข้อง</h3>
            <div className="flex flex-col gap-4">
              <a className="flex items-center justify-between group py-3 border-b border-outline-variant/30 hover:border-primary transition-colors" href="#">
                <span className="text-on-surface font-medium">Live Demo</span>
                <ExternalLink className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
              </a>
              <a className="flex items-center justify-between group py-3 border-b border-outline-variant/30 hover:border-primary transition-colors" href="#">
                <span className="text-on-surface font-medium">GitHub Repository</span>
                <Github className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </aside>

        <article className="md:col-span-8 space-y-12">
          <div>
            <h2 className="text-3xl font-headline font-bold mb-8 text-on-surface">ภาพรวมของโปรเจกต์</h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg whitespace-pre-line">
              {project.fullDescription || project.description}
            </div>
          </div>
          
          {project.features && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.features.map(feature => (
                <div key={feature.title} className="p-8 rounded-xl bg-surface-container">
                  {feature.icon === 'bolt' ? <Zap className="w-10 h-10 text-primary mb-4" /> : <ShieldCheck className="w-10 h-10 text-primary mb-4" />}
                  <h4 className="text-xl font-bold mb-2 text-on-surface">{feature.title}</h4>
                  <p className="text-on-surface-variant text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          )}

          {project.images && (
            <div className="grid grid-cols-12 gap-6 pt-8">
              <div className="col-span-12 md:col-span-7 aspect-[4/3] rounded-xl overflow-hidden bg-surface-container-low">
                <img alt="UI Detail 1" className="w-full h-full object-cover" src={project.images[0]} referrerPolicy="no-referrer" />
              </div>
              <div className="col-span-12 md:col-span-5 aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-low translate-y-12 hidden md:block">
                <img alt="UI Detail 2" className="w-full h-full object-cover" src={project.images[1]} referrerPolicy="no-referrer" />
              </div>
            </div>
          )}
        </article>
      </section>

      {project.stats && (
        <section className="max-w-7xl mx-auto px-8 mt-40">
          <div className="bg-surface-container-low p-12 md:p-20 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl font-headline font-bold mb-6">ผลลัพธ์และความสำเร็จ</h2>
              <p className="text-on-surface-variant text-lg mb-10">
                หลังจากเปิดใช้งาน ระบบสามารถรองรับผู้ใช้งานพร้อมกันได้มากกว่า 500 ราย โดยไม่มีการสะดุด และช่วยลดระยะเวลาในการทำรายงานประจำเดือนของธุรกิจลงได้ถึง 70%
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {project.stats.map(stat => (
                  <div key={stat.label}>
                    <div className="text-3xl font-headline font-black text-primary mb-1">{stat.value}</div>
                    <div className="text-xs uppercase tracking-widest text-on-surface-variant">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-8 mt-24">
        <div className="flex justify-between items-center py-12 border-t border-outline-variant/20">
          <Link to={`/project/${prevProject.id}`} className="group text-left">
            <span className="text-on-surface-variant text-xs uppercase tracking-widest block mb-2">Previous Project</span>
            <span className="text-xl md:text-2xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors flex items-center gap-2">
              <ChevronLeft className="w-6 h-6" /> {prevProject.title}
            </span>
          </Link>
          <Link to={`/project/${nextProject.id}`} className="group text-right">
            <span className="text-on-surface-variant text-xs uppercase tracking-widest block mb-2">Next Project</span>
            <span className="text-xl md:text-2xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors flex items-center justify-end gap-2">
              {nextProject.title} <ChevronRight className="w-6 h-6" />
            </span>
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
