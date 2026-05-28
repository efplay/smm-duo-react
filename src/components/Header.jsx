import { useEffect, useState } from 'react'

const NAV_ITEMS = [
	{ label: 'About', href: '#about' },
	{ label: 'Services', href: '#services' },
	{ label: 'Tools', href: '#tools' },
	{ label: 'People', href: '#people' },
	{ label: 'Contact', href: '#contact' },
]

export default function Header() {
	const [scrolled, setScrolled] = useState(false)
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40)
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	const handleNav = href => {
		setOpen(false)
		const el = document.querySelector(href)
		if (el) el.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<>
			{/* Top header — visible only at the top */}
			<header className={scrolled ? 'header-hidden' : ''}>
				<div className='container'>
					<nav>
						<a href='#' className='logo'>
							<span className='logo-mark'>DD</span>
							<span>Digital Duo</span>
						</a>
						<div className='nav-links'>
							{NAV_ITEMS.map(item => (
								<a key={item.href} href={item.href}>
									{item.label}
								</a>
							))}
						</div>
					</nav>
				</div>
			</header>

			{/* FAB — visible only when scrolled */}
			<div className={`fab-nav${scrolled ? ' fab-nav--visible' : ''}`}>
				{open && <div className='fab-overlay' onClick={() => setOpen(false)} />}
				<div className={`fab-menu${open ? ' fab-menu--open' : ''}`}>
					{NAV_ITEMS.map(item => (
						<button
							key={item.href}
							className='fab-menu-item'
							onClick={() => handleNav(item.href)}
						>
							{item.label}
						</button>
					))}
				</div>
				<button
					className={`fab-btn${open ? ' fab-btn--open' : ''}`}
					onClick={() => setOpen(v => !v)}
					aria-label='Navigation menu'
				>
					DD
				</button>
			</div>
		</>
	)
}
