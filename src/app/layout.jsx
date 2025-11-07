import { Instrument_Sans, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto-sans",
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
      <body className={`${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
