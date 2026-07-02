function SectionTitle({ tag, title }) {
  return (
    <div className="section-header">
      <p className="section-tag">{tag}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default SectionTitle;