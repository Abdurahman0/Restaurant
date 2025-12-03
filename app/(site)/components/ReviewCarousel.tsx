'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function ReviewCarousel() {
	return (
		<>
			<div className='block'>
				<Swiper
					spaceBetween={20}
					loop={true}
					autoplay={{ delay: 2500 }}
					breakpoints={{
						640: { slidesPerView: 1.2 }, // mobile
						1024: { slidesPerView: 2.4 }, // large screens
					}}
					className='max-w-full mx-auto px-4 sm:px-10 lg:px-[120px] pt-5 pb-5'
				>
					<SwiperSlide className='p-1'>
						<div className='bg-[#D9D9D9] shadow-[4px_8px_2px_rgba(0,0,0,0.6)] w-fit h-fit p-4 rounded-xl'>
							<div className='rounded-full w-24 h-24 bg-[url("/profilephoto.jpg")] bg-cover border border-amber-400' />
							<div className='flex flex-col gap-2'>
								<span className='text-[#FFB200] font-semibold text-lg'>
									Rahmanbekov Abdurahmon
								</span>
								<p className='text-[#3A3A3A]'>
									Restoran ajoyib taomlari ham zo&apos;r menga juda ham yoqdi.
									Boshqalarga ham tavsiya beraman! Huddi bolalikka qaytib
									qolgandek bo’ldim bu joyga kelib.
								</p>
								<span className='text-[#3A3A3A] font-medium text-lg'>
									10/11/2025
								</span>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide className='p-1'>
						<div className='bg-[#D9D9D9] shadow-[4px_8px_2px_rgba(0,0,0,0.6)] w-fit h-fit p-4 rounded-xl'>
							<div className='rounded-full w-24 h-24 bg-[url("/profilephoto.jpg")] bg-cover border border-amber-400' />
							<div className='flex flex-col gap-2'>
								<span className='text-[#FFB200] font-semibold text-lg'>
									Rahmanbekov Abdurahmon
								</span>
								<p className='text-[#3A3A3A]'>
									Restoran ajoyib taomlari ham zo&apos;r menga juda ham yoqdi.
									Boshqalarga ham tavsiya beraman! Huddi bolalikka qaytib
									qolgandek bo’ldim bu joyga kelib.
								</p>
								<span className='text-[#3A3A3A] font-medium text-lg'>
									10/11/2025
								</span>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide className='p-1'>
						<div className='bg-[#D9D9D9] shadow-[4px_8px_2px_rgba(0,0,0,0.6)] w-fit h-fit p-4 rounded-xl'>
							<div className='rounded-full w-24 h-24 bg-[url("/profilephoto.jpg")] bg-cover border border-amber-400' />
							<div className='flex flex-col gap-2'>
								<span className='text-[#FFB200] font-semibold text-lg'>
									Rahmanbekov Abdurahmon
								</span>
								<p className='text-[#3A3A3A]'>
									Restoran ajoyib taomlari ham zo&apos;r menga juda ham yoqdi.
									Boshqalarga ham tavsiya beraman! Huddi bolalikka qaytib
									qolgandek bo’ldim bu joyga kelib.
								</p>
								<span className='text-[#3A3A3A] font-medium text-lg'>
									10/11/2025
								</span>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	)
}
