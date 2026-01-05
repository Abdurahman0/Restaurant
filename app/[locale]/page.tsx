import ContactUs from './components/ContactUs'
import FamousFoods from './components/FamousFoods'
import Footer from './components/Footer'
import ForSale from './components/ForSale'
import Intro from './components/IntroHome'
import Reviews from './components/Reviews'
import WhyUs from './components/WhyUs'

export default function Home() {
	return (
		<>
			<Intro />
			<WhyUs />
			<FamousFoods />
			<ForSale />
			<Reviews />
			<ContactUs />
			<Footer />
		</>
		
	)
}
