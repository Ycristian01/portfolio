import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { headers } from "next/headers";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/site-config";
import { getContent } from "@/i18n/get-content";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

async function getLocale() {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") ?? "/";
  return pathname.startsWith("/es") ? "es" : "en";
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const content = await getContent(locale);

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: content.ui.metaTitle,
      template: `%s | ${content.personal.name}`,
    },
    description: content.ui.metaDescription,
    alternates: {
      canonical: locale === "es" ? `${siteConfig.url}/es` : siteConfig.url,
      languages: {
        en: siteConfig.url,
        es: `${siteConfig.url}/es`,
      },
    },
    openGraph: {
      type: "website",
      url: locale === "es" ? `${siteConfig.url}/es` : siteConfig.url,
      title: content.ui.metaTitle,
      description: content.ui.metaDescription,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: content.ui.metaTitle,
      description: content.ui.metaDescription,
      images: [siteConfig.ogImage],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  const content = await getContent(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: content.personal.name,
    url: siteConfig.url,
    email: content.personal.email,
    jobTitle: content.personal.title,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barranquilla",
      addressCountry: "CO",
    },
    sameAs: [content.personal.github, content.personal.linkedin],
  };

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="dot-grid" aria-hidden="true" />
          <Navbar firstName={content.personal.firstName} />
          <main className="relative z-10 flex-1 pt-16">{children}</main>
          <Footer
            name={content.personal.name}
            email={content.personal.email}
            github={content.personal.github}
            linkedin={content.personal.linkedin}
          />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
