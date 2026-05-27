import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
} from "lucide-react";

import heroCake from "@/assets/hero-cake.jpg";
import aboutImg from "@/assets/about.jpg";
import customImg from "@/assets/custom.jpg";
import cake1 from "@/assets/cake-1.jpg";
import cake2 from "@/assets/cake-2.jpg";
import cake3 from "@/assets/cake-3.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Caffeli — Pastelería boutique artesanal" },
      {
        name: "description",
        content:
          "Caffeli es una pastelería boutique que crea pasteles artesanales con ingredientes premium. Reserva, compra o recoge en tienda.",
      },
      { property: "og:title", content: "Caffeli — Pastelería boutique" },
      {
        property: "og:description",
        content:
          "Pasteles que convierten momentos en recuerdos. Artesanal, premium, hecho a mano.",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/525512345678?text=Hola%20Caffeli%2C%20quiero%20hacer%20un%20pedido";

function Index() {
  const [orderOpen, setOrderOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav onOrder={() => setOrderOpen(true)} />
      <Hero onOrder={() => setOrderOpen(true)} />
      <About />
      <Custom onOrder={() => setOrderOpen(true)} />
      <CakesOfTheDay onOrder={() => setOrderOpen(true)} />
      <Gallery />
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
    { label: "Galería", href: "#gallery" },
  ];
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/75 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#" className="font-serif text-2xl tracking-tight text-forest-deep">
          Caffeli<span className="text-forest">.</span>
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

function Hero() {
  return (
    <section className="px-4 sm:px-6 lg:px-10 pt-8 pb-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-sand/70 p-6 sm:p-10 lg:p-16 relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="fade-up">
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
              <a
                href="#cakes"
                className="inline-flex items-center gap-2 rounded-full bg-forest text-primary-foreground px-7 py-3.5 text-sm hover:bg-forest-deep transition-all hover:-translate-y-0.5"
              >
                Ordenar ahora
              </a>
              <a
                href="#gallery"
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
            Una pastelería <em className="italic font-normal">boutique</em> nacida del detalle.
          </h2>
          <p className="mt-7 text-muted-foreground leading-relaxed max-w-lg">
            En Caffeli creemos que un buen pastel no se come, se recuerda. Por eso cada
            receta nace en nuestro obrador con harinas seleccionadas, mantequillas
            europeas y una atención obsesiva por la textura, el sabor y la presentación.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">
            Desde 2018 hemos acompañado bodas, cumpleaños y pequeños rituales diarios
            con piezas hechas a mano, pensadas para sentirse tan especiales como el
            momento que celebran.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: "7+", l: "Años creando" },
              { n: "1.2k", l: "Pedidos al año" },
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

function Custom() {
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
            {["Consulta personalizada con el chef pastelero", "Degustación de sabores y rellenos", "Entrega o recogida en boutique"].map((i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-foreground/70" />
                {i}
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-cream text-forest-deep px-7 py-3.5 text-sm hover:bg-sand transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> Cotizar por WhatsApp
          </a>
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
  price: string;
  img: string;
  tag: string;
};

function CakesOfTheDay() {
  const cakes: Cake[] = [
    { name: "Chocolate Noir", desc: "Ganache de cacao 70% y frutos rojos frescos.", price: "$640", img: cake1, tag: "Hoy" },
    { name: "Pistacho & Rosa", desc: "Bizcocho de pistacho siciliano y flores comestibles.", price: "$720", img: cake2, tag: "Edición limitada" },
    { name: "Tarta de Limón", desc: "Crema cítrica con merengue italiano flameado.", price: "$520", img: cake3, tag: "Clásico" },
  ];
  return (
    <section id="cakes" className="px-4 sm:px-6 lg:px-10 pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-forest/80">Pasteles del día</span>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-forest-deep">
              Hechos hoy, <em className="italic font-normal">listos para ti</em>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Reserva, compra en línea o recoge en boutique. Cantidades limitadas cada
            mañana.
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
                  <span className="font-serif text-xl text-forest">{c.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>

                <div className="mt-6 grid grid-cols-2 gap-2">
                  <button className="inline-flex items-center justify-center gap-2 rounded-full bg-forest text-primary-foreground px-4 py-2.5 text-xs hover:bg-forest-deep transition-colors">
                    <ShoppingBag className="w-3.5 h-3.5" /> Comprar
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 rounded-full border border-forest/30 text-forest-deep px-4 py-2.5 text-xs hover:bg-sand transition-colors">
                    <Sparkles className="w-3.5 h-3.5" /> Reservar
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 rounded-full border border-border text-forest-deep px-4 py-2.5 text-xs hover:bg-sand/60 transition-colors">
                    <Store className="w-3.5 h-3.5" /> Recoger
                  </button>
                  <a
                    href={`${WHATSAPP}%20-%20${encodeURIComponent(c.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-forest-deep text-primary-foreground px-4 py-2.5 text-xs hover:opacity-90 transition-opacity"
                  >
                    <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
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

function Gallery() {
  const imgs = [
    { src: g2, alt: "Rebanada de pastel con fresas", span: "row-span-2" },
    { src: g1, alt: "Macarons pastel" },
    { src: g3, alt: "Croissants recién horneados" },
    { src: g4, alt: "Pastel rústico con higos y miel", span: "row-span-2" },
  ];
  return (
    <section id="gallery" className="px-4 sm:px-6 lg:px-10 pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-forest/80">Galería</span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-forest-deep">
            Pequeños <em className="italic font-normal">momentos</em> de obrador.
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[240px] gap-4">
          {imgs.map((i, idx) => (
            <div
              key={idx}
              className={`rounded-2xl overflow-hidden bg-sand ${i.span ?? ""}`}
            >
              <img
                src={i.src}
                alt={i.alt}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1200ms]"
              />
            </div>
          ))}
        </div>
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
      q: "Sabores limpios, presentación de revista. Es nuestra pastelería favorita en la ciudad.",
      a: "Andrés Vega",
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
              Pastelería boutique dedicada a crear experiencias dulces, hechas con
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
                Av. Reforma 142, Roma Norte, CDMX
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4" /> +52 55 1234 5678
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
              <li className="flex justify-between gap-6"><span>Lunes – Viernes</span><span>9:00 – 20:00</span></li>
              <li className="flex justify-between gap-6"><span>Sábado</span><span>10:00 – 18:00</span></li>
              <li className="flex justify-between gap-6"><span>Domingo</span><span className="opacity-70">Cerrado</span></li>
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
