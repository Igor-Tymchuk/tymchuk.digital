'use client'

import { useLanguage } from '@/components/language-provider'
import { RevealGroup, RevealItem } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function Process() {
  const { t } = useLanguage()

  return (
    <section id="process" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t.nav.process}
          title={t.process.title}
          subtitle={t.process.subtitle}
        />

        <RevealGroup className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-7 hidden h-px lg:block">
            <div className="neon-line h-full" />
          </div>
          {t.process.steps.map((step, i) => (
            <RevealItem key={step.title}>
              <div className="relative flex h-full flex-col items-center text-center lg:items-start lg:text-left">
                <div className="relative z-10 mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-primary/40 bg-card text-lg font-bold text-primary glow-border">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-heading text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
