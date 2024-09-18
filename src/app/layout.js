import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Império Pet | Seu plano amigo",
  description: "Proporcionamos a cada pet o amor e cuidado que eles merecem.",
  icons: {
    icon:['logo.svg?v=4']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><link href="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.css" rel="stylesheet" /></head>
      <body className={inter.className}>{children}
      <script defer src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
