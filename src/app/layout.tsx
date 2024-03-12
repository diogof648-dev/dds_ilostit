import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import Navbar from "@/components/Navbar"
import "@/styles/main.css"

const poppins = Poppins({
  weight: "400",
  style: "normal",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "I Lost It",
  description: "Web application for CPNV students.",
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="fr" className="scroll-smooth scroll-pt-16">
      <body className={poppins.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}

export default RootLayout