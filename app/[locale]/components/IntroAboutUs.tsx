'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function IntroAboutUs() {
	const t = useTranslations('AboutPage')

	return (
		<div className='bg-[#DACD99]'>
			<div className='max-w-full mx-auto px-4 sm:px-10 lg:px-30 md:pt-5'>
				<div className='text-white pl-5 w-full pt-10 flex flex-col md:flex-row'>
					<div className='md:pt-24 flex flex-col gap-3.5 md:gap-10 md:w-1/2'>
						<h2 className='font-bold text-3xl md:text-6xl md:w-3/4 text-[#D89E00]'>
							{t('aboutTitle')}
						</h2>
						<p className='font-semibold text-lg md:text-3xl md:w-1/2 line-clamp-6 text-[#FFB200]'>
							{t('aboutDesc')}
						</p>
					</div>
					<div className='md:w-1/2 overflow-hidden md:h-162.5 relative w-full h-62.5'>
						<Image
							src='/AboutUsCook.png'
							alt='cook'
							fill
							style={{ objectFit: 'cover', objectPosition: 'top' }}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
