"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-border p-12 text-center">
        <p className="font-dongle text-4xl mb-2">Thank you</p>
        <p className="text-sm text-muted-foreground">
          Your message has been received. We will get back to you.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-lg">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-sans">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors duration-300"
          placeholder="Your name"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-sans">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors duration-300"
          placeholder="your@email.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-sans">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors duration-300 resize-none"
          placeholder="How can we help?"
        />
      </div>

      <button
        type="submit"
        className="self-start px-6 py-3 bg-accent text-accent-foreground text-sm font-sans transition-opacity duration-300 hover:opacity-80"
      >
        Send message
      </button>
    </form>
  );
}
