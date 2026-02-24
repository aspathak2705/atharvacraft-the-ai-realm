import cavernBg from '@/assets/cavern-bg.jpg';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const skillCategories = [
  {
    title: 'ML & AI',
    icon: '💎',
    glowClass: 'diamond-glow',
    skills: [
      { name: 'TensorFlow / Keras', level: 90 },
      { name: 'Scikit-learn', level: 92 },
      { name: 'NLP / Transformers', level: 85 },
      { name: 'Computer Vision', level: 80 },
    ],
  },
  {
    title: 'Data Engineering',
    icon: '⛏️',
    glowClass: 'lava-glow',
    skills: [
      { name: 'Python / Pandas', level: 95 },
      { name: 'SQL / PostgreSQL', level: 88 },
      { name: 'Data Pipelines', level: 82 },
      { name: 'Power BI', level: 78 },
    ],
  },
  {
    title: 'IoT & Hardware',
    icon: '🔧',
    glowClass: 'emerald-glow',
    skills: [
      { name: 'Arduino / ESP32', level: 88 },
      { name: 'MQTT / Protocols', level: 80 },
      { name: 'Sensor Systems', level: 85 },
      { name: 'Edge Computing', level: 75 },
    ],
  },
  {
    title: 'Development',
    icon: '⚡',
    glowClass: 'portal-glow',
    skills: [
      { name: 'React / TypeScript', level: 82 },
      { name: 'Flask / FastAPI', level: 85 },
      { name: 'Docker / Cloud', level: 78 },
      { name: 'Git / CI/CD', level: 80 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(${cavernBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="reveal mb-16">
          <p className="font-pixel text-[10px] text-lava tracking-[0.3em] mb-4">
            🌋 LEVEL 3 — UNDERGROUND DATA CAVERNS
          </p>
          <h2 className="font-pixel text-xl sm:text-2xl text-foreground">
            Technical <span className="text-accent">Crystals</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className={`reveal glass-panel rounded-lg p-8 hover:${cat.glowClass} transition-all duration-500`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-pixel text-xs text-foreground">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-muted-foreground">{skill.name}</span>
                      <span className="font-pixel text-[8px] text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full xp-bar rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
