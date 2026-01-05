'use client'

import { usePathname } from 'next/navigation'
import HomeNavbar from './HomeNavbar'
import MainNavbar from './MainNavbar'

export default function Navbar() {
	const pathname = usePathname()

	// Show HomeNavbar for both /en and /uz
	const showHomeNavbar = pathname === '/en' || pathname === '/uz'

	return <>{showHomeNavbar ? <HomeNavbar /> : <MainNavbar />}</>
}

// import Image from 'next/image'
// import Link from 'next/link'
// import { GiHamburgerMenu } from 'react-icons/gi'

// export default function Navbar() {
// 	return (
// 		<div>
// 			<div className='hidden flex justify-between border-0 rounded-xl items-center'>
// 				<div className='block lg:hidden'>
// 					<Image alt='Logo' src={'/Logo.png'} height={'64'} width={'64'} />
// 				</div>
// 				<div className='hidden lg:block'>
// 					<Image alt='Logo' src={'/Logo.png'} height={'128'} width={'128'} />
// 				</div>
// 				<div className='items-center justify-center flex pr-2 lg:hidden'>
// 					<GiHamburgerMenu className='text-white size-9' />
// 				</div>
// 				<div className='items-center justify-center hidden lg:flex gap-36 text-white'>
// 					<Link href='/' className='text-lg font-semibold text-[#E98A3F]'>
// 						Bosh Sahifa
// 					</Link>
// 					<a href='/menu' className='text-lg font-semibold'>
// 						Menyu
// 					</a>
// 					<a href='' className='text-lg font-semibold'>
// 						Yangiliklar
// 					</a>
// 					<a href='' className='text-lg font-semibold'>
// 						Biz haqimizda
// 					</a>
// 				</div>
// 				<div className='items-center justify-center lg:flex pr-2 hidden'>
// 					<div className='text-white flex justify-center items-center size-9 w-24 border border-white'>
// 						<span className='font-semibold text-lg'>UZ</span>
// 					</div>
// 				</div>
// 			</div>

// 			<div className="flex justify-between border-0 rounded-xl items-center bg-[url('/restoranbg.jpg')] bg-cover bg-center bg-[#0F2E23]/50 bg-blend-multiply">
// 				<div className='block lg:hidden'>
// 					<Image alt='Logo' src={'/Logo.png'} height={'64'} width={'64'} />
// 				</div>
// 				<div className='hidden lg:block'>
// 					<Image alt='Logo' src={'/Logo.png'} height={'128'} width={'128'} />
// 				</div>
// 				<div className='items-center justify-center flex pr-2 lg:hidden'>
// 					<GiHamburgerMenu className='text-white size-9' />
// 				</div>
// 				<div className='items-center justify-center hidden lg:flex gap-36 text-white'>
// 					<Link href='/' className='text-lg font-semibold text-[#E98A3F]'>
// 						Bosh Sahifa
// 					</Link>
// 					<a href='/menu' className='text-lg font-semibold'>
// 						Menyu
// 					</a>
// 					<a href='' className='text-lg font-semibold'>
// 						Yangiliklar
// 					</a>
// 					<a href='' className='text-lg font-semibold'>
// 						Biz haqimizda
// 					</a>
// 				</div>
// 				<div className='items-center justify-center lg:flex pr-2 hidden'>
// 					<div className='text-white flex justify-center items-center size-9 w-24 border border-white'>
// 						<span className='font-semibold text-lg'>UZ</span>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }
