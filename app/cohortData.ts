export type CohortMaterial = {
  type: "Abstract" | "Paper" | "Poster";
  title: string;
  file: string;
  pages: number;
};

export type ResearchCohort = {
  id: string;
  code: string;
  discipline: string;
  number: number;
  materials: CohortMaterial[];
};

export const researchCohorts: ResearchCohort[] = [
  {
    id: "bmed-1", code: "BMED 01", discipline: "Biomedical Health Sciences", number: 1,
    materials: [{ type: "Paper", title: "Boltz-2 Modeling Suggests a Structural Basis for Inhibition of the Multidrug Pump ABCB1", file: "/cohort-materials/BMED1-Paper.pdf", pages: 7 }],
  },
  {
    id: "bmed-2", code: "BMED 02", discipline: "Biomedical Health Sciences", number: 2,
    materials: [{ type: "Paper", title: "Polycyclic Aromatic Hydrocarbon Exposure, Epigenetic Age Acceleration, and Lung Cancer Risk", file: "/cohort-materials/BMED2-Paper.pdf", pages: 23 }],
  },
  {
    id: "bmed-3", code: "BMED 03", discipline: "Biomedical Health Sciences", number: 3,
    materials: [{ type: "Abstract", title: "Novel Biomarker Candidates in Hypermobile Ehlers-Danlos Syndrome", file: "/cohort-materials/BMED3-Abstract.pdf", pages: 1 }],
  },
  { id: "bmed-4", code: "BMED 04", discipline: "Biomedical Health Sciences", number: 4, materials: [] },
  { id: "bmed-5", code: "BMED 05", discipline: "Biomedical Health Sciences", number: 5, materials: [] },
  { id: "bmed-6", code: "BMED 06", discipline: "Biomedical Health Sciences", number: 6, materials: [] },
  {
    id: "bmed-7", code: "BMED 07", discipline: "Biomedical Health Sciences", number: 7,
    materials: [{ type: "Paper", title: "Virus-Induced CRISPR Therapy vs. RNAi Gene Regulation for Cancer-Linked Gene Expression", file: "/cohort-materials/BMED8-Paper.pdf", pages: 12 }],
  },
  {
    id: "cogsci-1", code: "COGSCI 01", discipline: "Cognitive Science", number: 1,
    materials: [{ type: "Abstract", title: "The Biological Mechanisms Underlying Stress Resilience and Susceptibility", file: "/cohort-materials/COGSCI1-Abstract.pdf", pages: 1 }],
  },
  {
    id: "cogsci-2", code: "COGSCI 02", discipline: "Cognitive Science", number: 2,
    materials: [{ type: "Poster", title: "Computational Analysis of Immune-Related Gene Expression in Multiple Sclerosis", file: "/cohort-materials/COGSCI2-Poster.pdf", pages: 1 }],
  },
  {
    id: "cogsci-3", code: "COGSCI 03", discipline: "Cognitive Science", number: 3,
    materials: [{ type: "Paper", title: "The Memory Cost of Thinking Less: Generative AI and Memory Consolidation", file: "/cohort-materials/COGSCI3-Paper.pdf", pages: 15 }],
  },
  {
    id: "dsml-1", code: "DSML 01", discipline: "Data Science / Machine Learning", number: 1,
    materials: [{ type: "Abstract", title: "Machine Learning for Solar Energetic Proton Shielding Analysis", file: "/cohort-materials/DSML1-Abstract.pdf", pages: 1 }],
  },
  { id: "dsml-2", code: "DSML 02", discipline: "Data Science / Machine Learning", number: 2, materials: [] },
  { id: "dsml-3", code: "DSML 03", discipline: "Data Science / Machine Learning", number: 3, materials: [] },
  { id: "dsml-4", code: "DSML 04", discipline: "Data Science / Machine Learning", number: 4, materials: [] },
  {
    id: "dsml-5", code: "DSML 05", discipline: "Data Science / Machine Learning", number: 5,
    materials: [{ type: "Poster", title: "Interpretable Neural Network Bot Detection in the LLM Era", file: "/cohort-materials/DSML5-Poster.pdf", pages: 1 }],
  },
  { id: "dsml-6", code: "DSML 06", discipline: "Data Science / Machine Learning", number: 6, materials: [] },
  { id: "econ-1", code: "ECON 01", discipline: "Economics", number: 1, materials: [] },
  {
    id: "envsci-1", code: "ENVSCI 01", discipline: "Environmental Science", number: 1,
    materials: [{ type: "Abstract", title: "PFAS Exposure in Drinking Water and Allergic Disease in Pediatric Populations", file: "/cohort-materials/ENVSCI1-Abstract.pdf", pages: 1 }],
  },
  {
    id: "envsci-2", code: "ENVSCI 02", discipline: "Environmental Science", number: 2,
    materials: [{ type: "Paper", title: "Spatiotemporal Prediction of Recreational Water E. coli Occurrence", file: "/cohort-materials/ENVSCI2-Paper.pdf", pages: 13 }],
  },
];
