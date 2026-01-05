'use client'

import { useTranslations } from 'next-intl'
import BigCard from './BigCard'

export default function Quality() {
	const t = useTranslations('AboutPage')

	return (
		<div className='max-w-full bg-white mx-auto px-4 sm:px-10 lg:px-30 pt-5 md:pt-10 pb-5'>
			<h2 className='font-bold text-3xl text-center md:text-6xl text-[#D89E00]'>
				{t('quality')}
			</h2>

			<BigCard />
		</div>
	)
}
