'use client'

import { useTranslations } from 'next-intl'
import ReviewCarousel from './ReviewCarousel'

export default function Reviews() {
	const t = useTranslations('HomePage')

	return (
		<div className='bg-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-10 lg:px-30 pt-5 lg:pt-10 pb-2.5 lg:pb-5'>
				<div className='flex flex-col items-center gap-2'>
					<h2 className='text-[#FAC22B] font-medium text-3xl lg:text-6xl lg:w-full text-center w-64'>
						{t('comments')}
					</h2>
				</div>
			</div>
			<section className='w-full lg:px-2 block overflow-hidden pb-5'>
				<ReviewCarousel />
			</section>
		</div>
	)
}
