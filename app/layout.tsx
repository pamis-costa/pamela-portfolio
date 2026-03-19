import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pâmela | Portfólio",
  description: "Pâmela é uma estudante de TI e futura desenvolvedora.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* VERDE CLARO */}
        <div className="bg-[#dcfce7] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#166534]"></div>

        {/*VERDE MENTA/ESMERALDA */}
        <div className="bg-[#d1fae5] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#064e3b]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        {/* 🐈 GATINHO GLOBAL AQUI 👇 */}
        <div className="fixed bottom-0 left-0 w-full pointer-events-none z-50 overflow-hidden">
          <img 
            src="cat.gif" 
            alt="Gatinho andando" 
            className="fixed w-16 h-16 pointer-events-none z-[-1] mix-blend-multiply animate-walk-cat opacity-80"
          />
        </div>
        <Analytics />
      </body>
    </html>
  );
}