import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title:
    "Flowrise | Produtividade que se adapta ao seu ritmo natural e bem-estar",
  description:
    "Descubra o Flowrise: a ferramenta que harmoniza produtividade e bem-estar. Organize tarefas, hábitos e energia no seu ritmo. Experimente grátis e transforme sua rotina!",
  keywords:
    "produtividade personalizada, gestão de tarefas no seu ritmo, ferramenta de bem-estar e produtividade, organização de tarefas com energia natural, agendamento inteligente, temporizador Pomodoro integrado, análises de produtividade, autocuidado e foco, Flowrise app, produtividade sem esforço",
  openGraph: {
    images: "/og-image.png",
  },
};

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${nunito.variable} ${nunitoSans.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <div className="fixed inset-0 z-[-1] bg-gradient-to-tr from-emerald-50 to-cyan-50 opacity-50" />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
