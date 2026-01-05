'use client'

import { useTranslations } from 'next-intl'

export default function News() {
	const t = useTranslations('NewsPage')

	const arr = [1, 2, 3, 4]
	return (
		<div className='max-w-full mx-auto px-4 sm:px-10 lg:px-30 py-5 flex flex-col gap-8 md:pt-16'>
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
						{t('newsTitle')}
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
							{t('newsTitle')}
						</h2>

						{/* PARAGRAPHS */}
						<div className='flex flex-col md:gap-2.5'>
							<p className='text-[#3A3A3A] px-2.5 md:text-xl md:font-semibold'>
								{t('newsDesc')}
							</p>

							<p className='text-[#3A3A3A] px-2.5 md:text-xl md:font-semibold'>
								{t('newsDesc2')}
							</p>
						</div>

						{/* BUTTON */}
						<div className='flex justify-end mt-2.5'>
							<button className='bg-[#219169] py-3 px-3 lg:w-56 w-2/3 text-center text-white rounded-xl text-sm cursor-pointer'>
								{t('newsBtn')}
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

;<></>
