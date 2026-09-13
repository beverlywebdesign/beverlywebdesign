import { NextResponse } from "next/server";
import { PROJECT_TYPES, SITE } from "@/lib/site";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  details: string;
  company_website: string;
};

function readString(value: FormDataEntryValue | null | undefined) {
  return typeof value === "string" ? value.trim() : "";
}

async function parseBody(request: Request): Promise<ContactPayload> {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    const json = (await request.json()) as Partial<ContactPayload>;
    return {
      name: (json.name ?? "").trim(),
      email: (json.email ?? "").trim(),
      phone: (json.phone ?? "").trim(),
      company: (json.company ?? "").trim(),
      projectType: (json.projectType ?? "").trim(),
      details: (json.details ?? "").trim(),
      company_website: (json.company_website ?? "").trim(),
    };
  }

  const form = await request.formData();
  return {
    name: readString(form.get("name")),
    email: readString(form.get("email")),
    phone: readString(form.get("phone")),
    company: readString(form.get("company")),
    projectType: readString(form.get("projectType")),
    details: readString(form.get("details")),
    company_website: readString(form.get("company_website")),
  };
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function wantsJson(request: Request) {
  return (request.headers.get("accept") ?? "").includes("application/json");
}

function errorResponse(request: Request, error: string, status = 400) {
  if (wantsJson(request)) {
    return NextResponse.json({ ok: false, error }, { status });
  }

  const url = new URL("/contact", request.url);
  url.searchParams.set("error", error);
  return NextResponse.redirect(url, 303);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await parseBody(request);
  } catch {
    return errorResponse(request, "Could not read the form.");
  }

  if (payload.company_website) {
    return wantsJson(request)
      ? NextResponse.json({ ok: true })
      : NextResponse.redirect(new URL("/contact?sent=1", request.url), 303);
  }

  if (!payload.name || !isEmail(payload.email)) {
    return errorResponse(request, "Please add your name and a valid email.");
  }

  const projectType = PROJECT_TYPES.includes(
    payload.projectType as (typeof PROJECT_TYPES)[number],
  )
    ? payload.projectType
    : "Something else";

  const text = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || "—"}`,
    `Company: ${payload.company || "—"}`,
    `Project type: ${projectType}`,
    "",
    payload.details || "(No project details)",
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? SITE.email;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Beverly Web Design <onboarding@resend.dev>";

  if (apiKey) {
    const resend = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: payload.email,
        subject: `New inquiry from ${payload.name}`,
        text,
      }),
    });

    if (!resend.ok) {
      const detail = await resend.text();
      console.error("Resend error", detail);
      return errorResponse(request, "The message could not be delivered. Call or email us instead.", 502);
    }
  } else {
    console.log("Contact inquiry (no RESEND_API_KEY configured)\n", text);
  }

  if (wantsJson(request)) {
    return NextResponse.json({ ok: true, delivered: Boolean(apiKey) });
  }

  return NextResponse.redirect(new URL("/contact?sent=1", request.url), 303);
}
