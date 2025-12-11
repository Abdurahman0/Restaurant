import ValueCard from './ValueCard'
import ValueCarousel from './ValueCarousel'

export default function Values() {
	return (
		<div className='pb-5'>
			<div className='max-w-full mx-auto px-4 sm:px-10 lg:px-[120px] pt-5 md:pt-10 pb-5'>
				<h2 className='font-bold text-3xl text-center md:text-6xl text-[#D89E00]'>
					Qadriyatlarimiz
				</h2>
			</div>

			<div className='grid grid-cols-3 gap-3 w-full px-2 md:hidden'>
				{/* TOP 3 CARDS */}
				<ValueCard />
				<ValueCard />
				<ValueCard />
				{/* BOTTOM 2 CARDS — CENTERED BUT SAME SIZE */}
				<div className='col-span-3 flex gap-5 mx-auto'>
					<ValueCard />
					<ValueCard />
				</div>
			</div>
			<section className='md:block overflow-hidden hidden w-full'>
				<ValueCarousel />
			</section>
		</div>
	)
}
