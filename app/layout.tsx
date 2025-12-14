import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/Components/Home/NavBar/ResponsiveNav";
import Provider from "@/Components/Hoc/Provider";
import Footer from "@/Components/Home/Footer/Footer";
import ScrollToTop from "@/Components/Helper/ScrollToTop";

const font = Roboto({
  weight:['100','200','300','400','500','600','700','800','900'],
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "Job portal | Landing page",
  description: "Job portal landing page using next js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} antialiased`}
      >
        <Provider>
        <ResponsiveNav/>
        {children}
        <Footer/>
        <ScrollToTop/>
        </Provider>
      </body>
    </html>
  );
}
