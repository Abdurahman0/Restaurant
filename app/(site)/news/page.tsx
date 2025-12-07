import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import News from '../components/News'
import NewsIntro from '../components/NewsIntro'

export default function NewsPage() {
	return (
		<>
			<Navbar />
			<NewsIntro />
			<News />
			<Footer />
		</>
	)
}
