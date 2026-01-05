'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaPhone, FaTelegram } from 'react-icons/fa'

export default function Footer() {
	const t = useTranslations('Footer')

	return (
		<div className='bg-white '>
			<div className='pt-5 md:pt-10'>
				<div className='border-t-2 border-black mt-5' />
				<div className='bg-[#DACD99] md:pb-8 pb-5'>
					<div className='max-w-7xl md:flex md:gap-5 mx-auto px-4 sm:px-10 lg:px-30 pt-5 pb-2.5'>
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
									<Link href='/about-us' className='text-lg font-semibold'>
										{t('main')}
									</Link>
									<Link href='/menu' className='text-lg font-semibold'>
										{t('menu')}
									</Link>
									<Link href='' className='text-lg font-semibold'>
										{t('news')}
									</Link>
									<Link href='/news' className='text-lg font-semibold'>
										{t('about')}
									</Link>
								</div>
							</div>

							<div className='flex flex-col gap-2'>
								<h3 className='text-[#FAC22B] text-2xl font-bold'>
									{t('social')}
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
									{t('call')}
								</h3>
								<div className='flex items-center gap-1'>
									<FaPhone className='text-xl scale-x-[-1]' />
									<p className='text-lg font-semibold'>+998946542341</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
