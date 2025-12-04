import Footer from '../components/Footer'
import MavsumiyTaomlar from '../components/Mavsumiy Taomlar'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'
import TavsiyaTaomlar from '../components/TavsiyaTaomlar'

export default function MenuPage() {
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
