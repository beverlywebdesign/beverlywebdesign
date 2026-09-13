"use client";

import { FormEvent, useEffect, useState } from "react";
import { PROJECT_TYPES } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("sent") === "1") {
      setStatus("success");
      setMessage("Thanks. We have the details and will follow up shortly.");
    }
    if (params.get("error")) {
      setStatus("error");
      setMessage(params.get("error") || "Unable to send right now.");
    }
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const payload = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!response.ok || !payload?.ok) {
        throw new Error(payload?.error || "Something went wrong. Please try again.");
      }

      form.reset();
      setStatus("success");
      setMessage("Thanks. We have the details and will follow up shortly.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send right now.");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      action="/api/contact"
      method="POST"
      className="rounded-[18px] bg-paper-elevated p-6 shadow-card sm:p-8"
      noValidate
    >
      <p className="kicker text-signal">Or send the details</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="field-label">Name</span>
          <input className="field-input" name="name" type="text" placeholder="Your name" required />
        </label>
        <label className="block">
          <span className="field-label">Email</span>
          <input
            className="field-input"
            name="email"
            type="email"
            placeholder="you@company.com"
            required
          />
        </label>
        <label className="block">
          <span className="field-label">Phone</span>
          <input className="field-input" name="phone" type="tel" placeholder="773-…" />
        </label>
        <label className="block">
          <span className="field-label">Company</span>
          <input className="field-input" name="company" type="text" placeholder="Business name" />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="field-label">Project type</span>
        <select className="field-input" name="projectType" defaultValue="New website">
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-4 block">
        <span className="field-label">Project details</span>
        <textarea
          className="field-input"
          name="details"
          placeholder="What do you need built?"
          rows={5}
        />
      </label>

      <div className="hidden" aria-hidden="true">
        <label>
          Company website
          <input name="company_website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        className="btn btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send"}
      </button>

      {message ? (
        <p
          className={`mt-4 text-[15px] ${status === "error" ? "text-signal-deep" : "text-mute"}`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
