'use client'
import { Menu } from '@headlessui/react'
import Link from 'next/link'

const Dropdown = () => {
  return (
    <Menu>
        <Menu.Button className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path className="hover:bg-primary-400" strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
        </Menu.Button>
        <Menu.Items className="absolute flex flex-col mt-5 border-black border divide-y rounded-md text-center divide-black bg-white right-1/24 lg:right-1/10">
            <Menu.Item>
                <Link href="#" className='py-2 px-3 hover:bg-gray-200 hover:duration-200'>Se connecter</Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="#" className='py-2 px-3 hover:bg-gray-200 hover:duration-200'>S&apos;enregistrer</Link>
            </Menu.Item>
        </Menu.Items>
    </Menu>
  )
}
export default Dropdown