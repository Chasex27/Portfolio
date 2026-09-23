import { Send } from "lucide-react";

export default function Contact() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16">
      <p className="eyebrow">~/contact</p>
      <h1 className="mt-3 text-3xl font-semibold">Get in touch</h1>
      <p className="mt-3 max-w-lg text-sm leading-6 text-[var(--muted)]">
        Homelab ideas, networking questions, or just want to connect — send a message below.
      </p>

      {/* TODO: set the form action to your form backend (e.g. formsubmit.co, Formspree, web3forms) */}
      <form
        method="POST"
        action=""
        className="card mt-8 flex flex-col gap-5 p-7"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-mono text-xs text-[var(--muted)]">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Doe"
            className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 text-sm text-[var(--ink)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-mono text-xs text-[var(--muted)]">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@example.com"
            className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 text-sm text-[var(--ink)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="font-mono text-xs text-[var(--muted)]">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="What's on your mind?"
            className="resize-none rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 text-sm text-[var(--ink)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
          />
        </div>

        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-[#171c22] transition hover:opacity-90"
        >
          Send message <Send size={15}/>
        </button>
      </form>
    </main>
  );
}
