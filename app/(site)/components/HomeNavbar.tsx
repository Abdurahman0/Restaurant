'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import MobileMenu from './Responsive'

export default function HomeNavbar() {
	const [open, setOpen] = useState(false)

	return (
		<>
			<div className='flex justify-between border-0 rounded-xl items-center'>
				{/* mobile logo */}
				<div className='block lg:hidden'>
					<Image alt='Logo' src={'/Logo.png'} height={64} width={64} />
				</div>

				{/* desktop logo */}
				<div className='hidden lg:block'>
					<Image alt='Logo' src={'/Logo.png'} height={128} width={128} />
				</div>

				{/* hamburger (mobile only) */}
				<div className='items-center justify-center flex pr-2 lg:hidden'>
					<GiHamburgerMenu
						className='text-white size-9'
						onClick={() => setOpen(true)}
					/>
				</div>

				{/* desktop links */}
				<div className='items-center justify-center hidden lg:flex gap-36 text-white'>
					<Link href='/' className='text-lg font-semibold text-[#FFB200]'>
						Bosh Sahifa
					</Link>
					<Link href='/menu' className='text-lg font-semibold'>
						Menyu
					</Link>
					<Link href='/news' className='text-lg font-semibold'>
						Yangiliklar
					</Link>
					<Link href='/about-us' className='text-lg font-semibold'>
						Biz haqimizda
					</Link>
				</div>

				{/* language box — preserved exactly (desktop only) */}
				<div className='items-center justify-center lg:flex pr-2 hidden'>
					<div className='text-white flex justify-center items-center size-9 w-24 border border-white'>
						<span className='font-semibold text-lg'>UZ</span>
					</div>
				</div>
			</div>

			{/* Mobile side menu */}
			<MobileMenu open={open} setOpen={setOpen} />
		</>
	)
}
