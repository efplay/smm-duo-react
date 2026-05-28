const services = [
  {
    title: 'Social Media',
    desc: 'We build your content grid, grow your audience and handle community interactions across Instagram and TikTok.',
    items: ['Instagram & TikTok', 'Content planning', 'Community communication', 'Meta Business Suite'],
  },
  {
    title: 'Content Creation',
    desc: 'From daily posts to scroll-stopping reels — we handle the full content pipeline tailored to your brand.',
    items: ['Posts & stories', 'Reels & TikTok', 'Presentations', 'Banners & visuals'],
  },
  {
    title: 'Branding',
    desc: 'We shape your visual identity — color palettes, moodboards, brand kits and a look that feels unmistakably yours.',
    items: ['Visual identity', 'Brand kits', 'Moodboards', 'UI/UX basics'],
  },
  {
    title: 'Video Editing',
    desc: 'Short-form and longer formats optimized for social — captions, cuts, sound design and hooks that keep viewers watching.',
    items: ['Short-form editing', 'Subtitles', 'Sound editing', 'Voice-over basics'],
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-title">
          <div className="eyebrow">Services</div>
          <h2>Ready for any content challenge</h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
