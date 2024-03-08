import type { Metadata } from "next"
import { Poppins } from "next/font/google"

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
    <html lang="fr">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout