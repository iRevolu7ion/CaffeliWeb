import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Root, P as Portal, a as Content, C as Close, T as Title, D as Description, O as Overlay } from "../_libs/radix-ui__react-dialog.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { h as Sparkles, j as Star, L as Leaf, C as Cake, g as MessageCircle, S as ShoppingBag, f as MapPin, i as Sprout, D as Droplets, d as Flame, A as Award, e as Instagram, F as Facebook, P as Phone, M as Mail, c as ChevronRight, b as ChevronLeft, X, I as ImagePlus, a as Check } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Dialog = Root;
const DialogPortal = Portal;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = Description.displayName;
const WHATSAPP_NUMBER = "526291239239";
const CATALOG = {
  "Tres leches yogurt": ["Fresa", "Mango"],
  Chocolate: ["Tres chocolates", "Selva negra"],
  Especiales: ["Chocoflan", "Rosca Zanahoria", "Rosca Chorreada", "Mostachon", "Fresas con crema"],
  "Tres leches": ["Frutas", "Cajeta", "Chocoganache", "Piña coco", "Mango"]
};
const SIZES = ["6 personas", "10 personas", "15 personas", "20 personas", "30+ personas"];
const TIPOS = ["Pastel", "Cupcake", "Rosca"];
const BISCOCHOS = ["Chocolate", "Tres Leches", "Vainilla", "Red Velvet", "Zanahoria", "Tres leches chocolate", "Vainillia Chispas de chocolate", "Nuez", "Almendra", "Mantequilla", "Naranja", "Marmoleado"];
const RELLENOS = ["Dulce de leche", "Mermelada Fresa", "Mermelada Piña", "Crema de Avellanas", "Crema de chocolate", "ButterCream", "Crema con frutas", "Crema de queso", "Otro:"];
const CUBIERTA = ["Queso crema dulce", "Buttercream", "Chocolate", "Otro:"];
const initialCatalog = {
  category: "",
  cake: "",
  size: "",
  date: "",
  notes: "",
  name: "",
  phone: ""
};
const initialCustom = {
  name: "",
  phone: "",
  date: "",
  tipo: "",
  biscocho: "",
  relleno: "",
  cubierta: "",
  otraCubierta: "",
  personas: "",
  tematica: "",
  toppings: "",
  notas: "",
  fotoReferencia: null
};
function OrderModal({
  open,
  onOpenChange
}) {
  const [mode, setMode] = reactExports.useState("choose");
  const [step, setStep] = reactExports.useState(0);
  const [catalog, setCatalog] = reactExports.useState(initialCatalog);
  const [custom, setCustom] = reactExports.useState(initialCustom);
  const [cubierta, setCubierta] = reactExports.useState("");
  const [otraCubierta, setOtraCubierta] = reactExports.useState("");
  const reset = () => {
    setMode("choose");
    setStep(0);
    setCatalog(initialCatalog);
    setCustom(initialCustom);
  };
  const handleOpenChange = (v) => {
    if (!v) setTimeout(reset, 200);
    onOpenChange(v);
  };
  const sendCatalog = () => {
    const m = `...`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${m}`,
      "_blank"
    );
    handleOpenChange(false);
  };
  const sendCustom = async () => {
    const cubiertaFinal = custom.cubierta === "Otro:" ? custom.otraCubierta : custom.cubierta;
    const fotoLine = custom.fotoReferencia ? "%0A*Foto de referencia:* Sí (adjuntaré la imagen en el chat)" : "";
    const m = `* NUEVO PEDIDO PERSONALIZADO — CAFFELI*%0A

━━━━━━━━━━━━━━━%0A
*Nombre:* ${custom.name}%0A
*Teléfono:* ${custom.phone}%0A
*Fecha de entrega:* ${custom.date}%0A
━━━━━━━━━━━━━━━%0A
*Tipo:* ${custom.tipo}%0A
*Biscocho:* ${custom.biscocho}%0A
*Relleno:* ${custom.relleno}%0A
*Cubierta:* ${cubiertaFinal}%0A
*Número de personas:* ${custom.personas}%0A
━━━━━━━━━━━━━━━%0A
*Temática:* ${custom.tematica}%0A
*Toppings:* ${custom.toppings}%0A
${custom.notas ? `%0A*Solicitudes especiales:* ${custom.notas}` : ""}${fotoLine}`;
    if (custom.fotoReferencia) {
      try {
        const res = await fetch(custom.fotoReferencia);
        const blob = await res.blob();
        await navigator.clipboard.write([
          new ClipboardItem({ [blob.type]: blob })
        ]);
      } catch {
      }
    }
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${m}`,
      "_blank"
    );
    handleOpenChange(false);
  };
  const catalogStepValid = () => {
    if (step === 0) return !!catalog.category && !!catalog.cake;
    if (step === 1) return !!catalog.size && !!catalog.date;
    if (step === 2) return !!catalog.name && !!catalog.phone;
    return true;
  };
  const customStepValid = () => {
    if (step === 0) return !!custom.name && !!custom.phone && !!custom.date;
    if (step === 1) return !!custom.tipo && !!custom.biscocho;
    if (step === 2) return !!custom.relleno && !!custom.cubierta && !!custom.personas;
    return true;
  };
  const totalSteps = mode === "catalog" ? 3 : 4;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: handleOpenChange, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl p-0 overflow-hidden bg-cream border-border/60 rounded-[1.75rem] max-h-[92vh] flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { className: "px-8 pt-8 pb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-forest/80", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5" }),
        "Caffeli · Hacer pedido"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "font-serif text-3xl sm:text-4xl text-forest-deep leading-tight mt-3", children: [
        mode === "choose" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "¿Cómo te ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic font-normal", children: "gustaría" }),
          " ordenar?"
        ] }),
        mode === "catalog" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Elige tu ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic font-normal", children: "pastel" })
        ] }),
        mode === "custom" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Personaliza tu ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic font-normal", children: "pastel" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "text-muted-foreground", children: mode === "choose" ? "Selecciona una opción para comenzar tu pedido." : `Paso ${step + 1} de ${totalSteps}` }),
      mode !== "choose" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-1 w-full bg-sand rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "h-full bg-forest transition-all duration-500 ease-out",
          style: { width: `${(step + 1) / totalSteps * 100}%` }
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 pb-8 overflow-y-auto flex-1", children: [
      mode === "choose" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4 mt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => {
              setMode("catalog");
              setStep(0);
            },
            className: "group text-left bg-card border border-border/60 rounded-2xl p-7 hover:border-forest/40 hover:shadow-[0_20px_40px_-25px_rgba(40,60,40,0.25)] transition-all hover:-translate-y-1",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Cake, { className: "w-6 h-6 text-forest mb-5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl text-forest-deep", children: "Elegir del catálogo" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: "Selecciona uno de nuestros sabores firmados, listos para recoger." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-5 inline-flex items-center gap-1 text-sm text-forest group-hover:gap-2 transition-all", children: [
                "Empezar ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => {
              setMode("custom");
              setStep(0);
            },
            className: "group text-left bg-forest text-primary-foreground rounded-2xl p-7 hover:shadow-[0_20px_40px_-20px_rgba(40,60,40,0.45)] transition-all hover:-translate-y-1",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-6 h-6 mb-5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl", children: "Personalizar pastel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-primary-foreground/75 leading-relaxed", children: "Diseña una pieza única: biscocho, relleno, temática y más." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-5 inline-flex items-center gap-1 text-sm group-hover:gap-2 transition-all", children: [
                "Empezar ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
              ] })
            ]
          }
        )
      ] }),
      mode === "catalog" && /* @__PURE__ */ jsxRuntimeExports.jsx(CatalogSteps, { step, state: catalog, setState: setCatalog }),
      mode === "custom" && /* @__PURE__ */ jsxRuntimeExports.jsx(CustomSteps, { step, state: custom, setState: setCustom })
    ] }),
    mode !== "choose" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/60 px-8 py-5 bg-card/40 flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => {
            if (step === 0) {
              setMode("choose");
            } else {
              setStep(step - 1);
            }
          },
          className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-forest-deep transition-colors px-3 py-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" }),
            step === 0 ? "Cambiar opción" : "Atrás"
          ]
        }
      ),
      step < totalSteps - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          disabled: mode === "catalog" ? !catalogStepValid() : !customStepValid(),
          onClick: () => setStep(step + 1),
          className: "inline-flex items-center gap-2 rounded-full bg-forest text-primary-foreground px-6 py-2.5 text-sm hover:bg-forest-deep transition-colors disabled:opacity-40 disabled:cursor-not-allowed",
          children: [
            "Continuar ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: mode === "catalog" ? sendCatalog : sendCustom,
          className: "inline-flex items-center gap-2 rounded-full bg-forest text-primary-foreground px-6 py-2.5 text-sm hover:bg-forest-deep transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
            "Enviar por WhatsApp"
          ]
        }
      )
    ] })
  ] }) });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-forest/80", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children })
  ] });
}
const inputCls = "w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-forest-deep placeholder:text-muted-foreground/60 focus:outline-none focus:border-forest/50 focus:ring-2 focus:ring-forest/10 transition-all";
function Pill({
  active,
  children,
  onClick
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick,
      className: `inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm border transition-all ${active ? "bg-forest text-primary-foreground border-forest" : "bg-card text-forest-deep border-border hover:border-forest/40"}`,
      children: [
        active && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5" }),
        children
      ]
    }
  );
}
function CatalogSteps({
  step,
  state,
  setState
}) {
  if (step === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-7 fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Categoría", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: Object.keys(CATALOG).map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Pill,
        {
          active: state.category === cat,
          onClick: () => setState((s) => ({ ...s, category: cat, cake: "" })),
          children: cat
        },
        cat
      )) }) }),
      state.category && /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Pastel", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: CATALOG[state.category].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Pill,
        {
          active: state.cake === c,
          onClick: () => setState((s) => ({ ...s, cake: c })),
          children: c
        },
        c
      )) }) })
    ] });
  }
  if (step === 1) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-7 fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Tamaño / personas", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: SIZES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Pill,
        {
          active: state.size === s,
          onClick: () => setState((p) => ({ ...p, size: s })),
          children: s
        },
        s
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Fecha de recogida", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "date",
          className: inputCls,
          value: state.date,
          onChange: (e) => setState((p) => ({ ...p, date: e.target.value }))
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Notas (opcional)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          rows: 3,
          className: inputCls,
          placeholder: "Mensaje en el pastel, alergias, etc.",
          value: state.notes,
          onChange: (e) => setState((p) => ({ ...p, notes: e.target.value }))
        }
      ) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 fade-up", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Nombre", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        className: inputCls,
        value: state.name,
        onChange: (e) => setState((p) => ({ ...p, name: e.target.value })),
        placeholder: "Tu nombre completo"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Teléfono", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        className: inputCls,
        value: state.phone,
        onChange: (e) => setState((p) => ({ ...p, phone: e.target.value })),
        placeholder: "10 dígitos"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-sand/60 rounded-2xl p-5 text-sm text-forest-deep", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-lg mb-1", children: "Resumen" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground", children: [
        state.cake,
        " · ",
        state.size,
        " · ",
        state.date
      ] })
    ] })
  ] });
}
function CustomSteps({
  step,
  state,
  setState
}) {
  if (step === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Nombre", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            className: inputCls,
            value: state.name,
            onChange: (e) => setState((p) => ({ ...p, name: e.target.value })),
            placeholder: "Tu nombre"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Teléfono", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            className: inputCls,
            value: state.phone,
            onChange: (e) => setState((p) => ({ ...p, phone: e.target.value })),
            placeholder: "10 dígitos"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Fecha de entrega", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "date",
          className: inputCls,
          value: state.date,
          onChange: (e) => setState((p) => ({ ...p, date: e.target.value }))
        }
      ) })
    ] });
  }
  if (step === 1) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-7 fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Tipo", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: TIPOS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Pill,
        {
          active: state.tipo === t,
          onClick: () => setState((p) => ({ ...p, tipo: t })),
          children: t
        },
        t
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Biscocho", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: BISCOCHOS.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Pill,
        {
          active: state.biscocho === b,
          onClick: () => setState((p) => ({ ...p, biscocho: b })),
          children: b
        },
        b
      )) }) })
    ] });
  }
  if (step === 2) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Relleno", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: RELLENOS.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Pill,
          {
            active: state.relleno === b,
            onClick: () => setState((p) => ({ ...p, relleno: b })),
            children: b
          },
          b
        )) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Field, { label: "Cubierta", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: state.cubierta,
              onChange: (e) => setState((p) => ({
                ...p,
                cubierta: e.target.value
              })),
              className: inputCls,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Selecciona una cubierta" }),
                CUBIERTA.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: item, children: item }, item))
              ]
            }
          ),
          state.cubierta === "Otro:" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: "Escribe la cubierta deseada",
              value: state.otraCubierta,
              onChange: (e) => setState((p) => ({
                ...p,
                otraCubierta: e.target.value
              })),
              className: `${inputCls} mt-2`
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Número de personas", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "number",
          min: 1,
          className: inputCls,
          value: state.personas,
          onChange: (e) => setState((p) => ({ ...p, personas: e.target.value })),
          placeholder: "Ej. 15"
        }
      ) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 fade-up", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Temática", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        className: inputCls,
        value: state.tematica,
        onChange: (e) => setState((p) => ({ ...p, tematica: e.target.value })),
        placeholder: "Ej. Boda minimalista, cumpleaños floral…"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Toppings", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        className: inputCls,
        value: state.toppings,
        onChange: (e) => setState((p) => ({ ...p, toppings: e.target.value })),
        placeholder: "Ej. Flores comestibles, frutos rojos, hoja de oro…"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Field, { label: "Foto de referencia (opcional)", children: [
      state.fotoReferencia ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-xl overflow-hidden border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: state.fotoReferencia,
            alt: "Vista previa de referencia",
            className: "w-full max-h-48 object-contain bg-sand/30"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setState((p) => ({ ...p, fotoReferencia: null })),
            className: "absolute top-2 right-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-forest/90 text-primary-foreground hover:bg-forest transition-colors",
            "aria-label": "Quitar foto",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-card px-4 py-8 cursor-pointer hover:border-forest/40 hover:bg-sand/20 transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ImagePlus, { className: "w-8 h-8 text-forest/60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-forest-deep", children: "Toca para subir una imagen" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "JPG, PNG o WEBP · máx. 5 MB" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "file",
            accept: "image/jpeg,image/png,image/webp,image/heic,image/heif",
            className: "sr-only",
            onChange: (e) => {
              const file = e.target.files?.[0];
              e.target.value = "";
              if (!file) return;
              if (!file.type.startsWith("image/")) return;
              if (file.size > 5 * 1024 * 1024) {
                alert("La imagen no debe superar 5 MB.");
                return;
              }
              const reader = new FileReader();
              reader.onload = () => setState((p) => ({
                ...p,
                fotoReferencia: reader.result
              }));
              reader.readAsDataURL(file);
            }
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: "Si subes una foto, se copiará al portapapeles para que la pegues en WhatsApp al enviar el pedido." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Solicitudes especiales", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        rows: 3,
        className: inputCls,
        value: state.notas,
        onChange: (e) => setState((p) => ({ ...p, notas: e.target.value })),
        placeholder: "Alergias, mensaje en el pastel, detalles adicionales…"
      }
    ) })
  ] });
}
const heroCake = "/assets/hero-cake-CG2xIZS5.jpg";
const aboutImg = "/assets/about-BQD2vD66.jpg";
const customImg = "/assets/custom-D0NOOPZh.jpg";
const cake1 = "/assets/cake-1-BhSIyIIM.jpg";
const cake2 = "/assets/cake-2-Ze0DUAPo.jpg";
const cake3 = "/assets/cake-3-t2qiKKd7.jpg";
const cake4 = "/assets/cake-5-CyWeeQKx.jpg";
const cake5 = "/assets/cake-4-uM0L-Gdw.jpg";
const ImagenCafe = "/assets/ImagenCafe-DEGEjWgq.jpg";
const ImagenCafe250 = "/assets/ImagenCafe250-SYlC9pm7.jpg";
const WHATSAPP = "https://wa.me/526291239239?text=Hola%20Caffeli%2C%20quiero%20hacer%20un%20pedido";
function Index() {
  const [orderOpen, setOrderOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { onOrder: () => setOrderOpen(true) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, { onOrder: () => setOrderOpen(true) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Custom, { onOrder: () => setOrderOpen(true) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CakesOfTheDay, { onOrder: () => setOrderOpen(true) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NuestroCafe, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(OrderModal, { open: orderOpen, onOpenChange: setOrderOpen })
  ] });
}
function Nav({
  onOrder
}) {
  const links = [{
    label: "Nosotros",
    href: "#about"
  }, {
    label: "Catálogo",
    href: "#cakes"
  }, {
    label: "Pasteles",
    href: "#custom"
  }, {
    label: "Nuestro Café",
    href: "#coffee"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 backdrop-blur-md bg-background/75 border-b border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "font-serif text-2xl tracking-tight text-forest-deep", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-forest", children: "." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-10 text-sm text-muted-foreground", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, className: "hover:text-forest transition-colors", children: l.label }, l.href)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onOrder, className: "inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 text-sm hover:opacity-90 transition-all hover:-translate-y-0.5", children: "Ordenar" })
  ] }) });
}
function Hero({
  onOrder
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 sm:px-6 lg:px-10 pt-8 pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl rounded-[2rem] bg-sand/70 p-6 sm:p-10 lg:p-16 relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/Logo Caffeli.png", alt: "Caffeli — Coffee House", className: "h-44 sm:h-58 lg:h-62 w-auto object-contain rounded-2xl shadow-[0_20px_50px_-20px_rgba(40,60,40,0.3)] mb-8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-forest/80 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5" }),
          " Artesanal & Premium"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-serif text-[2.75rem] sm:text-6xl lg:text-7xl leading-[1.02] text-forest-deep", children: [
          "Pasteles que",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "convierten",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "momentos en",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic font-normal", children: "recuerdos" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-md text-muted-foreground leading-relaxed", children: "Elaborados diariamente con ingredientes de la más alta calidad. Descubre nuestra colección de postres boutique diseñados para deleitar." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onOrder, className: "inline-flex items-center gap-2 rounded-full bg-forest text-primary-foreground px-7 py-3.5 text-sm hover:bg-forest-deep transition-all hover:-translate-y-0.5", children: "Ordenar ahora" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#cakes", className: "inline-flex items-center gap-2 rounded-full border border-forest/30 text-forest-deep px-7 py-3.5 text-sm hover:bg-cream transition-colors", children: "Ver catálogo" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative fade-up fade-up-delay-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-cream shadow-[0_30px_80px_-30px_rgba(40,60,40,0.25)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroCake, alt: "Pastel boutique de tres pisos decorado con flores", width: 1024, height: 1024, className: "w-full h-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 -left-4 sm:left-6 bg-card/95 backdrop-blur rounded-2xl px-5 py-4 shadow-[0_20px_50px_-20px_rgba(40,60,40,0.25)] flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5 text-forest", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 fill-current" }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-forest-deep", children: "4.9 / 5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Reseñas de clientes" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl mt-10 grid sm:grid-cols-3 gap-5", children: [{
      icon: Leaf,
      t: "Ingredientes Frescos",
      d: "Seleccionados diariamente desde productores locales, desde vainilla de Madagascar hasta el cacao belga de origen único."
    }, {
      icon: Cake,
      t: "Calidad Artesanal",
      d: "Cada pastel es horneado y decorado a mano por nuestros maestros pasteleros en el ritmo de la entrega."
    }, {
      icon: Sparkles,
      t: "El arte del pastel",
      d: "Cada pieza es una pequeña experiencia artesanal pensada para los momentos más grandes."
    }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl p-7 border border-border/60 hover:shadow-[0_20px_40px_-25px_rgba(40,60,40,0.2)] transition-shadow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "w-5 h-5 text-forest mb-5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl text-forest-deep", children: f.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: f.d })
    ] }, f.t)) })
  ] });
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "px-4 sm:px-6 lg:px-10 py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 lg:gap-24 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "order-2 lg:order-1 aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-sand", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: aboutImg, alt: "Pastelera decorando un pastel en el obrador", width: 1100, height: 1300, loading: "lazy", className: "w-full h-full object-cover" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "order-1 lg:order-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-forest/80", children: "Nosotros" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-forest-deep", children: [
        "Una Cafetería ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic font-normal", children: "local" }),
        " nacida del detalle."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-7 text-muted-foreground leading-relaxed max-w-lg", children: "asdasdas" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed max-w-lg", children: "asdasdasdas" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-3 gap-6 max-w-md", children: [{
        n: "12+",
        l: "Años creando"
      }, {
        n: "n",
        l: "Pedidos al año"
      }, {
        n: "100%",
        l: "Artesanal"
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-3xl text-forest-deep", children: s.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: s.l })
      ] }, s.l)) })
    ] })
  ] }) });
}
function Custom({
  onOrder
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "custom", className: "px-4 sm:px-6 lg:px-10 pb-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl rounded-[2rem] bg-forest text-primary-foreground p-8 sm:p-14 lg:p-20 grid lg:grid-cols-2 gap-14 items-center overflow-hidden relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-primary-foreground/70", children: "Pasteles personalizados" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05]", children: [
        "Diseñamos el pastel de tu próxima ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic font-normal", children: "celebración" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-7 text-primary-foreground/80 leading-relaxed max-w-lg", children: "Bodas, cumpleaños, eventos corporativos o un detalle íntimo. Trabajamos contigo cada capa, sabor y decoración para crear una pieza única que cuente tu historia." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 space-y-3 text-sm text-primary-foreground/85", children: ["Consulta personalizada con el chef pastelero", "Degustación de sabores y rellenos", "Entrega o recogida en sucursal"].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 w-1.5 h-1.5 rounded-full bg-primary-foreground/70" }),
        i
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onOrder, className: "mt-10 inline-flex items-center gap-2 rounded-full bg-cream text-forest-deep px-7 py-3.5 text-sm hover:bg-sand transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }),
        " Cotizar pedido"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square rounded-[1.5rem] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: customImg, alt: "Pastel personalizado de dos pisos con detalles dorados", width: 1200, height: 1200, loading: "lazy", className: "w-full h-full object-cover" }) })
  ] }) });
}
function CakesOfTheDay(_props) {
  const cakes = [{
    name: "Tres Leches Fresa",
    desc: "Pan de vainilla bañado en tres leches con relleno de fresa natural.",
    img: cake1,
    tag: "Hoy",
    sizes: [{
      label: "Chico",
      price: 380
    }, {
      label: "Mediano",
      price: 450
    }, {
      label: "Grande",
      price: 580
    }],
    stock: 3
  }, {
    name: "Tres Leches Mango",
    desc: "Tres leches con relleno de mango fresco.",
    img: cake2,
    tag: "Disponible",
    sizes: [{
      label: "Chico",
      price: 380
    }, {
      label: "Mediano",
      price: 450
    }, {
      label: "Grande",
      price: 580
    }],
    stock: 2
  }, {
    name: "Chocoflan",
    desc: "Flan cremoso sobre pastel de chocolate con cubierta de cajeta.",
    img: cake3,
    tag: "Especial",
    price: 520,
    stock: 1
  }, {
    name: "Rosca de Zanahoria",
    desc: "Pan húmedo de zanahoria con nuez y queso crema.",
    img: cake4,
    tag: "Especial",
    price: 480,
    stock: 1
  }, {
    name: "Rosca Chorreada",
    desc: "Rosca cubierta con cajeta y nuez caramelizada.",
    img: cake5,
    tag: "Especial",
    price: 550,
    stock: 1
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "cakes", className: "px-4 sm:px-6 lg:px-10 pb-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-forest-deep", children: [
        "Hechos hoy, ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic font-normal", children: "listos para ti" }),
        "."
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-sm", children: "Aparta tu pastel antes de que se agote. Disponibles únicamente por hoy." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: cakes.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group bg-card rounded-[1.5rem] overflow-hidden border border-border/60 hover:shadow-[0_30px_60px_-30px_rgba(40,60,40,0.25)] transition-all hover:-translate-y-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[4/5] overflow-hidden bg-sand relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.img, alt: c.name, width: 900, height: 1100, loading: "lazy", className: "w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1200ms]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] bg-cream/95 text-forest-deep rounded-full px-3 py-1.5", children: c.tag })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl text-forest-deep", children: c.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-xl text-forest", children: c.sizes ? `Desde $${c.sizes[0].price} por persona` : `$${c.price}` })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: c.desc }),
        c.stock === 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-red-600 font-medium", children: "🔥 Última pieza disponible" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-xs text-forest font-medium", children: [
          "🔥 Quedan ",
          c.stock,
          " disponibles"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid grid-cols-2 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center justify-center gap-2 rounded-full bg-forest text-primary-foreground px-4 py-2.5 text-xs hover:bg-forest-deep transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-3.5 h-3.5" }),
            "Comprar ahora"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `${WHATSAPP}%20-%20${encodeURIComponent(c.name)}`, target: "_blank", rel: "noreferrer", className: "inline-flex items-center justify-center gap-2 rounded-full border border-forest text-forest px-4 py-2.5 text-xs hover:bg-forest/5 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3.5 h-3.5" }),
            "WhatsApp"
          ] })
        ] })
      ] })
    ] }, c.name)) })
  ] }) });
}
function useScrollReveal(threshold = 0.12) {
  const ref = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(el);
      }
    }, {
      threshold
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return {
    ref,
    visible
  };
}
function ScrollReveal({
  children,
  className = ""
}) {
  const {
    ref,
    visible
  } = useScrollReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: `transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`, children });
}
function NuestroCafe() {
  const MP_CAFE_250 = "https://mpago.la/1dsMUkB";
  const infoItems = [{
    icon: MapPin,
    label: "Origen",
    lines: ["Finca La Unión, Belisario Domínguez, Motozintla, Chiapas.", "Producido y tostado por Emilio Gálvez."]
  }, {
    icon: Sprout,
    label: "Variedad",
    lines: ["Arábica 100%"]
  }, {
    icon: Droplets,
    label: "Proceso",
    lines: ["Lavado"]
  }, {
    icon: Flame,
    label: "Tueste",
    lines: ["Medio"]
  }, {
    icon: Award,
    label: "Puntaje de calidad",
    lines: ["84.19 puntos", "Café de Especialidad"]
  }];
  const perfilItems = ["Cuerpo cremoso", "Dulzor pronunciado", "Acidez balanceada", "Notas a miel", "Caramelo", "Azúcar morena", "Matices cítricos", "Manzana verde", "Retrogusto limpio y agradable"];
  const presentaciones = [{
    tipo: "Café Molido",
    img: ImagenCafe,
    variantes: [{
      size: "250g",
      price: 180
    }, {
      size: "500g",
      price: 320
    }, {
      size: "1kg",
      price: 580
    }]
  }, {
    tipo: "Café en Grano",
    img: ImagenCafe250,
    variantes: [{
      size: "250g",
      price: 170
    }, {
      size: "500g",
      price: 310
    }, {
      size: "1kg",
      price: 560
    }]
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "coffee", className: "px-4 sm:px-6 lg:px-10 pb-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(ScrollReveal, { className: "text-center max-w-3xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-forest/80", children: "Nuestro Café" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-forest-deep", children: [
        "Café de ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic font-normal", children: "especialidad" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed max-w-xl mx-auto", children: "Café de especialidad cultivado en Chiapas, seleccionado y tostado para ofrecer una experiencia única en cada taza." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "120", height: "40", viewBox: "0 0 120 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "text-forest/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10 30C15 15 25 10 35 20C45 30 55 30 65 20C75 10 85 15 90 30", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M25 20C30 8 40 5 50 15", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M70 18C75 8 85 5 95 15", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "35", cy: "20", r: "2", fill: "currentColor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "65", cy: "20", r: "2", fill: "currentColor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "15", r: "1.5", fill: "currentColor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "80", cy: "12", r: "1.5", fill: "currentColor" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16", children: infoItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border/60 rounded-[1.25rem] p-6 text-center hover:shadow-[0_20px_40px_-25px_rgba(40,60,40,0.18)] transition-shadow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-5 h-5 text-forest" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-forest/80 mb-2", children: item.label }),
      item.lines.map((line, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm ${i === 0 ? "text-forest-deep font-medium" : "text-muted-foreground"} ${i > 0 ? "mt-1" : ""}`, children: line }, i))
    ] }, item.label)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-forest text-primary-foreground rounded-[2rem] p-8 sm:p-14 lg:p-16 mb-16 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-primary-foreground/70", children: "Perfil Sensorial" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.05]", children: "Perfil de la Taza" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3", children: perfilItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary-foreground/70 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-primary-foreground/90", children: item })
        ] }, item)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-forest/80", children: "Presentaciones" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-serif text-3xl sm:text-4xl text-forest-deep", children: "Disponibles" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6 mb-16", children: presentaciones.map((prod) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group bg-card rounded-[1.5rem] overflow-hidden border border-border/60 hover:shadow-[0_30px_60px_-30px_rgba(40,60,40,0.25)] transition-all hover:-translate-y-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[4/3] overflow-hidden bg-sand relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: prod.img, alt: prod.tipo, width: 1024, height: 1024, loading: "lazy", className: "w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1200ms]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] bg-cream/95 text-forest-deep rounded-full px-3 py-1.5", children: prod.tipo })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-5", children: "Café de especialidad de Chiapas, tostado medio, con notas a miel, caramelo y frutas cítricas. Empaque premium con válvula de degasificación." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: prod.variantes.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-xl bg-sand/60 px-5 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-forest-deep", children: v.size }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-serif text-lg text-forest", children: [
              "$",
              v.price
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: prod.tipo === "Café Molido" && v.size === "250g" ? MP_CAFE_250 : WHATSAPP, target: "_blank", rel: "noreferrer", className: "inline-flex items-center justify-center gap-1.5 rounded-full bg-forest text-primary-foreground px-3 py-1.5 text-[11px] hover:bg-forest-deep transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-3 h-3" }),
                "Comprar"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `${WHATSAPP}%20-%20${encodeURIComponent(prod.tipo + " " + v.size)}`, target: "_blank", rel: "noreferrer", className: "inline-flex items-center justify-center gap-1.5 rounded-full border border-forest text-forest px-3 py-1.5 text-[11px] hover:bg-forest/5 transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-3 h-3" }),
                " WhatsApp"
              ] })
            ] })
          ] })
        ] }, v.size)) })
      ] })
    ] }) }, prod.tipo)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-px bg-forest/30 mx-auto mb-8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "font-serif text-xl sm:text-2xl lg:text-3xl text-forest-deep leading-relaxed", children: '"Disfrutar de un buen café de especialidad es más que un simple placer; es un viaje que conecta culturas y tradiciones, recordándonos la belleza de lo artesanal y el valor de lo auténtico."' }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-px bg-forest/30 mx-auto mt-8" })
    ] }) })
  ] }) });
}
function Testimonials() {
  const t = [{
    q: "El pastel de nuestra boda fue una obra de arte. Cada invitado lo recuerda.",
    a: "Mariana & Diego",
    r: "Boda · 2025"
  }, {
    q: "La atención al detalle es impecable. Caffeli convirtió el cumpleaños de mi hija en magia.",
    a: "Sofía Aguilar",
    r: "Cliente recurrente"
  }, {
    q: "Sabores limpios, presentación de revista. Es nuestra pastelería y cafeteria favorita en la ciudad.",
    a: "Juan Holguin",
    r: "Reseña Google"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 sm:px-6 lg:px-10 pb-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end justify-between mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-forest/80", children: "Testimonios" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-forest-deep max-w-2xl", children: [
        "Lo que nuestros ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic font-normal", children: "clientes" }),
        " dicen."
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-5", children: t.map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "bg-card border border-border/60 rounded-[1.5rem] p-8 flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5 text-forest mb-5", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3.5 h-3.5 fill-current" }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "font-serif text-xl leading-snug text-forest-deep flex-1", children: [
        '"',
        x.q,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-7 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-forest-deep", children: x.a }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs mt-0.5", children: x.r })
      ] })
    ] }, x.a)) })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "px-4 sm:px-6 lg:px-10 pb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl rounded-[2rem] bg-forest-deep text-primary-foreground p-10 sm:p-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-4 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-serif text-3xl", children: [
          "Caffeli",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-70", children: "." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm text-primary-foreground/70 leading-relaxed max-w-xs", children: "Cafetería y pastelería dedicada a crear experiencias dulces, hechas con ingredientes de la más alta calidad." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.instagram.com/caffeli.mx", target: "_blank", rel: "noopener noreferrer", className: "w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.facebook.com/CAFFELI.MX", target: "_blank", rel: "noopener noreferrer", className: "w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "w-4 h-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-primary-foreground/60 mb-5", children: "Contacto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-primary-foreground/85", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 mt-0.5 shrink-0" }),
            "Av. Juárez 321-Local 1, Abraham González, 33983 José Mariano Jiménez, Chih."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
            " 629-542-2752"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4" }),
            " hola@caffeli.mx"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-primary-foreground/60 mb-5", children: "Horario" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-primary-foreground/85", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Lunes (solo pasteleria) " }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "9:00 – 16:00 " })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Martes - Domingo (cafeteria y pasteleria)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "9:00 – 22:30" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-primary-foreground/60 mb-5", children: "Newsletter" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary-foreground/70 mb-4", children: "Recibe nuestra carta de temporada cada mes." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", placeholder: "Tu correo", className: "flex-1 bg-primary-foreground/10 border border-primary-foreground/15 rounded-full px-4 py-2.5 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "rounded-full bg-cream text-forest-deep px-5 py-2.5 text-sm hover:bg-sand transition-colors", children: "Suscribir" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 pt-6 border-t border-primary-foreground/15 flex flex-col sm:flex-row justify-between gap-3 text-xs text-primary-foreground/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "© 2026 Caffeli. Todos los derechos reservados." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-primary-foreground", children: "Aviso de Privacidad" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-primary-foreground", children: "Términos & Condiciones" })
      ] })
    ] })
  ] }) });
}
export {
  Index as component
};
