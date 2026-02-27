import { useState, useRef, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const NetherParticles = () => {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 6,
    duration: 3 + Math.random() * 4,
    size: 2 + Math.random() * 4,
    opacity: 0.3 + Math.random() * 0.5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full nether-particle"
          style={{
            left: `${p.left}%`,
            bottom: '-10px',
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, hsla(270, 80%, 65%, ${p.opacity}), transparent)`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

const EnderDragon = () => (
  <div className="absolute top-12 left-0 right-0 pointer-events-none z-[1]">
    <div className="ender-dragon-orbit">
      <svg
        viewBox="0 0 120 40"
        className="w-24 h-10 sm:w-32 sm:h-12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Body */}
        <rect x="40" y="14" width="40" height="12" rx="2" fill="hsl(270, 50%, 20%)" />
        {/* Head */}
        <rect x="80" y="10" width="16" height="16" rx="1" fill="hsl(270, 45%, 25%)" />
        {/* Eye */}
        <rect x="88" y="14" width="4" height="4" rx="1" className="dragon-eye" />
        {/* Wings */}
        <path d="M50 14 L35 2 L55 8 Z" fill="hsl(270, 60%, 30%)" className="dragon-wing-left" />
        <path d="M60 14 L75 2 L55 8 Z" fill="hsl(270, 60%, 30%)" className="dragon-wing-right" />
        {/* Tail */}
        <path d="M40 18 L20 22 L15 18 L10 24" stroke="hsl(270, 50%, 25%)" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* Flame breath */}
        <circle cx="100" cy="20" r="3" className="dragon-flame" />
        <circle cx="106" cy="19" r="2" className="dragon-flame" style={{ animationDelay: '0.2s' }} />
        <circle cx="110" cy="21" r="1.5" className="dragon-flame" style={{ animationDelay: '0.4s' }} />
      </svg>
    </div>
  </div>
);

const PortalFrame = () => (
  <div className="relative mx-auto w-72 sm:w-80 md:w-96 aspect-[3/4] flex items-center justify-center">
    {/* Obsidian frame */}
    <div className="absolute inset-0 portal-obsidian-frame" />
    {/* Portal swirl */}
    <div className="absolute inset-4 sm:inset-6 rounded-sm portal-swirl overflow-hidden">
      <div className="absolute inset-0 portal-swirl-inner" />
      <div className="absolute inset-0 portal-swirl-overlay" />
    </div>
    {/* Glow rays */}
    <div className="absolute inset-0 portal-light-rays" />
  </div>
);

const ContactSection = () => {
  const ref = useScrollReveal();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', idea: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.idea) {
      toast({ title: '⚠️ Missing fields', description: 'All fields are required to transmit.' });
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      toast({ title: '🐉 Transmission Complete', description: 'Your message has crossed dimensions.' });
      setTimeout(() => setSent(false), 5000);
      setFormData({ name: '', email: '', idea: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden nether-dimension" ref={ref}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/90 z-0" />
      
      {/* Lava cracks on ground */}
      <div className="absolute bottom-0 left-0 right-0 h-32 nether-ground z-[1]" />

      <NetherParticles />
      <EnderDragon />

      <div className="container mx-auto px-6 relative z-[2]">
        {/* Header */}
        <div className="reveal mb-6 text-center">
          <p className="font-pixel text-[10px] text-portal tracking-[0.3em] mb-4">
            🟣 NETHER GATEWAY — CONTACT DIMENSION
          </p>
          <h2 className="font-pixel text-xl sm:text-2xl text-foreground portal-glow-text">
            ENTER THE <span className="text-portal-glow">NETHER GATEWAY</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Ready to collaborate on AI research, IoT systems, or something extraordinary?
            Step through the portal.
          </p>
        </div>

        <div className="reveal flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
          {/* Portal visual */}
          <div className="hidden md:block flex-shrink-0">
            <PortalFrame />
          </div>

          {/* Form panel */}
          <div
            ref={formRef}
            className={`w-full max-w-md nether-form-panel rounded-lg p-8 transition-all duration-700 ${
              sending ? 'nether-transmitting' : ''
            } ${sent ? 'nether-sent' : ''}`}
          >
            {sent ? (
              <div className="text-center py-12 space-y-4">
                <div className="text-5xl animate-pulse-glow">🐉</div>
                <p className="font-pixel text-[11px] text-portal-glow portal-glow-text">
                  TRANSMISSION COMPLETE
                </p>
                <p className="text-muted-foreground text-sm">
                  Your message has crossed dimensions.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-pixel text-[8px] text-portal tracking-widest mb-2 block">
                    ▸ YOUR NAME
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Steve"
                    className="bg-background/50 border-portal/30 focus:border-portal-glow text-foreground placeholder:text-muted-foreground/50"
                    maxLength={100}
                  />
                </div>
                <div>
                  <label className="font-pixel text-[8px] text-portal tracking-widest mb-2 block">
                    ▸ EMAIL ADDRESS
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    placeholder="steve@minecraft.net"
                    className="bg-background/50 border-portal/30 focus:border-portal-glow text-foreground placeholder:text-muted-foreground/50"
                    maxLength={255}
                  />
                </div>
                <div>
                  <label className="font-pixel text-[8px] text-portal tracking-widest mb-2 block">
                    ▸ PROJECT IDEA
                  </label>
                  <Textarea
                    value={formData.idea}
                    onChange={(e) => setFormData((p) => ({ ...p, idea: e.target.value }))}
                    placeholder="Describe your next legendary build..."
                    rows={4}
                    className="bg-background/50 border-portal/30 focus:border-portal-glow text-foreground placeholder:text-muted-foreground/50 resize-none"
                    maxLength={1000}
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full font-pixel text-[10px] px-6 py-4 rounded nether-transmit-btn tracking-wider transition-all duration-300 disabled:opacity-50"
                >
                  {sending ? '🌀 TRANSMITTING...' : '🟣 TRANSMIT THROUGH PORTAL'}
                </button>

                {/* Social links */}
                <div className="flex gap-3 pt-2">
                  <a
                    href="www.linkedin.com/in/atharva-pathak-38b63b22b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center font-pixel text-[8px] px-3 py-3 bg-portal/10 border border-portal/20 text-portal rounded hover:bg-portal/20 transition-all tracking-wider"
                  >
                    🔗 LINKEDIN
                  </a>
                  <a
                    href="https://github.com/aspathak2705"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center font-pixel text-[8px] px-3 py-3 bg-muted border border-border text-muted-foreground rounded hover:text-foreground transition-all tracking-wider"
                  >
                    ⚙️ GITHUB
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="reveal mt-20 text-center">
          <p className="font-pixel text-[8px] text-muted-foreground tracking-wider">
            CRAFTED WITH ⛏️ BY ATHARVA — 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
