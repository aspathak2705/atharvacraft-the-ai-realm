import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState } from 'react';

const projects = [
  {
    floor: 1,
    title: 'Diabetes ML Predictor',
    description: 'Machine learning pipeline for early diabetes detection using clinical data. Achieved 94% accuracy with ensemble methods.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'XGBoost'],
    color: 'text-primary',
    glowClass: 'emerald-glow',
    icon: '🧬',
  },
  {
    floor: 2,
    title: 'RBC IoT Monitor',
    description: 'Real-time IoT system for monitoring red blood cell storage conditions with automated alerts and dashboards.',
    tech: ['Arduino', 'MQTT', 'Node.js', 'React'],
    color: 'text-accent',
    glowClass: 'lava-glow',
    icon: '🔴',
  },
  {
    floor: 3,
    title: 'Agrimitra',
    description: 'AI-powered precision agriculture platform providing crop recommendations and disease detection for Indian farmers.',
    tech: ['TensorFlow', 'Flask', 'Computer Vision', 'IoT'],
    color: 'text-primary',
    glowClass: 'emerald-glow',
    icon: '🌾',
  },
  {
    floor: 4,
    title: 'NLP News Analyzer',
    description: 'Natural language processing system for automated news classification, sentiment analysis, and topic extraction.',
    tech: ['BERT', 'spaCy', 'FastAPI', 'Transformers'],
    color: 'text-diamond',
    glowClass: 'diamond-glow',
    icon: '📰',
  },
];

const ProjectsSection = () => {
  const ref = useScrollReveal();
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="reveal mb-16">
          <p className="font-pixel text-[10px] text-secondary tracking-[0.3em] mb-4">
            🏰 LEVEL 2 — THE AI MAGIC TOWER
          </p>
          <h2 className="font-pixel text-xl sm:text-2xl text-foreground">
            Project <span className="text-secondary">Floors</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`reveal glass-panel rounded-lg p-8 transition-all duration-500 cursor-pointer ${
                hoveredProject === i ? project.glowClass : ''
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onMouseEnter={() => setHoveredProject(i)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{project.icon}</span>
                <div>
                  <p className="font-pixel text-[8px] text-muted-foreground mb-1">
                    FLOOR {project.floor}
                  </p>
                  <h3 className={`font-pixel text-xs ${project.color}`}>
                    {project.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-pixel text-[7px] px-3 py-1.5 bg-muted rounded text-muted-foreground tracking-wide"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Vision card */}
        <div className="reveal mt-8 glass-panel rounded-lg p-8 text-center portal-glow">
          <p className="font-pixel text-[8px] text-muted-foreground mb-2">TOP FLOOR</p>
          <h3 className="font-pixel text-sm text-secondary mb-4">Vision & Future</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building toward autonomous AI systems that bridge the gap between research and real-world deployment —
            from edge computing on IoT devices to scalable cloud ML pipelines.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
