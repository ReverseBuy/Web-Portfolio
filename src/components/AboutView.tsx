import { motion } from 'motion/react';
import { User, GraduationCap, Code, Briefcase } from 'lucide-react';

export default function AboutView() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-32 pb-24 px-8 max-w-7xl mx-auto"
    >
      <header className="mb-20">
        <h1 className="text-5xl md:text-7xl font-headline font-black tracking-tighter text-on-surface mb-6">
          เกี่ยวกับฉัน
        </h1>
        <div className="h-1 w-24 bg-primary"></div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7 space-y-12">
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <User className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-headline font-bold">ตัวตนของฉัน</h2>
            </div>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              สวัสดีครับ ผมชื่อ นายปุญญพัฒน์ มังคะละ เป็นนิสิตคณะวิทยาศาตาตร์ มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนาตาก 
              ผมมีความหลงใหลในการแก้ปัญหาที่ซับซ้อนผ่านการเขียนโปรแกรมและการออกแบบระบบ 
              ผมเชื่อว่าเทคโนโลยีที่ดีควรจะเข้าถึงง่ายและแก้ปัญหาได้จริง
            </p>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-headline font-bold">การศึกษา</h2>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-outline-variant pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                <h3 className="font-bold text-lg">ปริญญาตรี คณะวิทยาศาตาตร์ สาขา IT</h3>
                <p className="text-primary font-medium">มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนาตาก </p>
                <p className="text-on-surface-variant text-sm">2023 - ปัจจุบัน</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <Code className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-headline font-bold">ทักษะความสามารถ</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {['React', 'Node.js', 'TypeScript', 'Python', 'Go', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'].map(skill => (
                <div key={skill} className="bg-surface-container p-4 rounded-xl text-center font-medium hover:bg-surface-container-high transition-colors">
                  {skill}
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="lg:col-span-5">
          <div className="sticky top-32 space-y-8">
            <div className="aspect-square rounded-2xl overflow-hidden border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop" 
                alt="Profile" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="bg-surface-container p-8 rounded-2xl border border-white/5">
              <div className="flex items-center gap-4 mb-6">
                <Briefcase className="w-6 h-6 text-primary" />
                <h3 className="font-bold text-xl">เป้าหมาย</h3>
              </div>
              <p className="text-on-surface-variant leading-relaxed">
                ผมกำลังมองหาโอกาสในการฝึกงานในตำแหน่ง frontend devoloper หรือ Fullstack devoloper 
                เพื่อนำความรู้ที่เรียนมาประยุกต์ใช้ในโลกการทำงานจริงและเรียนรู้เทคโนโลยีใหม่ๆ จากผู้เชี่ยวชาญ
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
