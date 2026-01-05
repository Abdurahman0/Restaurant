'use client'

import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { useState, useRef, useEffect } from 'react'
import { BiX } from 'react-icons/bi'

const locales = ['en', 'uz'] as const

export default function MobileMenu({
	open,
	setOpen,
	pathname,
}: {
	open: boolean
	setOpen: (v: boolean) => void
	pathname: string
}) {
	const t = useTranslations('Navbar')
	const locale = useLocale()
	const [langOpen, setLangOpen] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)

	// Path without locale for switching safely
	const pathWithoutLocale = pathname ? pathname.replace(`/${locale}`, '') : ''

	// Close dropdown if click outside
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
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

	return (
		<div
			className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300
      ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
			onClick={() => setOpen(false)}
		>
			<div
				className={`absolute right-0 top-0 h-full w-64 bg-[#DACD99] p-6 transition-transform duration-300
        ${open ? 'translate-x-0' : 'translate-x-full'}`}
				onClick={e => e.stopPropagation()}
			>
				{/* Close button */}
				<div className='flex justify-end'>
					<button onClick={() => setOpen(false)}>
						<BiX size={24} />
					</button>
				</div>

				{/* Navigation Links */}
				<ul className='flex flex-col space-y-6 mt-6'>
					<li>
						<Link
							href={`/${locale}`}
							onClick={() => setOpen(false)}
							className='text-lg font-semibold text-white'
						>
							{t('main')}
						</Link>
					</li>
					<li>
						<Link
							href={`/${locale}/menu`}
							onClick={() => setOpen(false)}
							className='text-lg font-semibold text-white'
						>
							{t('menu')}
						</Link>
					</li>
					<li>
						<Link
							href={`/${locale}/news`}
							onClick={() => setOpen(false)}
							className='text-lg font-semibold text-white'
						>
							{t('news')}
						</Link>
					</li>
					<li>
						<Link
							href={`/${locale}/about-us`}
							onClick={() => setOpen(false)}
							className='text-lg font-semibold text-white'
						>
							{t('about')}
						</Link>
					</li>
				</ul>

				{/* Language Selector */}
				<div className='mt-10 relative' ref={dropdownRef}>
					<button
						onClick={() => setLangOpen(prev => !prev)}
						className='text-white font-semibold text-lg w-24 h-9 border border-white flex items-center justify-center cursor-pointer'
					>
						{locale.toUpperCase()}
					</button>

					{langOpen && (
						<div className='absolute left-0 top-full mt-1 flex flex-col gap-1'>
							{locales
								.filter(l => l !== locale)
								.map(l => (
									<Link
										key={l}
										href={`/${l}${pathWithoutLocale}`}
										onClick={() => {
											setLangOpen(false)
											setOpen(false)
										}}
										className='text-black bg-white font-medium text-lg w-24 h-9 flex items-center justify-center cursor-pointer'
									>
										{l.toUpperCase()}
									</Link>
								))}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
