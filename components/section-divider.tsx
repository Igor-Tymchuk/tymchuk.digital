export function SectionDivider() {
  return (
    <div className="mx-auto my-2 flex max-w-6xl items-center gap-4 px-6">
      <div className="neon-line flex-1" />
      <span className="h-1.5 w-1.5 rotate-45 bg-primary shadow-[0_0_10px_rgba(59,130,246,0.9)]" />
      <div className="neon-line flex-1" />
    </div>
  )
}
