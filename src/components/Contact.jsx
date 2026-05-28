import { useState } from 'react'

export default function Contact() {
	const [isOpen, setIsOpen] = useState(false)
	const [status, setStatus] = useState('idle')
	const [form, setForm] = useState({ name: '', email: '', message: '' })

	const handleChange = e => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	const handleSubmit = async e => {
		e.preventDefault()
		setStatus('sending')
		try {
			const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify(form),
			})
			if (res.ok) {
				setStatus('success')
				setForm({ name: '', email: '', message: '' })
			} else {
				setStatus('error')
			}
		} catch {
			setStatus('error')
		}
	}

	const closeModal = () => {
		setIsOpen(false)
		setStatus('idle')
	}

	return (
		<section id='contact'>
			<div className='container'>
				<div className='contact-box'>
					<h2>Let's create content together</h2>
					<p>
						Available for internships, junior positions, freelance projects and
						creative collaborations.
					</p>
					<div className='buttons' style={{ justifyContent: 'center' }}>
						<button className='btn primary' onClick={() => setIsOpen(true)}>
							Email us
						</button>
					</div>
				</div>
			</div>

			{isOpen && (
				<div className='modal-overlay' onClick={closeModal}>
					<div className='modal-form' onClick={e => e.stopPropagation()}>
						<button className='modal-close' onClick={closeModal}>
							×
						</button>
						<h3>Send us a message</h3>
						{status === 'success' ? (
							<p className='form-success'>
								Message sent! We'll get back to you soon 🎉
							</p>
						) : (
							<form onSubmit={handleSubmit}>
								<input
									name='name'
									type='text'
									placeholder='Your name'
									value={form.name}
									onChange={handleChange}
									required
								/>
								<input
									name='email'
									type='email'
									placeholder='Your email'
									value={form.email}
									onChange={handleChange}
									required
								/>
								<textarea
									name='message'
									placeholder='Your message'
									value={form.message}
									onChange={handleChange}
									required
									rows={5}
								/>
								{status === 'error' && (
									<p className='form-error'>
										Something went wrong. Please try again.
									</p>
								)}
								<button
									type='submit'
									className='btn primary'
									disabled={status === 'sending'}
								>
									{status === 'sending' ? 'Sending...' : 'Send message'}
								</button>
							</form>
						)}
					</div>
				</div>
			)}
		</section>
	)
}
