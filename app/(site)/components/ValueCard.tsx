export default function ValueCard({
	title = 'Halol va Toza mahsulotlar',
	img = '/value1.jpg',
}) {
	return (
		<>
			<div className='bg-white rounded-xl size-28 md:size-[500px] p-3 flex flex-col items-center justify-center md:hidden'>
				<div className='bg-[url("/value1.jpg")] bg-center bg-contain size-12 rounded-full' />
				<span className='line-clamp-2 text-[12px] text-center pt-2 font-medium text-[#FAC22B]'>
					Halol va Toza mahsulotlar
				</span>
			</div>
			<div className='hidden w-full max-w-xs md:size-96 md:max-w-96 bg-white rounded-xl p-4 md:flex flex-col items-center justify-center shadow'>
				{/* circle image */}
				<div
					className='rounded-full w-56 h-56 bg-center bg-cover mb-3'
					style={{ backgroundImage: `url(${img})` }}
				/>
				<span className='text-2xl text-center font-semibold text-[#FAC22B]'>
					{title}
				</span>
			</div>
		</>
	)
}
