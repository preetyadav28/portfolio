"use client";
import React, { useState } from "react";

const Skills = () => {
   const [appliedFilter, setAppliedFilter] = useState("");
   const onClick = (category: string) => {
      setAppliedFilter(category);
   };
   const skills = [
      {
         id: "HTML",
         source: "/html.svg",
         category: "Frontend",
      },
      {
         id: "CSS",
         source: "/css.svg",
         category: "Frontend",
      },
      {
         id: "JavaScript",
         source: "/javascript.svg",
         category: "Frontend",
      },
      {
         id: "TypeScript",
         source: "/typescript.svg",
         category: "Frontend",
      },
      {
         id: "React",
         source: "/react.svg",
         category: "Frontend",
      },
      {
         id: "Redux",
         source: "/redux.svg",
         category: "Frontend",
      },
      {
         id: "Next",
         source: "/nextjs.svg",
         category: "Frontend",
      },
      {
         id: "Tailwind",
         source: "/tailwind.svg",
         category: "Frontend",
      },
      {
         id: "Git",
         source: "/git.svg",
         category: "DevOps",
      },
      {
         id: "Bitbucket",
         source: "/bitbucket.svg",
         category: "DevOps",
      },
      {
         id: "Jest",
         source: "/jest.svg",
         category: "Frontend",
         classNames: "w-full",
      },
      {
         id: "React Testing Library",
         source: "/rtl.svg",
         category: "Frontend",
      },
      {
         id: "Vitest",
         source: "/vitest.svg",
         category: "Frontend",
      },
      {
         id: "Chakra",
         source: "/chakra.svg",
         category: "Frontend",
      },
      {
         id: "Figma",
         source: "/figma.svg",
         category: "Software",
         classNames: "w-1/3",
      },
      {
         id: "Material UI",
         source: "/materialui.svg",
         category: "Frontend",
      },
      {
         id: "Jira",
         source: "/jira.svg",
         category: "Software",
      },
      {
         id: "Postman",
         source: "/postman.svg",
         category: "Software",
      },
      {
         id: "VS Code",
         source: "/vscode.svg",
         category: "Software",
      },
      {
         id: "Keycloak",
         source: "/keycloak.svg",
         category: "Software",
      },
      {
         id: "Trello",
         source: "/trello.svg",
         category: "Software",
      },
      {
         id: "Github",
         source: "/github.svg",
         category: "DevOps",
      },
      {
         id: "Jenkins",
         source: "/jenkins.svg",
         category: "DevOps",
      },
      {
         id: "SonarQube",
         source: "/sonarqube.svg",
         category: "DevOps",
      },
   ];
   const categories = ["Frontend", "DevOps", "Software"];
   return (
      <main className="flex pl-10 pr-10 w-screen flex-col gap-8 items-center justify-around md:gap-16 md:pl-24 md:pr-0 relative z-10 overflow-y-auto overflow-x-hidden">
         <div className="flex w-full md:w-auto md:gap-20 mt-24 md:mt-0 bg-primary text-secondary p-2 rounded-full text-xl shadow-[0px_0px_20px_5px_theme('colors.secondary/50%'),0px_0px_40px_10px_theme('colors.secondary/30%')] border border-hover">
            {categories.map((item) => {
               return (
                  <button
                     key={item}
                     onClick={() => {
                        onClick(item);
                     }}
                     className={`w-full p-4 hover:bg-hover rounded-full ${
                        appliedFilter === item ? "bg-hover" : ""
                     }`}
                  >
                     {item}
                  </button>
               );
            })}
         </div>
         <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-8 gap-20 p-6">
            {skills.map(({ source, id, category }) => (
               <div
                  key={id}
                  className={`flex items-center justify-center ${
                     appliedFilter && category !== appliedFilter
                        ? "opacity-10"
                        : ""
                  } `}
               >
                  <img
                     className={"max-w-12 md:w-12"}
                     title={id}
                     src={source}
                     alt={id}
                  />
               </div>
            ))}
         </div>
      </main>
   );
};

export default Skills;
