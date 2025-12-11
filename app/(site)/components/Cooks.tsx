import CookCarousel from './CookCarousel'

export default function Cooks() {
	return (
		<div className='max-w-full mx-auto px-4 sm:px-10 lg:px-[120px] pt-5 md:pt-10 pb-10 bg-[#DACD99]'>
			<h2 className='font-bold text-3xl text-center md:text-6xl pb-2.5 text-[#D89E00]'>
				Har taom ortida mehr bor
			</h2>

			<CookCarousel />
		</div>
	)
}
