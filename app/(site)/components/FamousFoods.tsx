import FoodCarousel from './FoodCarousel'

export default function FamousFoods() {
	return (
		<div className='max-w-7xl mx-auto px-4 sm:px-10 lg:px-[120px] pt-5 pb-5'>
			<div className='flex flex-col items-center gap-2'>
				<h2 className='text-[#FAC22B] font-medium text-3xl text-center w-64'>
					Eng Mashxur Taomlar
				</h2>
				<section className='w-full block lg:hidden overflow-hidden'>
					<FoodCarousel />
				</section>
			</div>
		</div>
	)
}
