const toolGroups = [
  { label: 'AI', tools: ['ChatGPT', 'Gemini', 'Claude', 'NotebookLM'] },
  { label: 'Design', tools: ['Canva', 'Figma', 'Procreate'] },
  { label: 'Photo & Video', tools: ['DaVinci Resolve'] },
  { label: 'Workflow & Automation', tools: ['Notion', 'Meta Business Suite', 'Google Workspace', 'Slack', 'Miro', 'Monday'] },
];

export default function Tools() {
  return (
    <section>
      <div className="container">
        <div className="section-title">
          <div className="eyebrow">Tools</div>
          <h2>Our creative workflow</h2>
        </div>

        <div className="tools-groups">
          {toolGroups.map((group) => (
            <div className="tools-group" key={group.label}>
              <div className="tools-group-label">{group.label}</div>
              <div className="tools-group-row">
                {group.tools.map((tool) => (
                  <span className="tool" key={tool}>{tool}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
