/* eslint-disable @next/next/no-img-element */
import { FaLinkedin } from "react-icons/fa";
import tailwindConfig from "../../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";
import Typewriter from "typewriter-effect";

const fullConfig = resolveConfig(tailwindConfig);
const secondaryColor = fullConfig.theme.colors.secondary;
const encodedColor = secondaryColor.replace("#", "");

export default function MainMenu() {
   return (
      <div className="flex items-center flex-col gap-16 h-full overflow-visible md:flex-row md:gap-32 md:justify-around md:mt-0 group md:[&>a]:text-[10vw]">
         <div
            className="opacity-0 self-end space-y-3"
            id="info"
            style={{ opacity: 1, transform: "translateY(0px)" }}
         >
            <h1 className="font-semibold text-4xl tracking-widest">
               Preet Deeva
            </h1>
            <Typewriter
               options={{
                  strings: [
                     "Frontend Developer",
                     "Building Scalable UIs with React & Nx",
                     "Crafting Interactive Web Experiences",
                  ],
                  wrapperClassName: "text-xl",
                  autoStart: true,
                  loop: true,
                  cursor: "_",
               }}
            />
            {/* <p className="text-2xl">Web Developer</p> */}
            <p className="text-xl">
               I bring a unique blend of passion and proficiency to development
               and design. Obsessed with performance and dedicated to crafting
               clean, impactful designs, my work is a testament to the fusion of
               skill and creativity.
            </p>
            <div className="w-fit">
               <hr className="border-gray-800 border-px my-3 w-full" />
               <ul className="flex gap-5 mt-5 px-2">
                  <li>
                     <a
                        className="group"
                        href="mailto:yadavpreet81@gmail.com"
                        target="_blank"
                     >
                        <img
                           alt="Mail"
                           className="transition-all duration-200 ease-in-out hover:opacity-70 hover:scale-110"
                           height="28"
                           src={`https://cdn.simpleicons.org/gmail/${encodedColor}`}
                           title="Mail"
                           width="28"
                        />
                     </a>
                  </li>
                  <li>
                     <a
                        className="group"
                        href="tel:+919821465833"
                        target="_blank"
                     >
                        <img
                           alt="Instagram"
                           className="transition-all duration-200 ease-in-out hover:opacity-70 hover:scale-110"
                           height="28"
                           src={`https://cdn.simpleicons.org/allocine/${encodedColor}`}
                           title="Instagram"
                           width="28"
                        />
                     </a>
                  </li>
                  <li>
                     <a
                        className="group"
                        href="https://www.instagram.com/_preet_yadav_/"
                        target="_blank"
                     >
                        <img
                           alt="Instagram"
                           className="transition-all duration-200 ease-in-out hover:opacity-70 hover:scale-110"
                           height="28"
                           src={`https://cdn.simpleicons.org/instagram/${encodedColor}`}
                           title="Instagram"
                           width="28"
                        />
                     </a>
                  </li>
                  <li>
                     <a
                        className="group"
                        href="https://www.linkedin.com/in/preet-deeva-a230321aa"
                        target="_blank"
                     >
                        <FaLinkedin className="text-secondary text-3xl hover:opacity-70 h-8 w-8" />
                     </a>
                  </li>
               </ul>
            </div>
         </div>
         <div
            className="flex flex-col flex-1 w-full justify-center opacity-0 [&>a]:block [&>a]:cursor-pointer [&>a]:text-[10vw] font-prata 
             md:[&>a]:text-[10vw] lg:[&>a]:text-[10vw] xl:[&>a]:text-[10vw]"
            id="links"
            style={{ opacity: 1 }}
         >
            <a
               className="transition-all duration-500 ease-out transform hover:-skew-x-12 hover:translate-x-10 leading-[0.95em] block"
               href="/about"
            >
               <h2>ABOUT</h2>
            </a>
            <a
               className="transition-all duration-500 ease-out transform hover:-skew-x-12 hover:translate-x-10 leading-[0.95em] block"
               href="/experience"
            >
               <h2 className="inline-block">RESUME</h2>
            </a>
            <a
               className="transition-all duration-500 ease-out transform hover:-skew-x-12 hover:translate-x-10 leading-[0.95em] block"
               href="/skills"
            >
               <h2>SKILLS</h2>
            </a>
            <a
               className="transition-all duration-500 ease-out transform hover:-skew-x-12 hover:translate-x-10 leading-[0.95em] block"
               href="/contact"
            >
               <h2>CONTACT</h2>
            </a>
         </div>
      </div>
   );
}
