'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import MobileMenu from './Responsive'

const locales = ['en', 'uz'] as const

export default function HomeNavbar() {
	const t = useTranslations('Navbar')
	const [open, setOpen] = useState(false)
	const [langOpen, setLangOpen] = useState(false)

	const locale = useLocale()
	const pathname = usePathname()

	const dropdownRef = useRef<HTMLDivElement>(null)

	const pathWithoutLocale = pathname.replace(`/${locale}`, '') || ''

	// CLOSE DROPDOWN ON OUTSIDE CLICK
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setLangOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	return (
		<>
			<div className='relative flex justify-between items-center rounded-xl font-bold text-lg'>
				{/* LOGO */}
				<div className='hidden lg:block'>
					<Image alt='Logo' src='/Logo.png' height={128} width={128} />
				</div>

				<div className='block lg:hidden'>
					<Image alt='Logo' src='/Logo.png' height={64} width={64} />
				</div>

				{/* HAMBURGER */}
				<div className='flex lg:hidden'>
					<GiHamburgerMenu
						className='text-white size-9 cursor-pointer'
						onClick={() => setOpen(true)}
					/>
				</div>

				{/* LINKS */}
				<div className='hidden lg:flex gap-36 text-white'>
					<Link href={`/${locale}`} className='font-semibold text-[#FFB200]'>
						{t('main')}
					</Link>
					<Link href={`/${locale}/menu`}>{t('menu')}</Link>
					<Link href={`/${locale}/news`}>{t('news')}</Link>
					<Link href={`/${locale}/about-us`}>{t('about')}</Link>
				</div>

				{/* LANGUAGE SWITCHER */}
				<div ref={dropdownRef} className='relative hidden lg:block'>
					<button
						onClick={() => setLangOpen(prev => !prev)}
						className='flex items-center justify-center w-24 h-9 border border-white text-white font-semibold cursor-pointer'
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

			<MobileMenu open={open} setOpen={setOpen} pathname={pathname} />
		</>
	)
}
