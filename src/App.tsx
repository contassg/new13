import { MessageCircle, FileText, Headphones, Mail, Clock, Shield, Heart, Award, CheckCircle } from 'lucide-react';

function App() {
  const whatsappNumber = "5511965157358";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const services = [
    {
      icon: FileText,
      title: "2ª Via de Boleto",
      description: "Emita a segunda via do seu boleto de forma rápida e segura"
    },
    {
      icon: Headphones,
      title: "Suporte Técnico",
      description: "Assistência técnica especializada para resolver seus problemas"
    },
    {
      icon: Mail,
      title: "Outros Assuntos",
      description: "Entre em contato para dúvidas gerais e informações"
    }
  ];

  const benefits = [
    { icon: Clock, text: "Atendimento rápido e eficiente" },
    { icon: Shield, text: "Segurança e privacidade garantidas" },
    { icon: Heart, text: "Suporte humanizado e personalizado" }
  ];

  const steps = [
    { number: "01", title: "Escolha o serviço", description: "Selecione o tipo de atendimento que você precisa" },
    { number: "02", title: "Entre em contato", description: "Fale conosco através do WhatsApp" },
    { number: "03", title: "Resolva rapidamente", description: "Nossa equipe resolverá sua solicitação com agilidade" }
  ];

  const commitments = [
    { icon: Award, title: "Transparência", description: "Comunicação clara e honesta em todos os processos" },
    { icon: CheckCircle, title: "Seriedade", description: "Compromisso com a qualidade e profissionalismo" },
    { icon: Heart, title: "Ética", description: "Respeito e integridade no relacionamento com clientes" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-pink-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Central Sem Parar</h1>
                <p className="text-xs text-slate-600">Online • Disponível agora</p>
              </div>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-2.5 rounded-full font-semibold hover:from-pink-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden sticky top-24">
              <div className="h-64 bg-gradient-to-br from-pink-400 via-rose-500 to-pink-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <MessageCircle className="w-32 h-32 text-white/30" />
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Central Sem Parar</h2>
                <p className="text-slate-600 text-sm mb-6">
                  Atendimento 24/7 para suas necessidades. Sempre disponível, sempre pronto.
                </p>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <benefit.icon className="w-6 h-6 text-pink-600" />
                      </div>
                      <p className="text-xs text-slate-600 leading-tight">{benefit.text}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-pink-500 to-rose-600 text-white text-center py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Iniciar Atendimento
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full border-2 border-pink-500 text-pink-600 text-center py-3 rounded-xl font-semibold hover:bg-pink-50 transition-all duration-300"
                  >
                    Fale Conosco
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Como podemos ajudar?</h2>
              <p className="text-slate-600 mb-8">Escolha o serviço que você precisa e fale conosco pelo WhatsApp</p>

              <div className="grid md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <a
                    key={index}
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-pink-100"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-7 h-7 text-pink-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-slate-600">{service.description}</p>
                  </a>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-3xl p-8 shadow-xl border border-pink-100">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Como funciona</h2>

              <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600">{step.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Começar Agora
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Nossos Compromissos</h2>

              <div className="grid md:grid-cols-3 gap-6">
                {commitments.map((commitment, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100">
                    <div className="w-14 h-14 bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl flex items-center justify-center mb-4">
                      <commitment.icon className="w-7 h-7 text-pink-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{commitment.title}</h3>
                    <p className="text-sm text-slate-600">{commitment.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Central Sem Parar</h3>
              </div>
              <p className="text-slate-400 text-sm">
                Excelência em atendimento e soluções personalizadas para você.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Atendimento</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Segunda a Sexta: 8h às 18h</li>
                <li>Sábado: 8h às 12h</li>
                <li>WhatsApp: 24/7</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-pink-600 hover:to-rose-700 transition-all duration-300"
              >
                Fale no WhatsApp
              </a>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2024 Central Sem Parar. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 z-50 group"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
      </a>
    </div>
  );
}

export default App;
