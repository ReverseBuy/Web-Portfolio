import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';

export default function ContactView() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="pt-32 pb-24 px-8 max-w-7xl mx-auto"
    >
      <header className="mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-headline font-black tracking-tighter text-on-surface mb-6">
          ติดต่อฉัน
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          มีโปรเจกต์ที่น่าสนใจ หรืออยากพูดคุยแลกเปลี่ยนไอเดีย? ส่งข้อความหาผมได้เลยครับ
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-surface-container p-8 rounded-2xl border border-white/5 space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">อีเมล</h3>
                <p className="text-on-surface-variant">hello@johndoe.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">เบอร์โทรศัพท์</h3>
                <p className="text-on-surface-variant">+66 81 234 5678</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">ที่อยู่</h3>
                <p className="text-on-surface-variant">กรุงเทพมหานคร, ประเทศไทย</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            {[
              { icon: Linkedin, href: "#" },
              { icon: Github, href: "#" },
              { icon: Twitter, href: "#" }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href}
                className="p-4 bg-surface-container rounded-xl text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-8">
          <form className="bg-surface-container p-8 md:p-12 rounded-2xl border border-white/5 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">ชื่อของคุณ</label>
                <input 
                  type="text" 
                  placeholder="สมชาย ใจดี"
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl p-4 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">อีเมล</label>
                <input 
                  type="email" 
                  placeholder="somchai@example.com"
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl p-4 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">หัวข้อ</label>
              <input 
                type="text" 
                placeholder="สนใจร่วมงาน / สอบถามข้อมูล"
                className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl p-4 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">ข้อความ</label>
              <textarea 
                rows={6}
                placeholder="พิมพ์ข้อความของคุณที่นี่..."
                className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl p-4 focus:outline-none focus:border-primary transition-colors resize-none"
              ></textarea>
            </div>
            <button className="w-full bg-primary text-on-primary py-5 rounded-xl font-black text-lg flex items-center justify-center gap-3 hover:opacity-90 transition-opacity active:scale-[0.98]">
              <span>ส่งข้อความ</span>
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
