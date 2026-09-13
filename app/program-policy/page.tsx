import type { Metadata } from "next";
import InteriorPage from "../InteriorPage";

const title = "Program Policy | CSR-x";
const description = "CSR-x policies for program participation, final deliverables, and the display of cohort work.";

export const metadata: Metadata = {
  title, description,
  openGraph: { title, description, images: [] },
  twitter: { title, description, images: [] },
};

export default function ProgramPolicyPage() {
  return (
    <InteriorPage title="Program Policy" compact>
      <article className="program-policy-copy" aria-label="Program policy">
        <p>The purpose of the CSR-x Program is as a vehicle to match together students from around the world to explore shared interests and learn from each other in a project-based format.</p>
        <p>CSR-x is offered free of charge through the time and effort of volunteer mentors and administrators. Mentees are expected to respect that commitment. CSR-x operates online for high school students and first- and second-year college students. Mentors and mentees are expected to meet virtually several times per week, according to their agreed availability.</p>

        <section aria-labelledby="program-participation">
          <h2 id="program-participation">Regarding Program Participation</h2>
          <p>CSR-x reserves the right to remove any participant (mentor or mentee) who uses LLM models to generate content for the cohort project in place of one’s own work, falsifies information, plagiarizes, disengages from the program, behaves disruptively or disrespectfully, uses offensive language, or engages in harassment or cyberbullying. Removal may occur without prior notice.</p>
          <p>Mentors are responsible for their own contributions and conduct throughout and after the program. Mentors who are listed as co-authors have the responsibilities of authorship.</p>
          <p>All communications must be conducted via designated Slack channels. Using alternate, unmonitored communication channels for program activities is not permitted.</p>
          <p>Participation as a mentor or mentee in the CSR-x Program does <strong className="policy-emphasis">not</strong> guarantee any future academic, professional, or other opportunities.</p>
        </section>

        <section aria-labelledby="final-deliverable">
          <h2 id="final-deliverable">Regarding Final Deliverable</h2>
          <p>Cohorts may elect to produce a paper, a poster, or a slideshow, or a combination of these materials for the cohort’s final deliverable.</p>
          <p>Outstanding cohort project presentation materials may be displayed on the CSR-x website as recognition. Selection is not automatic and is based on the overall quality and originality of the materials produced. Presentation materials may be deemed ineligible for display if they have one or more of the following characteristics:</p>
          <ul>
            <li>Portions of AI-generated content, including text, code, or images, are detected in the poster and/or paper.</li>
            <li>The writing, formatting, or organization of the materials is careless or contains substantial grammatical or formatting errors.</li>
            <li>Presentation material is plagiarized or violates academic integrity standards</li>
            <li>The materials do not accurately represent the cohort’s own work.</li>
          </ul>
          <p>Individual mentees who do not contribute enough to the cohort’s project cannot be listed as a co-author on the project materials. As cohort projects are group projects, the level of a mentee’s contribution will be determined by the project’s mentors and the administration based on documented contributions, such as Google Doc history, Slack messaging history, and cohort session attendance.</p>
        </section>

        <section aria-labelledby="displayed-work">
          <h2 id="displayed-work">Regarding Displayed Work</h2>
          <p>The administrative team works in voluntary capacity to coordinate the program’s logistics, scheduling, communications, and participant support. Its role does <strong className="policy-emphasis">not</strong> include independently validating the research produced by the cohorts, reproducing experiments, or certifying project materials’ originality, completeness, accuracy, or ethical compliance. Organizing the program or displaying its cohorts’ projects does <strong className="policy-emphasis">not</strong> make the CSR-x Program or its administrators authors of, or guarantors for, any cohort’s project.</p>
          <p>Throughout and after the program, all participants are expected to represent their identities, contributions, methods, and results honestly.</p>
          <p>CSR-x may display papers, abstracts, posters, code, and other project materials on its website to recognize participants’ efforts and encourage program completion. Display is an educational showcase and does <strong className="policy-emphasis">not</strong> constitute peer-reviewed journal publication, scientific certification, or assurance by CSR-x of the work’s accuracy or validity. Display does <strong className="policy-emphasis">not</strong> establish that a project’s methods are sound, its results are reproducible, or its conclusions are correct.</p>
          <p><strong className="policy-emphasis">Responsibility for each project’s content and conclusions rests solely with its listed authors</strong>, including any mentor co-authors. Inquiries about the project’s content should be directed to them. All work produced by a cohort represents the contributions and views of its listed authors, who are solely responsible for its content and conclusions.</p>
          <p>Participants must accurately describe the nature of the website display and the project’s details in applications, résumés, and other settings. All work produced by a cohort represents the contributions and views of its listed authors, who are solely responsible for its content and conclusions.</p>
        </section>

        <section aria-labelledby="policy-definitions">
          <h2 id="policy-definitions">Definitions:</h2>
          <ul>
            <li>Cohorts refers to groups of mentors and mentees working together on an agreed project.</li>
            <li>Mentors (or “The mentorship team”) refers to volunteers who applied and were accepted to lead projects in CSR-x cohorts.</li>
            <li>Mentees refers to students participating in CSR-x who develop and carry out projects with guidance from their mentors.</li>
            <li>Admin (or “The administrative team,” “administrators”) refers to volunteers who organize and coordinate the CSR-x Program’s application process, onboarding, logistics, and communications.</li>
            <li>Authors (or “co-authors,” “listed authors”) refers to individuals credited by name on a particular project’s materials.</li>
          </ul>
        </section>
      </article>
    </InteriorPage>
  );
}
