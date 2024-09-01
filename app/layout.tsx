import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://kye-portfolio.vercel.app/"),
  title: "Kye Yee",
  authors: {
    name: "Kye Yee",
  },
  description:
    "A Software Developer based in Bath, UK with expertise in both Frontend and Backend applications.",
  openGraph: {
    title: "Kye Yee",
    description:
      "A Software Developer based in Bath, UK with expertise in both Frontend and Backend applications.",
    url: "https://kye-portfolio.vercel.app/",
    siteName: "Kye Yee",
    images: "/nextjs-portfolio.png",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/portfolio-logo.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
