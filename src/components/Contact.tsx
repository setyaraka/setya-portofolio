"use client";

import { useActionState } from "react";
import { sendContact } from "@/app/actions/sendContact";
import SubmitButton from "./SubmitButton";

const initialState = { ok: false } as { ok: boolean; message?: string };

export default function Contact() {
  const media = [
    { url: "https://www.linkedin.com/in/setyapanggarakapangestu/", name: "LinkedIn" },
    { url: "https://github.com/setyaraka", name: "GitHub" },
    { url: "https://www.instagram.com/setyarakap/", name: "Instagram" },
  ];

  const [state, formAction] = useActionState(sendContact, initialState);

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#f9fafb]">
        <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl mb-6 text-center">Let’s work together</h2>
            <p className="text-center text-muted mb-8">Tell me about your project or just say hi.</p>

            <form action={formAction} className="grid gap-4">
            {/* Honeypot anti-bot */}
            <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid sm:grid-cols-2 gap-4">
                <input
                    name="name"
                    className="rounded-xl bg-white/70 dark:bg-white/[.05] border border-[#ebeef1] px-4 py-3 placeholder-gray-500"
                    placeholder="Your name"
                    required
                    maxLength={80}
                />
                <input
                    type="email"
                    name="email"
                    className="rounded-xl bg-white/70 dark:bg-white/[.05] border border-[#ebeef1] px-4 py-3 placeholder-gray-500"
                    placeholder="Email address"
                    required
                    maxLength={120}
                />
            </div>

            <textarea
                name="message"
                rows={5}
                className="rounded-xl bg-white/70 dark:bg-white/[.05] border border-[#ebeef1] px-4 py-3 placeholder-gray-500"
                placeholder="Message"
                required
                maxLength={3000}
            />

                <SubmitButton />

            {state.message && (
                <p className={`text-sm ${state.ok ? "text-green-600" : "text-red-600"}`}>{state.message}</p>
            )}
            </form>

            <div className="mt-6 flex items-center justify-center gap-4 text-sm">
            {media.map((item, idx) => (
                <a
                key={idx}
                className="hover:text-[#2563EB]"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                >
                {item.name}
                </a>
            ))}
            </div>
        </div>
    </section>
  );
}
