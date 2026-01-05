'use client'

import { useTranslations } from 'next-intl'

export default function NewsIntro() {
	const t = useTranslations('NewsPage')
	return (
		<div className='max-w-full mx-auto px-4 sm:px-10 lg:px-30 py-2.5 bg-[url("/restoranaksiyabg.jpg")] bg-cover bg-center bg-[#0F2E23]/60 bg-blend-multiply mt-2.5 md:py-10 md:mt-10'>
			<h2 className='text-[#FAC22B] font-medium text-3xl text-center lg:text-6xl w-full'>
				{t('news')}
			</h2>
		</div>
	)
}
