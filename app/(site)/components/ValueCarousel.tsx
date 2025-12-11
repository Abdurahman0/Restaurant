'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import ValueCard from './ValueCard'

export default function ValueCarousel() {
	const items = [
		{ id: 1, title: 'Halol va Toza mahsulotlar', img: '/value1.jpg' },
		{ id: 2, title: 'Yangi ingredientlar', img: '/value2.jpg' },
		{ id: 3, title: 'Sifat kafolati', img: '/value3.jpg' },
		{ id: 4, title: 'Tez yetkazib berish', img: '/value4.jpg' },
		{ id: 5, title: 'Xizmatlarimiz', img: '/value5.jpg' },
	]

	return (
		<div className='w-full'>
			{/* center container - choose a sensible max width */}
			<div className='max-w-[1400px] mx-auto px-4'>
				<Swiper
					spaceBetween={24} /* GAP between slides */
					slidesPerView={3} /* default mobile */
					breakpoints={{
						640: { slidesPerView: 2 } /* tablet */,
						1024: { slidesPerView: 3 } /* desktop */,
					}}
					centeredSlides={false}
					loop={false}
					className='py-6'
				>
					{items.map(it => (
						<SwiperSlide key={it.id} className='flex justify-center'>
							{/* the slide is a flex container and centers the card */}
							<ValueCard title={it.title} img={it.img} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}
