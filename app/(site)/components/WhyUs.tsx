import Carousel from './Carousel'

export default function WhyUs() {
	return (
		<div className='max-w-7xl mx-auto px-4 sm:px-10 lg:px-[120px] pt-5'>
			<div className='flex flex-col gap-2.5'>
				<div className='flex justify-center'>
					<h2 className='text-[#FAC22B] font-medium text-3xl text-center w-64'>
						Nega odamlar bizni tanlashadi?
					</h2>
				</div>
				<p className='text-[#3A3A3A] pl-5'>
					Restoranimiz 2014 yildan beri odamlarga xizmat ko&apos;rsatib keladi
					hamda Toshkent bo&apos;ylab 5ta filiali mavjud.
				</p>
				<div className='hidden md:block'>
					<div className="w-full h-[500px] rounded-2xl flex flex-col justify-center relative bg-[url('/restoranbg.jpg')] bg-cover bg-center bg-[#0F2E23]/60 bg-blend-multiply">
						<div className='size-[55%]'>
							<div className="absolute left-1/2 -translate-x-1/2 top-[20%] w-40 h-40 bg-[url('/cook2.jpg')] bg-cover bg-center rounded-full" />
							<div className="absolute left-[15%] top-[7%] w-28 h-28 bg-[url('/cook.webp')] bg-cover bg-center rounded-full" />
							<div className="absolute right-[10%] top-[3%] w-32 h-32 bg-[url('/cook6.jpg')] bg-cover bg-center rounded-full" />
							<div className="absolute right-[15%] top-[43%] w-28 h-28 bg-[url('/cook4.webp')] bg-cover bg-clip-content rounded-full" />
							<div className="absolute left-[10%] bottom-[33%] w-32 h-32 bg-[url('/cook5.jpg')] bg-cover bg-center rounded-full" />
						</div>
						<div className='text-center flex flex-col justify-center items-center gap-2.5'>
							<span className='text-[#FAC22B] font-semibold'>
								Tajribali Oshpazlar
							</span>
							<p className='text-[#FAC22B] text-start w-80'>
								Barcha oshpazlarimiz o&apos;z sohaliring ustasi bo&apos;lib 5
								yildan ortiq tajribaga ega
							</p>
						</div>
					</div>
				</div>
				<section className='w-full block lg:hidden overflow-hidden'>
					<Carousel />
				</section>
			</div>
		</div>
	)
}

// bg-[url('/restoranbg.jpg')] bg-cover bg-center
