(() => {
  const cohorts = [
    ["BMED 01", "Biomedical Health Sciences", 1, ["Paper", "Boltz-2 Modeling Suggests a Structural Basis for Inhibition of the Multidrug Pump ABCB1", "/assets/cohort-materials/BMED1-Paper.pdf", 7]],
    ["BMED 02", "Biomedical Health Sciences", 2, ["Paper", "Polycyclic Aromatic Hydrocarbon Exposure, Epigenetic Age Acceleration, and Lung Cancer Risk", "/assets/cohort-materials/BMED2-Paper.pdf", 23]],
    ["BMED 03", "Biomedical Health Sciences", 3, ["Abstract", "Novel Biomarker Candidates in Hypermobile Ehlers-Danlos Syndrome", "/assets/cohort-materials/BMED3-Abstract.pdf", 1]],
    ["BMED 04", "Biomedical Health Sciences", 4],
    ["BMED 05", "Biomedical Health Sciences", 5],
    ["BMED 06", "Biomedical Health Sciences", 6],
    ["BMED 07", "Biomedical Health Sciences", 7, ["Paper", "Virus-Induced CRISPR Therapy vs. RNAi Gene Regulation for Cancer-Linked Gene Expression", "/assets/cohort-materials/BMED8-Paper.pdf", 12]],
    ["COGSCI 01", "Cognitive Science", 1, ["Abstract", "The Biological Mechanisms Underlying Stress Resilience and Susceptibility", "/assets/cohort-materials/COGSCI1-Abstract.pdf", 1]],
    ["COGSCI 02", "Cognitive Science", 2, ["Poster", "Computational Analysis of Immune-Related Gene Expression in Multiple Sclerosis", "/assets/cohort-materials/COGSCI2-Poster.pdf", 1]],
    ["COGSCI 03", "Cognitive Science", 3, ["Paper", "The Memory Cost of Thinking Less: Generative AI and Memory Consolidation", "/assets/cohort-materials/COGSCI3-Paper.pdf", 15]],
    ["DSML 01", "Data Science / Machine Learning", 1, ["Abstract", "Machine Learning for Solar Energetic Proton Shielding Analysis", "/assets/cohort-materials/DSML1-Abstract.pdf", 1]],
    ["DSML 02", "Data Science / Machine Learning", 2],
    ["DSML 03", "Data Science / Machine Learning", 3],
    ["DSML 04", "Data Science / Machine Learning", 4],
    ["DSML 05", "Data Science / Machine Learning", 5, ["Poster", "Interpretable Neural Network Bot Detection in the LLM Era", "/assets/cohort-materials/DSML5-Poster.pdf", 1]],
    ["DSML 06", "Data Science / Machine Learning", 6],
    ["ECON 03", "Economics", 3],
    ["ENVSCI 01", "Environmental Science", 1, ["Abstract", "PFAS Exposure in Drinking Water and Allergic Disease in Pediatric Populations", "/assets/cohort-materials/ENVSCI1-Abstract.pdf", 1]],
    ["ENVSCI 02", "Environmental Science", 2, ["Paper", "Spatiotemporal Prediction of Recreational Water E. coli Occurrence", "/assets/cohort-materials/ENVSCI2-Paper.pdf", 13]],
  ];

  const grid = document.querySelector("[data-materials-grid]");
  const dialog = document.querySelector("[data-cohort-dialog]");
  if (!grid || !dialog) return;

  const modalCode = dialog.querySelector("[data-modal-code]");
  const modalTitle = dialog.querySelector("[data-modal-title]");
  const modalContent = dialog.querySelector("[data-modal-content]");

  const openCohort = ([code, discipline, number, material]) => {
    modalCode.textContent = `${code} · 2026 research`;
    modalTitle.textContent = `${discipline} ${number}`;
    if (material) {
      const [type, title, file, pages] = material;
      modalContent.innerHTML = `
        <div class="cohort-material-body">
          <aside class="cohort-material-list" aria-label="Available cohort materials">
            <button class="is-selected" type="button"><span>${type} · ${pages} ${pages === 1 ? "page" : "pages"}</span><strong>${title}</strong></button>
          </aside>
          <section class="cohort-document-viewer" aria-label="${type} preview">
            <div class="cohort-document-toolbar"><p>${type}</p><p class="cohort-document-viewonly">View only</p></div>
            <iframe src="${file}#view=FitH&toolbar=0&navpanes=0&statusbar=0" title="${title} PDF"></iframe>
          </section>
        </div>`;
    } else {
      modalContent.innerHTML = `<div class="cohort-material-empty"><span class="material-card-number" aria-hidden="true">${String(number).padStart(2, "0")}</span><p>Materials for this cohort have not been published yet.</p></div>`;
    }
    dialog.showModal();
  };

  grid.querySelectorAll("[data-code]").forEach((card) => {
    card.addEventListener("click", () => openCohort(cohorts.find(([code]) => code === card.dataset.code)));
  });
  dialog.querySelector("[data-modal-close]").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
})();
