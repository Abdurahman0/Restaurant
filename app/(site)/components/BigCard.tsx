import { FaArrowRight } from 'react-icons/fa'

export default function BigCard() {
	return (
		<div className='relative w-full h-64 mt-2.5 md:mt-5 md:h-[680px]'>
			{/* Clipped background shape */}
			<div className='absolute inset-0 bg-[url("/boshlanish.jpg")] bg-cover bg-center rounded-xl clip-md clip-default'></div>

			{/* Content (not clipped, stays visible) */}
			<span className='absolute top-1 left-2 md:top-3 md:left-6 text-xl md:text-4xl text-[#FFB200] font-semibold'>
				Boshlanish
			</span>

			<button className='bg-[#27E834] border border-white py-2 px-8 md:px-20 text-center text-white rounded-xl text-sm md:text-3xl absolute bottom-1 right-2 md:bottom-3 md:right-6 cursor-pointer'>
				<FaArrowRight />
			</button>

			{/* p tag placed on top of the cut area */}
			<p className='absolute bottom-1 left-1 text-[7px] md:text-2xl md:w-96 md:left-3 w-28 font-medium text-[#FFB200]'>
				Restoranimiz 2018-yil qish fasliga kelib keng miqyosda kengaydi. Bu
				muddatda restoranimiz allaqachon 3dan ortiq fillialarini Toshkent
				bo&apos;ylab ochdi. Menyuga 10ga yaqin taomlarni qo&apos;shdi va asosan
				milliy taomlarga urg&apos;uni qaratdi.
			</p>
		</div>
	)
}
