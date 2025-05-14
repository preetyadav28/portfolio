interface SidebarProps {
   isHomePage: boolean;
}

export default function Sidebar({ isHomePage }: SidebarProps) {
   if (isHomePage === null) return null;
   return (
      <aside
         className={`hidden md:flex items-center ${
            isHomePage
               ? "bg-primary text-secondary"
               : "bg-secondary text-primary"
         } h-10 justify-between fixed md:flex-col md:h-screen md:w-10 opacity-0 p-10 top-0 w-screen z-50`}
         style={{ opacity: 1 }}
      >
         <div className="flex items-center md:-rotate-90 md:mt-80 md:space-x-10 space-x-5 text-xl">
            <hr
               className={`${
                  isHomePage ? "border-secondary" : "border-primary"
               } border-[1.5px] md:w-60 w-40`}
            />
            {isHomePage ? (
               <a
                  className={`cursor-pointer ${
                     isHomePage
                        ? "hover-underline-animation"
                        : "hover-underline-animation-black"
                  }`}
                  href="mailto:yadavpreet81@gmail.com"
               >
                  yadavpreet81@gmail.com
               </a>
            ) : (
               // eslint-disable-next-line @next/next/no-html-link-for-pages
               <a
                  className={`cursor-pointer ${
                     isHomePage
                        ? "hover-underline-animation"
                        : "hover-underline-animation-black"
                  }`}
                  href="/"
               >
                  Home
               </a>
            )}
         </div>
      </aside>
   );
}
