'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import CookCard from './CookCard'

export default function CookCarousel() {
	return (
		<>
			<div>
				<Swiper
					spaceBetween={20}
					loop={false}
					autoplay={{ delay: 2500 }}
					breakpoints={{
						640: { slidesPerView: 1 }, // mobile
						1024: { slidesPerView: 3 }, // large screens
					}}
					className='max-w-full mx-auto px-4 sm:px-10 lg:px-[120px] pt-5 pb-5'
				>
					<SwiperSlide>
						<CookCard />
					</SwiperSlide>

					<SwiperSlide>
						<CookCard />
					</SwiperSlide>

					<SwiperSlide>
						<CookCard />
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	)
}
