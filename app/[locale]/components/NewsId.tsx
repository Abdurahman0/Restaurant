'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

interface NewsItem {
	_id: string
	slug: string
	title: { en: string; uz: string }
	paragraphs: { en: string[]; uz: string[] }
	images: { main: string; gallery: string[] }
}

export default function NewsId() {
	const [news, setNews] = useState<NewsItem | null>(null)
	const param = useParams()

	useEffect(() => {
		async function fetchNews() {
			try {
				const res = await fetch(
					`${window.location.origin}/api/news/${param.id}`
				)
				if (!res.ok) throw new Error('News not found')
				const data = await res.json()
				setNews(data)
				console.log('Single news fetched:', data)
			} catch (err) {
				console.error(err)
				setNews(null)
			}
		}

		fetchNews()
	}, [param.id])

	if (!news) return <p>Loading news...</p>

	const paragraphs = news.paragraphs[param.locale as 'en' | 'uz'] // array of 4 strings
	const gallery = news.images.gallery

	return (
		<div className='max-w-full mx-auto px-4 sm:px-10 lg:px-30 py-5 flex flex-col gap-8 md:pt-16'>
			<div className='flex flex-col md:flex-row gap-10'>
				{/* LEFT IMAGES (desktop) */}
				<div className='w-full hidden md:w-1/2 md:flex flex-col gap-4 order-3 md:order-1'>
					{/* MAIN IMAGE */}
					<div
						className='bg-center bg-cover rounded-2xl h-56 md:h-96 w-full'
						style={{ backgroundImage: `url(${news.images.main})` }}
					/>

					{/* GALLERY */}
					<div className='grid grid-cols-3 gap-2'>
						{gallery.map((img, i) => (
							<div
								key={i}
								className='bg-center bg-cover rounded-xl h-32 md:h-40'
								style={{ backgroundImage: `url(${img})` }}
							/>
						))}
					</div>
				</div>

				{/* RIGHT SIDE TEXT */}
				<div className='w-full md:w-1/2 flex flex-col gap-6 order-1 md:order-2'>
					{/* TITLE */}
					<h2 className='text-[#FAC22B] font-medium text-3xl lg:text-6xl'>
						{news.title[param.locale as 'en' | 'uz']}
					</h2>

					{/* FIRST 2 PARAGRAPHS */}
					<div className='flex flex-col gap-4 order-1'>
						<p className='text-[#3A3A3A] md:text-xl md:font-semibold'>
							{paragraphs[0]}
						</p>
						<p className='text-[#3A3A3A] md:text-xl md:font-semibold'>
							{paragraphs[1]}
						</p>
					</div>

					{/* IMAGES SHOW ON MOBILE */}
					<div className='block md:hidden order-2'>
						<div
							className='bg-center bg-cover rounded-2xl h-56 w-full mb-3'
							style={{ backgroundImage: `url(${news.images.main})` }}
						/>
						<div className='grid grid-cols-3 gap-2'>
							{gallery.map((img, i) => (
								<div
									key={i}
									className='bg-center bg-cover rounded-xl h-32'
									style={{ backgroundImage: `url(${img})` }}
								/>
							))}
						</div>
					</div>

					{/* LAST 2 PARAGRAPHS */}
					<div className='flex flex-col gap-4 order-3'>
						<p className='text-[#3A3A3A] md:text-xl md:font-semibold'>
							{paragraphs[2]}
						</p>
						<p className='text-[#3A3A3A] md:text-xl md:font-semibold'>
							{paragraphs[3]}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
