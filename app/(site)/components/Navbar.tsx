import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Navbar() {
	return (
		<div>
			<div className='flex justify-between border-0 rounded-xl items-center'>
				<div className=''>
					<Image
						alt='Logo'
						src={'/Logo.png'}
						height={'64'}
						width={'64'}
					></Image>
				</div>
				<div className='items-center justify-center flex pr-2'>
					<GiHamburgerMenu className='text-white size-9' />
				</div>
			</div>
		</div>
	)
}
