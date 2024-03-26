'use client'
import Link from "next/link"
import Dropdown from "./navbar/Dropdown"
import { usePathname } from "next/navigation"

const links = [
  {
    href: "#a-propos",
    text: "A propos"
  },
  {
    href: "#fonctionnement",
    text: "Le fonctionnement"
  },
  {
    href: "#nous-contacter",
    text: "Nous contacter"
  },
]

const Navbar = () => {
  const page = usePathname()

  return (
    <div className="navbar sticky top-0 z-50 bg-white w-full py-3 shadow-md">
      <div className="content w-11/12 lg:w-4/5 mx-auto flex items-center justify-between">
        <div className="title text-primary-400 text-xl sm:text-3xl">I LOST IT</div>
        {
          !page.includes("auth") &&
          <div className="navigation flex items-center space-x-3">
            <div className="links hidden md:flex items-center space-x-3">
              {
                links.map((link) => (
                  <Link href={link.href} key={link.href} className="after:content-[''] after:bg-primary-400 after:w-0 after:h-0.5 after:block hover:after:w-full hover:after:duration-200">{link.text}</Link>
                ))
              }
            </div>
              <div className="auth-btns max-lg:hidden space-x-3">
                <Link href="/auth?r=login" className="bg-primary-400 text-white py-2 px-3 hover:bg-primary-600 hover:duration-200">Se connecter</Link>
                <Link href="/auth?r=register" className="bg-primary-400 text-white py-2 px-3 hover:bg-primary-600 hover:duration-200">S&apos;enregistrer</Link>
              </div>
              <div className="dropdown lg:hidden">
                <Dropdown/>
              </div>
          </div>
        }
        {
          page.includes("auth") &&
          <div className="back">
            <Link href="/">{"< Retour"}</Link>
          </div>
        }
      </div>
    </div>
  )
}
export default Navbar