import { motion } from 'framer-motion';
import { Code, Brain, Radio, Server, Zap, Smartphone } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const SERVICES = [
  {
    icon: Code,
    title: 'Frontend Development',
    description:
      'Building scalable, performant web applications using React.js, TypeScript, and modern state management solutions like Redux Toolkit and Zustand.',
    color: 'from-primary-500/20 to-primary-600/10',
    border: 'hover:border-primary-500/40',
    iconColor: 'text-primary-400',
    iconBg: 'bg-primary-500/10 border-primary-500/20',
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description:
      'Integrating AI-powered features using Azure AI Agent, Cognitive Search, and OpenAI for intelligent automation, chatbots, and knowledge retrieval systems.',
    color: 'from-accent-500/20 to-accent-600/10',
    border: 'hover:border-accent-500/40',
    iconColor: 'text-accent-400',
    iconBg: 'bg-accent-500/10 border-accent-500/20',
  },
  {
    icon: Radio,
    title: 'Real-Time Communication',
    description:
      'Developing multi-channel communication systems with WebSockets, WebRTC, and SIP.js for chat, voice, and video capabilities handling thousands of concurrent users.',
    color: 'from-emerald-500/20 to-emerald-600/10',
    border: 'hover:border-emerald-500/40',
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description:
      'Building secure REST APIs using Node.js and Express.js with JWT authentication, Firebase Auth, and role-based access control (RBAC).',
    color: 'from-amber-500/20 to-amber-600/10',
    border: 'hover:border-amber-500/40',
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-500/10 border-amber-500/20',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description:
      'Optimizing application performance through memoization, virtualization, lazy loading, and code splitting to deliver smooth user experiences.',
    color: 'from-rose-500/20 to-rose-600/10',
    border: 'hover:border-rose-500/40',
    iconColor: 'text-rose-400',
    iconBg: 'bg-rose-500/10 border-rose-500/20',
  },
  {
    icon: Smartphone,
    title: 'Cross-Platform Solutions',
    description:
      'Creating responsive applications that work seamlessly across web and mobile platforms with React and React Native integration.',
    color: 'from-cyan-500/20 to-cyan-600/10',
    border: 'hover:border-cyan-500/40',
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/10 border-cyan-500/20',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-dark-surface/50" aria-label="Services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          tag="what I offer"
          title="Services"
          subtitle="End-to-end solutions from pixel-perfect UIs to intelligent backend systems"
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ icon: Icon, title, description, color, border, iconColor, iconBg }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`group relative bg-dark-card border border-dark-border rounded-xl p-6 ${border} transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`}
              />

              <div className="relative z-10 space-y-4">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center ${iconBg} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className={`w-5 h-5 ${iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-white text-base group-hover:text-white transition-colors">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
