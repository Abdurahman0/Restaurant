export default function ForSale() {
	return (
		<>
			<div className='bg-[url("/restoranbg.jpg")] bg-cover bg-center bg-[#2E0F10]/60 bg-blend-multiply mb-5 block md:hidden'>
				<div className='max-w-7xl mx-auto px-4 sm:px-10 lg:px-[120px]'>
					<div className='flex flex-col gap-[25px]'>
						<div className='flex flex-col items-center justify-center text-[#FFB200]'>
							<h3 className='text-[#DD1C1C] font-bold text-xl'>Aksiya</h3>
							<p className='text-lg py-2 font-medium'>
								Bu oy sizning tug&apos;ilgan kuningizmi?
							</p>
							<p className='max-w-64 font-semibold text-lg'>
								Restoranimiz tomonidan{' '}
								<span className='text-[#DD1C1C]'>10%</span> chegiramaga ega
								bo’ling
							</p>
						</div>
						<div className='flex gap-10 justify-between -mx-3 pb-5 text-white'>
							<button className='bg-[#DD1C1C] py-3 px-3 text-center rounded-full text-sm'>
								Buyurtma Berish
							</button>
							<span className='text-[#FFB200] py-2 text-center rounded-full text-xl font-extrabold'>
								2:23:58:57
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className='max-w-full mx-auto lg:px-[120px] md:block hidden pt-10'>
				<div className='bg-[url("/restoranbg.jpg")] bg-cover bg-center bg-[#2E0F10]/60 bg-blend-multiply mb-5 rounded-2xl'>
					<div className='flex flex-col gap-[25px]'>
						<div className='flex flex-col items-center justify-center text-[#FFB200]'>
							<h3 className='text-[#DD1C1C] font-bold text-6xl pt-5 pb-5'>
								Aksiya
							</h3>
						</div>
						<div className='flex flex-col w-full justify-between px-40'>
							<div className='flex gap-5 max-h-5xl max-w-7xl justify-between'>
								<div className='relative w-64 h-44 mt-20'>
									{/* yellow (behind) */}
									<div className='absolute inset-0 bg-[url("/saleback.jpg")] bg-cover bg-center rounded-xl rotate-12 z-0' />

									{/* red (in front) */}
									<div className='absolute inset-0 bg-[url("/salefront.png")] bg-cover bg-center rounded-xl z-10' />
								</div>
								<div className='w-1/2 h-64 bg-[url("/salefront.png")] bg-cover bg-center bg-[#2E0F10]/60 bg-blend-multiply rounded-xl skew-y-3 flex items-center justify-center'>
									<p className='font-semibold text-2xl text-[#FFB200] w-3/4'>
										Restoranimiz tomonidan{' '}
										<span className='text-[#DD1C1C]'>10%</span> chegiramaga ega
										bo’ling
									</p>
								</div>
							</div>

							<div className='flex gap-10 justify-between w-7xl pr-48 py-5 text-white'>
								<div>
									<p className='text-2xl py-5 font-medium text-[#FFB200]'>
										Bu oy sizning tug&apos;ilgan kuningizmi?
									</p>
									<button className='bg-[#DD1C1C] py-3 px-6 text-center text-white rounded-full text-lg cursor-pointer'>
										Buyurtma Berish
									</button>
								</div>
								<span className='text-[#FFB200] pt-16 rounded-full text-5xl font-extrabold'>
									2:23:58:57
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
