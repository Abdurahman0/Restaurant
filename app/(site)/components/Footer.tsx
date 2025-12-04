import Image from 'next/image'
import { FaFacebook, FaInstagram, FaPhone, FaTelegram } from 'react-icons/fa'

export default function Footer() {
	return (
		<div className='pt-5 md:pt-10 md:pb-8 pb-5'>
			<div className='border-t-2 border-black mt-5' />
			<div className='max-w-7xl md:flex md:gap-5 mx-auto px-4 sm:px-10 lg:px-[120px] pt-5 pb-2.5'>
				<div className=''>
					<Image
						alt='Logo'
						src={'/Logo.png'}
						height={'124'}
						width={'124'}
						className='-mt-8'
					></Image>
				</div>

				<div className='flex flex-col md:flex-row gap-2.5 md:gap-10'>
					<div className='flex flex-col gap-2'>
						<h3 className='text-[#FAC22B] text-2xl font-bold'>
							Yoqimli Taomlar Restorani
						</h3>
						<div className='grid grid-cols-2 md:gap-x-12 md:gap-y-3'>
							<a href='' className='text-lg font-semibold'>
								Biz haqimizda
							</a>
							<a href='/menu' className='text-lg font-semibold'>
								Menyu
							</a>
							<a href='' className='text-lg font-semibold'>
								Buyurtma
							</a>
							<a href='' className='text-lg font-semibold'>
								Yangiliklar
							</a>
						</div>
					</div>

					<div className='flex flex-col gap-2'>
						<h3 className='text-[#FAC22B] text-2xl font-bold'>
							Biz Ijtimoiy Tarmoqlarda
						</h3>
						<div className='flex gap-6 text-white text-4xl'>
							<a
								href='https://t.me/yourchannel'
								target='_blank'
								className='text-[#29a9eb]'
							>
								<FaTelegram />
							</a>

							<a
								href='https://instagram.com/yourpage'
								target='_blank'
								className='text-[#E1306C]'
							>
								<FaInstagram />
							</a>

							<a
								href='https://facebook.com/yourpage'
								target='_blank'
								className='text-[#1877F2]'
							>
								<FaFacebook />
							</a>
						</div>
					</div>

					<div className='flex flex-col gap-1'>
						<h3 className='text-[#FAC22B] text-2xl font-bold'>
							Biz Bilan Bog&apos;laning
						</h3>
						<div className='flex items-center gap-1'>
							<FaPhone className='text-xl scale-x-[-1]' />
							<p className='text-lg font-semibold'>+998946542341</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
