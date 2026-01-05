'use client'

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import FoodCarousel from './FoodCarousel'
import { useTranslations } from 'next-intl'

export default function MavsumiyTaomlar() {
	const t = useTranslations('MenuPage')

	return (
		<div className='max-w-full mx-auto px-4 sm:px-10 lg:px-30 pt-5'>
			<div className='pt-5 md:pt-10 gap-2.5 flex-col flex'>
				<div className='flex justify-between items-center md:justify-center md:pb-5'>
					<h3 className='text-[#FAC22B] font-medium text-2xl text-start lg:text-5xl'>
						{t('seasonal')}
					</h3>
					<div className='flex gap-2 md:hidden'>
						<div className='rounded-full w-10 h-10 bg-[url("/milliytaom.jpg")] bg-cover bg-center bg-[#118058]/36 bg-blend-multiply flex items-center justify-center text-[#FAC22B] text-lg'>
							<FaArrowLeft />
						</div>
						<div className='rounded-full w-10 h-10 bg-[url("/milliytaom.jpg")] bg-cover bg-center border border-amber-500 flex items-center justify-center text-[#FAC22B] text-lg'>
							<FaArrowRight />
						</div>
					</div>
				</div>
				<section className='w-full block overflow-hidden'>
					<FoodCarousel seasonal={true} />
				</section>
			</div>
		</div>
	)
}
