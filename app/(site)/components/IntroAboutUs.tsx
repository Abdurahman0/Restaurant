import Image from 'next/image'

export default function IntroAboutUs() {
	return (
		<div className='bg-[#DACD99]'>
			<div className='max-w-full mx-auto px-4 sm:px-10 lg:px-[120px] md:pt-5'>
				<div className='text-white pl-5 w-full pt-10 flex flex-col md:flex-row'>
					<div className='md:pt-24 flex flex-col gap-3.5 md:gap-10 md:w-1/2'>
						<h2 className='font-bold text-3xl md:text-6xl md:w-3/4 text-[#D89E00]'>
							Bizning hikoyamiz, bizning mahoratimiz
						</h2>
						<p className='font-semibold text-lg md:text-3xl md:w-1/2 line-clamp-6 text-[#FFB200]'>
							Har bir taom — bizning hikoyamizning bir bo‘lagi.Biz yillar
							davomida o‘z mehmonlarimizni lazzat, mehmondo‘stlik va mehr bilan
							kutib kelmoqdamiz.
						</p>
					</div>
					<div className='md:w-1/2 overflow-hidden md:h-[650px] relative w-full h-[250px]'>
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
