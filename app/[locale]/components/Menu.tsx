'use client'

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import FoodCarousel from '../components/FoodCarousel'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function Menu() {
	const [selectedCategory, setSelectedCategory] = useState<
		| 'national'
		| 'salads'
		| 'main'
		| 'soups'
		| 'grill'
		| 'desserts'
		| 'drinks'
		| 'combo'
	>('national')
	const t = useTranslations('MenuPage')
	const categoryTitleKey: Record<typeof selectedCategory, string> = {
		national: 'categ1',
		salads: 'categ2',
		main: 'categ3',
		soups: 'categ4',
		grill: 'categ5',
		desserts: 'categ6',
		drinks: 'categ7',
		combo: 'categ8',
	}
	const categoryClass = (key: typeof selectedCategory, bg: string) =>
		`${bg} bg-cover bg-center rounded-full w-44 h-11 flex items-center justify-center md:w-6/6 md:h-12 cursor-pointer
	${
		selectedCategory === key
			? 'border-amber-400 border-2 text-white'
			: 'bg-[#118058]/36 bg-blend-multiply text-[#FAC22B]'
	}`

	return (
		<div className='max-w-full mx-auto px-4 sm:px-10 lg:px-30 pt-5'>
			<div className='flex flex-col items-center pt-5 pb-10'>
				<h2 className='text-[#FAC22B] font-medium text-3xl text-center lg:text-6xl w-4/5'>
					{t('menuTitle')}
				</h2>
			</div>
			<span className='text-[#FAC22B] text-xl font-medium md:text-4xl'>
				{t('menucategory')}
			</span>
			<div className='pt-2.5 md:pt-5 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-x-1'>
				<div
					className={categoryClass('national', 'bg-[url("/milliytaom.jpg")]')}
					onClick={() => setSelectedCategory('national')}
				>
					<span className='text-white font-medium '>{t('categ1')}</span>
				</div>
				<div
					className={categoryClass('salads', 'bg-[url("/salatlar.jpg")]')}
					onClick={() => setSelectedCategory('salads')}
				>
					<span className='text-[#FAC22B] font-medium '>{t('categ2')}</span>
				</div>
				<div
					className={categoryClass('main', 'bg-[url("/asosiytaomlar.jpg")]')}
					onClick={() => setSelectedCategory('main')}
				>
					<span className='text-[#FAC22B] font-medium '>{t('categ3')}</span>
				</div>
				<div
					className={categoryClass('soups', 'bg-[url("/shorva.jpg")]')}
					onClick={() => setSelectedCategory('soups')}
				>
					<span className='text-[#FAC22B] font-medium '>{t('categ4')}</span>
				</div>
				<div
					className={categoryClass('grill', 'bg-[url("/grill.jpg")]')}
					onClick={() => setSelectedCategory('grill')}
				>
					<span className='text-[#FAC22B] font-medium '>{t('categ5')}</span>
				</div>
				<div
					className={categoryClass('desserts', 'bg-[url("/desertlar.jpg")]')}
					onClick={() => setSelectedCategory('desserts')}
				>
					<span className='text-[#FAC22B] font-medium '>{t('categ6')}</span>
				</div>
				<div
					className={categoryClass('drinks', 'bg-[url("/ichimliklar.jpg")]')}
					onClick={() => setSelectedCategory('drinks')}
				>
					<span className='text-[#FAC22B] font-medium '>{t('categ7')}</span>
				</div>
				<div
					className={categoryClass('combo', 'bg-[url("/kombo.jpg")]')}
					onClick={() => setSelectedCategory('combo')}
				>
					<span className='text-[#FAC22B] font-medium '>{t('categ8')}</span>
				</div>
			</div>
			<div className='pt-5 md:pt-10 gap-2.5 flex-col flex'>
				<div className='flex justify-between items-center md:justify-center md:pb-5'>
					<h3 className='text-[#FAC22B] font-medium text-2xl text-start lg:text-5xl'>
						{t(categoryTitleKey[selectedCategory])}
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
					<FoodCarousel category={selectedCategory} />
				</section>
			</div>
		</div>
	)
}
