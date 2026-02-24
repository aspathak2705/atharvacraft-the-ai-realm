import villageBg from '@/assets/village-bg.jpg';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const education = [
  { icon: '📘', title: 'B.Tech Computer Science', detail: 'Specialization in AI & ML' },
  { icon: '🏆', title: 'Six Sigma Green Belt', detail: 'Process optimization & analytics' },
  { icon: '🔬', title: 'Research Publication', detail: 'Machine Learning in Healthcare' },
];

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${villageBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="reveal mb-16">
          <p className="font-pixel text-[10px] text-accent tracking-[0.3em] mb-4">
            🏠 LEVEL 1 — THE VILLAGE
          </p>
          <h2 className="font-pixel text-xl sm:text-2xl text-foreground">
            About <span className="text-primary">Atharva</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="reveal glass-panel rounded-lg p-8">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Applied AI engineer building intelligent systems at the intersection of machine learning, IoT, and data science. 
              My work focuses on deploying models that create measurable real-world impact — from healthcare diagnostics to precision agriculture.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I approach every problem analytically, combining research rigor with engineering pragmatism. 
              Whether it's optimizing neural network architectures or designing IoT sensor pipelines, 
              the goal is always the same: <span className="text-primary">turn data into decisions</span>.
            </p>
          </div>

          {/* Education cards */}
          <div className="space-y-4">
            {education.map((item, i) => (
              <div
                key={i}
                className="reveal glass-panel rounded-lg p-6 flex items-start gap-4 hover:border-primary/30 transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h3 className="font-pixel text-[10px] text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
