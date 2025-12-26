import udemy from "../assets/certificates/udemy.jpg";
import coursera from "../assets/certificates/coursera.png";
import java from "../assets/certificates/java.png";
import emp from "../assets/certificates/emp.png";
export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  image?: string;
  link?: string;
}

export const certificates: Certificate[] = [
  {
    title: "Android Development",
    issuer: "Udemy",
    year: "2025",
    link: "https://www.udemy.com/certificate/UC-24e12230-aa81-4474-970f-1f028fbe77aa/",
    image: udemy,
  },
  {
    title: "Google Data Analytics",
    issuer: "Google",
    year: "2025",
    image: coursera,
    link: "https://www.coursera.org/account/accomplishments/specialization/IXJTHI0HG41M?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
  },
  {
    title: "Java Programming",
    issuer: "TESDA",
    year: "2025",
    image: java,
    link: "",
  },
  {
    title: "Exclusive Mentoring Program",
    issuer: "Global Sk1lls",
    year: "2025",
    image: emp,
    link: "",
  },
];
