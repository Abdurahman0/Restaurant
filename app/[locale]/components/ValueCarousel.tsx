'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useTranslations } from 'next-intl'
import ValueCard from './ValueCard'

export default function ValueCarousel() {
	const t = useTranslations('AboutPage')

	const items = [
		{ id: 1, title: t('values1'), img: '/value1.jpg' },
		{ id: 2, title: t('values2'), img: '/value2.jpg' },
		{ id: 3, title: t('values3'), img: '/value3.jpg' },
		{ id: 4, title: t('values4'), img: '/value4.jpg' },
		{ id: 5, title: t('values5'), img: '/value5.jpg' },
	]

	return (
		<div className='w-full'>
			<div className='max-w-350 mx-auto px-4'>
				<Swiper
					spaceBetween={24}
					slidesPerView={3}
					breakpoints={{
						640: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
					}}
					className='py-6'
				>
					{items.map(it => (
						<SwiperSlide key={it.id} className='flex justify-center'>
							<ValueCard title={it.title} img={it.img} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}
