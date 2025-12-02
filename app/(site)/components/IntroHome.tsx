import Navbar from './Navbar'

export default function Intro() {
	return (
		<div className="bg-[url('/restoranbg.jpg')] bg-cover bg-center bg-[#0F2E23]/50 bg-blend-multiply">
			<div className='h-full max-w-7xl mx-auto px-4 sm:px-10 lg:px-[120px] pt-5'>
				<Navbar />
				<div className='text-white pl-5'>
					<div className='pt-16 flex flex-col gap-3.5'>
						<h1 className='font-bold text-4xl'>
							Mazali taom — bir marta tating, abadiy tanlaysiz!
						</h1>
						<p className='font-semibold text-lg w-64'>
							Siz sevgan lazzatni har kuni yangicha e’tibor bilan taqdim etamiz
						</p>
					</div>
					<div className='flex gap-10 justify-center pt-5 pb-[30px]'>
						<button className='bg-[#E98A3F] py-3 px-3 text-center w-full rounded-xl text-md'>
							Joy Band Qilish
						</button>
						<button className='bg-[#219169] py-3 px-3 w-full text-center rounded-xl text-md'>
							Buyurtma Berish
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
