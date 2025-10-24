import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
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
      <body className={`${instrumentSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
