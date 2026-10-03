import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import { getDictionary } from "@/i18n";
import "@/app/globals.css";
import { InternationalizationToggleButton } from "@/components/i18n-toggle-button";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const turkishDictionary = getDictionary("tr");
const baseUrl = new URL("https://farsrail.com");

export const viewport: Viewport = {
  themeColor: "#03162a",
};

export const metadata: Metadata = {
  metadataBase: baseUrl,
  ...turkishDictionary.metadata,
  alternates: {
    canonical: "/tr",
    languages: {
      en: "/",
      tr: "/tr",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
    url: "https://farsrail.com/tr",
    title: turkishDictionary.metadata.title,
    description: turkishDictionary.metadata.description,
    siteName: "Khalij Fars Rail",
    images: [
      {
        url: "/logo.webp",
        width: 400,
        height: 400,
        alt: "Khalij Fars Rail Logosu",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: turkishDictionary.metadata.title,
    description: turkishDictionary.metadata.description,
    images: ["/logo.webp"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Khalij Fars Rail",
  },
};

export default function TurkishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      dir="ltr"
      className={`${roboto.variable} h-full overflow-hidden antialiased`}
    >
      <body className="h-full overflow-hidden">
        {children}
        <InternationalizationToggleButton />
      </body>
    </html>
  );
}
