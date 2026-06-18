import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef, type ReactNode } from "react";
import { OrderModal } from "@/components/OrderModal";
import {
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Mail,
  Star,
  Sparkles,
  Cake,
  Leaf,
  ShoppingBag,
  Store,
  MessageCircle,
  Coffee,
  Droplets,
  Flame,
  Award,
  Sprout,
} from "lucide-react";

import heroCake from "@/assets/hero-cake.jpg";
import aboutImg from "@/assets/about.jpg";
import customImg from "@/assets/custom.jpg";
import cake1 from "@/assets/cake-1.jpg";
import cake2 from "@/assets/cake-2.jpg";
import cake3 from "@/assets/cake-3.jpg";
import cake4 from "@/assets/cake-5.jpg";
import cake5 from "@/assets/cake-4.jpg";
import coffeeGroundImg from "@/assets/coffee-ground.jpg";
import coffeeBeanImg from "@/assets/coffee-bean.jpg";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Caffeli — Café de Especialidad y Pastelería Artesanal" },
      {
        name: "description",
        content:
          "Caffeli es una pastelería boutique que crea pasteles artesanales con ingredientes premium. Reserva, compra o recoge en tienda.",
      },
      { property: "og:title", content: "Caffeli — Cafetería, Pastelería y Café de Especialidad" },
      {
        property: "og:description",
        content:
          "Disfruta café de especialidad, postres artesanales y lleva a casa nuestro café de origen Chiapas.",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/526291239239?text=Hola%20Caffeli%2C%20quiero%20hacer%20un%20pedido";

function Index() {
  
  const [orderOpen, setOrderOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav onOrder={() => setOrderOpen(true)} />
      <Hero onOrder={() => setOrderOpen(true)} />
      <About />
      <Custom onOrder={() => setOrderOpen(true)} />
      <CakesOfTheDay onOrder={() => setOrderOpen(true)} />
      <NuestroCafe />
      <Testimonials />
      <Footer />
      <OrderModal open={orderOpen} onOpenChange={setOrderOpen} />
    </div>
  );
}

function Nav({ onOrder }: { onOrder: () => void }) {
  const links = [
    { label: "Nosotros", href: "#about" },
    { label: "Catálogo", href: "#cakes" },
    { label: "Pasteles", href: "#custom" },
    { label: "Nuestro Café", href: "#coffee" },
  ];
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/75 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#" className="font-serif text-2xl tracking-tight text-forest-deep">
          <span className="text-forest">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-forest transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <button
          onClick={onOrder}
          className="inline-flex items-center gap-2 rounded-full bg-forest text-primary-foreground px-5 py-2.5 text-sm hover:bg-forest-deep transition-colors"
        >
          Ordenar
        </button>
      </div>
    </header>
  );
}

function Hero({ onOrder }: { onOrder: () => void }) {
  return (
    <section className="px-4 sm:px-6 lg:px-10 pt-8 pb-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-sand/70 p-6 sm:p-10 lg:p-16 relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="fade-up">
            <img
              src="/Logo Caffeli.png"
              alt="Caffeli — Coffee House"
              className="h-24 sm:h-28 lg:h-32 w-auto object-contain rounded-2xl shadow-[0_20px_50px_-20px_rgba(40,60,40,0.3)] mb-8"
            />
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-forest/80 mb-8">
              <Sparkles className="w-3.5 h-3.5" /> Artesanal & Premium
            </span>
            <h1 className="font-serif text-[2.75rem] sm:text-6xl lg:text-7xl leading-[1.02] text-forest-deep">
              Pasteles que
              <br />
              convierten
              <br />
              momentos en
              <br />
              <em className="italic font-normal">recuerdos</em>
            </h1>
            <p className="mt-8 max-w-md text-muted-foreground leading-relaxed">
              Elaborados diariamente con ingredientes de la más alta calidad.
              Descubre nuestra colección de postres boutique diseñados para deleitar.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={onOrder}
                className="inline-flex items-center gap-2 rounded-full bg-forest text-primary-foreground px-7 py-3.5 text-sm hover:bg-forest-deep transition-all hover:-translate-y-0.5"
              >
                Ordenar ahora
              </button>
              <a
                href="#coffee"
                className="inline-flex items-center gap-2 rounded-full border border-forest/30 text-forest-deep px-7 py-3.5 text-sm hover:bg-cream transition-colors"
              >
                Ver catálogo
              </a>
            </div>
          </div>

          <div className="relative fade-up fade-up-delay-2">
            <div className="aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-cream shadow-[0_30px_80px_-30px_rgba(40,60,40,0.25)]">
              <img
                src={heroCake}
                alt="Pastel boutique de tres pisos decorado con flores"
                width={1024}
                height={1024}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 sm:left-6 bg-card/95 backdrop-blur rounded-2xl px-5 py-4 shadow-[0_20px_50px_-20px_rgba(40,60,40,0.25)] flex items-center gap-3">
              <div className="flex items-center gap-0.5 text-forest">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <div>
                <div className="text-sm font-medium text-forest-deep">4.9 / 5</div>
                <div className="text-xs text-muted-foreground">Reseñas de clientes</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature row */}
      <div className="mx-auto max-w-7xl mt-10 grid sm:grid-cols-3 gap-5">
        {[
          { icon: Leaf, t: "Ingredientes Frescos", d: "Seleccionados diariamente desde productores locales, desde vainilla de Madagascar hasta el cacao belga de origen único." },
          { icon: Cake, t: "Calidad Artesanal", d: "Cada pastel es horneado y decorado a mano por nuestros maestros pasteleros en el ritmo de la entrega." },
          { icon: Sparkles, t: "El arte del pastel", d: "Cada pieza es una pequeña experiencia artesanal pensada para los momentos más grandes." },
        ].map((f) => (
          <div key={f.t} className="bg-card rounded-2xl p-7 border border-border/60 hover:shadow-[0_20px_40px_-25px_rgba(40,60,40,0.2)] transition-shadow">
            <f.icon className="w-5 h-5 text-forest mb-5" />
            <h3 className="font-serif text-xl text-forest-deep">{f.t}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-4 sm:px-6 lg:px-10 py-28">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="order-2 lg:order-1 aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-sand">
          <img
            src={aboutImg}
            alt="Pastelera decorando un pastel en el obrador"
            width={1100}
            height={1300}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="order-1 lg:order-2">
          <span className="text-xs uppercase tracking-[0.25em] text-forest/80">Nosotros</span>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-forest-deep">
            Una Cafetería <em className="italic font-normal">local</em> nacida del detalle.
          </h2>
          <p className="mt-7 text-muted-foreground leading-relaxed max-w-lg">
           asdasdas
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">
            asdasdasdas
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: "12+", l: "Años creando" },
              { n: "n", l: "Pedidos al año" },
              { n: "100%", l: "Artesanal" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif text-3xl text-forest-deep">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Custom({ onOrder }: { onOrder: () => void }) {
  return (
    <section id="custom" className="px-4 sm:px-6 lg:px-10 pb-28">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-forest text-primary-foreground p-8 sm:p-14 lg:p-20 grid lg:grid-cols-2 gap-14 items-center overflow-hidden relative">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-primary-foreground/70">
            Pasteles personalizados
          </span>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Diseñamos el pastel de tu próxima <em className="italic font-normal">celebración</em>.
          </h2>
          <p className="mt-7 text-primary-foreground/80 leading-relaxed max-w-lg">
            Bodas, cumpleaños, eventos corporativos o un detalle íntimo. Trabajamos
            contigo cada capa, sabor y decoración para crear una pieza única que
            cuente tu historia.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-primary-foreground/85">
            {["Consulta personalizada con el chef pastelero", "Degustación de sabores y rellenos", "Entrega o recogida en sucursal"].map((i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-foreground/70" />
                {i}
              </li>
            ))}
          </ul>
          <button
            onClick={onOrder}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-cream text-forest-deep px-7 py-3.5 text-sm hover:bg-sand transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> Cotizar pedido
          </button>
        </div>
        <div className="aspect-square rounded-[1.5rem] overflow-hidden">
          <img
            src={customImg}
            alt="Pastel personalizado de dos pisos con detalles dorados"
            width={1200}
            height={1200}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

type Cake = {
  name: string;
  desc: string;
  img: string;
  tag: string;
  stock: number;

  // Para pasteles normales
  sizes?: {
    label: string;
    price: number;
  }[];

  // Para especiales
  price?: number;
};

function CakesOfTheDay(_props: { onOrder: () => void }) {
  const cakes: Cake[] = [
  {
    name: "Tres Leches Fresa",
    desc: "Pan de vainilla bañado en tres leches con relleno de fresa natural.",
    img: cake1,
    tag: "Hoy",
    sizes: [
      { label: "Chico", price: 380 },
      { label: "Mediano", price: 450 },
      { label: "Grande", price: 580 }
    ],
    stock: 3
  },
  {
    name: "Tres Leches Mango",
    desc: "Tres leches con relleno de mango fresco.",
    img: cake2,
    tag: "Disponible",
    sizes: [
      { label: "Chico", price: 380 },
      { label: "Mediano", price: 450 },
      { label: "Grande", price: 580 }
    ],
    stock: 2
  },
  {
    name: "Chocoflan",
    desc: "Flan cremoso sobre pastel de chocolate con cubierta de cajeta.",
    img: cake3,
    tag: "Especial",
    price: 520,
    stock: 1
  },
  {
    name: "Rosca de Zanahoria",
    desc: "Pan húmedo de zanahoria con nuez y queso crema.",
    img: cake4,
    tag: "Especial",
    price: 480,
    stock: 1
  },
  {
    name: "Rosca Chorreada",
    desc: "Rosca cubierta con cajeta y nuez caramelizada.",
    img: cake5,
    tag: "Especial",
    price: 550,
    stock: 1
  }
];
  return (
    <section id="cakes" className="px-4 sm:px-6 lg:px-10 pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-forest/80">Pasteles del día 🚀 NUEVA VERSION</span>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-forest-deep">
              Hechos hoy, <em className="italic font-normal">listos para ti</em>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Aparta tu pastel antes de que se agote.
Disponibles únicamente por hoy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cakes.map((c) => (
            <article
              key={c.name}
              className="group bg-card rounded-[1.5rem] overflow-hidden border border-border/60 hover:shadow-[0_30px_60px_-30px_rgba(40,60,40,0.25)] transition-all hover:-translate-y-1"
            >
              <div className="aspect-[4/5] overflow-hidden bg-sand relative">
                <img
                  src={c.img}
                  alt={c.name}
                  width={900}
                  height={1100}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1200ms]"
                />
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] bg-cream/95 text-forest-deep rounded-full px-3 py-1.5">
                  {c.tag}
                </span>
              </div>
              <div className="p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-2xl text-forest-deep">{c.name}</h3>
                  <span className="font-serif text-xl text-forest">
                       {c.sizes
                        ? `Desde $${c.sizes[0].price} por persona`
                        : `$${c.price}`}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                {c.stock === 1 ? (
                    <p className="mt-2 text-xs text-red-600 font-medium">
                      🔥 Última pieza disponible
                    </p>
                  ) : (
                    <p className="mt-2 text-xs text-forest font-medium">
                      🔥 Quedan {c.stock} disponibles
                    </p>
                 )}

                <div className="mt-6 grid grid-cols-2 gap-2">
                  <button
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-forest text-primary-foreground px-4 py-2.5 text-xs hover:bg-forest-deep transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Comprar ahora
                  </button>

                  <a
                    href={`${WHATSAPP}%20-%20${encodeURIComponent(c.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-forest text-forest px-4 py-2.5 text-xs hover:bg-forest/5 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function useScrollReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function ScrollReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}
    >
      {children}
    </div>
  );
}

function NuestroCafe() {
  const infoItems = [
    {
      icon: MapPin,
      label: "Origen",
      lines: [
        "Finca La Unión, Belisario Domínguez, Motozintla, Chiapas.",
        "Producido y tostado por Emilio Gálvez.",
      ],
    },
    {
      icon: Sprout,
      label: "Variedad",
      lines: ["Arábica 100%"],
    },
    {
      icon: Droplets,
      label: "Proceso",
      lines: ["Lavado"],
    },
    {
      icon: Flame,
      label: "Tueste",
      lines: ["Medio"],
    },
    {
      icon: Award,
      label: "Puntaje de calidad",
      lines: ["84.19 puntos", "Café de Especialidad"],
    },
  ];

  const perfilItems = [
    "Cuerpo cremoso",
    "Dulzor pronunciado",
    "Acidez balanceada",
    "Notas a miel",
    "Caramelo",
    "Azúcar morena",
    "Matices cítricos",
    "Manzana verde",
    "Retrogusto limpio y agradable",
  ];

  const presentaciones = [
    {
      tipo: "Café Molido",
      img: coffeeGroundImg,
      variantes: [
        { size: "250g", price: 180 },
        { size: "500g", price: 320 },
        { size: "1kg", price: 580 },
      ],
    },
    {
      tipo: "Café en Grano",
      img: coffeeBeanImg,
      variantes: [
        { size: "250g", price: 170 },
        { size: "500g", price: 310 },
        { size: "1kg", price: 560 },
      ],
    },
  ];

  return (
    <section id="coffee" className="px-4 sm:px-6 lg:px-10 pb-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-forest/80">Nuestro Café</span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-forest-deep">
            Café de <em className="italic font-normal">especialidad</em>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Café de especialidad cultivado en Chiapas, seleccionado y tostado para ofrecer una experiencia única en cada taza.
          </p>
          <div className="mt-6 flex justify-center">
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-forest/40">
              <path d="M10 30C15 15 25 10 35 20C45 30 55 30 65 20C75 10 85 15 90 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M25 20C30 8 40 5 50 15" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
              <path d="M70 18C75 8 85 5 95 15" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
              <circle cx="35" cy="20" r="2" fill="currentColor"/>
              <circle cx="65" cy="20" r="2" fill="currentColor"/>
              <circle cx="50" cy="15" r="1.5" fill="currentColor"/>
              <circle cx="80" cy="12" r="1.5" fill="currentColor"/>
            </svg>
          </div>
        </ScrollReveal>

        {/* Info Grid */}
        <ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
            {infoItems.map((item) => (
              <div
                key={item.label}
                className="bg-card border border-border/60 rounded-[1.25rem] p-6 text-center hover:shadow-[0_20px_40px_-25px_rgba(40,60,40,0.18)] transition-shadow"
              >
                <div className="mx-auto w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-forest" />
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-forest/80 mb-2">{item.label}</div>
                {item.lines.map((line, i) => (
                  <p key={i} className={`text-sm ${i === 0 ? "text-forest-deep font-medium" : "text-muted-foreground"} ${i > 0 ? "mt-1" : ""}`}>
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Perfil de la Taza */}
        <ScrollReveal>
          <div className="bg-forest text-primary-foreground rounded-[2rem] p-8 sm:p-14 lg:p-16 mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
            <div className="relative max-w-3xl">
              <span className="text-xs uppercase tracking-[0.25em] text-primary-foreground/70">Perfil Sensorial</span>
              <h3 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.05]">Perfil de la Taza</h3>
              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
                {perfilItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/70 shrink-0" />
                    <span className="text-sm text-primary-foreground/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Presentaciones */}
        <ScrollReveal>
          <div className="mb-6">
            <span className="text-xs uppercase tracking-[0.25em] text-forest/80">Presentaciones</span>
            <h3 className="mt-3 font-serif text-3xl sm:text-4xl text-forest-deep">Disponibles</h3>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {presentaciones.map((prod) => (
            <ScrollReveal key={prod.tipo}>
              <article className="group bg-card rounded-[1.5rem] overflow-hidden border border-border/60 hover:shadow-[0_30px_60px_-30px_rgba(40,60,40,0.25)] transition-all hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden bg-sand relative">
                  <img
                    src={prod.img}
                    alt={prod.tipo}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1200ms]"
                  />
                  <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] bg-cream/95 text-forest-deep rounded-full px-3 py-1.5">
                    {prod.tipo}
                  </span>
                </div>
                <div className="p-7">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    Café de especialidad de Chiapas, tostado medio, con notas a miel, caramelo y frutas cítricas. Empaque premium con válvula de degasificación.
                  </p>
                  <div className="space-y-3">
                    {prod.variantes.map((v) => (
                      <div
                        key={v.size}
                        className="flex items-center justify-between rounded-xl bg-sand/60 px-5 py-3"
                      >
                        <span className="text-sm font-medium text-forest-deep">{v.size}</span>
                        <div className="flex items-center gap-3">
                          <span className="font-serif text-lg text-forest">${v.price}</span>
                          <div className="flex gap-2">
                            <a
                              href={WHATSAPP}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-forest text-primary-foreground px-3 py-1.5 text-[11px] hover:bg-forest-deep transition-colors"
                            >
                              <ShoppingBag className="w-3 h-3" /> Comprar
                            </a>
                            <a
                              href={`${WHATSAPP}%20-%20${encodeURIComponent(prod.tipo + " " + v.size)}`}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-forest text-forest px-3 py-1.5 text-[11px] hover:bg-forest/5 transition-colors"
                            >
                              <MessageCircle className="w-3 h-3" /> WhatsApp
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Frase */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center px-6">
            <div className="w-12 h-px bg-forest/30 mx-auto mb-8" />
            <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-forest-deep leading-relaxed">
              "Disfrutar de un buen café de especialidad es más que un simple placer; es un viaje que conecta culturas y tradiciones, recordándonos la belleza de lo artesanal y el valor de lo auténtico."
            </blockquote>
            <div className="w-12 h-px bg-forest/30 mx-auto mt-8" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    {
      q: "El pastel de nuestra boda fue una obra de arte. Cada invitado lo recuerda.",
      a: "Mariana & Diego",
      r: "Boda · 2025",
    },
    {
      q: "La atención al detalle es impecable. Caffeli convirtió el cumpleaños de mi hija en magia.",
      a: "Sofía Aguilar",
      r: "Cliente recurrente",
    },
    {
      q: "Sabores limpios, presentación de revista. Es nuestra pastelería y cafeteria favorita en la ciudad.",
      a: "Juan Holguin",
      r: "Reseña Google",
    },
  ];
  return (
    <section className="px-4 sm:px-6 lg:px-10 pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-forest/80">Testimonios</span>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-forest-deep max-w-2xl">
              Lo que nuestros <em className="italic font-normal">clientes</em> dicen.
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {t.map((x) => (
            <figure
              key={x.a}
              className="bg-card border border-border/60 rounded-[1.5rem] p-8 flex flex-col"
            >
              <div className="flex items-center gap-0.5 text-forest mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="font-serif text-xl leading-snug text-forest-deep flex-1">
                "{x.q}"
              </blockquote>
              <figcaption className="mt-7 text-sm">
                <div className="text-forest-deep">{x.a}</div>
                <div className="text-muted-foreground text-xs mt-0.5">{x.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-4 sm:px-6 lg:px-10 pb-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-forest-deep text-primary-foreground p-10 sm:p-14">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="font-serif text-3xl">
              Caffeli<span className="opacity-70">.</span>
            </div>
            <p className="mt-5 text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
              Cafetería y pastelería dedicada a crear experiencias dulces, hechas con
              ingredientes de la más alta calidad.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
                  aria-label="Red social"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60 mb-5">
              Contacto
            </div>
            <ul className="space-y-3 text-sm text-primary-foreground/85">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                Av. Juárez 321-Local 1, Abraham González, 33983 José Mariano Jiménez, Chih.
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4" /> 629-542-2752
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4" /> hola@caffeli.mx
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60 mb-5">
              Horario
            </div>
            <ul className="space-y-3 text-sm text-primary-foreground/85">
              <li className="flex justify-between gap-6"><span>Lunes (solo pasteleria) </span><span>9:00 – 16:00 </span></li>
              <li className="flex justify-between gap-6"><span>Martes - Domingo (cafeteria y pasteleria)</span><span>9:00 – 22:30</span></li>
              
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60 mb-5">
              Newsletter
            </div>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Recibe nuestra carta de temporada cada mes.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Tu correo"
                className="flex-1 bg-primary-foreground/10 border border-primary-foreground/15 rounded-full px-4 py-2.5 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/40"
              />
              <button
                type="submit"
                className="rounded-full bg-cream text-forest-deep px-5 py-2.5 text-sm hover:bg-sand transition-colors"
              >
                Suscribir
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/15 flex flex-col sm:flex-row justify-between gap-3 text-xs text-primary-foreground/60">
          <div>© 2026 Caffeli. Todos los derechos reservados.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground">Aviso de Privacidad</a>
            <a href="#" className="hover:text-primary-foreground">Términos & Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
