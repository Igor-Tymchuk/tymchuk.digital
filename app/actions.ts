"use server";

type Result = { ok: boolean; error?: string };

import dotenv from "dotenv";
dotenv.config();

export async function sendContact(
  _prev: Result | null,
  formData: FormData,
): Promise<Result> {
  const name = String(formData.get("name") || "").trim();
  const contact = String(formData.get("email") || "").trim();
  const service = String(formData.get("service") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const company = String(formData.get("company") || "").trim();

  if (company) return { ok: true };
  if (!name || !contact || !message) {
    return { ok: false, error: "missing" };
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return { ok: false, error: "config" };
  }

  const files = (formData.getAll("files") as File[]).slice(0, 10);

  const text =
    `*New inquiry — TYMCHUK.DIGITAL*\n\n` +
    `*Name:* ${escapeMd(name)}\n` +
    `*Contact:* ${escapeMd(contact)}\n` +
    `*Service:* ${escapeMd(service || "—")}\n\n` +
    `*Message:*\n${escapeMd(message)}`;

  try {
    // 📩 TEXT
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
      }),
    });

    if (files.length) {
      const images: File[] = [];
      const others: File[] = [];

      for (const file of files) {
        if (file.type.startsWith("image/")) {
          images.push(file);
        } else {
          others.push(file);
        }
      }

      // =========================
      // 🖼 IMAGES (album)
      // =========================
      if (images.length) {
        const media = images.map((_, i) => ({
          type: "photo",
          media: `attach://${i}`,
        }));

        const fd = new FormData();

        for (let i = 0; i < images.length; i++) {
          const buffer = Buffer.from(await images[i].arrayBuffer());
          fd.append(String(i), new Blob([buffer]), images[i].name);
        }

        fd.append("chat_id", chatId);
        fd.append("media", JSON.stringify(media));

        await fetch(`https://api.telegram.org/bot${token}/sendMediaGroup`, {
          method: "POST",
          body: fd,
        });
      }

      // =========================
      // 📦 OTHER FILES (ZIP / AUDIO / PDF)
      // =========================
      for (const file of others) {
        const buffer = Buffer.from(await file.arrayBuffer());

        const fd = new FormData();
        fd.append("chat_id", chatId);
        fd.append("document", new Blob([buffer]), file.name);

        const res = await fetch(
          `https://api.telegram.org/bot${token}/sendDocument`,
          {
            method: "POST",
            body: fd,
          },
        );

        if (!res.ok) {
          console.log("[telegram doc error]", await res.text());
        }
      }
    }

    return { ok: true };
  } catch (err) {
    console.log("[telegram error]", (err as Error).message);
    return { ok: false, error: "network" };
  }
}

function escapeMd(s: string) {
  return s.replace(/([_*`\[\]])/g, "\\$1");
}
