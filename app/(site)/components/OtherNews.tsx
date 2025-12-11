export default function OtherNews() {
	const news = [1, 2, 3]
	return (
		<div className='max-w-full mx-auto px-4 sm:px-10 lg:px-[120px] py-5 flex flex-col gap-8 md:pt-16'>
			<div className='flex justify-between items-center'>
				<h3 className='text-[#FAC22B] font-medium text-3xl lg:text-6xl md:w-full'>
					Qo&apos;shimcha Yangiliklar
				</h3>
				<div className='flex justify-end order-4 w-3/4 text-white'>
					<button className='bg-[#219169] py-3 px-3 lg:w-56 w-full rounded-xl text-sm'>
						Barcha Yangiliklar
					</button>
				</div>
			</div>
			<div className='py-5'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
					{news.map((item, i) => (
						<div
							key={i}
							className='flex flex-col bg-white rounded-2xl shadow-sm overflow-hidden w-full'
						>
							{/* IMAGE */}
							<div className="bg-[url('/opening.jpg')] bg-center bg-cover h-56 md:h-64 w-full rounded-2xl" />

							{/* CONTENT */}
							<div className='flex flex-col gap-3 mt-3 md:text-lg'>
								<h2 className='text-[#FAC22B] font-medium text-2xl md:text-3xl px-2.5'>
									Yangi Filial Ochilish Marosimi
								</h2>

								<p className='text-[#3A3A3A] pl-2.5 pr-2.5 font-medium'>
									Yoqimli Taomlar o‘zining yangi filialini tantanali ravishda
									ochdi. Ochilish marosimi [sana] kuni bo‘lib o‘tdi...
								</p>

								<div className='pr-2 flex justify-end pb-3 text-sm'>
									<button className='bg-[#219169] py-2 px-4 rounded-xl text-white'>
										Batafsil
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
