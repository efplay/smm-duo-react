const cards = [
  {
    light: false,
    title: 'Social media projects',
    text: 'Created visual and video content for Instagram, TikTok and digital platforms, including posts, stories, reels, banners and presentations.',
  },
  {
    light: true,
    title: 'Content strategy',
    text: 'Worked with storytelling, content ideas, account structure, communication tone and creative concepts for brands and startup-style projects.',
  },
  {
    light: true,
    title: 'Design support',
    text: 'Prepared brand visuals, moodboards, basic UI/UX ideas, presentations, poster concepts and creative assets for digital use.',
  },
  {
    light: false,
    title: 'Content production',
    text: 'Handled research, scripting, copy support and translation as part of a structured creative development process.',
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-title">
          <div className="eyebrow">Shared experience</div>
          <h2>Hands-on practice with content and digital communication</h2>
        </div>

        <div className="experience-layout">
          {cards.map((card) => (
            <div className={`experience-card${card.light ? ' light' : ''}`} key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
