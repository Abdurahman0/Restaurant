import Cooks from '../components/Cooks'
import Footer from '../components/Footer'
import ForSale from '../components/ForSale'
import IntroAboutUs from '../components/IntroAboutUs'
import Navbar from '../components/Navbar'
import Quality from '../components/Quality'
import Reviews from '../components/Reviews'
import StartAboutUs from '../components/StartAboutUs'
import Values from '../components/Values'

export default function AboutUsPage() {
	return (
		<div className='bg-[#DACD99]'>
			<Navbar />
			<IntroAboutUs />
			<StartAboutUs />
			<Cooks />
			<Quality />
			<Values />
			<Reviews />
			<div className='bg-white'>
				<ForSale />
				<Footer />
			</div>
		</div>
	)
}
