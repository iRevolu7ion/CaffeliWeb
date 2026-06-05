import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Cake,
  Sparkles,
  Check,
  ImagePlus,
  X,
} from "lucide-react";

const WHATSAPP_NUMBER = "526291239239";

type Mode = "choose" | "catalog" | "custom";

type CatalogState = {
  category: string;
  cake: string;
  size: string;
  date: string;
  notes: string;
  name: string;
  phone: string;
};

type CustomState = {
  name: string;
  phone: string;
  date: string;
  tipo: string;
  biscocho: string;
  relleno: string;
  cubierta: string;
  otraCubierta: string;
  personas: string;
  tematica: string;
  toppings: string;
  notas: string;
  fotoReferencia: string | null;
};

const CATALOG: Record<string, string[]> = {
  "Tres leches yogurt": ["Fresa", "Mango"],
  Chocolate: ["Tres chocolates", "Selva negra"],
  Especiales: ["Chocoflan", "Rosca Zanahoria", "Rosca Chorreada", "Mostachon", "Fresas con crema"],
  "Tres leches": ["Frutas", "Cajeta", "Chocoganache", "Piña coco", "Mango"],
};

const SIZES = ["6 personas", "10 personas", "15 personas", "20 personas", "30+ personas"];
const TIPOS = ["Pastel", "Cupcake", "Rosca"];
const BISCOCHOS = ["Chocolate", "Tres Leches", "Vainilla", "Red Velvet", "Zanahoria", "Tres leches chocolate", "Vainillia Chispas de chocolate", "Nuez", "Almendra", "Mantequilla", "Naranja", "Marmoleado" ];
const RELLENOS = ["Dulce de leche", "Mermelada Fresa", "Mermelada Piña", "Crema de Avellanas", "Crema de chocolate", "ButterCream", "Crema con frutas", "Crema de queso", "Otro:"]

const CUBIERTA = ["Queso crema dulce", "Buttercream", "Chocolate", "Otro:"]


const initialCatalog: CatalogState = {
  category: "",
  cake: "",
  size: "",
  date: "",
  notes: "",
  name: "",
  phone: "",
};

const initialCustom: CustomState = {
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
  fotoReferencia: null,
};

export function OrderModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [mode, setMode] = useState<Mode>("choose");
  const [step, setStep] = useState(0);
  const [catalog, setCatalog] = useState<CatalogState>(initialCatalog);
  const [custom, setCustom] = useState<CustomState>(initialCustom);

  const [cubierta, setCubierta] = useState("");
  const [otraCubierta, setOtraCubierta] = useState("");
  
  const reset = () => {
    setMode("choose");
    setStep(0);
    setCatalog(initialCatalog);
    setCustom(initialCustom);
  };

  const handleOpenChange = (v: boolean) => {
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
  const cubiertaFinal =
    custom.cubierta === "Otro:"
      ? custom.otraCubierta
      : custom.cubierta;

  const fotoLine = custom.fotoReferencia
    ? "%0A*Foto de referencia:* Sí (adjuntaré la imagen en el chat)"
    : "";

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
        new ClipboardItem({ [blob.type]: blob }),
      ]);
    } catch {
      // El cliente puede adjuntar la imagen manualmente en WhatsApp
    }
  }

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${m}`,
    "_blank"
  );

  handleOpenChange(false);
};
  

  // Step validation
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

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden bg-cream border-border/60 rounded-[1.75rem] max-h-[92vh] flex flex-col">
        <DialogHeader className="px-8 pt-8 pb-4">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-forest/80">
            <Sparkles className="w-3.5 h-3.5" />
            Caffeli · Hacer pedido
          </div>
          <DialogTitle className="font-serif text-3xl sm:text-4xl text-forest-deep leading-tight mt-3">
            {mode === "choose" && (
              <>
                ¿Cómo te <em className="italic font-normal">gustaría</em> ordenar?
              </>
            )}
            {mode === "catalog" && (
              <>
                Elige tu <em className="italic font-normal">pastel</em>
              </>
            )}
            {mode === "custom" && (
              <>
                Personaliza tu <em className="italic font-normal">pastel</em>
              </>
            )}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {mode === "choose"
              ? "Selecciona una opción para comenzar tu pedido."
              : `Paso ${step + 1} de ${totalSteps}`}
          </DialogDescription>

          {mode !== "choose" && (
            <div className="mt-4 h-1 w-full bg-sand rounded-full overflow-hidden">
              <div
                className="h-full bg-forest transition-all duration-500 ease-out"
                style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
              />
            </div>
          )}
        </DialogHeader>

        <div className="px-8 pb-8 overflow-y-auto flex-1">
          {mode === "choose" && (
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              <button
                onClick={() => {
                  setMode("catalog");
                  setStep(0);
                }}
                className="group text-left bg-card border border-border/60 rounded-2xl p-7 hover:border-forest/40 hover:shadow-[0_20px_40px_-25px_rgba(40,60,40,0.25)] transition-all hover:-translate-y-1"
              >
                <Cake className="w-6 h-6 text-forest mb-5" />
                <h3 className="font-serif text-2xl text-forest-deep">
                  Elegir del catálogo
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Selecciona uno de nuestros sabores firmados, listos para recoger.
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm text-forest group-hover:gap-2 transition-all">
                  Empezar <ChevronRight className="w-4 h-4" />
                </span>
              </button>

              <button
                onClick={() => {
                  setMode("custom");
                  setStep(0);
                }}
                className="group text-left bg-forest text-primary-foreground rounded-2xl p-7 hover:shadow-[0_20px_40px_-20px_rgba(40,60,40,0.45)] transition-all hover:-translate-y-1"
              >
                <Sparkles className="w-6 h-6 mb-5" />
                <h3 className="font-serif text-2xl">Personalizar pastel</h3>
                <p className="mt-2 text-sm text-primary-foreground/75 leading-relaxed">
                  Diseña una pieza única: biscocho, relleno, temática y más.
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm group-hover:gap-2 transition-all">
                  Empezar <ChevronRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          )}

          {mode === "catalog" && (
            <CatalogSteps step={step} state={catalog} setState={setCatalog} />
          )}

          {mode === "custom" && (
            <CustomSteps step={step} state={custom} setState={setCustom} />
          )}
        </div>

        {mode !== "choose" && (
          <div className="border-t border-border/60 px-8 py-5 bg-card/40 flex items-center justify-between gap-3">
            <button
              onClick={() => {
                if (step === 0) {
                  setMode("choose");
                } else {
                  setStep(step - 1);
                }
              }}
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-forest-deep transition-colors px-3 py-2"
            >
              <ChevronLeft className="w-4 h-4" />
              {step === 0 ? "Cambiar opción" : "Atrás"}
            </button>

            {step < totalSteps - 1 ? (
              <button
                disabled={
                  mode === "catalog" ? !catalogStepValid() : !customStepValid()
                }
                onClick={() => setStep(step + 1)}
                className="inline-flex items-center gap-2 rounded-full bg-forest text-primary-foreground px-6 py-2.5 text-sm hover:bg-forest-deep transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continuar <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={mode === "catalog" ? sendCatalog : sendCustom}
                className="inline-flex items-center gap-2 rounded-full bg-forest text-primary-foreground px-6 py-2.5 text-sm hover:bg-forest-deep transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Enviar por WhatsApp
              </button>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
/* ---------- Field primitives ---------- */

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.2em] text-forest/80">
        {label}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

const inputCls =
  "w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-forest-deep placeholder:text-muted-foreground/60 focus:outline-none focus:border-forest/50 focus:ring-2 focus:ring-forest/10 transition-all";

function Pill({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm border transition-all ${
        active
          ? "bg-forest text-primary-foreground border-forest"
          : "bg-card text-forest-deep border-border hover:border-forest/40"
      }`}
    >
      {active && <Check className="w-3.5 h-3.5" />}
      {children}
    </button>
  );
}

/* ---------- Catalog steps ---------- */

function CatalogSteps({
  step,
  state,
  setState,
}: {
  step: number;
  state: CatalogState;
  setState: React.Dispatch<React.SetStateAction<CatalogState>>;
}) {
  if (step === 0) {
    return (
      <div className="space-y-7 fade-up">
        <Field label="Categoría">
          <div className="flex flex-wrap gap-2">
            {Object.keys(CATALOG).map((cat) => (
              <Pill
                key={cat}
                active={state.category === cat}
                onClick={() =>
                  setState((s) => ({ ...s, category: cat, cake: "" }))
                }
              >
                {cat}
              </Pill>
            ))}
          </div>
        </Field>

        {state.category && (
          <Field label="Pastel">
            <div className="flex flex-wrap gap-2">
              {CATALOG[state.category].map((c) => (
                <Pill
                  key={c}
                  active={state.cake === c}
                  onClick={() => setState((s) => ({ ...s, cake: c }))}
                >
                  {c}
                </Pill>
              ))}
            </div>
          </Field>
        )}
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="space-y-7 fade-up">
        <Field label="Tamaño / personas">
          <div className="flex flex-wrap gap-2">
            {SIZES.map((s) => (
              <Pill
                key={s}
                active={state.size === s}
                onClick={() => setState((p) => ({ ...p, size: s }))}
              >
                {s}
              </Pill>
            ))}
          </div>
        </Field>
        <Field label="Fecha de recogida">
          <input
            type="date"
            className={inputCls}
            value={state.date}
            onChange={(e) => setState((p) => ({ ...p, date: e.target.value }))}
          />
        </Field>
        <Field label="Notas (opcional)">
          <textarea
            rows={3}
            className={inputCls}
            placeholder="Mensaje en el pastel, alergias, etc."
            value={state.notes}
            onChange={(e) => setState((p) => ({ ...p, notes: e.target.value }))}
          />
        </Field>
      </div>
    );
  }

  return (
    <div className="space-y-5 fade-up">
      <Field label="Nombre">
        <input
          className={inputCls}
          value={state.name}
          onChange={(e) => setState((p) => ({ ...p, name: e.target.value }))}
          placeholder="Tu nombre completo"
        />
      </Field>
      <Field label="Teléfono">
        <input
          className={inputCls}
          value={state.phone}
          onChange={(e) => setState((p) => ({ ...p, phone: e.target.value }))}
          placeholder="10 dígitos"
        />
      </Field>
      <div className="bg-sand/60 rounded-2xl p-5 text-sm text-forest-deep">
        <div className="font-serif text-lg mb-1">Resumen</div>
        <div className="text-muted-foreground">
          {state.cake} · {state.size} · {state.date}
        </div>
      </div>
    </div>
  );
}

/* ---------- Custom steps ---------- */

function CustomSteps({
  step,
  state,
  setState,
}: {
  step: number;
  state: CustomState;
  setState: React.Dispatch<React.SetStateAction<CustomState>>;
}) {
  if (step === 0) {
    return (
      <div className="space-y-5 fade-up">
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Nombre">
            <input
              className={inputCls}
              value={state.name}
              onChange={(e) => setState((p) => ({ ...p, name: e.target.value }))}
              placeholder="Tu nombre"
            />
          </Field>
          <Field label="Teléfono">
            <input
              className={inputCls}
              value={state.phone}
              onChange={(e) => setState((p) => ({ ...p, phone: e.target.value }))}
              placeholder="10 dígitos"
            />
          </Field>
        </div>
        <Field label="Fecha de entrega">
          <input
            type="date"
            className={inputCls}
            value={state.date}
            onChange={(e) => setState((p) => ({ ...p, date: e.target.value }))}
          />
        </Field>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="space-y-7 fade-up">
        <Field label="Tipo">
          <div className="flex flex-wrap gap-2">
            {TIPOS.map((t) => (
              <Pill
                key={t}
                active={state.tipo === t}
                onClick={() => setState((p) => ({ ...p, tipo: t }))}
              >
                {t}
              </Pill>
            ))}
          </div>
        </Field>
        <Field label="Biscocho">
          <div className="flex flex-wrap gap-2">
            {BISCOCHOS.map((b) => (
              <Pill
                key={b}
                active={state.biscocho === b}
                onClick={() => setState((p) => ({ ...p, biscocho: b }))}
              >
                {b}
              </Pill>
            ))}
          </div>
        </Field>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="space-y-5 fade-up">
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Relleno">
            <div className="flex flex-wrap gap-2">
            {RELLENOS.map((b) => (
              <Pill
                key={b}
                active={state.relleno === b}
                onClick={() => setState((p) => ({ ...p, relleno: b }))}
              >
                {b}
              </Pill>
            ))}
          </div>
          </Field>
          <Field label="Cubierta">
                    <select
            value={state.cubierta}
            onChange={(e) =>
              setState((p) => ({
                ...p,
                cubierta: e.target.value,
              }))
            }
            className={inputCls}
          >
            <option value="">Selecciona una cubierta</option>

            {CUBIERTA.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          {state.cubierta === "Otro:" && (
            <input
              type="text"
              placeholder="Escribe la cubierta deseada"
              value={state.otraCubierta}
              onChange={(e) =>
                setState((p) => ({
                  ...p,
                  otraCubierta: e.target.value,
                }))
              }
              className={`${inputCls} mt-2`}
            />
          )}
          </Field>
        </div>
        <Field label="Número de personas">
          <input
            type="number"
            min={1}
            className={inputCls}
            value={state.personas}
            onChange={(e) =>
              setState((p) => ({ ...p, personas: e.target.value }))
            }
            placeholder="Ej. 15"
          />
        </Field>
      </div>
    );
  }

  return (
    <div className="space-y-5 fade-up">
      <Field label="Temática">
        <input
          className={inputCls}
          value={state.tematica}
          onChange={(e) =>
            setState((p) => ({ ...p, tematica: e.target.value }))
          }
          placeholder="Ej. Boda minimalista, cumpleaños floral…"
        />
      </Field>
      <Field label="Toppings">
        <input
          className={inputCls}
          value={state.toppings}
          onChange={(e) =>
            setState((p) => ({ ...p, toppings: e.target.value }))
          }
          placeholder="Ej. Flores comestibles, frutos rojos, hoja de oro…"
        />
      </Field>
      <Field label="Foto de referencia (opcional)">
        {state.fotoReferencia ? (
          <div className="relative rounded-xl overflow-hidden border border-border bg-card">
            <img
              src={state.fotoReferencia}
              alt="Vista previa de referencia"
              className="w-full max-h-48 object-contain bg-sand/30"
            />
            <button
              type="button"
              onClick={() => setState((p) => ({ ...p, fotoReferencia: null }))}
              className="absolute top-2 right-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-forest/90 text-primary-foreground hover:bg-forest transition-colors"
              aria-label="Quitar foto"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <label className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-card px-4 py-8 cursor-pointer hover:border-forest/40 hover:bg-sand/20 transition-all">
            <ImagePlus className="w-8 h-8 text-forest/60" />
            <span className="text-sm text-forest-deep">
              Toca para subir una imagen
            </span>
            <span className="text-xs text-muted-foreground">
              JPG, PNG o WEBP · máx. 5 MB
            </span>
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
              className="sr-only"
              onChange={(e) => {
                const file = e.target.files?.[0];
                e.target.value = "";
                if (!file) return;
                if (!file.type.startsWith("image/")) return;
                if (file.size > 5 * 1024 * 1024) {
                  alert("La imagen no debe superar 5 MB.");
                  return;
                }
                const reader = new FileReader();
                reader.onload = () =>
                  setState((p) => ({
                    ...p,
                    fotoReferencia: reader.result as string,
                  }));
                reader.readAsDataURL(file);
              }}
            />
          </label>
        )}
        <p className="mt-2 text-xs text-muted-foreground">
          Si subes una foto, se copiará al portapapeles para que la pegues en
          WhatsApp al enviar el pedido.
        </p>
      </Field>
      <Field label="Solicitudes especiales">
        <textarea
          rows={3}
          className={inputCls}
          value={state.notas}
          onChange={(e) => setState((p) => ({ ...p, notas: e.target.value }))}
          placeholder="Alergias, mensaje en el pastel, detalles adicionales…"
        />
      </Field>
    </div>
  );
}
