import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "NGKYC - Next Gen Kids & Youth Club",
  description:
    "Creativity, Innovation & Technology Hub for Kids and budding youths. Empowering the next generation through 8 specialized communities.",
  keywords:
    "kids, youth, technology, innovation, creativity, education, AI, reading, entrepreneurship, career guidance",
  authors: [{ name: "NGKYC Team" }],
  robots: "index, follow",
  openGraph: {
    title: "NGKYC - Next Gen Kids & Youth Club",
    description:
      "Creativity, Innovation & Technology Hub for Kids and budding youths",
    type: "website",
    locale: "en_US",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
