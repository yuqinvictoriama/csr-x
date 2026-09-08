export type Admin = {
  name: string;
  image: string;
  role: string;
  school: string;
  major?: string;
  since: number;
};

export const admins: Admin[] = [
  { name: "Yunshu Zhang", image: "/assets/admin/yunshu-zhang.jpg", role: "Co-Founder", school: "UC Berkeley ‘29", major: "Molecular & Cell Biology", since: 2024 },
  { name: "Yuqin Victoria Ma", image: "/assets/admin/victoria-ma.png", role: "Co-Founder", school: "Stanford University ‘30", since: 2024 },
  { name: "Hannah Jiang", image: "/assets/admin/hannah-jiang.jpg", role: "Program Director", school: "Senior at The Harker School", since: 2024 },
  { name: "Sophie Cao", image: "/assets/admin/sophie-cao.png", role: "Program Director", school: "Senior at Northfield Mount Hermon School", since: 2025 },
  { name: "Isabelle Niu", image: "/assets/admin/isabelle-niu.png", role: "Program Director", school: "Senior at The Harker School", since: 2024 },
];
