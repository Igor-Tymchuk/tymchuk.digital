'use client'

import { Gauge, Layers, Sparkles, Target } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { RevealGroup, RevealItem } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const icons = [Gauge, Sparkles, Target, Layers]

export function Features() {
  const { t } = useLanguage()

  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={t.features.title} subtitle={t.features.subtitle} />

        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.features.items.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <RevealItem key={item.title}>
                <div className="card-hover group relative h-full overflow-hidden rounded-2xl border border-border bg-card/50 p-6">
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary glow-border">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </RevealItem>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
