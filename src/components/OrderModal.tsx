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
  Sparkles,
  Check,
} from "lucide-react";

const WHATSAPP_NUMBER = "526291239239";

type Mode = "catalog";

type CatalogState = {
  category: string;
  cake: string;
  size: string;
  date: string;
  notes: string;
  name: string;
  phone: string;
};

const CATALOG: Record<string, string[]> = {
  "Tres Leches Yogurt": ["Fresa", "Frutas", "Mango"],
  "Tres Leches": ["Piña Coco", "Cajeta"],
};

const SIZES = ["Chico", "Mediano", "Grande"];

const initialCatalog: CatalogState = {
  category: "",
  cake: "",
  size: "",
  date: "",
  notes: "",
  name: "",
  phone: "",
};

export function OrderModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [mode] = useState<Mode>("catalog");
  const [step, setStep] = useState(0);
  const [catalog, setCatalog] = useState<CatalogState>(initialCatalog);
  
  const reset = () => {
    setStep(0);
    setCatalog(initialCatalog);
  };

  const handleOpenChange = (v: boolean) => {
    if (!v) setTimeout(reset, 200);
    onOpenChange(v);
  };
  const sendCatalog = () => {
  const m = encodeURIComponent(`*NUEVO PEDIDO DE CATÁLOGO — CAFFELI*

*Nombre:* ${catalog.name}
*Teléfono:* ${catalog.phone}
*Pastel:* ${catalog.category} ${catalog.cake}
*Tamaño:* ${catalog.size}
*Fecha de recogida:* ${catalog.date}
*Lugar:* Sucursal Caffeli
${catalog.notes ? `*Notas:* ${catalog.notes}` : ""}`);

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${m}`, "_blank");

  handleOpenChange(false);
};

  // Step validation
  const catalogStepValid = () => {
    if (step === 0) return !!catalog.category && !!catalog.cake;
    if (step === 1) return !!catalog.size && !!catalog.date;
    if (step === 2) return !!catalog.name && !!catalog.phone;
    return true;
  };
  const totalSteps = 3;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden bg-cream border-border/60 rounded-[1.75rem] max-h-[92vh] flex flex-col">
        <DialogHeader className="px-8 pt-8 pb-4">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-forest/80">
            <Sparkles className="w-3.5 h-3.5" />
            Caffeli · Hacer pedido
          </div>
          <DialogTitle className="font-serif text-3xl sm:text-4xl text-forest-deep leading-tight mt-3">
            Elige tu <em className="italic font-normal">pastel</em>
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Paso {step + 1} de {totalSteps}
          </DialogDescription>
          <p className="mt-2 text-xs font-medium text-forest">
            Todos los pedidos se recogen únicamente en sucursal.
          </p>

          <div className="mt-4 h-1 w-full bg-sand rounded-full overflow-hidden">
            <div
              className="h-full bg-forest transition-all duration-500 ease-out"
              style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
            />
          </div>
        </DialogHeader>

        <div className="px-8 pb-8 overflow-y-auto flex-1">
          <CatalogSteps step={step} state={catalog} setState={setCatalog} />
        </div>

        <div className="border-t border-border/60 px-8 py-5 bg-card/40 flex items-center justify-between gap-3">
            <button
              onClick={() => {
                if (step === 0) {
                  handleOpenChange(false);
                } else {
                  setStep(step - 1);
                }
              }}
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-forest-deep transition-colors px-3 py-2"
            >
              <ChevronLeft className="w-4 h-4" />
              {step === 0 ? "Cancelar" : "Atrás"}
            </button>

            {step < totalSteps - 1 ? (
              <button
                disabled={
                  !catalogStepValid()
                }
                onClick={() => setStep(step + 1)}
                className="inline-flex items-center gap-2 rounded-full bg-forest text-primary-foreground px-6 py-2.5 text-sm hover:bg-forest-deep transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continuar <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={sendCatalog}
                className="inline-flex items-center gap-2 rounded-full bg-forest text-primary-foreground px-6 py-2.5 text-sm hover:bg-forest-deep transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Enviar por WhatsApp
              </button>
            )}
        </div>
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
        <Field label="Fecha de recogida en sucursal">
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

