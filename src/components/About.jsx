const about = {
  eyebrow: 'About us',
  heading: 'Creative duo for modern brands',
  text: 'We are two junior digital specialists focused on social media management, content creation, visual design and short-form video editing. Our work combines storytelling, trend awareness and clear communication.',
};

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-title">
          <div className="eyebrow">{about.eyebrow}</div>
          <div>
            <h2>{about.heading}</h2>
            <p className="lead muted" style={{ marginTop: '28px' }}>
              {about.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
