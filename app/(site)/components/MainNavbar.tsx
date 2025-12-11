'use client'

import Image from 'next/image'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import MobileMenu from './Responsive'

export default function MainNavbar() {
	const pathname = usePathname()
	const [open, setOpen] = useState(false)

	const linkClasses = (path: string) =>
		`text-lg font-semibold ${
			pathname === path ? 'text-[#FFB200]' : 'text-white'
		}`

	return (
		<div className='sticky top-0 z-50 w-full'>
			{/* MOBILE NAVBAR */}
			<div className='lg:hidden px-4 py-3'>
				<div className="flex justify-between items-center p-3 rounded-xl bg-[url('/restoranbg.jpg')] bg-cover bg-center">
					<Image alt='Logo' src='/Logo.png' width={64} height={64} />

					{/* OPEN MENU */}
					<GiHamburgerMenu
						className='text-white size-9'
						onClick={() => setOpen(true)}
					/>
				</div>
			</div>

			{/* DESKTOP NAVBAR */}
			<div className="hidden lg:flex justify-between items-center px-[120px] bg-[url('/restoranbg.jpg')] bg-cover bg-center">
				<Image alt='Logo' src='/Logo.png' width={128} height={128} />

				<div className='flex gap-36 text-white'>
					<Link href='/' className={linkClasses('/')}>
						Bosh Sahifa
					</Link>
					<Link href='/menu' className={linkClasses('/menu')}>
						Menyu
					</Link>
					<Link href='/news' className={linkClasses('/news')}>
						Yangiliklar
					</Link>
					<Link href='/about-us' className={linkClasses('/about-us')}>
						Biz haqimizda
					</Link>
				</div>

				<div className='flex items-center justify-center'>
					<div className='text-white flex justify-center items-center w-24 h-9 border border-white'>
						<span className='font-semibold text-lg'>UZ</span>
					</div>
				</div>
			</div>

			{/* MOBILE MENU MODAL */}
			<MobileMenu open={open} setOpen={setOpen} />
		</div>
	)
}
