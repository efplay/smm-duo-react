import { useEffect, useState } from 'react'

export default function Header() {
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40)
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<header className={scrolled ? 'scrolled' : ''}>
			<div className='container'>
				<nav>
					<a href='#' className='logo'>
						<span className='logo-mark'>DD</span>
						<span>Digital Duo</span>
					</a>
					<div className='nav-links'>
						<a href='#services'>Services</a>
						<a href='#work'>Work</a>
						<a href='#about'>About</a>
						<a href='#contact' className='menu-pill'>
							Contact
						</a>
					</div>
				</nav>
			</div>
		</header>
	)
}
