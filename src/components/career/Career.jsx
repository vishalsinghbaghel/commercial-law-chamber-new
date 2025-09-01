import styles from "./Career.module.css";

const jobListings = [
  {
    title: "Associate Lawyer",
    tags: ["Tax Law", "Full-time"],
    experience: "2–4 years",
    description:
      "Join our tax law practice with expertise in direct and indirect taxation.",
  },
  {
    title: "Junior Associate",
    tags: ["Commercial Disputes", "Full-time"],
    experience: "0–2 years",
    description:
      "Entry-level role for law graduates interested in litigation and dispute resolution.",
  },
  {
    title: "Legal Research Assistant",
    tags: ["Research & Analysis", "Full-time"],
    experience: "0–2 years",
    description:
      "Support legal research and case prep across multiple practice areas.",
  },
];

export function CareerPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Why Work With Commercial Law Chamber?</h1>
        <p>
          Join a team that values professional excellence, continuous learning,
          and meaningful contribution to the legal field.
        </p>
      </section>

      {/* Culture & Values */}
      <section className={styles.values}>
        <h2>Our Culture & Values</h2>
        <div className={styles.grid}>
          <ValueCard
            icon="📚"
            title="Professional Growth"
            desc="Work on challenging cases and develop expertise in specialized areas of law."
          />
          <ValueCard
            icon="🤝"
            title="Collaborative Environment"
            desc="Supportive team with experienced legal professionals."
          />
          <ValueCard
            icon="🚀"
            title="Career Advancement"
            desc="Clear path for growth with mentorship and leadership development."
          />
          <ValueCard
            icon="🌿"
            title="Work-Life Balance"
            desc="Flexible arrangements to maintain a healthy balance."
          />
        </div>
      </section>

      {/* Job Listings */}
      <section className={styles.jobs}>
        <h2>Current Opportunities</h2>
        <div className={styles.jobGrid}>
          {jobListings.map((job, idx) => (
            <JobCard key={idx} {...job} />
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section className={styles.formSection}>
        <h2>Submit Your Application</h2>
        <p>
          We're always looking for talented legal professionals. Submit your
          application and we'll get back to you if there's a good fit.
        </p>
        <form className={styles.form}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <textarea placeholder="Cover Letter" rows="5" required />

          <div className={styles.fileUpload}>
            <label htmlFor="resumeUpload" className={styles.fileLabel}>
              📎 Attach Resume
            </label>
            <input
              type="file"
              id="resumeUpload"
              className={styles.fileInput}
              accept=".pdf,.doc,.docx"
            />
          </div>

          <button type="submit">Apply Now</button>
        </form>
      </section>
    </div>
  );
}

function ValueCard({ icon, title, desc }) {
  return (
    <div className={styles.valueCard}>
      <span className={styles.icon}>{icon}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function JobCard({ title, tags, experience, description }) {
  return (
    <div className={styles.jobCard}>
      <h3>{title}</h3>
      <div className={styles.tags}>
        {tags.map((tag, i) => (
          <span key={i}>{tag}</span>
        ))}
      </div>
      <p>
        <strong>Experience:</strong> {experience}
      </p>
      <p>{description}</p>
      <button className="Applybtn">Apply Now</button>
    </div>
  );
}
