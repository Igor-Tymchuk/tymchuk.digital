'use client'

import { LANGS } from '@/lib/i18n'
import { useLanguage } from '@/components/language-provider'
import { cn } from '@/lib/utils'

export function LanguageSwitch({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage()

  return (
    <div
      className={cn(
        'flex items-center gap-0.5 rounded-full border border-border bg-secondary/60 p-0.5',
        className,
      )}
    >
      {LANGS.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={cn(
            'rounded-full px-2.5 py-1 text-xs font-medium transition-all',
            lang === l.code
              ? 'bg-primary text-primary-foreground btn-glow'
              : 'text-muted-foreground hover:text-foreground',
          )}
          aria-pressed={lang === l.code}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}
