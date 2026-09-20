import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef, type ReactNode } from "react";
import { OrderModal } from "@/components/OrderModal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
  Menu,
  X,
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
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import ImagenCafe from "@/assets/ImagenCafe.jpg";
import ImagenCafe250 from "@/assets/ImagenCafe250.jpg";
import lechespinacoco from "@/assets/lechespinacoco.png";
import lechesyogurtFresa from "@/assets/lechesyogurtFresa.jpeg";
import lechesFrutas from "@/assets/lechesFrutas.jpeg";
import lechesCajeta from "@/assets/lechesCajeta.png";
import lechesMango from "@/assets/lechesMango.jpeg";
import CajetaPremium from "@/assets/FotoPremiumPastel.jpeg";
import SobreNosotros from "@/assets/SobreNosotros.jpeg";
import FaceImage from "@/assets/FaceImage.jpeg";
import CaffeliNBG from "@/assets/Logo Caffeli - NBG.png";
import FrappeOreo from "@/assets/FrappeOreo.jpeg";
import CafeRocas from "@/assets/CafeRocas.jpeg"
import AvocadoToast from "@/assets/AvocadoToast.jpeg"
import AvocadoToast2 from "@/assets/AvocadoToast2.jpeg"
import DesayunoCaffeli from "@/assets/DesayunoCaffeli.jpeg"
import Postres from "@/assets/Postres.jpeg"
import Panini from "@/assets/Panini.jpeg"
import SelloBlanco from "@/assets/SELLO_BLANCO.png"
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Caffeli — Café de Especialidad y Pastelería Artesanal" },
      {
        name: "description",
        content:
          "Caffeli es una pastelería que crea pasteles artesanales con ingredientes premium. Reserva, compra o recoge en tienda.",
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

const CAFFELI_START_DATE = new Date(2014, 1, 1);

function getDaysSinceCaffeliStarted() {
  const today = new Date();
  const todayUtc = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  const startUtc = Date.UTC(
    CAFFELI_START_DATE.getFullYear(),
    CAFFELI_START_DATE.getMonth(),
    CAFFELI_START_DATE.getDate(),
  );

  return Math.floor((todayUtc - startUtc) / (1000 * 60 * 60 * 24));
}

const MP_CAKE_LINKS: Record<string, Record<string, string>> = {
  "Tres Leches Yogurt Fresa": {
    Chico: "https://mpago.la/1GmdLiq",
    Mediano: "https://mpago.la/1ztmbSp",
    Grande: "https://mpago.la/1JegcS6",
  },
  "Tres Leches Yogurt Frutas": {
    Chico: "https://mpago.la/1GmdLiq",
    Mediano: "https://mpago.la/1ztmbSp",
    Grande: "https://mpago.la/1JegcS6",
  },
  "Tres leches Piña Coco": {
    Chico: "https://mpago.la/1GmdLiq",
    Mediano: "https://mpago.la/1ztmbSp",
    Grande: "https://mpago.la/1JegcS6",
  },
  "Tres leches Cajeta": {
    Chico: "https://mpago.la/1GmdLiq",
    Mediano: "https://mpago.la/1ztmbSp",
    Grande: "https://mpago.la/1JegcS6",
  },
  "Tres leches Yogurt Mango": {
    Chico: "https://mpago.la/1GmdLiq",
    Mediano: "https://mpago.la/1ztmbSp",
    Grande: "https://mpago.la/1JegcS6",
  },
};

function Index() {
  const [orderOpen, setOrderOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero onOrder={() => setOrderOpen(true)} />
      <About />
      <Custom onOrder={() => setOrderOpen(true)} />
      <CakesOfTheDay onOrder={() => setOrderOpen(true)} />
      <Cafeterias />
      <NuestroCafe />
      <Testimonials />
      <Footer />
      <OrderModal open={orderOpen} onOpenChange={setOrderOpen} />
    </div>
  );
}

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { label: "Nosotros", href: "#about" },
    { label: "Catálogo", href: "#cakes" },
    { label: "Pasteles", href: "#custom" },
    { label: "Cafeterías", href: "#cafeterias" },
    { label: "Nuestro Café", href: "#coffee" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/75 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 min-h-20 flex items-center justify-between gap-4">
        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-5 overflow-x-auto px-4 text-sm text-muted-foreground md:flex sm:gap-7 lg:gap-10">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="shrink-0 whitespace-nowrap hover:text-forest transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#cakes"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 text-sm hover:opacity-90 transition-all hover:-translate-y-0.5"
        >
          Ver pasteles
        </a>
        <button
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-forest-deep hover:bg-forest/5 md:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {menuOpen && (
        <div className="border-t border-border/60 bg-background/95 px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-1 pt-3 text-sm text-muted-foreground">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 hover:bg-forest/5 hover:text-forest"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cakes"
              onClick={closeMenu}
              className="mt-2 rounded-full bg-accent px-5 py-3 text-sm text-accent-foreground hover:opacity-90"
            >
              Ver pasteles
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero({ onOrder }: { onOrder: () => void }) {
  return (
    <section className="px-4 sm:px-6 lg:px-10 pt-8 pb-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-forest p-6 sm:p-10 lg:p-16 relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="fade-up">
            <img
              src={CaffeliNBG}
              alt="Caffeli — Coffee House"
              className="h-64 sm:h-80 lg:h-96 w-auto object-contain rounded-2xl shadow-[0_20px_50px_-20px_rgba(40,60,40,0.3)] mb-8"
            />
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-cream mb-8">
              <Sparkles className="w-3.5 h-3.5" /> Artesanal & Premium
            </span>
            <h1 className="font-serif text-[2.75rem] sm:text-6xl lg:text-7xl leading-[1.02] text-cream">
              Pasteles que
              <br />
              convierten
              <br />
              momentos en
              <br />
              <em className="italic font-normal">recuerdos</em>
            </h1>
            <p className="mt-8 max-w-md text-cream leading-relaxed">
              Elaborados diariamente con ingredientes de la más alta calidad. Descubre nuestra
              colección de postres y pasteles diseñados para deleitar.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={onOrder}
                className="inline-flex items-center gap-2 rounded-full bg-sand text-black px-7 py-3.5 text-sm hover:bg-cream transition-all hover:-translate-y-2.5"
              >
                Ordenar ahora
              </button>
              <a
                href="#cakes"
                className="inline-flex items-center gap-2 rounded-full bg-sand text-black px-7 py-3.5 text-sm hover:bg-cream transition-all hover:-translate-y-2.5"
              >
                Ver catálogo
              </a>
            </div>
          </div>

          <div className="relative fade-up fade-up-delay-2">
            <div className="aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-cream shadow-[0_30px_80px_-30px_rgba(40,60,40,0.25)]">
              <img
                src={FaceImage}
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
          {
            icon: Leaf,
            t: "Ingredientes Frescos",
            d: "Seleccionados diariamente y preparados con los más altos estándares de calidad.",
          },
          {
            icon: Cake,
            t: "Calidad Artesanal",
            d: "Cada pastel es horneado y decorado a mano por nuestros maestros pasteleros en el ritmo de la entrega.",
          },
          {
            icon: Sparkles,
            t: "El arte del pastel",
            d: "Cada pieza es una pequeña experiencia artesanal pensada para los momentos más grandes.",
          },
        ].map((f) => (
          <div
            key={f.t}
            className="bg-card rounded-2xl p-7 border border-border/60 hover:shadow-[0_20px_40px_-25px_rgba(40,60,40,0.2)] transition-shadow"
          >
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
  const [daysSinceStarted, setDaysSinceStarted] = useState<number | null>(null);

  useEffect(() => {
    const updateDays = () => setDaysSinceStarted(getDaysSinceCaffeliStarted());
    updateDays();

    const interval = window.setInterval(updateDays, 60 * 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="about" className="px-4 sm:px-6 lg:px-10 py-28">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="order-2 lg:order-1 aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-sand">
          <img
            src={SobreNosotros}
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
Somos una cafetería y pasteleria hecha con amor por lo que hacemos, con orgullo por nuestras raíces y con la inquietud de seguir creando algo nuevo.

Caffeli es nuestra manera de entender el café: como un punto de encuentro, como una pausa, como una experiencia y como parte de esos pequeños momentos que terminan convirtiéndose en recuerdos.

</p>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">Gracias por hacernos parte de tu historia.

Bienvenido a Caffeli.
Aquí siempre hay un lugar para ti.</p>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: "12+", l: "Años creando" },
              {
                n: daysSinceStarted?.toLocaleString("es-MX") ?? "...",
                l: "Días haciendo felices a nuestros clientes",
              },
              { n: "100%", l: "Artesanal" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-sans text-3xl font-semibold tabular-nums tracking-normal text-forest-deep">
                  {s.n}
                </div>
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
            Bodas, cumpleaños, eventos corporativos o un detalle íntimo. Trabajamos contigo cada
            capa, sabor y decoración para crear una pieza única que cuente tu historia.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-primary-foreground/85">
            {[
              "Consulta personalizada con el chef pastelero",
              "Degustación de sabores y rellenos",
              "Recogida de pedidos en sucursal",
            ].map((i) => (
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
            src={CajetaPremium}
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
      name: "Tres Leches Yogurt Fresa",
      desc: "Pan de vainilla bañado en tres leches con relleno de fresa natural.",
      img: lechesyogurtFresa,
      tag: "Hoy",
      sizes: [
        { label: "Chico", price: 300 },
        { label: "Mediano", price: 400 },
        { label: "Grande", price: 470 },
      ],
      stock: 3,
    },
    {
      name: "Tres Leches Yogurt Frutas",
      desc: "Pan de vainilla cubierto de betun de yogurt fresa",
      img: lechesFrutas,
      tag: "Disponible",
      sizes: [
        { label: "Chico", price: 300 },
        { label: "Mediano", price: 400 },
        { label: "Grande", price: 470 },
      ],
      stock: 2,
    },
    {
      name: "Tres leches Piña Coco",
      desc: "Pan de vainilla con betún, coco rayado y piñá .",
      img: lechespinacoco,
      tag: "Disponible",
      sizes: [
        { label: "Chico", price: 300 },
        { label: "Mediano", price: 400 },
        { label: "Grande", price: 470 },
      ],
      stock: 1,
    },
    {
      name: "Tres leches Cajeta",
      desc: "Pan de vainilla con betún y bañado de cajeta.",
      img: lechesCajeta,
      tag: "Disponible",
      sizes: [
        { label: "Chico", price: 300 },
        { label: "Mediano", price: 400 },
        { label: "Grande", price: 470 },
      ],
      stock: 1,
    },
    {
      name: "Tres leches Yogurt Mango",
      desc: "Pan de vainilla con betún de yogurt mango",
      img: lechesMango,
      tag: "Disponible",
      sizes: [
        { label: "Chico", price: 300 },
        { label: "Mediano", price: 400 },
        { label: "Grande", price: 470 },
      ],
      stock: 1,
    },
  ];
  return (
    <section id="cakes" className="px-4 sm:px-6 lg:px-10 pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-forest-deep">
              Hechos hoy, <em className="italic font-normal">listos para ti</em>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Aparta tu pastel antes de que se agote. Disponibles únicamente por hoy.
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: false }}
          className="mx-auto w-full max-w-[calc(100%-2rem)] sm:max-w-none"
        >
          <CarouselContent className="-ml-4">
            {cakes.map((c) => (
              <CarouselItem key={c.name} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <article className="group h-full bg-card rounded-[1.5rem] overflow-hidden border border-border/60 hover:shadow-[0_30px_60px_-30px_rgba(40,60,40,0.25)] transition-all hover:-translate-y-1">
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
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>

                    <div className="mt-6 space-y-2">
                      {c.sizes?.map((size) => {
                        const mpUrl = MP_CAKE_LINKS[c.name]?.[size.label];
                        return (
                          <div
                            key={size.label}
                            className="flex items-center justify-between rounded-xl bg-sand/60 px-4 py-2.5"
                          >
                            <div>
                              <span className="text-sm font-medium text-forest-deep">
                                {size.label}
                              </span>
                              <span className="ml-2 text-sm text-muted-foreground">
                                ${size.price}
                              </span>
                            </div>
                            <a
                              href={mpUrl}
                              aria-disabled={!mpUrl}
                              onClick={(event) => {
                                if (!mpUrl) event.preventDefault();
                              }}
                              className={`inline-flex items-center justify-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] transition-colors ${
                                mpUrl
                                  ? "bg-forest text-primary-foreground hover:bg-forest-deep"
                                  : "cursor-not-allowed bg-muted text-muted-foreground"
                              }`}
                            >
                              <ShoppingBag className="w-3 h-3" />
                              {mpUrl ? "Comprar" : "Próximamente"}
                            </a>
                          </div>
                        );
                      })}
                    </div>

                    <div className="grid grid-cols-1 gap-2">
                      <a
                        href={`https://wa.me/526291239239?text=${encodeURIComponent(`Hola Caffeli, ¿hay disponibilidad de ${c.name}? ¿Qué tamaños tienen disponibles? Pasaría a recogerlo en sucursal.`)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-forest text-forest px-4 py-2.5 text-xs hover:bg-forest/5 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        Consultar disponibilidad
                      </a>
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-3 sm:-left-12" />
          <CarouselNext className="-right-3 sm:-right-12" />
        </Carousel>
      </div>
    </section>
  );
}

function Cafeterias() {
  const galleryItems = [
    { name: "Momentos dulces", category: "Postres", img: Postres },
    { name: "Hechos con amor", category: "Desayunos", img: DesayunoCaffeli },
    { name: "Paninos para ti", category: "Comidas", img: Panini },
    { name: "Nuestras bebidas", category: "Especiales", img: CafeRocas },
  ];

  return (
    <section id="cafeterias" className="px-4 sm:px-6 lg:px-10 pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-4xl uppercase tracking-[0.25em] text-forest/80">Cafeterías</span>
            <p className="text-4xl uppercase tracking-[0.25em] text-forest/80">Sucursal Jiménez</p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-forest-deep">
              Algo rico para cada <em className="italic font-normal">momento</em>.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            Descubre lo que preparamos para acompañar tu experiencia en Caffeli: bebidas, comida y postres hechos para
            disfrutarse sin prisa.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryItems.map((item, index) => (
            <article
              key={item.name}
              className={`group overflow-hidden rounded-[1.5rem] bg-card border border-border/60 ${
                index === 1 || index === 2 ? "lg:mt-10" : ""
              }`}
            >
              <div className="aspect-[4/5] overflow-hidden bg-sand">
                <img
                  src={item.img}
                  alt={`${item.category}: ${item.name}`}
                  width={900}
                  height={1100}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-4 sm:p-5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-forest/70">
                  {item.category}
                </span>
                <h3 className="mt-2 font-serif text-xl text-forest-deep">{item.name}</h3>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 overflow-hidden rounded-[1.5rem] bg-forest">
        <video autoPlay loop
          className="w-full aspect-video object-cover"
          src="/videos/Cafeteria.mp4"
          controls
          muted
          playsInline
          poster="/images/poster-cafeteria.jpg"
        >
          Tu navegador no puede reproducir este video.
        </video>
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
      { threshold },
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
      img: ImagenCafe,
      variantes: [
        { size: "250g", price: 179, mpUrl: "https://mpago.la/1mAeXcb" },
        { size: "500g", price: 259, mpUrl: "https://mpago.la/111Zw2H" },
        { size: "1kg", price: 580, mpUrl: "" },
      ],
    },
    {
      tipo: "Café en Grano",
      img: ImagenCafe250,
      variantes: [
        { size: "250g", price: 179, mpUrl: "https://mpago.la/1mAeXcb" },
        { size: "500g", price: 259, mpUrl: "https://mpago.la/111Zw2H" },
        { size: "1kg", price: 560, mpUrl: "" },
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
            Café de especialidad cultivado en Chiapas, seleccionado y tostado para ofrecer una
            experiencia única en cada taza.
          </p>
          <div className="mt-6 flex justify-center">
            <svg
              width="120"
              height="40"
              viewBox="0 0 120 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-forest/40"
            >
              <path
                d="M10 30C15 15 25 10 35 20C45 30 55 30 65 20C75 10 85 15 90 30"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M25 20C30 8 40 5 50 15"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                d="M70 18C75 8 85 5 95 15"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <circle cx="35" cy="20" r="2" fill="currentColor" />
              <circle cx="65" cy="20" r="2" fill="currentColor" />
              <circle cx="50" cy="15" r="1.5" fill="currentColor" />
              <circle cx="80" cy="12" r="1.5" fill="currentColor" />
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
                <div className="text-xs uppercase tracking-[0.2em] text-forest/80 mb-2">
                  {item.label}
                </div>
                {item.lines.map((line, i) => (
                  <p
                    key={i}
                    className={`text-sm ${i === 0 ? "text-forest-deep font-medium" : "text-muted-foreground"} ${i > 0 ? "mt-1" : ""}`}
                  >
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
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
        
        <div className="relative max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-primary-foreground/70">
            Perfil Sensorial
          </span>
          <h3 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.05]">
            Perfil de la Taza
          </h3>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
            {perfilItems.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/70 shrink-0" />
                <span className="text-sm text-primary-foreground/90">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sello PNG posicionado en la esquina inferior derecha */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-24 h-24 sm:w-32 sm:h-32 pointer-events-none z-10">
          <img
            src={SelloBlanco} 
            alt="Sello Caffeli"
            className="w-full h-full object-contain opacity-90"
          />
        </div>
      </div>
    </ScrollReveal>

        {/* Presentaciones */}
        <ScrollReveal>
          <div className="mb-6">
            <span className="text-xs uppercase tracking-[0.25em] text-forest/80">
              Presentaciones
            </span>
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
                    Café de especialidad de Chiapas, tostado medio, con notas a miel, caramelo y
                    frutas cítricas. Empaque premium con válvula de degasificación.
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
                              href={v.mpUrl || undefined}
                              aria-disabled={!v.mpUrl}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(event) => {
                                if (!v.mpUrl) event.preventDefault();
                              }}
                              className={`inline-flex items-center justify-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] transition-colors ${
                                v.mpUrl
                                  ? "bg-forest text-primary-foreground hover:bg-forest-deep"
                                  : "cursor-not-allowed bg-muted text-muted-foreground"
                              }`}
                            >
                              <ShoppingBag className="w-3 h-3" />
                              {v.mpUrl ? "Comprar" : "Próximamente"}
                            </a>
                            <a
                              href={`https://wa.me/526291239239?text=${encodeURIComponent(`Hola Caffeli, ¿hay disponibilidad de ${prod.tipo} de ${v.size}? Pasaría a recogerlo en sucursal.`)}`}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-forest text-forest px-3 py-1.5 text-[11px] hover:bg-forest/5 transition-colors"
                            >
                              <MessageCircle className="w-3 h-3" /> Consultar
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
              "Disfrutar de un buen café de especialidad es más que un simple placer; es un viaje
              que conecta culturas y tradiciones, recordándonos la belleza de lo artesanal y el
              valor de lo auténtico."
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
      q: "Excelente! un día llegamos ya cuando estaban cerrando y aún así nos atendieron para llevar, super lindos. El lugar es muy agradable cómodo y las personas en verdad amables.",
      a: "Aria Foz",
      r: "Reseña Google",
    },
    {
      q: "Si estás de visita o paso por ciudad Jiménez, este lugar es para ti. No habrá mas opciones de café (zona centro), más que en oxxo y alsuper. Así que si lo tuyo es un buen café de especialidad, te comparto el lugar perfecto!",
      a: "Barush Pantoja",
      r: "Reseña Google",
    },
    {
      q: "Fantástica cafetería en Jiménez! Un lugar genial par tomar unos paninis y un café, Además tiene muy buen ambiente!",
      a: "Kevin Sweeney",
      r: "Reseña Google",
    },
    {
      q: "Buen lugar en Jiménez para una tarde de café.",
      a: "Carlos Maria de Jesús",
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
              Cafetería y pastelería dedicada a crear experiencias dulces, hechas con ingredientes
              de la más alta calidad.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/caffeli.mx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://www.facebook.com/CAFFELI.MX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60 mb-5">
              Contacto
            </div>
            <ul className="space-y-3 text-sm text-primary-foreground/85">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <a
                  href="https://maps.app.goo.gl/cUzgLWNuWwaEndqRA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-primary-foreground/50 hover:text-primary-foreground hover:decoration-primary-foreground"
                >
                  Av. Juárez 321-Local 1, Abraham González, 33983 José Mariano Jiménez, Chih.
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4" /> 629-542-2752
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4" /> mxcaffeli@gmail.com
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60 mb-5">
              Horario
            </div>
            <ul className="space-y-3 text-sm text-primary-foreground/85">
              <li className="flex justify-between gap-6">
                <span>Lunes (solo pasteleria) </span>
                <span>9:00 – 16:00 </span>
              </li>
              <li className="flex justify-between gap-6">
                <span>Martes - Domingo (cafeteria y pasteleria)</span>
                <span>9:00 – 22:30</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60 mb-5">
              Newsletter
            </div>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Recibe nuestra carta de temporada cada mes.
            </p>
            {/* Cambiamos a columna en móviles y a fila a partir de pantallas pequeñas (sm:) */}
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Tu correo"
                className="w-full sm:flex-1 bg-primary-foreground/10 border border-primary-foreground/15 rounded-full px-4 py-2.5 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/40"
              />
              <button
                type="submit"
                className="w-full sm:w-auto whitespace-nowrap rounded-full bg-cream text-forest-deep px-6 py-2.5 text-sm hover:bg-sand transition-colors font-medium"
              >
                Suscribir
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/15 flex flex-col sm:flex-row justify-between gap-3 text-xs text-primary-foreground/60">
          <div>© 2026 Caffeli. Todos los derechos reservados.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground">
              Aviso de Privacidad
            </a>
            <a href="#" className="hover:text-primary-foreground">
              Términos & Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
