import { useScrollReveal } from '@/hooks/useScrollReveal';

const ContactSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="relative py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="reveal mb-16 text-center">
          <p className="font-pixel text-[10px] text-secondary tracking-[0.3em] mb-4">
            🌀 SKY PORTAL — CONNECT
          </p>
          <h2 className="font-pixel text-xl sm:text-2xl text-foreground portal-glow-text">
            Enter the <span className="text-secondary">Portal</span>
          </h2>
        </div>

        <div className="reveal max-w-xl mx-auto glass-panel rounded-lg p-10 portal-glow">
          <p className="text-muted-foreground text-center mb-8 leading-relaxed">
            Ready to collaborate on AI research, IoT projects, or something entirely new?
            Step through the portal.
          </p>
          <div className="space-y-4">
            <a
              href="mailto:atharva@example.com"
              className="block w-full text-center font-pixel text-[10px] px-6 py-4 bg-secondary/10 border border-secondary/30 text-secondary rounded hover:bg-secondary/20 transition-all duration-300 tracking-wider"
            >
              📧 SEND MESSAGE
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center font-pixel text-[10px] px-6 py-4 bg-primary/10 border border-primary/30 text-primary rounded hover:bg-primary/20 transition-all duration-300 tracking-wider"
            >
              🔗 LINKEDIN
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center font-pixel text-[10px] px-6 py-4 bg-muted border border-border text-muted-foreground rounded hover:text-foreground transition-all duration-300 tracking-wider"
            >
              ⚙️ GITHUB
            </a>
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
