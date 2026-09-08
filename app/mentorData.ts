export type Mentor = {
  name: string;
  school: string;
  grade: string;
  image?: string;
  initials?: string;
};

export type MentorCohort = {
  title: string;
  mentors: Mentor[];
};

export const mentorCohorts: MentorCohort[] = [
  { title: "Biomedical Health Sciences 1", mentors: [
    { name: "Kushal Khare", school: "Cornell University", grade: "College Freshman", image: "/assets/mentors/kushal-khare.jpg" },
  ] },
  { title: "Biomedical Health Sciences 2", mentors: [
    { name: "Sahil Gogna", school: "Santa Teresa High School", grade: "12th", image: "/assets/mentors/sahil-gogna.jpg" },
    { name: "Vivian Monteiro", school: "The Awty International School", grade: "12th", image: "/assets/mentors/vivian-monteiro.jpg" },
  ] },
  { title: "Biomedical Health Sciences 3", mentors: [
    { name: "Smrithi Ganesh", school: "Peak to Peak Charter School", grade: "12th", image: "/assets/mentors/smrithi-ganesh.jpg" },
    { name: "Jeremiah Markose", school: "Bergen County Academies", grade: "12th", image: "/assets/mentors/jeremiah-markose.jpg" },
  ] },
  { title: "Biomedical Health Sciences 4", mentors: [
    { name: "Catherine Chan", school: "Ridge High School", grade: "12th", image: "/assets/mentors/catherine-chan.jpg" },
    { name: "Vivian Zhao", school: "California High School", grade: "12th", image: "/assets/mentors/vivian-zhao.jpg" },
  ] },
  { title: "Biomedical Health Sciences 5", mentors: [
    { name: "Vidhi Shah", school: "Hong Kong University of Science and Technology (HKUST)", grade: "College Freshman", image: "/assets/mentors/vidhi-shah.jpg" },
    { name: "Jasper Chan", school: "Diocesan Boys’ School", grade: "11th", image: "/assets/mentors/jasper-chan.jpg" },
  ] },
  { title: "Biomedical Health Sciences 6", mentors: [
    { name: "Alekhya Buragadda", school: "Union College", grade: "College Sophomore", image: "/assets/mentors/alekhya-buragadda.png" },
    { name: "Bilal Iqbal", school: "Simon G. Atkins Academic and Technology High School", grade: "11th", image: "/assets/mentors/bilal-iqbal.jpg" },
  ] },
  { title: "Biomedical Health Sciences 7", mentors: [
    { name: "Audrey Finkelstein", school: "Albuquerque Academy", grade: "12th", image: "/assets/mentors/audrey-finkelstein.png" },
    { name: "Kritika Kedlaya", school: "Cupertino High School", grade: "11th", image: "/assets/mentors/kritika-kedlaya.jpg" },
  ] },
  { title: "Cognitive Science 1", mentors: [
    { name: "Ira Ronanki", school: "Princess Anne High School", grade: "11th", image: "/assets/mentors/ira-ronanki.jpg" },
    { name: "Sampath Gopisetty", school: "UC Berkeley", grade: "College Freshman", image: "/assets/mentors/sampath-gopisetty.webp" },
  ] },
  { title: "Cognitive Science 2", mentors: [
    { name: "Dyuthi Dhawan", school: "Jericho High School", grade: "11th", image: "/assets/mentors/dyuthi-dhawan.jpg" },
  ] },
  { title: "Cognitive Science 3", mentors: [
    { name: "Allyson Sea", school: "Sir Winston Churchill High School", grade: "12th", image: "/assets/mentors/allyson-sea.jpg" },
    { name: "Pratheeka Dyava", school: "South Windsor High School", grade: "12th", image: "/assets/mentors/pratheeka-dyava.jpg" },
  ] },
  { title: "Data Science/Machine Learning 1", mentors: [
    { name: "Ishaan Kumar", school: "Leander High School", grade: "12th", image: "/assets/mentors/ishaan-kumar.jpg" },
  ] },
  { title: "Data Science/Machine Learning 2", mentors: [
    { name: "Vachan Bhogi", school: "Dougherty Valley High School", grade: "11th", image: "/assets/mentors/vachan-bhogi.jpg" },
  ] },
  { title: "Data Science/Machine Learning 3", mentors: [
    { name: "Ekaterina Sarycheva", school: "The English School Of Kyrenia", grade: "12th", image: "/assets/mentors/ekaterina-sarycheva.jpg" },
  ] },
  { title: "Data Science/Machine Learning 4", mentors: [
    { name: "Siya Sharma", school: "Reservoir High School", grade: "12th", image: "/assets/mentors/siya-sharma.jpg" },
  ] },
  { title: "Data Science/Machine Learning 5", mentors: [
    { name: "Pranav Polisetti", school: "Andover High School", grade: "12th", image: "/assets/mentors/pranav-polisetti.jpg" },
    { name: "Archana Bharadwaj", school: "Elkins High School", grade: "12th", image: "/assets/mentors/archana-bharadwaj.jpg" },
  ] },
  { title: "Data Science/Machine Learning 6", mentors: [
    { name: "Divyanka Shaw", school: "Shri Shikshayatan", grade: "12th", image: "/assets/mentors/divyanka-shaw.jpg" },
    { name: "Shifa Kabir", school: "Cary High School", grade: "12th", image: "/assets/mentors/shifa-kabir.jpg" },
  ] },
  { title: "Economics 3", mentors: [
    { name: "Utkarsh Kailash", school: "Inventure Academy", grade: "12th", image: "/assets/mentors/utkarsh-kailash.png" },
  ] },
  { title: "Environmental Science 1", mentors: [
    { name: "Hashir Adnan", school: "duPont Manual High School", grade: "11th", image: "/assets/mentors/hashir-adnan.jpg" },
  ] },
  { title: "Environmental Science 2", mentors: [
    { name: "Chloe Chang", school: "Amity Regional High School", grade: "12th", image: "/assets/mentors/chloe-chang.jpg" },
  ] },
];
