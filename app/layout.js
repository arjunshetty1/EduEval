import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EduEval",
  description: "Avancing Academic Evaluation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider>
        <Header />
        <main>{children}</main>
        <Footer />
      </ClerkProvider>
    </html>
  );
}
