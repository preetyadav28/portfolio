interface SidebarProps {
   isHomePage: boolean;
}

export default function Sidebar({ isHomePage }: SidebarProps) {
   // const pathname = usePathname();
   // // const router = useRouter();
   // const [isHomePage, setIsHomePage] = useState<boolean | null>(null);

   // useEffect(() => {
   //    setIsHomePage(pathname === "/");
   // }, [pathname]);

   if (isHomePage === null) return null;
   return (
      <aside
         className={`flex items-center ${
            isHomePage
               ? "bg-primary text-secondary"
               : "bg-secondary text-primary"
         } absolute h-10 justify-between md:fixed md:flex-col md:h-screen md:w-10 opacity-0 p-10 top-0 w-screen z-50`}
         style={{ opacity: 1 }}
      >
         <div className="flex items-center md:-rotate-90 md:mt-80 md:space-x-10 space-x-5 text-xl">
            <hr
               className={`${
                  isHomePage ? "border-secondary" : "border-primary"
               } border-secondary border-[1.5px] md:w-60 w-10`}
            />
            {isHomePage ? (
               <p className="cursor-pointer hover-underline-animation">
                  yadavpreet81@gmail.com
               </p>
            ) : (
               // eslint-disable-next-line @next/next/no-html-link-for-pages
               <a className="cursor-pointer hover-underline-animation" href="/">
                  Home
               </a>
            )}
         </div>
      </aside>
   );
}
