const stats = [
  {
    value: "+13",
    label: "Technologies",
  },
  {
  value: "2",
  label: "Engineering",
  },
  {
    value: "+5",
    label: "Certifications",
  },
  {
    value: "100%",
    label: "Commitment",
  },
];

function Stats() {
  return (
    <section className="stats">
      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;