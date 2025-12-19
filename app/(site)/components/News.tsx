export default function News() {
	const arr = [1, 2, 3, 4]
	return (
		<div className='max-w-full mx-auto px-4 sm:px-10 lg:px-[120px] py-5 flex flex-col gap-8 md:pt-16'>
			{arr.map((items, inx) => (
				<div
					key={inx}
					className='pt-2.5 flex flex-col md:flex-row gap-5 max-w-full'
				>
					{/* TITLE — mobile first, desktop inside right column */}
					<h2
						className='
      text-[#FAC22B] font-medium text-3xl lg:text-6xl w-3/4
      order-1 md:hidden
    '
					>
						Yangi Filial Ochilish Marosimi
					</h2>

					{/* IMAGE */}
					<div
						className="
      bg-[url('/opening.jpg')] bg-center bg-cover rounded-2xl
      h-56 md:h-96
      w-full md:w-1/2
      order-2 md:order-1
    "
					/>

					{/* RIGHT SIDE TEXT */}
					<div className='w-full md:w-1/2 flex flex-col gap-5 order-3 md:order-2'>
						{/* TITLE — visible only on desktop */}
						<h2
							className='
        text-[#FAC22B] font-medium text-3xl lg:text-6xl
        hidden md:block
      '
						>
							Yangi Filial Ochilish Marosimi
						</h2>

						{/* PARAGRAPHS */}
						<div className='flex flex-col md:gap-2.5'>
							<p className='text-[#3A3A3A] px-2.5 md:text-xl md:font-semibold'>
								Yoqimli Taomlar o‘zining yangi filialini tantanali ravishda
								ochdi. Ochilish marosimi [sana] kuni bo‘lib o‘tdi va tadbirda
								kompaniya rahbariyati, xodimlar, mijozlar hamda soha vakillari
								ishtirok etdilar.
							</p>

							<p className='text-[#3A3A3A] px-2.5 md:text-xl md:font-semibold'>
								Yangi filial zamonaviy dizayn va qulay joylashuv bilan ajralib
								turadi. U yerda mijozlarga sifatli xizmat ko‘rsatish, keng menu
								tanlovi va qulay sharoitlar taqdim etiladi. Ochilish marosimi
								davomida mehmonlar uchun maxsus aksiyalar va sovg‘alar taqdim
								etildi....
							</p>
						</div>

						{/* BUTTON */}
						<div className='flex justify-end mt-2.5'>
							<button className='bg-[#219169] py-3 px-3 lg:w-56 w-2/3 text-center text-white rounded-xl text-sm cursor-pointer'>
								Batafsil
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

;<></>
