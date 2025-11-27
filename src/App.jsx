import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Zap, Shield, Users, Globe, ChevronDown } from 'lucide-react';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Zap,
      title: 'Rápido e eficiente',
      description: 'Performance otimizada para entregar resultados em segundos, não minutos.'
    },
    {
      icon: Shield,
      title: 'Seguro por padrão',
      description: 'Criptografia de ponta a ponta e conformidade com LGPD e GDPR.'
    },
    {
      icon: Users,
      title: 'Colaboração em tempo real',
      description: 'Trabalhe em equipe sem conflitos, com sincronização instantânea.'
    },
    {
      icon: Globe,
      title: 'Global e escalável',
      description: 'Infraestrutura distribuída para atender milhões de usuários.'
    }
  ];

  const plans = [
    {
      name: 'Starter',
      price: 'Grátis',
      description: 'Perfeito para começar',
      features: ['5 projetos', '100 MB storage', 'Suporte por email', 'Recursos básicos']
    },
    {
      name: 'Pro',
      price: 'R$ 49',
      popular: true,
      description: 'Para profissionais',
      features: ['Projetos ilimitados', '10 GB storage', 'Suporte prioritário', 'Todos os recursos', 'API access']
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Para grandes times',
      features: ['Tudo do Pro', 'Storage ilimitado', 'Suporte dedicado', 'SLA garantido', 'Onboarding personalizado']
    }
  ];

  const testimonials = [
    { name: 'Ana Silva', role: 'CEO, TechStart', text: 'Revolucionou completamente nosso fluxo de trabalho. Simplesmente incrível.' },
    { name: 'Carlos Mendes', role: 'CTO, DataFlow', text: 'A melhor ferramenta que já usei. Performance excepcional.' },
    { name: 'Marina Costa', role: 'Designer, Creative Co', text: 'Interface intuitiva e design impecável. Recomendo muito.' }
  ];

  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", sans-serif' }}>
      
      {/* Header/Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-light" style={{ letterSpacing: '-0.02em' }}>Linear</div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm text-gray-400 hover:text-white transition-colors">Login</button>
            <button className="px-5 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-all">
              Sign up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-900 rounded-full text-xs text-gray-400 mb-6 animate-fade-in-down">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Linear for Agents
          </div>
          
          <h1 className="text-6xl md:text-7xl font-light mb-6 animate-fade-in-up" style={{ letterSpacing: '-0.03em', lineHeight: '1.1', animationDelay: '0.1s' }}>
            Mundos das landing pages.<br />
            Developer Luuk.
          </h1>
          
          <p className="text-xl text-gray-400 font-light mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Bem-vindo ao mundo das landing pages — onde criatividade encontra performance.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all hover:scale-105 hover:shadow-lg">
              <span>Get started free</span>
              <ArrowRight size={18} />
            </button>
            <button className="px-6 py-3 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 transition-all border border-neutral-800 hover:scale-105">
              Watch demo
            </button>
          </div>
        </div>

        {/* Hero Visual - Simulated Interface */}
        <div className="max-w-5xl mx-auto mt-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-neutral-950 rounded-3xl border border-neutral-900 p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="bg-black rounded-2xl p-6 border border-neutral-900">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-neutral-900">
                <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs">AI</div>
                <div>
                  <div className="text-sm font-medium">Agent AI</div>
                  <div className="text-xs text-gray-500">Working on your tasks</div>
                </div>
              </div>
              {[
                { name: 'Kenny', status: 'Active', color: 'bg-purple-500', delay: '0.5s' },
                { name: 'Jason', status: 'Reviewing', color: 'bg-blue-500', delay: '0.6s' },
                { name: 'Charmyn', status: 'Done', color: 'bg-green-500', delay: '0.7s' },
                { name: 'Laura', status: 'Idle', color: 'bg-gray-500', delay: '0.8s' },
                { name: 'Charles', status: 'Idle', color: 'bg-gray-500', delay: '0.9s' }
              ].map((agent, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-neutral-900 last:border-0 animate-slide-in-left" style={{ animationDelay: agent.delay }}>
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${agent.color}`}></div>
                    <span className="text-sm">{agent.name}</span>
                  </div>
                  <span className="text-xs text-gray-500">{agent.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fade-in-down {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slide-in-left {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .animate-fade-in-down {
            animation: fade-in-down 0.6s ease-out forwards;
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out forwards;
            opacity: 0;
          }
          .animate-slide-in-left {
            animation: slide-in-left 0.5s ease-out forwards;
            opacity: 0;
          }
        `}</style>
      </section>

      {/* Components Grid Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-3">
            {/* Row 1 */}
            {[
              { icon: '➜', title: 'Start', lessons: '9 Lessons', color: 'from-green-500 to-emerald-600', items: ['Get Started with Linear', 'Setting up your workspace', 'Inviting team members'], delay: '0s' },
              { icon: 'Aa', title: 'Typography', lessons: '10 Lessons', color: 'from-yellow-500 to-orange-600', items: ['Font families & weights', 'Text hierarchy', 'Line height & spacing'], delay: '0.1s' },
              { icon: '⊞', title: 'Layout', lessons: '10 Lessons', color: 'from-orange-500 to-red-600', items: ['Grid systems', 'Flexbox layouts', 'Responsive design'], delay: '0.2s' },
              { icon: '◐', title: 'Color', lessons: '10 Lessons', color: 'from-pink-500 to-rose-600', items: ['Color theory basics', 'Creating palettes', 'Accessibility contrast'], delay: '0.3s' },
              { icon: '✦', title: 'Style', lessons: '10 Lessons', color: 'from-purple-500 to-pink-600', items: ['Design tokens', 'Component variants', 'Theme customization'], delay: '0.4s' },
              { icon: '◈', title: 'Imagery', lessons: '10 Lessons', color: 'from-purple-500 to-indigo-600', items: ['Image optimization', 'Icon systems', 'Illustrations'], delay: '0.5s' },
              { icon: '◫', title: 'Elements', lessons: '10 Lessons', color: 'from-blue-500 to-cyan-600', items: ['Buttons', 'Input fields', 'Cards & containers'], delay: '0.6s' },
              { icon: '⚡', title: 'Tactics', lessons: '10 Lessons', color: 'from-gray-400 to-gray-600', items: ['Building everything modular', 'Creating reusable components', 'Design system best practices'], delay: '0.7s' }
            ].map((item, i) => (
              <div 
                key={i} 
                className="bg-neutral-950 rounded-2xl p-6 border border-neutral-900 hover:border-neutral-800 transition-all hover:scale-105 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: item.delay }}
              >
                <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 transition-transform hover:rotate-12`}>
                  <span className="text-xl">{item.icon}</span>
                </div>
                <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 mb-4">{item.lessons}</p>
                <ul className="space-y-1.5 text-xs text-gray-500">
                  {item.items.map((subItem, j) => (
                    <li key={j}>→ {subItem}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap/Timeline Section */}
      <section className="py-20 px-6 border-t border-neutral-900 bg-gradient-to-b from-black to-neutral-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ letterSpacing: '-0.02em' }}>
              JavaScript Evolution
            </h2>
            <p className="text-gray-400 text-lg font-light">A jornada da linguagem mais popular da web</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {[
                {
                  year: '1995',
                  title: 'JavaScript Birth',
                  side: 'left',
                  description: 'Criado por Brendan Eich em apenas 10 dias na Netscape. Originalmente chamado de Mocha, depois LiveScript.',
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  year: '1997',
                  title: 'ECMAScript Standard',
                  side: 'right',
                  description: 'JavaScript se torna um padrão ECMA. A primeira especificação oficial ECMAScript 1 é lançada.',
                  color: 'from-cyan-500 to-blue-600'
                },
                {
                  year: '2005',
                  title: 'AJAX Revolution',
                  side: 'left',
                  description: 'Jesse James Garrett cunha o termo AJAX. Google Maps e Gmail mostram o poder das web apps dinâmicas.',
                  color: 'from-purple-500 to-blue-600'
                },
                {
                  year: '2009',
                  title: 'Node.js Launch',
                  side: 'right',
                  description: 'Ryan Dahl cria Node.js, permitindo JavaScript no backend. Muda completamente o ecossistema.',
                  color: 'from-violet-500 to-purple-600'
                },
                {
                  year: '2015',
                  title: 'ES6/ES2015',
                  side: 'left',
                  description: 'A maior atualização do JavaScript. Arrow functions, classes, modules, promises, let/const e muito mais.',
                  color: 'from-fuchsia-500 to-purple-600'
                },
                {
                  year: '2020',
                  title: 'Modern Frameworks Era',
                  side: 'right',
                  description: 'React, Vue e Angular dominam. TypeScript se torna mainstream. JAMstack e SSR são o novo padrão.',
                  color: 'from-pink-500 to-rose-600'
                }
              ].map((item, i) => (
                <div key={i} className={`flex items-center ${item.side === 'left' ? 'justify-end' : 'justify-start'} relative`}>
                  {/* Content */}
                  <div className={`w-5/12 ${item.side === 'left' ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="bg-neutral-950 rounded-2xl p-6 border border-neutral-900 hover:border-neutral-700 transition-all">
                      <div className={`inline-block px-3 py-1 bg-gradient-to-r ${item.color} rounded-full text-xs font-medium text-white mb-3`}>
                        {item.year}
                      </div>
                      <h3 className="text-xl font-light mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-400 font-light leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${item.color} border-4 border-black shadow-lg`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ letterSpacing: '-0.02em' }}>
              Fast, focused, and reliable.
            </h2>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
              Just like the rest of your team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div 
                key={i} 
                className="bg-neutral-950 rounded-3xl p-8 border border-neutral-900 hover:border-neutral-800 transition-all hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-neutral-900 rounded-2xl flex items-center justify-center mb-6 transition-transform hover:rotate-12">
                  <feature.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-light mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-neutral-950 rounded-3xl border border-neutral-900 p-12">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-5xl font-light mb-2" style={{ letterSpacing: '-0.02em' }}>10M+</div>
                <div className="text-gray-400 text-sm">Tarefas processadas</div>
              </div>
              <div>
                <div className="text-5xl font-light mb-2" style={{ letterSpacing: '-0.02em' }}>99.9%</div>
                <div className="text-gray-400 text-sm">Uptime garantido</div>
              </div>
              <div>
                <div className="text-5xl font-light mb-2" style={{ letterSpacing: '-0.02em' }}>500+</div>
                <div className="text-gray-400 text-sm">Empresas confiam</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ letterSpacing: '-0.02em' }}>
              Pricing that scales with you
            </h2>
            <p className="text-gray-400 text-lg font-light">Comece grátis, pague conforme cresce</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div key={i} className={`bg-neutral-950 rounded-3xl p-8 border ${plan.popular ? 'border-white' : 'border-neutral-900'} relative`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-black text-xs font-medium rounded-full">
                    Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-light mb-2">{plan.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-light">{plan.price}</span>
                    {plan.price !== 'Grátis' && plan.price !== 'Custom' && <span className="text-gray-500 text-sm">/mês</span>}
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-gray-400">
                      <Check size={16} className="text-white flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-medium transition-all ${
                  plan.popular 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-800'
                }`}>
                  Get started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-16" style={{ letterSpacing: '-0.02em' }}>
            Loved by teams worldwide
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-neutral-950 rounded-3xl p-8 border border-neutral-900">
                <p className="text-gray-300 font-light mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <div className="font-medium text-sm">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-6" style={{ letterSpacing: '-0.02em' }}>
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-400 font-light mb-10">
            Join thousands of teams already using our platform
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-3 bg-neutral-950 border border-neutral-800 rounded-full text-sm focus:outline-none focus:border-white transition-colors"
            />
            <button className="w-full sm:w-auto px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all whitespace-nowrap">
              Get started
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-900 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-xl font-light mb-4" style={{ letterSpacing: '-0.02em' }}>Linear</div>
              <p className="text-sm text-gray-500 font-light">Building the future of work</p>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2025 Linear. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}