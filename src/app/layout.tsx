"use client";

import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { motion } from "framer-motion";

import { Montserrat, Prata } from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const montserrat = Montserrat({
   subsets: ["latin"],
   weight: ["100", "300", "400"],
   variable: "--font-montserrat",
});

const prata = Prata({
   subsets: ["latin"],
   weight: ["400"],
   variable: "--font-prata",
});

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   const pathname = usePathname();
   const [isHomePage, setIsHomePage] = useState<boolean | null>(null);
   console.log("🚀 ~ isHomePage:", isHomePage);

   useEffect(() => {
      setIsHomePage(pathname === "/");
   }, [pathname]);

   if (isHomePage === null) return null;
   return (
      <html lang="en">
         <body
            className={`${montserrat.variable} ${
               prata.variable
            } flex overflow-x-hidden relative ${
               isHomePage ? "bg-secondary" : "bg-primary"
            }`}
         >
            <motion.div
               initial={{ y: "-100%" }} // Start off-screen (top)
               animate={{ y: "0%" }} // Move down to cover the screen
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className={`inset-0 ${
                  isHomePage
                     ? "bg-primary text-secondary"
                     : "bg-secondary text-primary"
               } flex flex-col justify-center z-50`}
            >
               <Sidebar isHomePage={isHomePage} />
               {children}
            </motion.div>
         </body>
      </html>
   );
}
