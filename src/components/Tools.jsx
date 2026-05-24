const tools = [
  'Canva', 'Figma', 'Procreate', 'DaVinci Resolve',
  'Meta Business Suite', 'Google Workspace', 'Notion', 'Slack',
  'Miro', 'Monday', 'ChatGPT', 'Gemini', 'Claude', 'NotebookLM',
];

export default function Tools() {
  return (
    <section>
      <div className="container">
        <div className="section-title">
          <div className="eyebrow">Tools</div>
          <h2>Our creative workflow</h2>
        </div>

        <div className="tools-cloud">
          {tools.map((tool) => (
            <span className="tool" key={tool}>{tool}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
