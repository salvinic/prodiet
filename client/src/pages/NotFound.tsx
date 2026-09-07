import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#cfe3d3] px-6 text-[#143329]">
      <div className="text-center">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em]">Errore 404</p>
        <h1 className="mt-6 font-display text-[clamp(5rem,16vw,11rem)] leading-none tracking-[-0.06em]">Fuori rotta.</h1>
        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-[#496158]">La pagina che cerchi non esiste o è stata spostata.</p>
        <a href="/" className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#143329] px-6 py-3.5 text-sm font-bold text-white transition-transform active:scale-[0.97]">
          <ArrowLeft className="size-4" /> Torna a PRODIET
        </a>
      </div>
    </main>
  );
}
