import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Bell, Smartphone, Thermometer, Wifi, Users, Clock, ChevronRight, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-24 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="m-[10px]">
              <Image
                src="/logo.svg"
                alt="Anjo da Guarda Logo"
                width={110}
                height={110}
              />
            </div>
            <span className="text-xl font-bold">Anjo da Guarda</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#problema" className="text-sm font-medium transition-colors hover:text-primary">
              O Problema
            </Link>
            <Link href="#solucao" className="text-sm font-medium transition-colors hover:text-primary">
              Nossa Solução
            </Link>
            <Link href="#como-funciona" className="text-sm font-medium transition-colors hover:text-primary">
              Como Funciona
            </Link>
            <Link href="#contato" className="text-sm font-medium transition-colors hover:text-primary">
              Contato
            </Link>
          </nav>
          <Button>Login</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 z-10" />
          <div className="relative h-[600px] w-full overflow-hidden">
            <Image
              src="/crianca-protegida-head.png"
              alt="Criança em um carro"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container">
              <div className="max-w-2xl space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  Proteção que salva vidas
                </h1>
                <p className="text-xl text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                  Sistema de monitoramento eletrônico veicular que detecta e alerta a presença de pessoas, crianças e
                  animais esquecidos no veículo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="gap-2">
                    Conheça o Anjo da Guarda
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Fale Conosco
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problema" className="py-20 bg-muted">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">O Problema</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Esquecimentos em veículos podem ser fatais
                </h2>
                <p className="text-muted-foreground text-lg">
                  A cada ano, dezenas de crianças e animais de estimação morrem por hipertermia após serem esquecidos em
                  veículos fechados. Em apenas 10 minutos, a temperatura interna de um carro pode aumentar em até 10°C.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Thermometer className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Aumento rápido de temperatura</h3>
                      <p className="text-sm text-muted-foreground">
                        Veículos fechados podem atingir temperaturas letais em minutos, mesmo em dias amenos.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Tempo é crucial</h3>
                      <p className="text-sm text-muted-foreground">
                        Cada minuto conta em situações de emergência. A detecção rápida salva vidas.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Acontece com qualquer pessoa</h3>
                      <p className="text-sm text-muted-foreground">
                        Esquecimentos podem acontecer com qualquer pessoa, independente de quão cuidadosa seja.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/crianca-2.png"
                  alt="Criança em um veículo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solucao" className="py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Nossa Solução</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Anjo da Guarda: Proteção Inteligente
              </h2>
              <p className="text-xl text-muted-foreground">
                Um sistema de monitoramento eletrônico que detecta a presença de pessoas e animais no veículo, alertando
                o proprietário e prevenindo tragédias.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Alertas Imediatos</h3>
                <p className="text-muted-foreground">
                  Notificações em tempo real enviadas diretamente para seu smartphone quando o sistema detecta uma
                  presença no veículo.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Aplicativo Dedicado</h3>
                <p className="text-muted-foreground">
                  Controle e monitore seu veículo através de um aplicativo intuitivo, com informações em tempo real e
                  histórico de alertas.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-sm border">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Wifi className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Conectividade Avançada</h3>
                <p className="text-muted-foreground">
                  Tecnologia sem fio que permite monitoramento constante, mesmo quando você está longe do veículo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="como-funciona" className="py-20 bg-muted">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Tecnologia</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Como Funciona o Anjo da Guarda</h2>
              <p className="text-lg text-muted-foreground">
                Nosso sistema utiliza tecnologia avançada para garantir a segurança dos ocupantes do veículo.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/cranca-3.png"
                  alt="Criança no veículo com sistema Anjo da Guarda"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Detecção de Presença</h3>
                    <p className="text-muted-foreground mt-2">
                      Sensores avançados detectam a presença de pessoas e animais no interior do veículo, mesmo quando
                      estão dormindo ou imóveis.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Monitoramento de Temperatura</h3>
                    <p className="text-muted-foreground mt-2">
                      O sistema monitora constantemente a temperatura interna do veículo, identificando situações de
                      risco.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Alerta Imediato</h3>
                    <p className="text-muted-foreground mt-2">
                      Em caso de detecção, o sistema envia alertas para o smartphone do proprietário e ativa alarmes
                      sonoros no veículo.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Acionamento de Emergência</h3>
                    <p className="text-muted-foreground mt-2">
                      Se não houver resposta do proprietário, o sistema pode acionar serviços de emergência com a
                      localização exata do veículo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <h3 className="text-4xl font-bold">38°C</h3>
                <p>Temperatura que um carro fechado pode atingir em apenas 30 minutos</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold">10 min</h3>
                <p>Tempo para uma situação se tornar crítica em dias quentes</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold">100%</h3>
                <p>De casos evitáveis com o sistema Anjo da Guarda</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-bold">24/7</h3>
                <p>Monitoramento constante para sua tranquilidade</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Quem Somos</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Equipe Anjo da Guarda</h2>
              <p className="text-lg text-muted-foreground">
                Somos estudantes de Tecnologia em Eletrônica Industrial do SENAI, comprometidos em desenvolver soluções
                que salvam vidas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { id: 1, name: "Alexandre de A. Pereira", image: "/alex.jpg" },
                { id: 2, name: "Andre Luiz F. Filho" },
                { id: 3, name: "Felipe Gianini" },
                { id: 4, name: "Luís Gustavo de L. Pinheiro" }
              ].map((member) => (
                <div key={member.id} className="text-center">
                  <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                    <Image
                      src={member.image || `/placeholder.svg?height=256&width=256`}
                      alt={`Membro da equipe ${member.name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-muted-foreground">Estudante de Eletrônica Industrial</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contato" className="py-20 bg-muted">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Proteja quem você ama</h2>
              <p className="text-xl text-muted-foreground">
                Entre em contato para saber mais sobre o Anjo da Guarda e como implementar esta tecnologia em seu
                veículo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  Solicitar Demonstração
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Fale com um Especialista
                </Button>
              </div>
              <div className="pt-8 border-t">
                <p className="text-muted-foreground">
                  Projeto Integrador - Tecnologia em Eletrônica Industrial - SENAI
                </p>
                <Link
                  href="https://github.com/alexabreup/anjo-da-guarda"
                  target="_blank"
                  className="text-primary hover:underline inline-flex items-center gap-1 mt-2"
                >
                  Visite nosso repositório no GitHub
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Anjo da Guarda Logo"
                width={40}
                height={40}
              />
              <span className="font-bold">Anjo da Guarda</span>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <Image
                src="/SENAI_Sao_Paulo_logo.png"
                alt="SENAI São Paulo Logo"
                width={120}
                height={40}
                unoptimized
                style={{ objectFit: 'contain' }}
              />
              {/* Usando tag img padrão para resolver problema de carregamento */}
              <img
                src="/senai-saga-logo-dark-new.png"
                alt="SENAI SAGA Logo"
                width={120}
                height={40}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Projeto Anjo da Guarda. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Termos de Uso
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
