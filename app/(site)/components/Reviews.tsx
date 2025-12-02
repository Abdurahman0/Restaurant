import ReviewCarousel from './ReviewCarousel'

export default function Reviews() {
	return (
		<>
			<div className='max-w-7xl mx-auto px-4 sm:px-10 lg:px-[120px] pt-5 pb-2.5'>
				<div className='flex flex-col items-center gap-2'>
					<h2 className='text-[#FAC22B] font-medium text-3xl text-center w-64'>
						Odamlarning biz haqimizdagi fikri
					</h2>
				</div>
			</div>
			<section className='w-full block lg:hidden overflow-hidden'>
				<ReviewCarousel />
			</section>
		</>
	)
}
