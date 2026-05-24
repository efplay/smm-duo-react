const services = [
  {
    title: 'Social Media',
    items: ['Instagram & TikTok', 'Content planning', 'Community communication', 'Meta Business Suite'],
  },
  {
    title: 'Content Creation',
    items: ['Posts & stories', 'Reels & TikTok', 'Presentations', 'Banners & visuals'],
  },
  {
    title: 'Branding',
    items: ['Visual identity', 'Brand kits', 'Moodboards', 'UI/UX basics'],
  },
  {
    title: 'Video Editing',
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
