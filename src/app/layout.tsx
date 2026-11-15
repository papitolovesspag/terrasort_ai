import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "TerraSort AI | Autonomous Critical Mineral Recovery & E-Waste Arbitrage",
  description:
    "Industrial cleantech platform leveraging multi-spectral computer vision and spectroscopic AI for real-time critical mineral recovery, black mass refining, and LME commodity arbitrage.",
  keywords: [
    "critical minerals recovery",
    "e-waste sorting AI",
    "spectroscopic sorting",
    "XRF computer vision",
    "lithium cobalt recovery",
    "battery black mass recycling",
    "LME commodity arbitrage",
    "digital battery passport",
  ],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#070B14] dark:text-slate-100 antialiased selection:bg-teal-500 selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
