// app/[locale]/page.tsx or MenuPage.tsx
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import MavsumiyTaomlar from '../components/Mavsumiy Taomlar'
import TavsiyaTaomlar from '../components/TavsiyaTaomlar'
import Navbar from '../components/Navbar'

export default async function MenuPage() {
	return (
		<>
			<Navbar />
			<Menu />
			<TavsiyaTaomlar />
			<MavsumiyTaomlar />
			<Footer />
		</>
	)
}
