'use client'

import { useParams } from 'next/navigation'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import News from '../components/News'
import NewsIntro from '../components/NewsIntro'

export default function NewsPage() {
	const { locale } = useParams() as { locale: 'en' | 'uz' }

	return (
		<>
			<Navbar />
			<NewsIntro />
			<News locale={locale} /> {/* pass locale to your client component */}
			<Footer />
		</>
	)
}
