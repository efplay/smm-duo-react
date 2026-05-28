import { useState } from 'react'

const NAV_ITEMS = [
	{ label: 'About', href: '#about' },
	{ label: 'Services', href: '#services' },
	{ label: 'Tools', href: '#tools' },
	{ label: 'People', href: '#people' },
	{ label: 'Contact', href: '#contact' },
]

export default function Header() {
	const [open, setOpen] = useState(false)

	const handleNav = href => {
		setOpen(false)
		const el = document.querySelector(href)
		if (el) el.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<div className='fab-nav'>
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
	)
}
