import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://admyra.in"),
  title: "ADMYRA — Digitally Enabled Real Employment | Learn. Train. Get Employed.",
  description:
    "ADMYRA bridges education and employment through industry-focused training, employability development, corporate connections, and placement support for students, colleges, and companies.",
  keywords: [
    "employability training",
    "placement support",
    "student career development",
    "college placement partner",
    "campus recruitment",
    "job-ready students",
    "corporate hiring",
  ],
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/icon.png",
    shortcut: "/icon.png",
  },
  openGraph: {
    title: "ADMYRA — Digitally Enabled Real Employment",
    description: "Bridging the Gap Between Education & Employment. India's premier employability ecosystem.",
    type: "website",
    url: "https://admyra.in",
    siteName: "ADMYRA",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "ADMYRA Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-slate-900 bg-white selection:bg-amber-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
