import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Link from "next/link";
import "@/app/globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "404 - Page Not Found | Khalij Fars Rail",
  description: "The requested page was not found.",
};

export default function NotFound() {
  return (
    <html lang="en" className={`${roboto.variable} h-full antialiased`}>
      <body className="h-full flex items-center justify-center bg-primary text-white p-6">
        <div className="flex flex-col items-center gap-4 text-center max-w-md">
          <span className="text-secondary text-5xl font-black">404</span>
          <h1 className="text-2xl font-bold uppercase tracking-wider">
            Page Not Found
          </h1>
          <p className="text-white/70 text-sm">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/"
            className="mt-4 px-6 py-2.5 rounded-xl border border-secondary text-secondary font-semibold text-sm hover:bg-secondary/10 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </body>
    </html>
  );
}
