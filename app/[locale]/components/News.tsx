'use client'

import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface NewsItem {
	_id: string
	slug: string
	title: { en: string; uz: string }
	paragraphs: { en: string[]; uz: string[] }
	images: { main: string; gallery: string[] }
}

export default function News({ locale }: { locale: 'en' | 'uz' }) {
	const t = useTranslations('NewsPage')
	const [news, setNews] = useState<NewsItem[]>([])
	const router = useRouter()

	useEffect(() => {
		async function fetchNews() {
			const res = await fetch(`/api/news`)
			const data = await res.json()
			setNews(data)
			console.log('Fetched news:', data)
		}

		fetchNews()
	}, [])

	if (!news.length) return <p>Loading...</p>

	return (
		<div className='max-w-full mx-auto px-4 sm:px-10 lg:px-30 py-5 flex flex-col gap-8 md:pt-16'>
			{news.map(item => {
				const paragraphs = item.paragraphs[locale] // this is already an array

				return (
					<div
						key={item._id}
						className='pt-2.5 flex flex-col md:flex-row gap-5 max-w-full'
					>
						{/* IMAGE */}
						<div
							className='bg-center bg-cover rounded-2xl h-56 md:h-96 w-full md:w-1/2 order-2 md:order-1'
							style={{ backgroundImage: `url(${item.images.main})` }}
						/>

						{/* RIGHT SIDE TEXT */}
						<div className='w-full md:w-1/2 flex flex-col gap-5 order-3 md:order-2'>
							{/* TITLE */}
							<h2 className='text-[#FAC22B] font-medium text-3xl lg:text-6xl hidden md:block'>
								{item.title[locale]}
							</h2>

							{/* FIRST 2 PARAGRAPHS */}
							<div className='flex flex-col md:gap-2.5'>
								<p className='text-[#3A3A3A] px-2.5 md:text-xl md:font-semibold'>
									{paragraphs[0]}
								</p>
								<p className='text-[#3A3A3A] px-2.5 md:text-xl md:font-semibold'>
									{paragraphs[1]}
								</p>
							</div>

							{/* BUTTON — navigate to single news */}
							<div className='flex justify-end mt-2.5'>
								<button
									className='bg-[#219169] py-3 px-3 lg:w-56 w-2/3 text-center text-white rounded-xl text-sm cursor-pointer'
									onClick={() => router.push(`/${locale}/news/${item.slug}`)}
								>
									{t('newsBtn')}
								</button>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}
