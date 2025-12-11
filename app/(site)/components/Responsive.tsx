'use client'

import Link from 'next/link'
import { BiX } from 'react-icons/bi'
import { usePathname } from 'next/navigation'

export default function MobileMenu({
	open,
	setOpen,
}: {
	open: boolean
	setOpen: (v: boolean) => void
}) {
	const pathname = usePathname()

	const linkClasses = (path: string) =>
		`text-lg font-semibold ${
			pathname === path ? 'text-[#FFB200]' : 'text-white'
		}`

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
				<div className='flex justify-end text-white'>
					<button onClick={() => setOpen(false)}>
						<BiX size={24} />
					</button>
				</div>

				<ul className='flex flex-col space-y-6 mt-6'>
					<li>
						<Link
							href='/'
							className={linkClasses('/')}
							onClick={() => setOpen(false)}
						>
							Bosh Sahifa
						</Link>
					</li>
					<li>
						<Link
							href='/menu'
							className={linkClasses('/menu')}
							onClick={() => setOpen(false)}
						>
							Menyu
						</Link>
					</li>
					<li>
						<Link
							href='/news'
							className={linkClasses('/news')}
							onClick={() => setOpen(false)}
						>
							Yangiliklar
						</Link>
					</li>
					<li>
						<Link
							href='/about-us'
							className={linkClasses('/about-us')}
							onClick={() => setOpen(false)}
						>
							Biz haqimizda
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}
