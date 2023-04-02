import React from "react";
import { ProjectCard, SectionHeading } from "components/atoms";

const projectsData = [
  {
    imageUrl: "/assets/images/projects/project-1.jpg",
    alt: "ARLBY Oil & Gas Limited image",
    title: "ARLBY Oil & Gas Limited",
    desc: "Dec 2022 ‑ June 2023",
  },
  {
    imageUrl: "/assets/images/projects/project-2.jpg",
    alt: "ARLBY Oil & Gas Limited image",
    title: "ARLBY Oil & Gas Limited",
    desc: "Dec 2022 ‑ June 2023",
  },
  {
    imageUrl: "/assets/images/projects/project-1.jpg",
    alt: "ARLBY Oil & Gas Limited image",
    title: "ARLBY Oil & Gas Limited",
    desc: "Dec 2022 ‑ June 2023",
  },
  {
    imageUrl: "/assets/images/projects/project-1.jpg",
    alt: "ARLBY Oil & Gas Limited image",
    title: "ARLBY Oil & Gas Limited",
    desc: "Dec 2022 ‑ June 2023",
  },
  {
    imageUrl: "/assets/images/projects/project-2.jpg",
    alt: "ARLBY Oil & Gas Limited image",
    title: "ARLBY Oil & Gas Limited",
    desc: "Dec 2022 ‑ June 2023",
  },
  {
    imageUrl: "/assets/images/projects/project-1.jpg",
    alt: "ARLBY Oil & Gas Limited image",
    title: "ARLBY Oil & Gas Limited",
    desc: "Dec 2022 ‑ June 2023",
  },
];

const ProjectList: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto bg-white px-5 md:px-20 2xl:px-40">
        <SectionHeading title="Here’s a list of projects we worked on" />
        <div className="mt-12 md:mt-[97px]">
          <div className="grid gap-y-4 md:grid-cols-3 md:gap-y-8 md:space-x-4">
            {projectsData.map((project) => (
              <div key={project.title}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
