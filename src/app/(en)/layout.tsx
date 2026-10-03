import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import { getDictionary } from "@/i18n";
import "@/app/globals.css";
import { InternationalizationToggleButton } from "@/components/i18n-toggle-button";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const englishDictionary = getDictionary("en");
const baseUrl = new URL("https://farsrail.com");

export const viewport: Viewport = {
  themeColor: "#03162a",
};

export const metadata: Metadata = {
  metadataBase: baseUrl,
  ...englishDictionary.metadata,
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      tr: "/tr",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["tr_TR"],
    url: "https://farsrail.com/",
    title: englishDictionary.metadata.title,
    description: englishDictionary.metadata.description,
    siteName: "Khalij Fars Rail",
    images: [
      {
        url: "/logo.webp",
        width: 400,
        height: 400,
        alt: "Khalij Fars Rail Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: englishDictionary.metadata.title,
    description: englishDictionary.metadata.description,
    images: ["/logo.webp"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Khalij Fars Rail",
  },
};

export default function RootEnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
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
