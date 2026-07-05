import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { Check, X } from "lucide-react";
import vantageLogo from "@/assets/vantage-logo.png.asset.json";
import reLogo from "@/assets/re-logo.png.asset.json";
import { Reveal, RevealText } from "@/components/reveal";
import { useParallax } from "@/hooks/use-scroll-fx";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vantage — Autonomous QA swarm for Android & mobile web" },
      {
        name: "description",
        content:
          "Vantage is an autonomous AI agent swarm for visual, functional, and accessibility testing of Android apps and mobile web — vision-capable models driving containerized Android instances.",
      },
      { property: "og:title", content: "Vantage — Autonomous QA swarm for Android & mobile web" },
      {
        property: "og:description",
        content:
          "AI-driven QA agents that watch an Android screen, decide what to do, and execute via ADB. Built by RenderException.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

const REPO_URL = "https://github.com/RenderException/Vantage";
const DASHBOARD_URL = "https://vantage-qa.vercel.app";

function Landing() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <StatStrip />
      <Features />
      <HowItWorks />
      <Architecture />
      <InputTypes />
      <Roadmap />
      <Team />
      <Footer />
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  return (
    <header className="animate-load-fade sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md" style={{ animationDelay: "0ms" }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={vantageLogo.url} alt="" className="h-7 w-7" />
          <span className="text-[0.95rem] font-semibold tracking-tight text-foreground">Vantage</span>
          <span className="hidden font-mono text-[0.68rem] uppercase tracking-[0.18em] text-meta sm:inline">
            / by RenderException
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#features" className="transition-colors hover:text-foreground">Features</a>
          <a href="#how" className="transition-colors hover:text-foreground">How it works</a>
          <a href="#architecture" className="transition-colors hover:text-foreground">Architecture</a>
          <a href="#roadmap" className="transition-colors hover:text-foreground">Roadmap</a>
          <a href="#team" className="transition-colors hover:text-foreground">Team</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-medium text-foreground transition-colors hover:border-raised hover:bg-surface-2"
          >
            <GithubIcon /> GitHub
          </a>
          <a
            href={DASHBOARD_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3.5 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-accent-ink"
          >
            Dashboard →
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  useParallax(glowRef, -0.25);
  useParallax(gridRef, 0.12);
  return (
    <section id="top" className="grid-bg relative overflow-hidden border-b border-border">
      <div ref={gridRef} className="pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_1fr] lg:py-28">
        <div>
          <div className="animate-load-fade-up" style={{ animationDelay: "80ms" }}>
            <Eyebrow>RenderException · Hackathon 2026</Eyebrow>
          </div>
          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <RevealText text="Autonomous QA swarm for" delay={150} step={55} />{" "}
            <span className="text-accent">
              <RevealText text="Android" delay={150 + 55 * 4} step={55} />
            </span>
            {" "}
            <span className="whitespace-nowrap">
              <RevealText text="&" delay={150 + 55 * 5} step={55} />{" "}
              <span className="text-violet-ink">
                <RevealText text="mobile web." delay={150 + 55 * 6} step={55} />
              </span>
            </span>
          </h1>
          <p
            className="animate-load-fade-up mt-6 max-w-[60ch] text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ animationDelay: "650ms" }}
          >
            Vantage replaces brittle, scripted UI tests with an{" "}
            <span className="text-foreground">AI-driven QA agent</span> that watches an Android screen,
            decides what to do next from a plain-English task, and executes actions via ADB — running
            in parallel across a fleet of containerized Android instances.
          </p>
          <div
            className="animate-load-fade-up mt-8 flex flex-wrap gap-3"
            style={{ animationDelay: "800ms" }}
          >
            <a
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-raised hover:bg-surface-2"
            >
              <GithubIcon /> View on GitHub
            </a>
            <a
              href={DASHBOARD_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent-ink"
            >
              Open Dashboard →
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              ["10 → 100", "concurrent sessions"],
              ["redroid", "containerized Android"],
              ["vision-model", "driven agent"],
              ["Apache-2.0", "licensed"],
            ].map(([k, v], i) => (
              <span
                key={k}
                className="animate-load-fade-up inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-[0.72rem] text-muted-foreground"
                style={{ animationDelay: `${950 + i * 90}ms` }}
              >
                <span className="font-semibold text-foreground">{k}</span>
                <span className="text-meta">·</span>
                {v}
              </span>
            ))}
          </div>
        </div>

        <div ref={glowRef} className="animate-load-glow" style={{ animationDelay: "300ms" }}>
          <SessionMock />
        </div>
      </div>
    </section>
  );
}


function SessionMock() {
  const actions = [
    { t: "00:02.1", act: "tap", detail: "(540, 1204)  “Sign in”", tone: "accent" as const },
    { t: "00:03.4", act: "wait", detail: "ui settle · Δhash 0.00", tone: "meta" as const },
    { t: "00:04.0", act: "type", detail: "email · qa+vantage@…", tone: "accent" as const },
    { t: "00:05.2", act: "type", detail: "password · ••••••••", tone: "accent" as const },
    { t: "00:06.1", act: "tap", detail: "(540, 1580)  “Continue”", tone: "accent" as const },
    { t: "00:07.8", act: "assert", detail: "home_feed visible", tone: "violet" as const },
    { t: "00:07.9", act: "done", detail: "PASS · 6 steps · 5.6s", tone: "ok" as const },
  ];
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-accent-bg via-transparent to-violet-bg blur-2xl" />
      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
        <div className="flex items-center justify-between gap-3 border-b border-border bg-background-2 px-4 py-3">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ok" />
            </span>
            <span className="font-mono text-[0.72rem] uppercase tracking-widest text-muted-foreground">
              session · running
            </span>
          </div>
          <span className="font-mono text-[0.7rem] text-meta">pixel5-android11</span>
        </div>
        <div className="space-y-4 px-5 py-5">
          <div>
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-meta">
              task_prompt
            </div>
            <div className="mt-1 text-sm text-foreground">
              Fill in the login form and verify the home feed renders.
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <MiniStat k="steps" v="6" />
            <MiniStat k="asserts" v="1" tone="violet" />
            <MiniStat k="crashes" v="0" tone="ok" />
          </div>
          <div className="rounded-lg border border-border-soft bg-background-2 p-3 font-mono text-[0.75rem]">
            {actions.map((a, i) => (
              <div
                key={i}
                className="flex items-baseline gap-3 border-b border-border-soft/60 py-1 last:border-0"
              >
                <span className="w-14 shrink-0 text-meta">{a.t}</span>
                <span
                  className={
                    "w-14 shrink-0 font-semibold " +
                    (a.tone === "violet"
                      ? "text-violet-ink"
                      : a.tone === "ok"
                      ? "text-ok"
                      : a.tone === "meta"
                      ? "text-meta"
                      : "text-accent")
                  }
                >
                  {a.act}
                </span>
                <span className="truncate text-muted-foreground">{a.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniStat({ k, v, tone }: { k: string; v: string; tone?: "ok" | "violet" }) {
  return (
    <div className="rounded-lg border border-border-soft bg-background-2 px-2 py-2">
      <div className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-meta">{k}</div>
      <div
        className={
          "mt-0.5 text-lg font-extrabold tracking-tight " +
          (tone === "violet" ? "text-violet-ink" : tone === "ok" ? "text-ok" : "text-foreground")
        }
      >
        {v}
      </div>
    </div>
  );
}

/* ---------- Stat strip ---------- */
function StatStrip() {
  const stats = [
    { k: "Concurrent sessions", v: "10 → 100", note: "single host · Kubernetes" },
    { k: "Action vocabulary", v: "7", note: "tap · swipe · type · key · wait · assert · done" },
    { k: "Agent loop steps", v: "5", note: "observe → decide → act → settle → check" },
    { k: "Session statuses", v: "7", note: "queued · booting · running · passed · failed · error · timed_out" },
  ];
  return (
    <section className="border-b border-border bg-background-2/60">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden px-6 py-10 sm:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal
            key={s.k}
            delay={i * 90}
            className="px-4 py-2 sm:border-l sm:border-border sm:first:border-l-0"
          >
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-meta">{s.k}</div>
            <div className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              {s.v}
            </div>
            <div className="mt-1 text-xs text-muted-foreground">{s.note}</div>
          </Reveal>
        ))}

      </div>
    </section>
  );
}

/* ---------- Features ---------- */
function Features() {
  const items = [
    {
      title: "AI-driven agent loop",
      body: "Captures a screenshot and UI hierarchy, sends them to a vision-capable model, and executes the returned action via ADB — from a fixed vocabulary, never raw shell.",
      tone: "accent" as const,
    },
    {
      title: "Ground-truth monitoring",
      body: "Each step independently watches adb logcat for FATAL EXCEPTION or ANR. A crash is an automatic fail regardless of what the model reports.",
      tone: "crit" as const,
    },
    {
      title: "UI settle detection",
      body: "Waits for the screen or hierarchy hash to stop changing before capturing the next frame — no fixed polling, no wasted API calls.",
      tone: "accent" as const,
    },
    {
      title: "Warm pool + clean teardown",
      body: "A standing buffer of pre-booted Android pods kills the 10–30s cold-boot cost. Pods are destroyed between runs so no state leaks.",
      tone: "violet" as const,
    },
    {
      title: "Live screen mirror",
      body: "Full-resolution stream with action overlays, tap/swipe cursor trail, zoom and fullscreen. Actions, reasoning, logs and asserts — timestamped and clickable.",
      tone: "violet" as const,
    },
    {
      title: "Manual control mode",
      body: "Hand ADB input over to a human tester for edge-case debugging, then hand control back to the agent without restarting the session.",
      tone: "accent" as const,
    },
  ];
  return (
    <section id="features" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <Eyebrow>What it does</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A QA tester that thinks — and never gets tired.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => (
            <Reveal key={f.title} delay={i * 90}>
              <article
                className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-colors hover-lift-accent"
              >
                <span
                  className={
                    "absolute inset-x-0 top-0 h-px " +
                    (f.tone === "violet"
                      ? "bg-gradient-to-r from-transparent via-violet to-transparent"
                      : f.tone === "crit"
                      ? "bg-gradient-to-r from-transparent via-crit to-transparent"
                      : "bg-gradient-to-r from-transparent via-accent to-transparent")
                  }
                />
                <h3 className="text-base font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ---------- How it works ---------- */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Observe",
      code: "adb screencap  ·  uiautomator dump",
      body: "Capture a screenshot and the UI element hierarchy. Image gives visual context; hierarchy gives precise tap targets.",
    },
    {
      n: "02",
      title: "Decide",
      code: "vision-model(image, hierarchy, task, history)",
      body: "Send everything to the model. It returns exactly one structured action from the fixed vocabulary — never raw shell.",
      tone: "violet" as const,
    },
    {
      n: "03",
      title: "Act",
      code: "input tap x y  ·  input swipe  ·  input text",
      body: "Translate the action into an ADB call and execute it on the containerized device.",
    },
    {
      n: "04",
      title: "Settle",
      code: "hash(screen) == hash(screen)ᵢ₋₁",
      body: "Wait for the UI to stop changing before the next observation — cuts wasted inference and flaky reads.",
    },
    {
      n: "05",
      title: "Ground-truth check",
      code: "adb logcat | grep FATAL EXCEPTION | ANR",
      body: "A parallel watchdog on logcat. Any crash marks the session failed immediately, regardless of what the model reports.",
      tone: "crit" as const,
    },
  ];
  return (
    <section id="how" className="border-b border-border bg-background-2/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <Eyebrow tone="violet">The agent loop</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Five steps. Repeat until the task is done — or the app crashes.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90} className="h-full">
              <div className="relative flex h-full flex-col rounded-2xl border border-border bg-surface p-5 hover-lift-accent">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-meta">{s.n}</span>
                  <span
                    className={
                      "h-2 w-2 rounded-full " +
                      (s.tone === "violet" ? "bg-violet" : s.tone === "crit" ? "bg-crit" : "bg-accent")
                    }
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{s.title}</h3>
                <code
                  className={
                    "mt-3 block rounded-md border border-border-soft bg-background-2 px-2.5 py-1.5 font-mono text-[0.68rem] leading-snug break-words " +
                    (s.tone === "violet"
                      ? "text-violet-ink"
                      : s.tone === "crit"
                      ? "text-crit"
                      : "text-accent")
                  }
                >
                  {s.code}
                </code>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ---------- Architecture ---------- */
function Architecture() {
  const diagram = `             +----------------+
    People / |  New Session   |  APK or domain + task
    CI       |  Input Form    |-----------------------+
             +----------------+                       |
                                                       v
             +----------------+               +------------------+
             |  Fleet         |<------------->|  Session         |
             |  Dashboard     |               |  Scheduler       |  (queue, warm pool,
             +----------------+               +--------+---------+   autoscaling)
                                                       |
                    +----------------------------------+----------------------------------+
                    v                                  v                                  v
             redroid pod                         redroid pod                         redroid pod   ... up to 100
             + agent sidecar                     + agent sidecar                     + agent sidecar
                    |                                  |                                  |
                    +------------------> Object storage (screenshots, video, logs)
                    +------------------> Results DB (pass/fail, traces, assertions)`;

  const components = [
    ["New Session Input", "Accept an APK upload or domain URL, plus a task description and device profile."],
    ["Session Scheduler", "Queue requests, maintain a warm pool of pre-booted Android boxes, autoscale."],
    ["Android box (redroid)", "One isolated Android instance per session — Docker or Kubernetes."],
    ["Agent sidecar", "The observe → decide → act → settle loop, running next to each Android box."],
    ["Fleet Dashboard", "Overview of every session (running, queued, passed, failed) with live thumbnails."],
    ["Storage & Results DB", "Screenshots, video, structured action logs, crash logs, final verdicts."],
  ];

  return (
    <section id="architecture" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <Eyebrow>Architecture</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            One scheduler. A fleet of containerized Androids. One agent per pod.
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="flex items-center justify-between border-b border-border bg-background-2 px-4 py-2.5">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-meta">
                vantage · topology.txt
              </span>
              <span className="font-mono text-[0.65rem] text-meta">read-only</span>
            </div>
            <pre className="overflow-x-auto px-4 py-5 font-mono text-[0.72rem] leading-relaxed text-muted-foreground">
              {diagram}
            </pre>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-3 md:grid-cols-2 md:auto-rows-fr">
          {components.map(([name, desc], i) => (
            <Reveal key={name} delay={i * 80} className="h-full">
              <div className="flex h-full items-start gap-4 rounded-xl border border-border bg-surface p-5 hover-lift-accent">
                <span className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-accent" />
                <div className="flex-1">
                  <div className="font-mono text-xs font-semibold text-foreground">{name}</div>
                  <div className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ---------- Input types ---------- */
function InputTypes() {
  return (
    <section className="border-b border-border bg-background-2/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <Eyebrow tone="violet">Input types</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Point it at an APK — or a URL.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Reveal delay={0}>
            <InputCard
              tag="APK"
              title="Native Android"
              body="Upload an Android APK. Vantage installs it on a clean, isolated Android instance and runs the task against the native app."
              code={`source_type: "apk"
source_ref:  "com.example.app.apk"
device:      "pixel5-android11"
task:        "Open app, verify login renders"`}
            />
          </Reveal>
          <Reveal delay={120}>
            <InputCard
              tag="Web domain"
              title="Mobile web"
              body="Provide a URL — Vantage tests it inside a sandboxed mobile browser, with optional login credentials."
              code={`source_type: "web"
source_ref:  "https://example.com"
device:      "chrome-mobile"
task:        "Add item to cart and check out"`}
              tone="violet"
            />
          </Reveal>
        </div>

      </div>
    </section>
  );
}

function InputCard({
  tag,
  title,
  body,
  code,
  tone,
}: {
  tag: string;
  title: string;
  body: string;
  code: string;
  tone?: "violet";
}) {
  const color = tone === "violet" ? "text-violet-ink" : "text-accent";
  const bg = tone === "violet" ? "bg-violet-bg" : "bg-accent-bg";
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-surface hover-lift">
      <div className="flex items-center justify-between border-b border-border px-6 py-4">
        <span
          className={
            "inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] " +
            bg +
            " " +
            color
          }
        >
          {tag}
        </span>
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
      </div>
      <div className="px-6 py-5">
        <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
        <pre className="mt-4 overflow-x-auto rounded-lg border border-border-soft bg-background-2 px-4 py-3 font-mono text-[0.75rem] leading-relaxed text-muted-foreground">
          {code}
        </pre>
      </div>
    </article>
  );
}

/* ---------- Roadmap ---------- */
function Roadmap() {
  const phases = [
    ["1", "Core agent", "Single redroid + agent sidecar container. Screenshot + hierarchy + ADB action loop working end-to-end for one session."],
    ["2", "Session broker", "Docker-based broker managing ~10 concurrent sessions on a single host. Queue, lifecycle, teardown."],
    ["3", "Web UI", "New Session form, Fleet Dashboard, and Session Detail view, wired to the broker API."],
    ["4", "Kubernetes port", "Port the broker to Kubernetes Jobs — one pod per session. Validate correctness before optimizing throughput."],
    ["5", "Screen capture upgrade", "Swap adb screencap for minicap/scrcpy socket streaming when ADB contention appears under load."],
    ["6", "Warm pool + autoscaling", "Add warm pool and queue-depth-driven autoscaling once cold-start latency is visible in metrics."],
    ["7", "Inference gateway", "Concurrency limits and backpressure in front of AI model calls, applied across all agents."],
  ] as const;
  return (
    <section id="roadmap" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <Eyebrow>Build plan</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Seven phases. From one working agent to a production fleet.
          </h2>
        </Reveal>
        <ol className="mt-10 border-l border-border">
          {phases.map(([n, title, body], i) => (
            <Reveal as="li" key={n} delay={i * 70} className="relative pl-8 pb-8 last:pb-0" y={16}>
              <span className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-border bg-background">
                <span className={"h-1.5 w-1.5 rounded-full " + (i < 3 ? "bg-accent" : "bg-meta")} />
              </span>
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-meta">
                  phase {n}
                </span>
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                {i < 3 && (
                  <span className="rounded-full bg-accent-bg px-2 py-0.5 font-mono text-[0.62rem] font-semibold uppercase tracking-widest text-accent">
                    in progress
                  </span>
                )}
              </div>
              <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-muted-foreground">{body}</p>
            </Reveal>
          ))}
        </ol>

      </div>
    </section>
  );
}

/* ---------- Team ---------- */
function Team() {
  return (
    <section id="team" className="border-b border-border bg-background-2/50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <Eyebrow tone="violet">The team</Eyebrow>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-6 grid gap-6 rounded-2xl border border-border bg-surface p-8 md:grid-cols-[auto_1fr] md:items-center md:gap-10 md:p-10">
            <div className="flex items-center gap-5">
              <img src={reLogo.url} alt="RenderException" className="h-16 w-16" />
              <div className="md:hidden">
                <div className="text-xl font-bold tracking-tight text-foreground">RenderException</div>
                <div className="font-mono text-xs text-meta">Hackathon 2026 · Team</div>
              </div>
            </div>
            <div>
              <div className="hidden md:block">
                <div className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-meta">
                  Hackathon 2026 · Team
                </div>
                <h3 className="mt-1 text-2xl font-bold tracking-tight text-foreground">
                  RenderException
                </h3>
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                We build tools that catch what humans miss. Vantage is our hackathon submission — a
                specialized QA agent for mobile that treats a crashed logcat like a hard stop, not a
                warning, and treats every screen as something a model can actually read.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-border bg-background-2 px-3 py-1 font-mono text-[0.7rem] text-muted-foreground">
                  Vision × containers × Android
                </span>
                <span className="rounded-full border border-border bg-background-2 px-3 py-1 font-mono text-[0.7rem] text-muted-foreground">
                  Apache-2.0
                </span>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2.5">
          <img src={vantageLogo.url} alt="" className="h-5 w-5" />
          <span className="text-sm font-semibold text-foreground">Vantage</span>
          <span className="font-mono text-[0.68rem] text-meta">
            © {new Date().getFullYear()} · A RenderException project
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <a href={REPO_URL} target="_blank" rel="noreferrer" className="hover:text-foreground">
            GitHub
          </a>
          <span className="text-meta">·</span>
          <a
            href={`${REPO_URL}/blob/main/LICENSE`}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            Apache-2.0
          </a>
          <span className="text-meta">·</span>
          <img src={reLogo.url} alt="RenderException" className="h-5 w-5" />
        </div>
      </div>
    </footer>
  );
}

/* ---------- Bits ---------- */
function Eyebrow({
  children,
  tone,
}: {
  children: React.ReactNode;
  tone?: "violet" | "crit";
}) {
  const color =
    tone === "violet" ? "text-violet-ink" : tone === "crit" ? "text-crit" : "text-accent";
  const bar = tone === "violet" ? "bg-violet" : tone === "crit" ? "bg-crit" : "bg-accent";
  return (
    <div className={"flex items-center gap-3 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] " + color}>
      <span className={"inline-block h-[2px] w-6 " + bar} />
      {children}
    </div>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.93c.58.1.79-.25.79-.56 0-.28-.01-1.01-.02-1.98-3.2.69-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.26 5.69.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.13 0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
    </svg>
  );
}
