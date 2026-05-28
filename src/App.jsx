import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import People from './components/People'
import Services from './components/Services'
import Tools from './components/Tools'
import Work from './components/Work'

function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Marquee />
				<About />
				<Services />
				<Tools />
				<Work />
				<People />
				<Contact />
			</main>
			<Footer />
		</>
	)
}

export default App
