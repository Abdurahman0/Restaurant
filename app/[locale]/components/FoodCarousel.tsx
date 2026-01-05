'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useLocale } from 'next-intl'

type Locale = 'en' | 'uz' // only allow these keys

interface Food {
	_id: string
	name: Record<Locale, string>
	description: Record<Locale, string>
	price: number
	image: string
	category: string
	recommended: boolean
	seasonal: boolean
}

interface FoodCarouselProps {
	category?:
		| 'national'
		| 'salads'
		| 'main'
		| 'soups'
		| 'grill'
		| 'desserts'
		| 'drinks'
		| 'combo'
	recommended?: boolean
	seasonal?: boolean
}

export default function FoodCarousel({
	category,
	recommended,
	seasonal,
}: FoodCarouselProps) {
	const locale = useLocale() as Locale // assert type here
	const [foods, setFoods] = useState<Food[]>([])
	const filteredFoods = foods.filter(food => {
		if (category && food.category !== category) return false
		if (recommended !== undefined && food.recommended !== recommended)
			return false
		if (seasonal !== undefined && food.seasonal !== seasonal) return false
		return true
	})
	useEffect(() => {
		async function fetchFoods() {
			const res = await fetch('/api/foods')
			const data = await res.json()
			setFoods(data.filter((food: Food) => food.image && food.image !== ''))
		}

		fetchFoods()
	}, [])

	if (foods.length === 0) return null

	return (
		<Swiper
			spaceBetween={20}
			loop={false}
			breakpoints={{
				640: { slidesPerView: 1 },
				1024: { slidesPerView: 3 },
			}}
			className='max-w-full mx-auto px-4 sm:px-10 lg:px-30 pt-5 pb-5'
		>
			{filteredFoods.map(food => (
				<SwiperSlide key={food._id}>
					<div className="w-full h-125 lg:h-172.5 rounded-2xl flex flex-col justify-center relative bg-[url('/restoranbg.jpg')] bg-cover bg-center bg-[#0F2E23]/60 bg-blend-multiply">
						<div className='size-[55%]'>
							{food.image && (
								<Image
									width={250}
									height={250}
									src={food.image}
									className='absolute left-1/2 -translate-x-1/2 top-[14%] rounded-full'
									alt={food.name[locale]}
								/>
							)}
						</div>
						<div className='text-center flex flex-col justify-center items-center gap-2.5 md:gap-4'>
							<span className='text-[#FAC22B] font-semibold md:text-2xl'>
								{food.name[locale]}
							</span>
							<p className='text-[#FAC22B] text-start w-80 md:w-5/6 md:text-xl'>
								{food.description[locale]}
							</p>
						</div>
						<div className='flex gap-5 px-2 justify-center pt-5 md:pt-16 pb-7.5 text-white'>
							<button className='bg-[#DD1C1C] py-3 px-3 text-center w-full lg:w-2/3 rounded-xl text-sm cursor-pointer'>
								{food.price} so&apos;m
							</button>
							<button className='bg-[#219169] py-3 px-3 w-full lg:w-2/3 text-center rounded-xl text-sm cursor-pointer'>
								Buyurtma Berish
							</button>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	)
}
