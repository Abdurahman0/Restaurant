import FoodCarousel from './FoodCarousel'

export default function FamousFoods() {
	return (
		<div className='max-w-full mx-auto px-4 sm:px-10 lg:px-[120px] lg:pt-16 pt-5 pb-5'>
			<div className='flex flex-col items-center gap-2 lg:gap-5'>
				<h2 className='text-[#FAC22B] font-medium text-3xl lg:text-6xl text-center w-64 lg:w-full'>
					Eng Mashxur Taomlar
				</h2>
				<section className='w-full block overflow-hidden'>
					<FoodCarousel />
				</section>
			</div>
		</div>
	)
}
