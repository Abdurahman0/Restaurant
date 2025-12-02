export default function ForSale() {
	return (
		<div className='bg-[url("/restoranbg.jpg")] bg-cover bg-center bg-[#2E0F10]/60 bg-blend-multiply mb-5'>
			<div className='max-w-7xl mx-auto px-4 sm:px-10 lg:px-[120px]'>
				<div className='flex flex-col gap-[25px]'>
					<div className='flex flex-col items-center justify-center text-[#FFB200]'>
						<h3 className='text-[#DD1C1C] font-bold text-xl'>Aksiya</h3>
						<p className='text-lg py-2 font-medium'>
							Bu oy sizning tug&apos;ilgan kuningizmi?
						</p>
						<p className='max-w-64 font-semibold text-lg'>
							Restoranimiz tomonidan <span className='text-[#DD1C1C]'>10%</span>{' '}
							chegiramaga ega bo’ling
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
	)
}
