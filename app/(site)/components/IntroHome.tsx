import Navbar from './Navbar'

export default function Intro() {
	return (
		<div className="bg-[url('/restoranbg.jpg')] bg-cover bg-center bg-[#0F2E23]/50 bg-blend-multiply">
			<div className='h-full max-w-full mx-auto px-4 sm:px-10 lg:px-[120px] pt-5'>
				<Navbar />
				<div className='text-white pl-5 md:w-2/3 pt-10'>
					<div className='pt-16 flex flex-col gap-3.5 md:gap-10'>
						<h1 className='font-bold text-4xl md:text-7xl w-full'>
							Mazali taom — bir marta tating, abadiy tanlaysiz!
						</h1>
						<p className='font-semibold text-lg md:text-3xl w-64 lg:w-xl'>
							Siz sevgan lazzatni har kuni yangicha e’tibor bilan taqdim etamiz
						</p>
					</div>
					<div className='flex gap-10 justify-center lg:justify-start pt-5 lg:pt-10 pb-[30px] lg:pb-56'>
						<button className='bg-[#E98A3F] py-3 px-3 text-center lg:w-1/3 rounded-xl text-md cursor-pointer'>
							Joy Band Qilish
						</button>
						<button className='bg-[#219169] py-3 px-3 lg:w-1/3 text-center rounded-xl text-md cursor-pointer'>
							Buyurtma Berish
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
