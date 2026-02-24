import heroBg from '@/assets/hero-bg.jpg';
import VoxelScene from './VoxelScene';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />

      {/* 3D Scene */}
      <div className="absolute inset-0 pointer-events-none">
        <VoxelScene />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p className="font-pixel text-[10px] sm:text-xs text-secondary tracking-[0.3em] mb-6 animate-pulse-glow">
          ⬥ ENTERING THE AI REALM ⬥
        </p>
        <h1 className="font-pixel text-2xl sm:text-4xl md:text-5xl text-foreground leading-relaxed mb-6 portal-glow-text">
          ATHARVA<span className="text-secondary">CRAFT</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-10 leading-relaxed">
          A playable portfolio experience. Explore a Minecraft-inspired world of
          <span className="text-primary"> AI research</span>,
          <span className="text-accent"> IoT systems</span>, and
          <span className="text-diamond"> machine learning</span>.
        </p>
        <a
          href="#about"
          className="inline-block font-pixel text-[10px] px-8 py-4 border border-secondary/50 text-secondary hover:bg-secondary/10 transition-all duration-300 portal-glow tracking-wider"
        >
          EXPLORE WORLD ▼
        </a>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
