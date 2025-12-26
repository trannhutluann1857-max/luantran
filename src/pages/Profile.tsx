import { Github, Linkedin, Mail, MapPin, Calendar, ExternalLink } from 'lucide-react';
import Layout from '@/components/Layout';
import { cn } from '@/lib/utils';
import techAvatar from '@/assets/tech-avatar.png';

const skills = [
  { name: 'Java', level: 90, color: 'bg-orange-500' },
  { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
  { name: 'TypeScript', level: 80, color: 'bg-blue-500' },
  { name: 'React', level: 75, color: 'bg-cyan-500' },
  { name: 'Spring Boot', level: 70, color: 'bg-green-500' },
  { name: 'Node.js', level: 65, color: 'bg-lime-500' },
];

const technologies = [
  'Git', 'Docker', 'PostgreSQL', 'MongoDB', 'Redis',
  'REST API', 'GraphQL', 'HTML/CSS', 'Tailwind CSS', 'Linux'
];

const experiences = [
  {
    title: 'Junior Developer',
    company: 'Tech Startup',
    period: '2024 - Hiện tại',
    description: 'Phát triển và bảo trì các ứng dụng web sử dụng Java và JavaScript.',
  },
  {
    title: 'Intern Developer',
    company: 'Software Company',
    period: '2020 - 2024',
    description: 'Học hỏi và thực hành các công nghệ web hiện đại.',
  },
];

const Profile = () => {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* Profile Header */}
            <div className="mb-12 flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg">
                  <img 
                    src={techAvatar} 
                    alt="Developer Avatar" 
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1">
                <h1 className="mb-2 text-3xl font-bold md:text-4xl">Trần Nhựt Luân</h1>
                <p className="mb-4 text-lg text-primary">Full-stack Developer</p>
                <p className="mb-4 max-w-xl text-muted-foreground">
                  Xin chào! Tôi là một lập trình viên đam mê Java và JavaScript. 
                  Blog này là nơi tôi chia sẻ kiến thức và kinh nghiệm trong quá trình học tập và làm việc.
                </p>

                <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground md:justify-start">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Việt Nam
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    1+ năm kinh nghiệm
                  </span>
                </div>

                <div className="flex items-center justify-center gap-3 md:justify-start">
                  <a
                    href="https://github.com/trannhutluann1857-max"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-secondary/50 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-secondary/50 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                  <a
                    href="mailto:trannhutluann1857@gmail.com"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    <Mail className="h-4 w-4" />
                    Liên hệ
                  </a>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">Kỹ năng chính</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={cn(
                      'rounded-lg border border-border/50 bg-card/50 p-4 opacity-0 animate-slide-up',
                      `stagger-${Math.min(index + 1, 5)}`
                    )}
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-secondary">
                      <div
                        className={cn('h-full rounded-full transition-all duration-1000', skill.color)}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">Công nghệ khác</h2>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border/50 bg-card/50 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-card"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">Kinh nghiệm</h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative border-l-2 border-primary/30 pl-6"
                  >
                    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-primary bg-background" />
                    <div className="mb-1 text-sm text-primary">{exp.period}</div>
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <p className="mb-2 text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="mb-6 text-2xl font-bold">Học vấn</h2>
              <div className="rounded-lg border border-border/50 bg-card/50 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Kỹ Sư Công nghệ Thông tin</h3>
                    <p className="text-muted-foreground">Đại học Công Nghệ TP.HCM</p>
                    <p className="mt-2 text-sm text-muted-foreground">2020 - 2024</p>
                  </div>
                  <a
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
