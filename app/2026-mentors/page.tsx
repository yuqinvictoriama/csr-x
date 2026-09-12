import type { Metadata } from "next";
import InteriorPage from "../InteriorPage";
import { mentorCohorts } from "../mentorData";

const title = "2026 Mentors | CSR-x";
const description = "Meet the mentors supporting CSR-x students in 2026.";

export const metadata: Metadata = {
  title, description,
  openGraph: { title, description, images: [] },
  twitter: { title, description, images: [] },
};

export default function MentorsPage() {
  return (
    <InteriorPage eyebrow="Leaders of our cohorts" title="2026 Mentors" description="Indispensable upperclassmen instructors leading younger students across many disciplines, including biomedical and health sciences, cognitive sciences, data science and machine learning, environmental science, and more">
      <div className="cohort-grid">
        {mentorCohorts.map((cohort) => (
          <article className={`cohort-card${cohort.mentors.length > 1 ? " has-co-mentors" : ""}`} data-discipline={cohort.title.split(" ")[0]} key={cohort.title}>
            <h2>{cohort.title}</h2>
            <div className={`mentor-list${cohort.mentors.length > 1 ? " co-mentor-list" : ""}`}>
              {cohort.mentors.map((mentor) => (
                <div className="mentor-entry" key={mentor.name}>
                  <div
                    className={`mentor-headshot${mentor.image ? "" : " mentor-headshot-placeholder"}`}
                    aria-label={mentor.image ? undefined : `${mentor.name}, portrait not provided`}
                  >
                    {mentor.image
                      ? <img src={mentor.image} alt={`${mentor.name}, mentor for ${cohort.title}`} />
                      : <span aria-hidden="true">{mentor.initials}</span>}
                  </div>
                  <div className="mentor-details">
                    <h3>{mentor.name}</h3>
                    <p>{mentor.school}</p>
                    <span>{mentor.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </InteriorPage>
  );
}
