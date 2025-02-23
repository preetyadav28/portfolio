export default function Contact() {
   return (
      <main className="flex w-1/2 items-end p-10 gap-16 justify-around md:gap-32 md:p-24 min-h-screen mt-20 relative z-10">
         <div
            className="md:p-10 opacity-0 p-0 space-y-5"
            id="info"
            style={{ opacity: 1, transform: "translateY(0px)" }}
         >
            <h1 className="font-prata leading-[0.95em] md:text-[7vw] text-[12vw] uppercase">
               Contact
            </h1>
            <div>
               <p className="text-2xl">
                  {
                     "My inbox is always open. Whether you have a question, want to say hello or want to hire me, I'll try my best to get back to you! Feel free to mail me about any relevant job updates."
                  }
               </p>
            </div>
            <div className="space-y-2">
               <p className="text-2xl">
                  Email:{" "}
                  <a
                     className="hover-underline-animation-widget"
                     href="mailto:adrian.alvarezalonso1991@gmail.com"
                  >
                     yadavpreet81@gmail.com
                  </a>
               </p>
               <p className="text-2xl">
                  Phone:{" "}
                  <a
                     className="hover-underline-animation-widget"
                     href="tel:34-647-31-72-14"
                  >
                     +91 98214 65833
                  </a>
               </p>
               <a
                  className="text-2xl block cursor-pointer duration-200 hover:text-gray-600 transition-colors underline"
                  href="https://www.adrian-alvarez.dev/en/Adrian_Alvarez_Alonso_CV.pdf"
                  target="_blank"
               >
                  Download my CV
               </a>
            </div>
         </div>
      </main>
   );
}
