"use client";

import { CheckCircle2, Loader2, Send, X } from "lucide-react";
import {
  useActionState,
  useEffect,
  useRef,
  useState,
  useTransition,
} from "react";
import { sendContact } from "@/app/actions";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, User, MessageSquare } from "lucide-react";

export function Contact() {
  const { t } = useLanguage();
  const [state, formAction] = useActionState(sendContact, null);

  const formRef = useRef<HTMLFormElement>(null);

  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);

  const [isPending, startTransition] = useTransition();
  const [service, setService] = useState("");
  useEffect(() => {
    if (state?.ok) {
      formRef.current?.reset();
      setFiles([]);
    }
  }, [state]);

  const inputClass =
    "h-12 w-full rounded-2xl border border-border/60 bg-background/40 px-4 text-sm text-foreground backdrop-blur-sm transition-all duration-200 placeholder:text-muted-foreground focus:border-primary focus:bg-background/70 focus:ring-4 focus:ring-primary/10";
  // 📎 add files with fake loader
  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files || []);

    setUploading(true);

    setTimeout(() => {
      setFiles((prev) => {
        const merged = [...prev, ...selected];

        // remove duplicates by name + limit 10
        const unique = merged.filter(
          (file, index, self) =>
            index === self.findIndex((f) => f.name === file.name),
        );

        return unique.slice(0, 10);
      });

      setUploading(false);
    }, 400);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!service) {
      return;
    }

    const formData = new FormData(e.currentTarget);

    files.forEach((file) => {
      formData.append("files", file);
    });

    startTransition(() => {
      formAction(formData);
    });
  };
  useEffect(() => {
    if (state?.ok) {
      formRef.current?.reset();
      setFiles([]);
      setService("");
    }
  }, [state]);
  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow={t.nav.contact}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <Reveal>
          <div
            className="
    relative overflow-hidden
    rounded-4xl
    border border-border/50
    bg-card/50
    p-6 sm:p-9
    backdrop-blur-xl
    shadow-2xl shadow-black/5
  "
          >
            {" "}
            {state?.ok ? (
              <div className="flex flex-col items-center gap-4 py-10 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-primary/15 text-primary">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <p className="text-foreground">{t.contact.success}</p>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                {/* honeypot */}
                <input
                  type="text"
                  name="company"
                  className="hidden"
                  autoComplete="off"
                />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                    <input
                      name="name"
                      required
                      placeholder={t.contact.name}
                      className={`${inputClass} pl-11`}
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                    <input
                      name="email"
                      required
                      placeholder={t.contact.email}
                      className={`${inputClass} pl-11`}
                    />
                  </div>
                </div>
                <Select
                  value={service}
                  onValueChange={(value) => setService(value ?? "")}
                >
                  <SelectTrigger className={`${inputClass} min-h-12`}>
                    <SelectValue placeholder={t.contact.service} />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl border-border bg-card">
                    <SelectGroup>
                      {t.contact.services.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <input type="hidden" name="service" value={service} />
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder={t.contact.message}
                  className="w-full rounded-2xl border border-border/60 bg-background/40 px-4 py-3 text-sm text-foreground backdrop-blur-sm transition-all duration-200 placeholder:text-muted-foreground focus:border-primary focus:bg-background/70 focus:ring-4 focus:ring-primary/10 resize-none"
                />
                {/* FILE UPLOAD */}
                <div className="flex flex-col gap-3">
                  <input
                    type="file"
                    id="files"
                    multiple
                    accept="image/*,audio/*,.zip,.rar,.7z,.pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleFiles}
                  />

                  <label
                    htmlFor="files"
                    className="
      group flex min-h-36 cursor-pointer flex-col
      items-center justify-center gap-3
      rounded-2xl border border-dashed
      border-border bg-background/30 p-6
      text-center transition-all duration-200
      hover:border-primary/50
      hover:bg-primary/5
    "
                  >
                    <div
                      className="
        flex h-12 w-12 items-center justify-center
        rounded-full bg-primary/10 text-xl
        transition-transform group-hover:scale-105
      "
                    >
                      📎
                    </div>

                    <div className="space-y-1">
                      <p className="font-medium text-foreground">
                        {t.contact.attachFiles}
                      </p>

                      <p className="text-xs text-muted-foreground">
                        JPG, PNG, WEBP, PDF, DOC, DOCX, ZIP, RAR, 7Z, Audio
                      </p>

                      <p className="text-xs text-muted-foreground">
                        {t.contact.maxFiles}
                      </p>
                    </div>
                  </label>

                  {uploading && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Loader2 className="h-3 w-3 animate-spin" />
                      Processing files...
                    </div>
                  )}

                  {files.length > 0 && (
                    <div className="space-y-2">
                      <div className="text-xs text-muted-foreground">
                        {t.contact.selectedFiles} {files.length}/10
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {files.map((file, i) => (
                          <div
                            key={i}
                            className="
              flex items-center gap-2
              rounded-full border border-border
              bg-background/70 px-3 py-1.5
              text-xs
            "
                          >
                            <span className="max-w-[180px] truncate">
                              {file.name}
                            </span>

                            <span className="text-muted-foreground">
                              {(file.size / 1024 / 1024).toFixed(1)}MB
                            </span>

                            <button
                              type="button"
                              onClick={() => removeFile(i)}
                              className="
                rounded-full p-0.5
                transition-colors
                hover:bg-red-500/10
                hover:text-red-500
              "
                            >
                              <X className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                {state && !state.ok && (
                  <p className="text-sm text-destructive">{t.contact.error}</p>
                )}
                <button
                  type="submit"
                  disabled={isPending}
                  className="
    group mt-2 inline-flex h-12 items-center
    justify-center gap-2 rounded-2xl
    bg-primary px-6 font-semibold
    text-primary-foreground
    transition-all duration-300
    hover:-translate-y-0.5
    hover:shadow-lg
    hover:shadow-primary/20
    disabled:pointer-events-none
    disabled:opacity-60
  "
                >
                  {isPending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      {t.contact.sending}
                    </>
                  ) : (
                    <>
                      {t.contact.submit}
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>{" "}
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
