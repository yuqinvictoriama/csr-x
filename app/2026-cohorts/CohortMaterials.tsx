"use client";

import { useRef, useState } from "react";
import type { CohortMaterial, ResearchCohort } from "../cohortData";
import { mentorCohorts } from "../mentorData";

export default function CohortMaterials({ cohorts }: { cohorts: ResearchCohort[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedCohort, setSelectedCohort] = useState<ResearchCohort | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<CohortMaterial | null>(null);

  const openCohort = (cohort: ResearchCohort) => {
    setSelectedCohort(cohort);
    setSelectedMaterial(cohort.materials[0] ?? null);
    dialogRef.current?.showModal();
  };

  const closeCohort = () => dialogRef.current?.close();

  return (
    <>
      <div className="materials-intro-row">
        <p>Select a cohort to explore its 2026 research.</p>
        <div className="materials-legend" aria-label="Materials availability legend">
          <span><i className="availability-dot is-available" /> Materials available</span>
          <span><i className="availability-dot" /> Coming soon</span>
        </div>
      </div>

      <div className="materials-grid">
        {cohorts.map((cohort) => {
          const hasMaterials = cohort.materials.length > 0;
          const mentors = mentorCohorts.find((entry) =>
            entry.title.replaceAll(" / ", "/") === `${cohort.discipline} ${cohort.number}`.replaceAll(" / ", "/")
          )?.mentors.map((mentor) => mentor.name).join(", ");
          return (
            <article
              className={`material-cohort-card tone-${cohort.code.split(" ")[0].toLowerCase()}`}
              key={cohort.id}
            >
              <span className="material-card-topline">
                <span>{cohort.code}</span>
                <i className={`availability-dot${hasMaterials ? " is-available" : ""}`} aria-hidden="true" />
              </span>
              <div className="material-card-art" aria-hidden="true"><i /><i /><i /><span>{String(cohort.number).padStart(2, "0")}</span></div>
              <div className="material-card-copy">
                <h2>{cohort.discipline} {cohort.number}</h2>
                <p className="material-card-mentors">{mentors}</p>
                <button
                  className={`material-card-button${hasMaterials ? "" : " is-pending"}`}
                  type="button"
                  onClick={() => openCohort(cohort)}
                  aria-haspopup="dialog"
                  aria-label={`View materials for ${cohort.discipline} ${cohort.number}`}
                >
                  {hasMaterials ? "Explore materials" : "Materials coming soon"}
                  {hasMaterials && <span aria-hidden="true">↗</span>}
                </button>
              </div>
            </article>
          );
        })}
      </div>

      <dialog
        className="cohort-material-dialog"
        ref={dialogRef}
        aria-labelledby="cohort-material-title"
        onClose={() => {
          setSelectedCohort(null);
          setSelectedMaterial(null);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeCohort();
        }}
      >
        {selectedCohort && (
          <div className="cohort-material-modal">
            <header className="cohort-material-header">
              <div>
                <p>{selectedCohort.code} · 2026 research</p>
                <h2 id="cohort-material-title">{selectedCohort.discipline} {selectedCohort.number}</h2>
              </div>
              <button className="cohort-material-close" type="button" onClick={closeCohort} aria-label={`Close ${selectedCohort.discipline} ${selectedCohort.number}`}>×</button>
            </header>

            {selectedCohort.materials.length ? (
              <div className="cohort-material-body">
                <aside className="cohort-material-list" aria-label="Available cohort materials">
                  {selectedCohort.materials.map((material) => (
                    <button
                      className={selectedMaterial?.file === material.file ? "is-selected" : ""}
                      type="button"
                      key={material.file}
                      onClick={() => setSelectedMaterial(material)}
                    >
                      <span>{material.type} · {material.pages} {material.pages === 1 ? "page" : "pages"}</span>
                      <strong>{material.title}</strong>
                    </button>
                  ))}
                </aside>
                {selectedMaterial && (
                  <section className="cohort-document-viewer" aria-label={`${selectedMaterial.type} preview`}>
                    <div className="cohort-document-toolbar">
                      <p>{selectedMaterial.type}</p>
                      <p className="cohort-document-viewonly">View only</p>
                    </div>
                    {/* toolbar=0 hides the built-in PDF viewer's download and print controls. */}
                    <iframe
                      src={`${selectedMaterial.file}#view=FitH&toolbar=0&navpanes=0&statusbar=0`}
                      title={`${selectedMaterial.title} PDF`}
                    />
                  </section>
                )}
              </div>
            ) : (
              <div className="cohort-material-empty">
                <span className="material-card-number" aria-hidden="true">{String(selectedCohort.number).padStart(2, "0")}</span>
                <p>Materials for this cohort have not been published yet.</p>
              </div>
            )}
          </div>
        )}
      </dialog>
    </>
  );
}
