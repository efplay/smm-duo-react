const projects = [
  { num: '01', title: 'Instagram visual concepts', tech: 'Canva / Figma' },
  { num: '02', title: 'Reels & TikTok editing',    tech: 'DaVinci / Subtitles' },
  { num: '03', title: 'Startup communication',     tech: 'Storytelling / AI' },
  { num: '04', title: 'Brand kits & moodboards',   tech: 'Visual identity' },
];

export default function Work() {
  return (
    <section id="work">
      <div className="container">
        <div className="section-title">
          <div className="eyebrow">Recent projects</div>
          <h2>Selected work areas</h2>
        </div>

        <div className="work-list">
          {projects.map((p) => (
            <a href="#" className="work-row" key={p.num}>
              <span>{p.num}</span>
              <h3>{p.title}</h3>
              <p>{p.tech}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
