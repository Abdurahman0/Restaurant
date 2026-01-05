'use client'

import { useTranslations } from 'next-intl'

export default function CookCard() {
	const t = useTranslations('AboutPage')

	return (
		<div className='bg-white mx-auto w-10/12 h-96 md:h-125 rounded-2xl border-amber-600 border shadow-xl md:mt-5'>
			<div className='flex flex-col justify-between h-full'>
				<div className='bg-[url("/cook.webp")] bg-center bg-cover w-5/6 mx-auto h-3/4 mt-5 rounded-xl'></div>
				<div className='w-5/6 mx-auto mb-4 text-[#FFB200]'>
					<h3 className='font-semibold md:text-2xl'>{t('name')}</h3>
					<span className='font-medium md:text-xl'>{t('who')}</span>
				</div>
			</div>
		</div>
	)
}
