const people = [
	{
		photo: '/sasha.jpg',
		initials: 'OT',
		firstName: 'Oleksandra Trush',
		name: 'Oleksandra Trush',
		role: 'Social Media & Content Specialist focused on visual communication, storytelling and short-form video content.',
		details: [
			'Focus: content creation, video editing, storytelling',
			'Tools: Canva, Figma, DaVinci Resolve',
			'Languages: Ukrainian, Polish, English',
		],
		links: [
			{
				label: 'Instagram',
				href: 'https://www.instagram.com/oleksandra_trush?igsh=MWI4bGlrencxeDBlbA==',
			},
			{
				label: 'LinkedIn',
				href: 'https://www.linkedin.com/in/oleksandra-trush-06058b403/',
			},
		],
	},
	{
		photo: '/nastya.jpg',
		initials: 'AS',
		firstName: 'Anastasiia Savytska',
		name: 'Anastasiia Savytska',
		role: 'Digital content creator focused on strategy, branding, startup communication and modern content workflows.',
		details: [
			'Focus: strategy, branding, SMM, digital tools',
			'Tools: Notion, Meta Business Suite, Canva',
			'Languages: Ukrainian, Polish, English',
		],
		links: [
			{ label: 'Instagram', href: 'https://www.instagram.com/sss.tasyaa/' },
			{
				label: 'LinkedIn',
				href: 'https://www.linkedin.com/in/anastasiia-savytska-54b79135b/',
			},
		],
	},
]

export default function People() {
	return (
		<section id='people'>
			<div className='container'>
				<div className='section-title'>
					<div className='eyebrow'>The duo</div>
					<h2>Individual strengths</h2>
				</div>

				<div className='people-grid'>
					{people.map(person => (
						<div className='person' key={person.initials}>
							<div className='person-photo'>
								<img src={person.photo} alt={person.name} />
							</div>
							<div className='person-body'>
								<h3>{person.firstName}</h3>
								<p className='muted'>{person.role}</p>
								<ul>
									{person.details.map(d => (
										<li key={d}>{d}</li>
									))}
								</ul>
								<div className='person-links'>
									{person.links.map(link => (
										<a
											key={link.label}
											href={link.href}
											className='person-link'
											target='_blank'
											rel='noopener noreferrer'
										>
											{link.label}
										</a>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
