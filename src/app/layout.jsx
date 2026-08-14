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
  title: "BUNYOD OPTOM | DISTRIBYOTORLIK FIRMASI | ДИСТРИБЬЮТЕРСКАЯ ФИРМА",
  description:
    "Kompaniyamiz Xorazm viloyatidagi turli ulgurji korxonalarga distribyutsiya va marketing xizmatlarini taklif etadi!",
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
