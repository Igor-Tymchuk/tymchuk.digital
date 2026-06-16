"use client";

import { Check } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { RevealGroup, RevealItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

export function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t.nav.pricing}
          title={t.pricing.title}
          subtitle={t.pricing.subtitle}
        />

        <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.pricing.plans.map((plan, i) => {
            const featured = i === 1;
            return (
              <RevealItem key={plan.name}>
                <div
                  className={cn(
                    "card-hover relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 pt-[45px]",
                    featured
                      ? "border-primary/50 bg-card glow-border"
                      : "border-border bg-card/50",
                  )}
                >
                  {featured && (
                    <>
                      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
                      <span className="absolute right-5 top-5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground btn-glow">
                        {t.pricing.popular}
                      </span>
                    </>
                  )}
                  <h3 className="font-heading text-lg font-semibold">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {plan.desc}
                  </p>
                  <div className="mt-5 flex items-end gap-1.5">
                    <span className="font-heading text-4xl font-extrabold tracking-tight">
                      {plan.price}
                    </span>
                  </div>
                  <span className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {t.pricing.period}
                  </span>

                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                          <Check className="h-3 w-3" />
                        </span>
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={cn(
                      "mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all hover:scale-[1.03]",
                      featured
                        ? "bg-primary text-primary-foreground btn-glow"
                        : "border border-border bg-secondary/60 text-foreground hover:border-primary/50",
                    )}
                  >
                    {t.pricing.cta}
                  </a>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
