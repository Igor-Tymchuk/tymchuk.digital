'use client'

import { Quote, Star } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { RevealGroup, RevealItem } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function Reviews() {
  const { t } = useLanguage()

  return (
    <section id="reviews" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t.nav.reviews}
          title={t.reviews.title}
          subtitle={t.reviews.subtitle}
        />

        <RevealGroup className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {t.reviews.items.map((item) => (
            <RevealItem key={item.name}>
              <figure className="card-hover relative flex h-full flex-col rounded-2xl border border-border bg-card/50 p-7">
                <Quote className="mb-4 h-8 w-8 text-primary/40" />
                <blockquote className="flex-1 text-pretty leading-relaxed text-foreground/90">
                  {item.quote}
                </blockquote>
                <div className="mt-5 flex items-center gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <figcaption className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 font-heading font-bold text-primary">
                    {item.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{item.name}</span>
                    <span className="block text-xs text-muted-foreground">
                      {item.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
