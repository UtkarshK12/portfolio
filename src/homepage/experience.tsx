import  { useEffect, useState } from "react";
import CompanyDetails from "./companies";

interface ExperienceItem {
  company: string;
  location: string;
  duration: string;
  position?: string;
  description: (string | { [key: string]: (string | { text: string })[] })[];
}

interface ExperienceData {
  experience: ExperienceItem[];
}

function Experience() {
  const [experiences, setExperiences] = useState<ExperienceItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/UtkarshK12/resume-files/main/experience.txt"
        );
        if (!response.ok) {
          throw new Error("Response error");
        }
        
        const data: ExperienceData = await response.json();
        setExperiences(data.experience);
      } catch (e) {
        console.error("Error fetching experience data:", e);
      }
    };

    fetchData();
  }, []);
   
  return (
    <div>
      <div className="text-gray-700 font-bold text-4xl font-serif min-w-screen flex justify-center items-center mx-auto">
        Experience
      </div>
      <div className="h-8"></div>
      {experiences.map((experience, index) => (
        <CompanyDetails key={index} companyDetail={experience} />
      ))}
    </div>
  );
}

export default Experience;