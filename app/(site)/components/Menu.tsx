import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import FoodCarousel from '../components/FoodCarousel'

export default function Menu() {
	return (
		<div className='max-w-full mx-auto px-4 sm:px-10 lg:px-[120px] pt-5'>
			<div className='flex flex-col items-center pt-5 pb-10'>
				<h2 className='text-[#FAC22B] font-medium text-3xl text-center lg:text-6xl w-4/5'>
					Mazali taomlarimiz bilan tanishing
				</h2>
			</div>
			<span className='text-[#FAC22B] text-xl font-medium md:text-4xl'>
				Kategoriyani tanlang
			</span>
			<div className='pt-2.5 md:pt-5 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-x-1'>
				<div className='bg-[url("/milliytaom.jpg")] bg-cover bg-center rounded-full border-amber-400 border-2 w-44 h-11 flex items-center justify-center md:w-6/6 md:h-12 md:ml-5 '>
					<span className='text-white font-medium '>Milliy Taomlar</span>
				</div>
				<div className='bg-[url("/salatlar.jpg")] bg-cover bg-center bg-[#118058]/36 bg-blend-multiply rounded-full w-44 h-11 flex items-center justify-center md:w-6/6 md:h-12 md:ml-5'>
					<span className='text-[#FAC22B] font-medium '>Salatlar</span>
				</div>
				<div className='bg-[url("/asosiytaomlar.jpg")] bg-cover bg-center bg-[#118058]/36 bg-blend-multiply rounded-full w-44 h-11 flex items-center justify-center md:w-6/6 md:h-12 md:ml-5'>
					<span className='text-[#FAC22B] font-medium '>Asosiy Taomlar</span>
				</div>
				<div className='bg-[url("/shorva.jpg")] bg-cover bg-center bg-[#118058]/36 bg-blend-multiply rounded-full w-44 h-11 flex items-center justify-center md:w-6/6 md:h-12 md:ml-5'>
					<span className='text-[#FAC22B] font-medium '>Sho&apos;rvalar</span>
				</div>
				<div className='bg-[url("/grill.jpg")] bg-cover bg-center bg-[#118058]/36 bg-blend-multiply rounded-full w-44 h-11 flex items-center justify-center md:w-6/6 md:h-12'>
					<span className='text-[#FAC22B] font-medium '>Grill Taomlar</span>
				</div>
				<div className='bg-[url("/desertlar.jpg")] bg-cover bg-center bg-[#118058]/36 bg-blend-multiply rounded-full w-44 h-11 flex items-center justify-center md:w-6/6 md:h-12'>
					<span className='text-[#FAC22B] font-medium '>Desertlar</span>
				</div>
				<div className='bg-[url("/ichimliklar.jpg")] bg-cover bg-center bg-[#118058]/36 bg-blend-multiply rounded-full w-44 h-11 flex items-center justify-center md:w-6/6 md:h-12'>
					<span className='text-[#FAC22B] font-medium '>Ichimliklar</span>
				</div>
				<div className='bg-[url("/kombo.jpg")] bg-cover bg-center bg-[#118058]/36 bg-blend-multiply rounded-full w-44 h-11 flex items-center justify-center md:w-6/6 md:h-12'>
					<span className='text-[#FAC22B] font-medium '>Kombo Menyular</span>
				</div>
			</div>
			<div className='pt-5 md:pt-10 gap-2.5 flex-col flex'>
				<div className='flex justify-between items-center md:justify-center md:pb-5'>
					<h3 className='text-[#FAC22B] font-medium text-2xl text-start lg:text-5xl'>
						Milliy Taomlar
					</h3>
					<div className='flex gap-2 md:hidden'>
						<div className='rounded-full w-10 h-10 bg-[url("/milliytaom.jpg")] bg-cover bg-center bg-[#118058]/36 bg-blend-multiply flex items-center justify-center text-[#FAC22B] text-lg'>
							<FaArrowLeft />
						</div>
						<div className='rounded-full w-10 h-10 bg-[url("/milliytaom.jpg")] bg-cover bg-center border border-amber-500 flex items-center justify-center text-[#FAC22B] text-lg'>
							<FaArrowRight />
						</div>
					</div>
				</div>
				<section className='w-full block overflow-hidden'>
					<FoodCarousel />
				</section>
			</div>
		</div>
	)
}
