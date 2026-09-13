import type { Metadata } from "next";
import { IBM_Plex_Mono, Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SITE } from "@/lib/site";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const description =
  "We design and build websites for Chicago businesses. Fast, clear, and set up so the right people can find you and get in touch.";

export const metadata: Metadata = {
  metadataBase: new URL("https://beverlywebdesign.com"),
  title: {
    default: "Chicago Web Design | Beverly Web Design",
    template: "%s | Beverly Web Design",
  },
  description,
  keywords: ["Chicago web design", "Beverly Web Design", "AI workflows", "small business websites"],
  authors: [{ name: SITE.name }],
  openGraph: {
    title: "Chicago Web Design | Beverly Web Design",
    description,
    url: "https://beverlywebdesign.com",
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chicago Web Design | Beverly Web Design",
    description,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${plusJakarta.variable} ${ibmPlexMono.variable}`}
    >
      <body className="min-h-screen bg-paper font-ui text-ink antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
