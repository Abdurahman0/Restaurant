'use client'

import Image from 'next/image'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { usePathname } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { useState, useRef, useEffect } from 'react'
import MobileMenu from './Responsive'

const locales = ['en', 'uz'] as const

export default function MainNavbar() {
	const t = useTranslations('Navbar')
	const pathname = usePathname()
	const locale = useLocale()
	const [open, setOpen] = useState(false)
	const [langOpen, setLangOpen] = useState(false)

	const dropdownRef = useRef<HTMLDivElement>(null)

	// Remove locale from path to switch languages correctly
	const pathWithoutLocale = pathname.replace(`/${locale}`, '') || ''

	// Close dropdown on outside click
	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(e.target as Node)
			) {
				setLangOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	// Helper to build locale-safe paths
	const href = (path = '') => `/${locale}${path}`

	// Active link checker
	const isActive = (path = '') => pathname === href(path)

	const linkClasses = (path = '') =>
		`text-lg font-semibold ${isActive(path) ? 'text-[#FFB200]' : 'text-white'}`

	return (
		<div className='sticky top-0 z-50 w-full'>
			{/* MOBILE NAVBAR */}
			<div className='lg:hidden px-4 py-3'>
				<div className="flex justify-between items-center p-3 rounded-xl bg-[url('/restoranbg.jpg')] bg-cover bg-center">
					<Image alt='Logo' src='/Logo.png' width={64} height={64} />

					<GiHamburgerMenu
						className='text-white size-9 cursor-pointer'
						onClick={() => setOpen(true)}
					/>
				</div>
			</div>

			{/* DESKTOP NAVBAR */}
			<div className="hidden lg:flex justify-between items-center px-30 bg-[url('/restoranbg.jpg')] bg-cover bg-center">
				<Image alt='Logo' src='/Logo.png' width={128} height={128} />

				{/* LINKS */}
				<div className='flex gap-36'>
					<Link href={href()} className={linkClasses()}>
						{t('main')}
					</Link>

					<Link href={href('/menu')} className={linkClasses('/menu')}>
						{t('menu')}
					</Link>

					<Link href={href('/news')} className={linkClasses('/news')}>
						{t('news')}
					</Link>

					<Link href={href('/about-us')} className={linkClasses('/about-us')}>
						{t('about')}
					</Link>
				</div>

				{/* LANGUAGE SWITCHER */}
				<div ref={dropdownRef} className='relative'>
					<button
						onClick={() => setLangOpen(prev => !prev)}
						className='flex justify-center items-center w-24 h-9 border border-white text-white font-semibold cursor-pointer'
					>
						{locale.toUpperCase()}
					</button>

					{langOpen && (
						<div className='absolute right-0 mt-2 w-24 bg-white rounded shadow-lg overflow-hidden'>
							{locales
								.filter(l => l !== locale)
								.map(l => (
									<Link
										key={l}
										href={`/${l}${pathWithoutLocale}`}
										onClick={() => setLangOpen(false)}
										className='block px-4 py-2 text-center cursor-pointer hover:bg-gray-100'
									>
										{l.toUpperCase()}
									</Link>
								))}
						</div>
					)}
				</div>
			</div>

			{/* MOBILE MENU */}
			<MobileMenu open={open} setOpen={setOpen} pathname={pathname} />
		</div>
	)
}
