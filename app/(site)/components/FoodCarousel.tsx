'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'

export default function FoodCarousel() {
	return (
		<>
			<div>
				<Swiper
					spaceBetween={20}
					loop={true}
					autoplay={{ delay: 2500 }}
					breakpoints={{
						640: { slidesPerView: 1 }, // mobile
						1024: { slidesPerView: 3 }, // large screens
					}}
					className='max-w-full mx-auto px-4 sm:px-10 lg:px-[120px] pt-5 pb-5'
				>
					<SwiperSlide>
						<div className="w-full h-[500px] lg:h-[690px] rounded-2xl flex flex-col justify-center relative bg-[url('/restoranbg.jpg')] bg-cover bg-center bg-[#0F2E23]/60 bg-blend-multiply">
							<div className='size-[55%]'>
								<Image
									width={'250'}
									height={'250'}
									src='/osh.png'
									className='absolute left-1/2 -translate-x-1/2 top-[14%] rounded-full'
									alt='Osh'
								/>
							</div>
							<div className='text-center flex flex-col justify-center items-center gap-2.5 md:gap-4'>
								<span className='text-[#FAC22B] font-semibold md:text-2xl'>
									Palov
								</span>
								<p className='text-[#FAC22B] text-start w-80 md:w-5/6 md:text-xl'>
									Bu taom o&apos;ta mazali hamda ko&apos;p xaridorlar tomonidan
									xarid qilingan. Sog&apos;liq o&apos;ta foydali va asosan
									nonushta uchun sotib olinadi.
								</p>
							</div>
							<div className='flex gap-5 px-2 justify-center pt-5 md:pt-16 pb-[30px] text-white'>
								<button className='bg-[#DD1C1C] py-3 px-3 text-center w-full lg:w-2/3 rounded-xl text-sm cursor-pointer'>
									99 000 so&apos;m
								</button>
								<button className='bg-[#219169] py-3 px-3 w-full lg:w-2/3 text-center rounded-xl text-sm cursor-pointer'>
									Buyurtma Berish
								</button>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="w-full h-[500px] lg:h-[690px] rounded-2xl flex flex-col justify-center relative bg-[url('/restoranbg.jpg')] bg-cover bg-center bg-[#0F2E23]/60 bg-blend-multiply">
							<div className='size-[55%]'>
								<Image
									width={'250'}
									height={'250'}
									src='/osh.png'
									className='absolute left-1/2 -translate-x-1/2 top-[14%] rounded-full'
									alt='Osh'
								/>
							</div>
							<div className='text-center flex flex-col justify-center items-center gap-2.5 md:gap-4'>
								<span className='text-[#FAC22B] font-semibold md:text-2xl'>
									Palov
								</span>
								<p className='text-[#FAC22B] text-start w-80 md:w-5/6 md:text-xl'>
									Bu taom o&apos;ta mazali hamda ko&apos;p xaridorlar tomonidan
									xarid qilingan. Sog&apos;liq o&apos;ta foydali va asosan
									nonushta uchun sotib olinadi.
								</p>
							</div>
							<div className='flex gap-5 px-2 justify-center pt-5 md:pt-16 pb-[30px] text-white'>
								<button className='bg-[#DD1C1C] py-3 px-3 text-center w-full lg:w-2/3 rounded-xl text-sm cursor-pointer'>
									99 000 so&apos;m
								</button>
								<button className='bg-[#219169] py-3 px-3 w-full lg:w-2/3 text-center rounded-xl text-sm cursor-pointer'>
									Buyurtma Berish
								</button>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="w-full h-[500px] lg:h-[690px] rounded-2xl flex flex-col justify-center relative bg-[url('/restoranbg.jpg')] bg-cover bg-center bg-[#0F2E23]/60 bg-blend-multiply">
							<div className='size-[55%]'>
								<Image
									width={'250'}
									height={'250'}
									src='/osh.png'
									className='absolute left-1/2 -translate-x-1/2 top-[14%] rounded-full'
									alt='Osh'
								/>
							</div>
							<div className='text-center flex flex-col justify-center items-center gap-2.5 md:gap-4'>
								<span className='text-[#FAC22B] font-semibold md:text-2xl'>
									Palov
								</span>
								<p className='text-[#FAC22B] text-start w-80 md:w-5/6 md:text-xl'>
									Bu taom o&apos;ta mazali hamda ko&apos;p xaridorlar tomonidan
									xarid qilingan. Sog&apos;liq o&apos;ta foydali va asosan
									nonushta uchun sotib olinadi.
								</p>
							</div>
							<div className='flex gap-5 px-2 justify-center pt-5 md:pt-16 pb-[30px] text-white'>
								<button className='bg-[#DD1C1C] py-3 px-3 text-center w-full lg:w-2/3 rounded-xl text-sm cursor-pointer'>
									99 000 so&apos;m
								</button>
								<button className='bg-[#219169] py-3 px-3 w-full lg:w-2/3 text-center rounded-xl text-sm cursor-pointer'>
									Buyurtma Berish
								</button>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	)
}
