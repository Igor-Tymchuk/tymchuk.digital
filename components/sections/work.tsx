"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { RevealGroup, RevealItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const images = [
  "./love-story.jpg",
  "./beauty.jpg",
  "./portfolio.jpg",
  "./lega-office.jpg",
  // "/work/vertex-labs.png",
  // "/work/lumen-ads.png",
];

export function Work() {
  const { t } = useLanguage();

  return (
    <section id="work" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t.nav.work}
          title={t.work.title}
          subtitle={t.work.subtitle}
        />

        <RevealGroup className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
          {t.work.items.map((item, i) => (
            <RevealItem key={item.title}>
              <a
                href={item.link || "#contact"}
                className="card-hover group relative block overflow-hidden rounded-2xl border border-border bg-card/50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={images[i] || "/placeholder.svg"}
                    alt={`${item.title} — ${item.cat}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <h3 className="font-heading text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-sm text-primary">{item.cat}</p>
                  </div>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-border bg-secondary/60 text-primary transition-all group-hover:glow-border group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
