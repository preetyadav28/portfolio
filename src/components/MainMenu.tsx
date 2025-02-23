/* eslint-disable @next/next/no-img-element */
import { FaLinkedin } from "react-icons/fa";
import tailwindConfig from "../../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";

const fullConfig = resolveConfig(tailwindConfig);
const secondaryColor = fullConfig.theme.colors.secondary;
const encodedColor = secondaryColor.replace("#", "");

export default function MainMenu() {
   return (
      <div className="flex items-center flex-col gap-16 h-full md:flex-row md:gap-32 md:justify-around md:mt-0   group md:[&>a]:text-[10vw]">
         <div
            className="opacity-0 self-end space-y-3"
            id="info"
            style={{ opacity: 1, transform: "translateY(0px)" }}
         >
            <h1 className="font-semibold text-6xl tracking-widest">
               Preet Deeva
            </h1>
            <p className="text-2xl">
               Web Designer &amp; Developer / Marketing Strategist
            </p>
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
                        href="https://github.com/N4N1T0"
                        target="_blank"
                     >
                        <img
                           alt="GitHub"
                           className="transition-all duration-200 ease-in-out hover:opacity-70 hover:scale-110"
                           height="28"
                           src={`https://cdn.simpleicons.org/gmail/${encodedColor}`}
                           title="GitHub"
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
                        href="https://www.instagram.com/_preet_yadav_/"
                        target="_blank"
                     >
                        <FaLinkedin className="text-secondary text-3xl hover:opacity-70 h-8 w-8" />
                     </a>
                  </li>
               </ul>
            </div>
         </div>
         <div
            className="opacity-0 [&amp;>a]:block [&amp;>a]:cursor-pointer [&amp;>a]:text-[16vw] font-prata md:[&amp;>a]:text-[10vw]"
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
