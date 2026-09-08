import { Inter_Tight } from "next/font/google";
import "./globals.css";
import SmoothScrollWrapper from "./smooth-scroll";
import Header from "@/components/header";
import Footer from "@/components/footer";

const InterTight = Inter_Tight({
  variable: "--font-InterTight-sans",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://bunyodoptom.com"), // haqiqiy domeningizga almashtiring
  title: {
    default: "Bunyod Optom | Distribyutorlik firmasi",
    template: "%s | Bunyod Optom",
  },
  description:
    "Bunyod Optom — Xorazm viloyatidagi ulgurji korxonalarga distribyutsiya va marketing xizmatlarini taklif etuvchi kompaniya.",
  keywords: [
    "Bunyod Optom",
    "distribyutorlik",
    "Xorazm",
    "ulgurji savdo",
    "marketing xizmatlari",
  ],
  openGraph: {
    title: "Bunyod Optom | Distribyutorlik firmasi",
    description:
      "Xorazm viloyatidagi ulgurji korxonalarga distribyutsiya va marketing xizmatlari.",
    url: "https://bunyodoptom.com",
    siteName: "Bunyod Optom",
    locale: "uz_UZ",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default async function LocaleLayout({ children }) {
  return (
    <html lang="en">
      <SmoothScrollWrapper>
        <body className={`${InterTight.variable} antialiased`}>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </SmoothScrollWrapper>
    </html>
  );
}
