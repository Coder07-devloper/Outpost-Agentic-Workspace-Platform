import Link from "next/link";
import Image from "next/image";
import {
  Check,
  FileText,
  Heart,
  LayoutGrid,
  MousePointer2,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { landingCopy } from "./_data/landing";

const { mockups } = landingCopy;

function CanvasPreview() {
  const canvas = mockups.canvas;
  const nodeClasses = [
    "left-[8%] top-[23%]",
    "left-[39%] top-[43%] border-amber-400 ring-2 ring-amber-300/40",
    "right-[8%] top-[23%]",
    "right-[8%] top-[62%]",
  ];
  const nodeDots = ["bg-sky-500", "bg-amber-500", "bg-emerald-500", "bg-violet-500"];

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#101114] shadow-2xl shadow-black/30">
      <div className="flex h-10 items-center gap-2 border-b border-white/10 px-3">
        <span className="size-2 rounded-full bg-[#f87171]/80" />
        <span className="size-2 rounded-full bg-[#fbbf24]/80" />
        <span className="size-2 rounded-full bg-[#4ade80]/80" />
        <span className="ml-3 font-mono text-[10px] text-white/45">{canvas.fileName}</span>
        <span className="ml-auto rounded-md bg-primary/15 px-2 py-1 font-mono text-[9px] text-primary">{canvas.surfaceLabel}</span>
      </div>
      <div className="relative aspect-[1.42/1] overflow-hidden bg-[#f6f5f2]">
        <div className="absolute inset-0 bg-[radial-gradient(#d6d3d1_1px,transparent_1px)] [background-size:18px_18px]" />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 420" fill="none" aria-hidden="true">
          <path d="M164 130H230V205H270" stroke="#a8a29e" strokeWidth="2" strokeDasharray="5 5" />
          <path d="M361 205H410V135H445" stroke="#a8a29e" strokeWidth="2" strokeDasharray="5 5" />
          <path d="M361 220H410V290H445" stroke="#a8a29e" strokeWidth="2" strokeDasharray="5 5" />
          <circle cx="230" cy="130" r="4" fill="#f59e0b" />
        </svg>
        {canvas.nodeTitles.map((title, index) => (
          <div key={title} className={`absolute ${nodeClasses[index]} rounded-lg border border-stone-300 bg-white px-4 py-3 shadow-md shadow-stone-900/10`}>
            <div className={`mb-1.5 size-2 rounded-full ${nodeDots[index]}`} />
            <div className="text-[10px] font-semibold text-stone-800">{title}</div>
            <div className="mt-1 h-1 w-14 rounded bg-stone-200" />
          </div>
        ))}
        <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-md border border-stone-200 bg-white/90 p-1 shadow-sm">
          <span className="rounded bg-stone-100 px-2 py-1 text-[9px] text-stone-500">{canvas.toolSelect}</span>
          <span className="px-1.5 py-1 text-[9px] text-stone-400">＋</span>
          <span className="px-1.5 py-1 text-[9px] text-stone-400">↗</span>
        </div>
        <div className="absolute bottom-[30%] left-[55%] flex items-center gap-1.5 rounded-full bg-[#27272a] px-2.5 py-1.5 text-[9px] text-white shadow-lg">
          <Workflow className="size-3 text-primary" /> {canvas.agentNote}
        </div>
      </div>
    </div>
  );
}

function DocsPreview() {
  const docs = mockups.docs;

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#101114] shadow-2xl shadow-black/30">
      <div className="flex h-10 items-center gap-2 border-b border-white/10 px-3">
        <span className="size-2 rounded-full bg-[#f87171]/80" />
        <span className="size-2 rounded-full bg-[#fbbf24]/80" />
        <span className="size-2 rounded-full bg-[#4ade80]/80" />
        <span className="ml-3 font-mono text-[10px] text-white/45">{docs.fileName}</span>
        <span className="ml-auto rounded-md bg-primary/15 px-2 py-1 font-mono text-[9px] text-primary">{docs.surfaceLabel}</span>
      </div>
      <div className="flex aspect-[1.42/1] justify-center overflow-hidden bg-[#e9e8e5] p-5 sm:p-8">
        <div className="w-full max-w-[420px] rounded-sm bg-white px-7 py-6 shadow-lg shadow-stone-900/10 sm:px-10 sm:py-8">
          <div className="mb-5 flex items-center gap-2 text-[9px] font-medium text-stone-400">
            <FileText className="size-3 text-amber-600" /> <span className="uppercase">{docs.breadcrumb}</span>
          </div>
          <div className="text-lg font-semibold tracking-tight text-stone-800 sm:text-xl">{docs.title}</div>
          <div className="mt-2 h-1 w-16 rounded bg-amber-400" />
          <div className="mt-5 space-y-2">
            <div className="h-1.5 w-full rounded bg-stone-200" />
            <div className="h-1.5 w-[91%] rounded bg-stone-200" />
            <div className="h-1.5 w-[76%] rounded bg-stone-200" />
          </div>
          <div className="mt-5 rounded-md border-l-2 border-amber-500 bg-amber-50/80 px-3 py-2.5">
            <div className="mb-2 text-[9px] font-semibold text-stone-700">{docs.sectionTitle}</div>
            <div className="space-y-1.5">
              <div className="h-1 w-full rounded bg-stone-200" />
              <div className="h-1 w-[82%] rounded bg-stone-200" />
            </div>
          </div>
          <div className="mt-5 text-[10px] font-semibold text-stone-700">{docs.requirementsTitle}</div>
          <div className="mt-2 space-y-2">
            {docs.requirements.map((item) => (
              <div key={item} className="flex items-center gap-2 text-[9px] text-stone-500">
                <Check className="size-3 text-emerald-600" /> {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BoardPreview() {
  const board = mockups.teamBoard;

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#101114] shadow-2xl shadow-black/30">
      <div className="flex h-10 items-center gap-2 border-b border-white/10 px-3">
        <span className="size-2 rounded-full bg-[#f87171]/80" />
        <span className="size-2 rounded-full bg-[#fbbf24]/80" />
        <span className="size-2 rounded-full bg-[#4ade80]/80" />
        <span className="ml-3 font-mono text-[10px] text-white/45">{board.fileName}</span>
        <span className="ml-auto rounded-md bg-primary/15 px-2 py-1 font-mono text-[9px] text-primary">{board.surfaceLabel}</span>
      </div>
      <div className="aspect-[1.42/1] overflow-hidden bg-[#17181c] p-3 sm:p-5">
        <div className="mb-3 flex items-center justify-between">
          <div className="text-[11px] font-semibold text-white/85">{board.projectTitle}</div>
          <div className="flex -space-x-1.5">
            <span className="grid size-5 place-items-center rounded-full border border-[#17181c] bg-sky-400 text-[7px] font-semibold text-sky-950">M</span>
            <span className="grid size-5 place-items-center rounded-full border border-[#17181c] bg-violet-400 text-[7px] font-semibold text-violet-950">J</span>
            <span className="grid size-5 place-items-center rounded-full border border-[#17181c] bg-amber-400 text-[7px] font-semibold text-amber-950">A</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {board.columns.map((column, columnIndex) => (
            <div key={column.title} className="min-w-0 rounded-lg bg-white/[0.045] p-2">
              <div className="mb-2 flex items-center justify-between gap-1 text-[8px] font-medium text-white/65 sm:text-[9px]">
                <span className="truncate">{column.title}</span>
                <span className="text-white/35">{column.count}</span>
              </div>
              <div className="space-y-2">
                {column.cards.map((card, cardIndex) => (
                  <div key={card} className="rounded-md border border-white/[0.07] bg-[#222328] p-2">
                    <div className="mb-2 h-1 w-6 rounded bg-primary/75" />
                    <div className="text-[8px] font-medium leading-tight text-white/75 sm:text-[9px]">{card}</div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="h-1 w-5 rounded bg-white/10" />
                      <span className={`size-3 rounded-full ${columnIndex === 1 && cardIndex === 0 ? "bg-sky-400" : "bg-white/15"}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="relative -mt-16 ml-[49%] flex w-fit items-center gap-1 text-[8px] text-sky-300 drop-shadow-lg">
          <MousePointer2 className="size-3 fill-sky-400" /> {board.cursorLabel}
        </div>
      </div>
    </div>
  );
}

const featureIcons = {
  canvas: Workflow,
  docs: FileText,
  "team-board": LayoutGrid,
};

const featurePreviews = {
  canvas: CanvasPreview,
  docs: DocsPreview,
  "team-board": BoardPreview,
};

export default function Home() {
  const {
    hero,
    audiences,
    audienceLabel,
    features,
    howItWorks,
    pricing,
    closingCta,
    footer,
  } = landingCopy;

  return (
    <main className="flex flex-1 flex-col">
      <section className="topo-bg relative flex flex-col items-center px-6 pb-20 pt-16 text-center sm:pt-24">
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center">
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border/70 bg-background/70 px-3.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground shadow-sm backdrop-blur-sm">
            <span aria-hidden="true" className="size-1.5 rotate-45 bg-primary" />
            {hero.eyebrow}
          </div>

          <h1 className="max-w-5xl text-balance font-heading text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            <span className="block">
              {hero.titlePrefix} <span className="text-primary">{hero.titleAccent}</span> {hero.titleSuffix}
            </span>
            <span className="block">{hero.titleSecondLine}</span>
          </h1>

          <p className="mt-7 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {hero.subtitle}
          </p>

          <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <Button asChild size="lg" className="h-12 w-full rounded-xl px-6 text-sm sm:w-auto">
              <Link href="/sign-up">{hero.primaryAction}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 w-full rounded-xl border-border/80 bg-background/60 px-6 text-sm backdrop-blur-sm hover:bg-background/90 sm:w-auto"
            >
              <Link href="#how-it-works">{hero.secondaryAction}</Link>
            </Button>
          </div>

          <div className="survey-frame scroll-tilt relative z-10 mt-20 w-full max-w-3xl rounded-2xl border border-border/80 bg-card/70 p-2 shadow-2xl shadow-black/30 backdrop-blur-sm sm:p-3">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/videos/hero-poster.jpg"
              aria-label={hero.videoLabel}
              className="aspect-video w-full rounded-xl bg-background object-cover"
            >
              <source src="/videos/hero.webm" type="video/webm" />
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section aria-label={audienceLabel} className="border-y border-border/70 bg-card/35 px-6 py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-7 gap-y-3 text-center">
          {audiences.map((audience, index) => (
            <span key={audience} className="inline-flex items-center gap-7 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground sm:text-sm">
              {index > 0 && <span aria-hidden="true" className="size-1 rotate-45 bg-primary/70" />}
              {audience}
            </span>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">{features.eyebrow}</span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">
              {features.title}
            </h2>
          </div>

          <div className="space-y-20 sm:space-y-28">
            {features.items.map((feature, index) => {
              const Icon = featureIcons[feature.id];
              const Preview = featurePreviews[feature.id];
              const reversed = index % 2 === 1;

              return (
                <article key={feature.id} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                  <div className={reversed ? "md:order-2" : ""}>
                    <div className="mb-5 grid size-11 place-items-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                      <Icon className="size-5" strokeWidth={1.8} />
                    </div>
                    <h3 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">{feature.title}</h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                      {feature.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {feature.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-sm text-foreground/85">
                          <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={reversed ? "md:order-1" : ""}>
                    <Preview />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-y border-border/70 bg-card/25 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">{howItWorks.eyebrow}</span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">
              {howItWorks.title}
            </h2>
          </div>

          <div className="relative">
            <div aria-hidden="true" className="pointer-events-none absolute bottom-5 left-[21px] top-5 border-l border-dashed border-primary/40 md:bottom-auto md:left-[16.666%] md:right-[16.666%] md:top-[22px] md:border-l-0 md:border-t" />
            <ol className="relative grid gap-8 md:grid-cols-3 md:gap-6">
              {howItWorks.steps.map((step, index) => (
                <li key={step.title} className="relative flex gap-5 md:flex-col md:items-center md:gap-0 md:text-center">
                  <span className="relative z-10 grid size-11 shrink-0 place-items-center rounded-full border border-primary/40 bg-background font-mono text-xs text-primary shadow-[0_0_0_7px_var(--background)]">
                    0{index + 1}
                  </span>
                  <div className="pb-1 md:pt-7">
                    <h3 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">{step.title}</h3>
                    <p className="mt-3 max-w-sm text-sm leading-7 text-muted-foreground md:mx-auto sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="pricing" className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">{pricing.eyebrow}</span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">
            {pricing.title}
          </h2>
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border/80 bg-card/55 px-6 py-9 sm:px-10 sm:py-12">
            <span className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-primary">
              {pricing.placeholder}
            </span>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
              {pricing.description}
            </p>
            <Button asChild className="mt-7 h-11 rounded-xl px-5 text-sm">
              <Link href="/sign-up">{pricing.action}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="topo-bg relative isolate mx-auto flex max-w-6xl flex-col items-center overflow-hidden rounded-3xl border border-border/80 px-6 py-12 text-center sm:px-12 sm:py-16 md:flex-row md:gap-12 md:text-left">
          <Image
            src="/brand/mascot-dark.png"
            alt={closingCta.mascotAlt}
            width={280}
            height={280}
            className="relative z-10 mb-7 w-32 shrink-0 drop-shadow-[0_12px_28px_rgba(0,0,0,0.3)] sm:w-40 md:mb-0 md:w-48"
          />
          <div className="relative z-10 flex flex-col items-center md:items-start">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">{closingCta.eyebrow}</span>
            <h2 className="mt-3 max-w-2xl text-balance font-heading text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">
              {closingCta.title}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              {closingCta.description}
            </p>
            <Button asChild className="mt-7 h-11 rounded-xl px-5 text-sm">
              <Link href="/sign-up">{closingCta.action}</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/70 px-6 py-6">
        <p className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
          {footer.madeWith}
          <Heart aria-label={footer.heartLabel} className="size-4 fill-rose-500 text-rose-500" />
          {footer.by}
        </p>
      </footer>
    </main>
  );
}
