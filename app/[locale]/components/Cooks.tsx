'use client'

import { useTranslations } from 'next-intl'
import CookCarousel from './CookCarousel'

export default function Cooks() {
	const t = useTranslations('AboutPage')

	return (
		<div className='max-w-full mx-auto px-4 sm:px-10 lg:px-30 pt-5 md:pt-10 pb-10 bg-[#DACD99]'>
			<h2 className='font-bold text-3xl text-center md:text-6xl pb-2.5 text-[#D89E00]'>
				{t('cook')}
			</h2>

			<CookCarousel />
		</div>
	)
}
