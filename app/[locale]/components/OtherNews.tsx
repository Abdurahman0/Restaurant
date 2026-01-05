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

export default function OtherNews({ locale }: { locale: 'en' | 'uz' }) {
	const [news, setNews] = useState<NewsItem[]>([])
	const router = useRouter()
	const t = useTranslations('NewsPage')

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
			<div className='flex justify-between items-center'>
				<h3 className='text-[#FAC22B] font-medium text-3xl lg:text-6xl md:w-full'>
					{t('otherNews')}
				</h3>
				<div className='flex justify-end order-4 w-3/4 text-white'>
					<button
						className='bg-[#219169] py-3 px-3 lg:w-56 w-full rounded-xl text-sm cursor-pointer'
						onClick={() => router.push(`/${locale}/news/`)}
					>
						{t('allNews')}
					</button>
				</div>
			</div>
			<div className='py-5'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
					{news.map(item => {
						const paragraphs = item.paragraphs[locale]
						return (
							<div
								key={item._id}
								className='flex flex-col bg-white rounded-2xl shadow-sm overflow-hidden w-full'
							>
								{/* IMAGE */}
								<div
									style={{ backgroundImage: `url(${item.images.main})` }}
									className='bg-center bg-cover h-56 md:h-64 w-full rounded-2xl'
								/>

								{/* CONTENT */}
								<div className='flex flex-col gap-3 mt-3 md:text-lg'>
									<h2 className='text-[#FAC22B] font-medium text-2xl md:text-3xl px-2.5'>
										{item.title[locale]}
									</h2>

									<p className='text-[#3A3A3A] pl-2.5 pr-2.5 font-medium'>
										{paragraphs[0]}
									</p>

									<div className='pr-2 flex justify-end pb-3 text-sm'>
										<button
											className='bg-[#219169] py-2 px-4 rounded-xl text-white cursor-pointer'
											onClick={() =>
												router.push(`/${locale}/news/${item.slug}`)
											}
										>
											{t('newsBtn')}
										</button>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
