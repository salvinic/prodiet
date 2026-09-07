import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  GraduationCap,
  Menu,
  Network,
  Sparkles,
  X,
} from "lucide-react";

const heroImage = "./assets/prodiet-hero.jpg";
const patternImage = "./assets/prodiet-pattern.jpg";

const services = [
  {
    number: "01",
    icon: BriefcaseBusiness,
    title: "Longevity nell’offerta",
    description:
      "Affianchiamo le imprese nel progettare servizi, prodotti e nuove esperienze che intercettano la crescente domanda di salute, prevenzione e qualità della vita.",
    detail: "Strategia · Concept · Go-to-market",
  },
  {
    number: "02",
    icon: GraduationCap,
    title: "Formazione & welfare",
    description:
      "Creiamo percorsi formativi concreti per i dipendenti, pronti a entrare nei programmi di welfare e a trasformare la conoscenza in abitudini sostenibili.",
    detail: "Corsi · Workshop · Programmi aziendali",
  },
  {
    number: "03",
    icon: CalendarDays,
    title: "Eventi che attivano",
    description:
      "Ideiamo e produciamo eventi pubblici e privati dedicati alla longevity: contenuti autorevoli, format coinvolgenti e professionisti selezionati.",
    detail: "Talk · Festival · Corporate experience",
  },
];

const steps = [
  {
    number: "01",
    title: "Ascolto",
    text: "Leggiamo obiettivi, pubblico e posizionamento dell’impresa.",
  },
  {
    number: "02",
    title: "Disegno",
    text: "Costruiamo il format, i contenuti e l’esperienza più rilevante.",
  },
  {
    number: "03",
    title: "Network",
    text: "Attiviamo le competenze specialistiche necessarie al progetto.",
  },
  {
    number: "04",
    title: "Impatto",
    text: "Portiamo il progetto sul mercato e ne rendiamo visibile il valore.",
  },
];

const projects = [
  "Grezzo Raw Chocolate",
  "Longevity Day",
  "Longevity Café",
  "Longevità a costo zero",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f2f0e8] text-[#143329] selection:bg-[#d9ff57] selection:text-[#143329]">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "border-b border-[#143329]/10 bg-[#f2f0e8]/92 shadow-[0_10px_35px_rgba(20,51,41,0.06)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container flex h-[76px] items-center justify-between">
          <a
            href="#top"
            onClick={closeMenu}
            className="group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#143329] focus-visible:ring-offset-4"
            aria-label="PRODIET, torna all’inizio"
          >
            <span className="grid size-8 place-items-center rounded-full bg-[#143329] transition-transform duration-200 group-hover:rotate-12">
              <span className="size-2.5 rounded-full bg-[#d9ff57]" />
            </span>
            <span className="text-[1.08rem] font-extrabold tracking-[0.2em]">PRODIET</span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigazione principale">
            <a className="nav-link" href="#servizi">Cosa facciamo</a>
            <a className="nav-link" href="#metodo">Metodo</a>
            <a className="nav-link" href="#network">Network</a>
            <a className="nav-link" href="#nicola">Nicola Salvi</a>
          </nav>

          <a
            href="#contatti"
            className="hidden items-center gap-2 rounded-full bg-[#143329] px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1d4739] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#143329] focus-visible:ring-offset-4 active:scale-[0.97] lg:inline-flex"
          >
            Parliamone <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="grid size-11 place-items-center rounded-full border border-[#143329]/20 text-[#143329] transition-colors hover:bg-white lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`grid overflow-hidden transition-[grid-template-rows] duration-300 lg:hidden ${
            menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <nav className="min-h-0" aria-label="Navigazione mobile">
            <div className="container flex flex-col gap-1 pb-6 pt-2">
              {[
                ["Cosa facciamo", "#servizi"],
                ["Metodo", "#metodo"],
                ["Network", "#network"],
                ["Nicola Salvi", "#nicola"],
                ["Parliamone", "#contatti"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="flex items-center justify-between border-b border-[#143329]/10 py-4 text-lg font-semibold"
                >
                  {label} <ArrowDownRight className="size-5" />
                </a>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section id="top" className="relative min-h-[780px] overflow-hidden bg-[#cfe3d3] pt-[76px] lg:min-h-screen">
          <div className="hero-grain absolute inset-0 opacity-35" aria-hidden="true" />
          <div className="absolute -left-28 top-24 size-80 rounded-full border border-[#143329]/10" aria-hidden="true" />
          <div className="absolute -left-12 top-40 size-48 rounded-full border border-[#143329]/10" aria-hidden="true" />

          <div className="container relative grid min-h-[704px] items-center gap-10 py-12 lg:min-h-[calc(100vh-76px)] lg:grid-cols-[1.08fr_0.92fr] lg:py-16">
            <div className="relative z-10 max-w-3xl pb-2 lg:pb-14">
              <div className="reveal reveal-1 mb-8 inline-flex items-center gap-2 rounded-full border border-[#143329]/20 bg-white/35 px-4 py-2 text-[0.72rem] font-extrabold uppercase tracking-[0.18em] backdrop-blur-sm">
                <Sparkles className="size-3.5" aria-hidden="true" />
                Longevity strategy studio
              </div>

              <h1 className="reveal reveal-2 font-display text-[clamp(4.15rem,9vw,8.4rem)] font-medium leading-[0.78] tracking-[-0.065em]">
                Più vita.<br />
                <em className="font-normal">Più valore.</em>
              </h1>

              <div className="reveal reveal-3 mt-10 grid max-w-2xl gap-6 border-l border-[#143329]/35 pl-6 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-10">
                <p className="max-w-xl text-lg leading-relaxed text-[#294a3e] sm:text-xl">
                  Aiutiamo le imprese a trasformare la longevity in servizi, cultura e vantaggio competitivo.
                </p>
                <a
                  href="#servizi"
                  className="group grid size-14 shrink-0 place-items-center rounded-full bg-[#d9ff57] text-[#143329] shadow-[0_10px_30px_rgba(20,51,41,0.13)] transition-all duration-200 hover:-translate-y-1 hover:rotate-[-8deg] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#143329] focus-visible:ring-offset-4 active:scale-[0.97]"
                  aria-label="Scopri i servizi"
                >
                  <ArrowDownRight className="size-6 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </a>
              </div>
            </div>

            <div className="reveal reveal-4 relative mx-auto w-full max-w-[520px] lg:ml-auto lg:mr-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem_2rem_10rem_2rem] bg-[#143329] shadow-[0_35px_90px_rgba(20,51,41,0.22)]">
                <img
                  src={heroImage}
                  alt="Scultura organica astratta in vetro verde e materia naturale, simbolo di rigenerazione"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081c15]/50 via-transparent to-transparent" aria-hidden="true" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                  <p className="max-w-[13rem] text-sm font-semibold leading-snug">Strategia, scienza e cultura per un futuro più lungo.</p>
                  <span className="font-display text-5xl italic text-[#d9ff57]">∞</span>
                </div>
              </div>
              <div className="absolute -left-5 top-10 rounded-full bg-[#f2f0e8] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] shadow-lg sm:-left-12">
                Human first
              </div>
              <div className="absolute -bottom-5 -right-2 grid size-24 place-items-center rounded-full bg-[#d9ff57] text-center text-[0.62rem] font-extrabold uppercase leading-tight tracking-[0.1em] shadow-xl sm:-right-8 sm:size-28">
                Better<br />longer<br />together
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#143329] py-6 text-[#f2f0e8]" aria-label="Principi PRODIET">
          <div className="marquee overflow-hidden">
            <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap text-[0.72rem] font-extrabold uppercase tracking-[0.22em]">
              {[...Array(2)].flatMap((_, group) => [
                "Strategia",
                "Formazione",
                "Welfare",
                "Eventi",
                "Network",
                "Impatto",
              ].map((item) => (
                <span key={`${group}-${item}`} className="flex items-center gap-8">
                  {item}<span className="size-1.5 rounded-full bg-[#d9ff57]" />
                </span>
              )))}
            </div>
          </div>
        </section>

        <section className="section-pad relative overflow-hidden">
          <img
            src={patternImage}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
            aria-hidden="true"
          />
          <div className="container relative grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <p className="eyebrow">Perché ora</p>
            <div>
              <h2 className="section-title max-w-4xl">
                Viviamo più a lungo.<br />
                <em>Le imprese devono evolvere.</em>
              </h2>
              <div className="mt-10 grid gap-8 text-base leading-relaxed text-[#4a6258] md:grid-cols-2 md:text-lg">
                <p>
                  La longevity non è una tendenza passeggera. Cambia bisogni, consumi, lavoro e relazione con il benessere.
                </p>
                <p>
                  PRODIET traduce questo cambiamento in progetti credibili e distintivi, capaci di generare valore per persone e organizzazioni.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="servizi" className="section-pad scroll-mt-16 bg-[#f8f7f2]">
          <div className="container">
            <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="eyebrow">Cosa facciamo</p>
                <h2 className="section-title mt-6 max-w-4xl">Diamo forma alla<br /><em>longevity d’impresa.</em></h2>
              </div>
              <p className="max-w-sm border-l border-[#143329]/25 pl-5 text-base leading-relaxed text-[#52685f]">
                Dalla strategia all’esperienza, ogni progetto nasce intorno agli obiettivi reali dell’organizzazione.
              </p>
            </div>

            <div className="mt-16 grid gap-5 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article key={service.number} className="service-card group flex min-h-[420px] flex-col rounded-[1.75rem] bg-[#e5ebdf] p-7 sm:p-9">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold tracking-[0.16em] text-[#557064]">{service.number} / 03</span>
                      <span className="grid size-12 place-items-center rounded-full border border-[#143329]/15 bg-[#f8f7f2] transition-all duration-200 group-hover:-translate-y-1 group-hover:bg-[#d9ff57]">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="mt-auto pt-20">
                      <h3 className="font-display text-4xl font-medium leading-[0.98] tracking-[-0.035em]">{service.title}</h3>
                      <p className="mt-6 leading-relaxed text-[#496158]">{service.description}</p>
                      <p className="mt-8 border-t border-[#143329]/15 pt-5 text-[0.7rem] font-extrabold uppercase tracking-[0.13em] text-[#557064]">{service.detail}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="metodo" className="section-pad scroll-mt-16 bg-[#d9ff57]">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <p className="eyebrow">Il nostro metodo</p>
              <div>
                <h2 className="section-title max-w-4xl">Dal segnale<br /><em>al progetto.</em></h2>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#365147]">
                  Un percorso essenziale, multidisciplinare e orientato all’azione. Niente soluzioni standard: costruiamo ciò che serve, con chi serve.
                </p>
              </div>
            </div>

            <div className="mt-16 border-t border-[#143329]/25">
              {steps.map((step) => (
                <div key={step.number} className="method-row group grid gap-5 border-b border-[#143329]/25 py-7 md:grid-cols-[90px_0.8fr_1.2fr_auto] md:items-center">
                  <span className="text-xs font-extrabold tracking-[0.16em] text-[#486055]">{step.number}</span>
                  <h3 className="font-display text-4xl font-medium tracking-[-0.035em] md:text-5xl">{step.title}</h3>
                  <p className="max-w-lg leading-relaxed text-[#3f594f]">{step.text}</p>
                  <ArrowRight className="hidden size-6 transition-transform duration-200 group-hover:translate-x-2 md:block" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="network" className="section-pad relative scroll-mt-16 overflow-hidden bg-[#0d2a21] text-[#f2f0e8]">
          <div className="network-orbit absolute right-[-18rem] top-[-12rem] size-[42rem] rounded-full border border-white/10" aria-hidden="true">
            <span className="absolute left-[16%] top-[44%] size-4 rounded-full bg-[#d9ff57] shadow-[0_0_35px_rgba(217,255,87,0.8)]" />
            <span className="absolute bottom-[14%] left-[47%] size-2 rounded-full bg-white/80" />
            <span className="absolute left-[34%] top-[12%] size-2.5 rounded-full bg-[#87aa98]" />
          </div>
          <div className="container relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <span className="grid size-16 place-items-center rounded-full border border-white/15 bg-white/5">
                <Network className="size-7 text-[#d9ff57]" aria-hidden="true" />
              </span>
              <p className="mt-8 text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[#a8c0b5]">Il network</p>
            </div>
            <div>
              <h2 className="section-title text-[#f2f0e8]">Le competenze giuste,<br /><em className="text-[#d9ff57]">intorno allo stesso tavolo.</em></h2>
              <p className="mt-9 max-w-2xl text-lg leading-relaxed text-[#b9cbc3] md:text-xl">
                PRODIET opera attraverso una rete selezionata di professionisti specializzati. Scienza, nutrizione, movimento, comunicazione, formazione e produzione di eventi convergono in un’unica regia.
              </p>
              <div className="mt-10 flex flex-wrap gap-2.5">
                {["Medicina", "Nutrizione", "Psicologia", "Movement", "Education", "Content", "Experience"].map((skill) => (
                  <span key={skill} className="rounded-full border border-white/15 bg-white/[0.045] px-4 py-2 text-xs font-bold tracking-wide text-[#d9e4df]">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="nicola" className="section-pad scroll-mt-16 bg-[#cfe3d3]">
          <div className="container grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
            <div className="relative">
              <div className="sticky top-28">
                <p className="eyebrow">Founder</p>
                <div className="mt-8 flex aspect-[4/5] max-w-md flex-col justify-between overflow-hidden rounded-[1.8rem] bg-[#143329] p-8 text-[#f2f0e8] shadow-[0_30px_70px_rgba(20,51,41,0.17)] sm:p-10">
                  <div className="flex items-center justify-between">
                    <span className="text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-[#a8c0b5]">Longevity advisor</span>
                    <ArrowUpRight className="size-5 text-[#d9ff57]" />
                  </div>
                  <div>
                    <div className="mb-8 h-px w-full bg-white/15" />
                    <p className="font-display text-[clamp(3.5rem,7vw,6rem)] font-medium leading-[0.82] tracking-[-0.055em]">Nicola<br /><em className="text-[#d9ff57]">Salvi</em></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:pt-16">
              <h2 className="section-title max-w-4xl">Connettere visione,<br /><em>impresa e persone.</em></h2>
              <div className="mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-[#3e5c50]">
                <p>
                  Nicola Salvi è longevity advisor e imprenditore. Con PRODIET mette a sistema l’esperienza maturata nell’innovazione, nella formazione e nella costruzione di format capaci di rendere la longevity concreta e accessibile.
                </p>
                <p>
                  È founder di Grezzo Raw Chocolate, promoter di Longevity Day, autore del podcast Longevity Café e del libro <em>Longevità a costo zero</em>.
                </p>
              </div>

              <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-[#143329]/15 sm:grid-cols-2">
                {projects.map((project, index) => (
                  <div key={project} className="group flex min-h-28 items-center justify-between bg-[#e8eee5] p-6 transition-colors duration-200 hover:bg-[#f8f7f2]">
                    <div>
                      <span className="text-[0.65rem] font-extrabold tracking-[0.15em] text-[#6d8279]">0{index + 1}</span>
                      <p className="mt-2 font-semibold">{project}</p>
                    </div>
                    <ArrowUpRight className="size-4 text-[#6d8279] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                ))}
              </div>

              <a
                href="https://www.linkedin.com/in/nicolasalvi"
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex items-center gap-3 border-b border-[#143329] pb-2 text-sm font-extrabold uppercase tracking-[0.12em] transition-colors hover:border-transparent"
              >
                Profilo LinkedIn <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </section>

        <section id="contatti" className="scroll-mt-16 bg-[#f2f0e8] py-8">
          <div className="container">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#143329] px-6 py-16 text-[#f2f0e8] sm:px-12 lg:py-20">
              <div className="absolute left-1/2 top-1/2 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" aria-hidden="true" />
              <div className="absolute left-1/2 top-1/2 size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" aria-hidden="true" />
              <div className="relative grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-20">
                <div className="lg:pb-3">
                  <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-[#a9c0b6]">Iniziamo da una conversazione</p>
                  <h2 className="mt-7 max-w-4xl font-display text-[clamp(3.4rem,7vw,6.6rem)] font-medium leading-[0.82] tracking-[-0.055em]">
                  Portiamo più futuro<br /><em className="text-[#d9ff57]">nella tua impresa.</em>
                  </h2>
                  <p className="mt-8 max-w-md text-base leading-relaxed text-[#b9cbc3]">
                    Raccontaci cosa vuoi costruire. Ti ricontatteremo per capire insieme il prossimo passo.
                  </p>
                  <a
                    href="https://www.linkedin.com/in/nicolasalvi"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 border-b border-[#b9cbc3]/50 pb-1.5 text-xs font-extrabold uppercase tracking-[0.13em] text-[#dfe9e3] transition-colors hover:border-transparent hover:text-[#d9ff57]"
                  >
                    Oppure su LinkedIn <ArrowUpRight className="size-3.5" />
                  </a>
                </div>

                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  className="rounded-[1.4rem] bg-white/[0.07] p-5 backdrop-blur-sm sm:p-7"
                >
                  <input type="hidden" name="access_key" value="77d4ec42-8c60-47e5-8f0b-dd64ee8972d6" />
                  <div className="grid gap-5">
                    <div>
                      <label htmlFor="contact-name" className="mb-2 block text-xs font-extrabold uppercase tracking-[0.13em] text-[#b9cbc3]">
                        Nome
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        autoComplete="name"
                        placeholder="Come ti chiami?"
                        className="w-full rounded-xl border border-white/15 bg-white/[0.07] px-4 py-3.5 text-sm text-white placeholder:text-[#b9cbc3]/65 transition-colors focus:border-[#d9ff57] focus:bg-white/[0.11] focus:outline-none focus:ring-2 focus:ring-[#d9ff57]/40"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="mb-2 block text-xs font-extrabold uppercase tracking-[0.13em] text-[#b9cbc3]">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        autoComplete="email"
                        placeholder="nome@azienda.it"
                        className="w-full rounded-xl border border-white/15 bg-white/[0.07] px-4 py-3.5 text-sm text-white placeholder:text-[#b9cbc3]/65 transition-colors focus:border-[#d9ff57] focus:bg-white/[0.11] focus:outline-none focus:ring-2 focus:ring-[#d9ff57]/40"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="mb-2 block text-xs font-extrabold uppercase tracking-[0.13em] text-[#b9cbc3]">
                        Messaggio
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={4}
                        placeholder="Di cosa vuoi parlare?"
                        className="w-full resize-y rounded-xl border border-white/15 bg-white/[0.07] px-4 py-3.5 text-sm text-white placeholder:text-[#b9cbc3]/65 transition-colors focus:border-[#d9ff57] focus:bg-white/[0.11] focus:outline-none focus:ring-2 focus:ring-[#d9ff57]/40"
                      />
                    </div>
                    <button
                      type="submit"
                      className="mt-1 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#d9ff57] px-7 py-4 text-sm font-extrabold text-[#143329] shadow-[0_14px_35px_rgba(0,0,0,0.2)] transition-all duration-200 hover:-translate-y-1 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9ff57] focus-visible:ring-offset-4 focus-visible:ring-offset-[#143329] active:scale-[0.97]"
                    >
                      Invia il messaggio <ArrowUpRight className="size-4" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#f2f0e8] pb-8 pt-14">
        <div className="container">
          <div className="flex flex-col gap-10 border-t border-[#143329]/20 pt-8 md:flex-row md:items-end md:justify-between">
            <div>
              <a href="#top" className="inline-flex items-center gap-3" aria-label="PRODIET, torna all’inizio">
                <span className="grid size-7 place-items-center rounded-full bg-[#143329]"><span className="size-2 rounded-full bg-[#d9ff57]" /></span>
                <span className="text-sm font-extrabold tracking-[0.2em]">PRODIET</span>
              </a>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#62776e]">Longevity strategy per imprese che guardano più lontano.</p>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-bold text-[#566c63]">
              <span>Roma · Italia</span>
              <span>© {new Date().getFullYear()} PRODIET</span>
              <a href="https://github.com/salvinic/prodiet" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#143329]">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
