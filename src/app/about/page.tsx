export default function About() {
   const education = [
      {
         type: "Graduation",
         duration: "2017-2021",
         course: "B.Tech - Computer Science & Engineering",
         schoolType: "University",
         name: "Guru Jambheshwar University of Science & Technology",
         logo: "/graduation.png",
      },
      {
         type: "Higher Secondary School",
         duration: "2016-2017",
         schoolType: "School",
         name: "Sh. SN Sidheshwar Sr. Sec. Public School",
         logo: "/highschool.png",
      },
      {
         type: "Secondary School",
         duration: "Till 2015",
         schoolType: "School",
         name: "Sh. SN Sidheshwar Sr. Sec. Public School",
         logo: "/school.png",
      },
   ];
   return (
      <main className="flex pl-10 pr-10 w-screen h-screen flex-col gap-16 md:gap-32 md:pl-24 relative z-10 overflow-y-auto pt-20 md:pt-10 pb-10 text-sm sm:text-base md:text-md lg:text-xl">
         <div className="flex flex-col-reverse md:flex-row">
            <div className="flex-1">
               <p className="font-semibold text-4xl tracking-widest font-prata pb-8">
                  Who am I?
               </p>

               <p className="pb-4 font-montserrat">Hi👋 I am Preet.</p>
               <p className="pb-4 text-justify font-montserrat">
                  I am a Frontend Engineer with nearly 4 years of experience in React
                  JS, JavaScript and Typescript. I have successfully build
                  scalable and efficient web applications. My focus is on
                  quality, efficiency, and adherence to industry best practices.
                  Key strengths include:
               </p>
               <ul className="list-disc pl-5 space-y-2 text-justify font-montserrat">
                  <li>
                     <strong>3.8+ years</strong> of experience in front-end
                     development with <strong>React.js</strong> and{" "}
                     <strong>TypeScript</strong>.
                  </li>
                  <li>
                     Proficient in state management using <strong>Redux</strong>
                     .
                  </li>
                  <li>
                     Strong skills in building responsive and accessible UIs
                     with{" "}
                     <strong>HTML, CSS, and modern styling techniques</strong>.
                  </li>
                  <li>
                     Experience with component-driven development and reusable
                     UI patterns.
                  </li>
                  <li>
                     Skilled in writing unit and integration tests using{" "}
                     <strong>Vitest</strong> and{" "}
                     <strong>React Testing Library (RTL)</strong>.
                  </li>
                  <li>
                     Understanding of performance optimization techniques for
                     React applications.
                  </li>
                  <li>
                     Experience in debugging and troubleshooting UI issues
                     efficiently.
                  </li>
                  <li>
                     Familiar with modern build tools like Vite and Webpack.
                  </li>
                  <li>
                        Just started exploring{" "}
                     <strong>
                        Next.js, Tailwind CSS, Vue, Vuex and Vuetify
                     </strong>{" "}
                     to enhance performance and styling efficiency.
                  </li>
                  <li>
                     Strong collaboration skills in dynamic, team-oriented
                     environments.
                  </li>
               </ul>
            </div>
            <div className="flex flex-1 justify-center items-center">
               <img
                  className="w-full md:w-1/2 h-auto max-h-1/2 object-contain rounded-[10%] mb-10 md:mb-0"
                  src="/profile.jpeg"
               />
            </div>
         </div>
         <div className="flex flex-col gap-4">
            <p className="font-semibold text-4xl tracking-widest font-prata pb-8">
               Education
            </p>
            <div className="flex gap-4 flex-col md:flex-row">
               {education.map(
                  ({ type, duration, course, schoolType, name, logo }) => {
                     return (
                        <div
                           key={duration}
                           className="flex flex-col flex-1 border border-primary rounded-[10px] p-4 bg-primary text-secondary "
                        >
                           <p className="text-center text-2xl font-bold">
                              {type}
                           </p>
                           <p className="text-center font-bold mb-4">
                              {duration}
                           </p>
                           <img
                              src={logo}
                              className="w-[20%] self-center my-4"
                           />
                           {course && (
                              <p>
                                 <strong>Course:</strong> {course}
                              </p>
                           )}
                           <p>
                              <strong>{`${schoolType}:`}</strong> {name}
                           </p>
                        </div>
                     );
                  }
               )}
            </div>
            <div></div>
         </div>
      </main>
   );
}
