export default function NewsId() {
	return (
		<div className='max-w-full mx-auto px-4 sm:px-10 lg:px-[120px] py-5 flex flex-col gap-8 md:pt-16'>
			<div className='flex flex-col md:flex-row gap-10'>
				{/* LEFT IMAGES (Desktop left, mobile after 2 paragraphs) */}
				<div className='w-full hidden md:w-1/2 md:flex flex-col gap-4 order-3 md:order-1'>
					{/* BIG IMAGE */}
					<div className="bg-[url('/opening.jpg')] bg-center bg-cover rounded-2xl h-56 md:h-96 w-full" />

					{/* THREE IMAGES */}
					<div className='grid grid-cols-3 gap-2'>
						{[1, 2, 3].map(i => (
							<div
								key={i}
								className="bg-[url('/opening.jpg')] bg-center bg-cover rounded-xl h-32 md:h-40"
							/>
						))}
					</div>
				</div>

				{/* RIGHT TEXT */}
				<div className='w-full md:w-1/2 flex flex-col gap-6 order-1 md:order-2'>
					{/* TITLE */}
					<h2 className='text-[#FAC22B] font-medium text-3xl lg:text-6xl'>
						Yangi Filial Ochilish Marosimi
					</h2>

					{/* FIRST 2 PARAGRAPHS */}
					<div className='flex flex-col gap-4 order-1'>
						<p className='text-[#3A3A3A] md:text-xl md:font-semibold'>
							Shaharimizdagi [restoran/kompaniya nomi] o‘zining yangi filialini
							tantanali ravishda ochdi. Ochilish marosimi [sana] kuni bo‘lib
							o‘tdi va tadbirda kompaniya rahbariyati, xodimlar, mijozlar hamda
							soha vakillari ishtirok etdilar.
						</p>

						<p className='text-[#3A3A3A] md:text-xl md:font-semibold'>
							U yerda mijozlarga sifatli xizmat ko‘rsatish, keng menu tanlovi va
							qulay sharoitlar taqdim etiladi. Ochilish marosimi davomida
							mehmonlar uchun maxsus aksiyalar va sovg‘alar taqdim etildi.
						</p>
					</div>

					{/* IMAGES SHOW HERE ON MOBILE (but on desktop they are on the left) */}
					<div className='block md:hidden order-2'>
						{/* BIG IMAGE */}
						<div className="bg-[url('/opening.jpg')] bg-center bg-cover rounded-2xl h-56 w-full mb-3" />
						{/* SMALL IMAGES */}
						<div className='grid grid-cols-3 gap-2'>
							{[1, 2, 3].map(i => (
								<div
									key={i}
									className="bg-[url('/opening.jpg')] bg-center bg-cover rounded-xl h-32"
								/>
							))}
						</div>
					</div>

					{/* LAST 2 PARAGRAPHS */}
					<div className='flex flex-col gap-4 order-3'>
						<p className='text-[#3A3A3A] md:text-xl md:font-semibold'>
							“Yoqimli Taomlar” rahbari marosimda so‘zga chiqib, yangi
							filialning ochilishi kompaniya rivojlanishidagi muhim bosqich
							ekanini ta’kidladi. Shu bilan birga, u mijozlarga sifatli xizmat
							ko‘rsatishni davom ettirish va jamoani yanada kengaytirish
							rejalari haqida ham ma’lumot berdi.
						</p>

						<p className='text-[#3A3A3A] md:text-xl md:font-semibold'>
							Yangi filialning ochilishi shahar aholisi va mehmonlari uchun
							qulay imkoniyat yaratadi hamda [restoran/kompaniya nomi]ning
							xizmatlarini yanada ko‘proq insonlarga yetkazish imkonini beradi.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
