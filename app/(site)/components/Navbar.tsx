import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Navbar() {
	return (
		<div>
			<div className='flex justify-between border-0 rounded-xl items-center'>
				<div className='block lg:hidden'>
					<Image alt='Logo' src={'/Logo.png'} height={'64'} width={'64'} />
				</div>
				<div className='hidden lg:block'>
					<Image alt='Logo' src={'/Logo.png'} height={'128'} width={'128'} />
				</div>
				<div className='items-center justify-center flex pr-2 lg:hidden'>
					<GiHamburgerMenu className='text-white size-9' />
				</div>
				<div className='items-center justify-center hidden lg:flex gap-36 text-white'>
					<a href='' className='text-lg font-semibold text-[#E98A3F]'>
						Bosh Sahifa
					</a>
					<a href='' className='text-lg font-semibold'>
						Menyu
					</a>
					<a href='' className='text-lg font-semibold'>
						Yangiliklar
					</a>
					<a href='' className='text-lg font-semibold'>
						Biz haqimizda
					</a>
				</div>
				<div className='items-center justify-center lg:flex pr-2 hidden'>
					<div className='text-white flex justify-center items-center size-9 w-24 border border-white'>
						<span className='font-semibold text-lg'>UZ</span>
					</div>
				</div>
			</div>
		</div>
	)
}
