import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['400', '700'],
  variable: "--font-roboto",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neon Code Shortcut",
  description: "All my important links in one place - social media, projects, and contacts information.",
  keywords: [
    "linktree",
    "shortcut",
    "links",
    "neon",
    "code",
    "social",
    "media",
    "projects",
    "contacts",
    "github",
    "twitter",
    "linkedin",
    "instagram",
    "neoncode",
    "web developer"
  ],
  authors: [{name: "Neon Code", url:"https://neoncode.my.id"}],
  creator: "Neon Code",
  publisher: "Neon Code",
  metadataBase: new URL("https://neoncode.my.id"),
  icons: {
    icon: "/neon.png",
    shortcut: "/neon.png",
    apple: "/neon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/neon.png",
      }
    ]
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${roboto.variable} ${robotoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
