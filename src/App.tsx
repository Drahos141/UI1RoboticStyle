import { useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  Bot,
  ChevronRight,
  Cpu,
  Gauge,
  Radar,
  ShieldCheck,
} from 'lucide-react'

import { Badge } from './components/ui/badge'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Progress } from './components/ui/progress'
import { Separator } from './components/ui/separator'

const navigation = [
  { label: 'Overview', href: '#overview' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Reports', href: '#reports' },
  { label: 'Protocol', href: '#protocol' },
  { label: 'Contact', href: '#contact' },
] as const

const capabilities = [
  {
    icon: Cpu,
    title: 'Automation cells',
    description: 'Shadcn-styled operational views for service desks, factories, and AI-supported delivery teams.',
  },
  {
    icon: ShieldCheck,
    title: 'Governance ready',
    description: 'Official-looking status panels and controlled workflows designed for enterprise stakeholders.',
  },
  {
    icon: Radar,
    title: 'Realtime insight',
    description: 'Monitored reports, deployment confidence signals, and robot-inspired command visuals in one place.',
  },
] as const

const protocol = [
  'Audit business goals and current delivery bottlenecks.',
  'Design a control-room style experience for teams and leadership.',
  'Ship a simple reporting layer with fast operational feedback.',
] as const

const reports = {
  operations: {
    title: 'Operations pulse',
    description: 'Daily health snapshot for infrastructure, service continuity, and automated workflows.',
    stats: [
      { label: 'SLA compliance', value: '99.94%', progress: 100 },
      { label: 'Bot coverage', value: '74%', progress: 74 },
      { label: 'Escalation response', value: '04m 12s', progress: 84 },
    ],
    highlights: ['12 live clients tracked', '2 maintenance windows', '0 critical incidents'],
  },
  security: {
    title: 'Security command',
    description: 'Focused operational board for anomaly monitoring, approvals, and incident coordination.',
    stats: [
      { label: 'Threat queue cleared', value: '96%', progress: 96 },
      { label: 'Patch cadence', value: '48h', progress: 82 },
      { label: 'Policy conformance', value: '91%', progress: 91 },
    ],
    highlights: ['4 policy exceptions reviewed', '1 planned hardening sprint', 'Continuous endpoint posture'],
  },
  delivery: {
    title: 'Delivery report',
    description: 'Executive-facing summary for releases, readiness, and roadmap alignment.',
    stats: [
      { label: 'Sprint predictability', value: '88%', progress: 88 },
      { label: 'Automated verification', value: '67%', progress: 67 },
      { label: 'Stakeholder visibility', value: 'Full sync', progress: 93 },
    ],
    highlights: ['3 active transformation tracks', '7 launch milestones scheduled', 'Weekly board-ready export'],
  },
} as const

type ReportKey = keyof typeof reports

function App() {
  const [activeReport, setActiveReport] = useState<ReportKey>('operations')
  const currentReport = reports[activeReport]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#overview" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em]">
            <span className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5">
              <Bot className="size-5" />
            </span>
            UI1 Robotic Style
          </a>
          <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <Button href="#contact" size="sm">
            Book briefing
          </Button>
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-8 lg:px-8 lg:py-10">
        <section
          id="overview"
          className="grid gap-8 overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 p-8 shadow-2xl shadow-black/40 lg:grid-cols-[1.2fr_0.8fr] lg:p-12"
        >
          <div className="space-y-6">
            <Badge variant="outline">Official monochrome interface</Badge>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Robotic presentation layer for modern IT operations.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
                A polished black-and-white command site that introduces your IT business, guides visitors through your
                menu sections, and demonstrates live-looking report content with simple interactive controls.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="#reports">
                Open command board
                <ArrowRight className="size-4" />
              </Button>
              <Button href="#capabilities" variant="outline">
                View capabilities
              </Button>
            </div>
            <div className="grid gap-4 pt-4 text-sm text-zinc-300 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-semibold text-white">24/7</p>
                <p className="mt-1">Monitoring-grade presentation for managed services.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-semibold text-white">B/W</p>
                <p className="mt-1">High-contrast official styling with crisp layout structure.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-semibold text-white">3 views</p>
                <p className="mt-1">Operations, security, and delivery report examples.</p>
              </div>
            </div>
          </div>

          <Card className="border-white/10 bg-white/5">
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <CardTitle>Executive snapshot</CardTitle>
                  <CardDescription>Prepared for leadership review</CardDescription>
                </div>
                <Gauge className="size-5 text-zinc-400" />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Service readiness</p>
                  <p className="mt-3 text-3xl font-semibold text-white">98%</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Board reporting</p>
                  <p className="mt-3 text-3xl font-semibold text-white">Weekly</p>
                </div>
              </div>
              <Separator decorative />
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-400">Automation orchestration</span>
                  <span className="font-medium text-white">84%</span>
                </div>
                <Progress aria-label="Automation orchestration progress" value={84} />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-400">Incident visibility</span>
                  <span className="font-medium text-white">92%</span>
                </div>
                <Progress aria-label="Incident visibility progress" value={92} />
              </div>
              <div className="rounded-2xl border border-dashed border-white/15 bg-black/50 p-4 text-sm text-zinc-300">
                Minimal interaction included: visitors can switch report modes below to preview different operational
                content without leaving the landing page.
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="capabilities" className="grid gap-4 lg:grid-cols-[0.65fr_1.35fr]">
          <Card className="border-white/10 bg-zinc-950">
            <CardHeader>
              <Badge variant="secondary">Menu section</Badge>
              <CardTitle className="mt-3">Business interface</CardTitle>
              <CardDescription>
                Designed for IT consultancies, managed platforms, automation vendors, and transformation teams.
              </CardDescription>
            </CardHeader>
          </Card>

          <div className="grid gap-4 md:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon

              return (
                <Card key={item.title} className="border-white/10 bg-zinc-950">
                  <CardHeader>
                    <span className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                      <Icon className="size-5 text-white" />
                    </span>
                    <CardTitle className="mt-4">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </section>

        <section id="reports" className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="border-white/10 bg-zinc-950">
            <CardHeader className="space-y-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <Badge variant="outline">Interactive reports</Badge>
                  <CardTitle className="mt-3">Command board preview</CardTitle>
                  <CardDescription>Switch between sample views to see how the page can present report content.</CardDescription>
                </div>
                <BarChart3 className="size-5 text-zinc-400" />
              </div>
              <div className="flex flex-wrap gap-2">
                {(Object.keys(reports) as ReportKey[]).map((key) => (
                  <Button
                    key={key}
                    type="button"
                    variant={activeReport === key ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setActiveReport(key)}
                  >
                    {reports[key].title}
                  </Button>
                ))}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-black/40 p-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-white">{currentReport.title}</h2>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">{currentReport.description}</p>
                  </div>
                  <Badge variant="secondary">Live demo mode</Badge>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {currentReport.stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">{stat.label}</p>
                      <p className="mt-3 text-2xl font-semibold text-white">{stat.value}</p>
                      <Progress className="mt-4" aria-label={stat.label} value={stat.progress} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {currentReport.highlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-zinc-300">
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4">
            <Card className="border-white/10 bg-zinc-950">
              <CardHeader>
                <Badge variant="secondary">Protocol</Badge>
                <CardTitle className="mt-3">Delivery sequence</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {protocol.map((step, index) => (
                  <div key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-sm font-semibold text-white">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-6 text-zinc-300">{step}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-zinc-950">
              <CardHeader>
                <CardTitle>Visitor path</CardTitle>
                <CardDescription>Each menu link leads to a compact section built for clear business storytelling.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-zinc-300">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-white/20 hover:bg-white/[0.05]"
                  >
                    {item.label}
                    <ChevronRight className="size-4 text-zinc-500" />
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="protocol" className="grid gap-4 md:grid-cols-3">
          <Card className="border-white/10 bg-zinc-950">
            <CardHeader>
              <CardTitle>Official visual rhythm</CardTitle>
              <CardDescription>
                Ordered spacing, framed cards, and high-contrast typography give the page a formal robotic character.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-white/10 bg-zinc-950">
            <CardHeader>
              <CardTitle>Simple business functions</CardTitle>
              <CardDescription>
                Report switching, anchor-based navigation, and compact CTAs keep the site presentational yet useful.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-white/10 bg-zinc-950">
            <CardHeader>
              <CardTitle>Ready for extension</CardTitle>
              <CardDescription>
                The structure can be expanded into contact forms, client dashboards, or deeper service pages later.
              </CardDescription>
            </CardHeader>
          </Card>
        </section>

        <section id="contact">
          <Card className="border-white/10 bg-white text-black">
            <CardContent className="flex flex-col gap-5 p-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium uppercase tracking-[0.26em] text-zinc-600">Contact section</p>
                <h2 className="text-3xl font-semibold tracking-tight">Present your IT business like a control room.</h2>
                <p className="max-w-2xl text-sm leading-6 text-zinc-700">
                  Use this landing page as a premium starting point for reports, automation showcases, and executive
                  briefings.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="mailto:hello@ui1roboticstyle.example">hello@ui1roboticstyle.example</Button>
                <Button href="#overview" variant="outline">
                  Back to top
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}

export default App
