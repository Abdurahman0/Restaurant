'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function Carousel() {
	return (
		<>
			<div className='block md:hidden'>
				<Swiper
					spaceBetween={20}
					slidesPerView={1}
					loop={true}
					autoplay={{ delay: 2500 }}
					className='max-w-7xl mx-auto px-4 sm:px-10 lg:px-[120px] pt-5 pb-5'
				>
					<SwiperSlide>
						<div className="w-full h-[500px] rounded-2xl flex flex-col justify-center relative bg-[url('/restoranbg.jpg')] bg-cover bg-center bg-[#0F2E23]/60 bg-blend-multiply">
							<div className='size-[55%]'>
								<div className="absolute left-1/2 -translate-x-1/2 top-[20%] w-40 h-40 bg-[url('/cook2.jpg')] bg-cover bg-center rounded-full" />
								<div className="absolute left-[15%] top-[7%] w-28 h-28 bg-[url('/cook.webp')] bg-cover bg-center rounded-full" />
								<div className="absolute right-[10%] top-[3%] w-32 h-32 bg-[url('/cook6.jpg')] bg-cover bg-center rounded-full" />
								<div className="absolute right-[15%] top-[43%] w-28 h-28 bg-[url('/cook4.webp')] bg-cover bg-clip-content rounded-full" />
								<div className="absolute left-[10%] bottom-[33%] w-32 h-32 bg-[url('/cook5.jpg')] bg-cover bg-center rounded-full" />
							</div>
							<div className='text-center flex flex-col justify-center items-center gap-2.5'>
								<span className='text-[#FAC22B] font-semibold'>
									Tajribali Oshpazlar
								</span>
								<p className='text-[#FAC22B] text-start w-80'>
									Barcha oshpazlarimiz o&apos;z sohaliring ustasi bo&apos;lib 5
									yildan ortiq tajribaga ega
								</p>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className='flex flex-col gap-2'>
							<div
								className='w-full h-[250px] rounded-2xl flex items-center justify-center bg-[url("/past.jpg")] 
						bg-cover bg-position-[1px] bg-[#0F2E23]/60 bg-blend-multiply'
							>
								<div className='text-center flex flex-col gap-2.5 pt-[35%]'>
									<span className='text-[#FAC22B] font-semibold'>
										Bizning tariximiz
									</span>
									<p className='text-[#FAC22B] text-start w-80'>
										10 yildan oshiq tajriba hamda barcha mijozlarimiz
										ko&apos;nglidan joy olgan maskan
									</p>
								</div>
							</div>
							<div
								className='w-full h-[250px] rounded-2xl flex items-center justify-center bg-[url("/food.jpg")] 
						bg-cover bg-position-[1px] bg-[#0F2E23]/60 bg-blend-multiply'
							>
								<div className='text-center flex flex-col gap-2.5 pt-[35%]'>
									<span className='text-[#FAC22B] font-semibold'>
										Doimo yangi va sifatli
									</span>
									<p className='text-[#FAC22B] text-start w-80'>
										Faqat ertalabki yangi mahsulot — tabiiy, boy va haqiqiy ta’m
									</p>
								</div>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className='flex flex-col gap-2'>
							<div
								className='w-full h-[250px] rounded-2xl flex items-center justify-center bg-[url("/enviroment.jpg")] 
						bg-cover bg-position-[1px] bg-[#0F2E23]/60 bg-blend-multiply'
							>
								<div className='text-center flex flex-col gap-2.5 pt-[35%]'>
									<span className='text-[#FAC22B] font-semibold'>
										Qulay muhit
									</span>
									<p className='text-[#FAC22B] text-start w-80'>
										Mehmondo‘st xodimlar va iliq muhit — har mijozga alohida
										e’tibor
									</p>
								</div>
							</div>
							<div
								className='w-full h-[250px] rounded-2xl flex items-center justify-center bg-[url("/price.jpg")] 
						bg-cover bg-position-[1px] bg-[#0F2E23]/60 bg-blend-multiply'
							>
								<div className='text-center flex flex-col gap-2.5 pt-[35%]'>
									<span className='text-[#FAC22B] font-semibold'>
										Adolatli narxlar
									</span>
									<p className='text-[#FAC22B] text-start w-80'>
										Sifatli taomlar, qulay narxlar — har doim to‘g‘ri tanlov
									</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	)
}
