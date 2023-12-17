import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EduEval",
  description: "Avancing Academic Evaluation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
      <main>{children}</main>
    </html>
  );
}

{
  /* <html lang="en">
      <Header />
      <main>{children}</main>
      <Footer />
    </html> */
}
