'use client'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import NewsId from '../../components/NewsId'
import OtherNews from '../../components/OtherNews'
import { useParams } from 'next/navigation'

export default function NewsPage() {
	const { locale } = useParams() as { locale: 'en' | 'uz' }
	return (
		<>
			<Navbar />
			<NewsId />
			<OtherNews locale={locale} />
			<Footer />
		</>
	)
}
