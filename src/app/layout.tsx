import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Libre_Baskerville } from "next/font/google";



export const metadata: Metadata = {
  title: 'ItaquaConnect | Your trusted local partner in Itaquaquecetuba',
  description: 'ItaquaConnect provides high-quality local services to the residents and businesses of Itaquaquecetuba. Visit us at Rua Campina Grande, 200.',
  openGraph: {
    "title": "ItaquaConnect - Itaquaquecetuba",
    "description": "Your trusted local business partner in São Paulo area.",
    "siteName": "ItaquaConnect",
    "type": "website"
  },
};

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${libreBaskerville.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
