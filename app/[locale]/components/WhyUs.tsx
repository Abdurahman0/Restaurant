'use client'

import { useTranslations } from 'next-intl'
import Carousel from './Carousel'

export default function WhyUs() {
	const t = useTranslations('HomePage')

	return (
		<div className='max-w-full mx-auto px-4 sm:px-10 lg:px-30 pt-5 lg:pt-16'>
			<div className='flex flex-col gap-2.5'>
				<div className='flex flex-col justify-center items-center lg:gap-5 gap-2.5'>
					<h2 className='text-[#FAC22B] font-medium text-3xl text-center lg:text-6xl w-full'>
						{t('whyUsTitle')}
					</h2>
					<p className='text-[#3A3A3A] pl-5 lg:text-2xl lg:w-1/2 lg:text-center'>
						{t('whyUsDesc')}
					</p>
				</div>
				<div className='hidden md:flex gap-2.5'>
					<div className='w-1/3 h-172.5 rounded-2xl flex flex-col justify-center'>
						<div className='flex flex-col gap-2'>
							<div
								className='w-full h-1/2 rounded-2xl flex items-center justify-center bg-[url("/past.jpg")] 
						bg-cover bg-position-[1px] bg-[#0F2E23]/60 bg-blend-multiply'
							>
								<div className='text-center justify-center items-center flex flex-col gap-2.5 pt-[35%] pb-5'>
									<span className='text-[#FAC22B] font-semibold text-2xl'>
										{t('card1Title')}
									</span>
									<p className='text-[#FAC22B] text-start w-2/3 text-xl'>
										{t('card1Desc')}
									</p>
								</div>
							</div>
							<div
								className='w-full h-1/2 rounded-2xl flex items-center justify-center bg-[url("/food.jpg")] 
						bg-cover bg-position-[1px] bg-[#0F2E23]/60 bg-blend-multiply'
							>
								<div className='text-center justify-center items-center flex flex-col gap-2.5 pt-[35%] pb-5'>
									<span className='text-[#FAC22B] font-semibold text-2xl'>
										{t('card2Title')}
									</span>
									<p className='text-[#FAC22B] text-start w-2/3 text-xl'>
										{t('card2Desc')}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="w-1/3 h-172.5 rounded-2xl flex flex-col justify-center relative bg-[url('/restoranbg.jpg')] bg-cover bg-center bg-[#0F2E23]/60 bg-blend-multiply">
						<div className='size-[55%]'>
							<div className="absolute left-1/2 -translate-x-1/2 top-[20%] w-80 h-80 bg-[url('/cook2.jpg')] bg-cover bg-center rounded-full" />
							<div className="absolute left-[1%] top-[2%] w-56 h-56 bg-[url('/cook.webp')] bg-cover bg-center rounded-full" />
							<div className="absolute right-[1%] top-[1%] w-64 h-64 bg-[url('/cook6.jpg')] bg-cover bg-center rounded-full" />
							<div className="absolute right-[1%] bottom-[24%] w-56 h-56 bg-[url('/cook4.webp')] bg-cover bg-clip-content rounded-full" />
							<div className="absolute left-[1%] bottom-[24%] w-64 h-64 bg-[url('/cook5.jpg')] bg-cover bg-center rounded-full" />
						</div>
						<div className='text-center flex flex-col w-fit justify-center items-center gap-2.5 pt-20'>
							<span className='text-[#FAC22B] font-semibold text-2xl'>
								{t('card3Title')}
							</span>
							<p className='text-[#FAC22B] text-start w-2/3 text-xl'>
								{t('card3Desc')}
							</p>
						</div>
					</div>
					<div className='w-1/3 h-172.5 rounded-2xl flex flex-col justify-center'>
						<div className='flex flex-col gap-2'>
							<div
								className='w-full h-1/2 rounded-2xl flex items-center justify-center bg-[url("/enviroment.jpg")] 
						bg-cover bg-position-[1px] bg-[#0F2E23]/60 bg-blend-multiply'
							>
								<div className='text-center justify-center items-center flex flex-col gap-2.5 pt-[35%] pb-5'>
									<span className='text-[#FAC22B] font-semibold text-2xl'>
										{t('card4Title')}
									</span>
									<p className='text-[#FAC22B] text-start w-2/3 text-xl'>
										{t('card4Desc')}
									</p>
								</div>
							</div>
							<div
								className='w-full h-1/2 rounded-2xl flex items-center justify-center bg-[url("/price.jpg")] 
						bg-cover bg-position-[1px] bg-[#0F2E23]/60 bg-blend-multiply'
							>
								<div className='text-center justify-center items-center flex flex-col gap-2.5 pt-[35%] pb-5'>
									<span className='text-[#FAC22B] font-semibold text-2xl'>
										{t('card5Title')}
									</span>
									<p className='text-[#FAC22B] text-start w-2/3 text-xl'>
										{t('card5Desc')}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<section className='w-full block lg:hidden overflow-hidden'>
					<Carousel />
				</section>
			</div>
		</div>
	)
}

// bg-[url('/restoranbg.jpg')] bg-cover bg-center
