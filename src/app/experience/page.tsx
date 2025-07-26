export default function Experience() {
   return (
      <main className="flex pl-10 pr-10 w-screen flex-col gap-16 justify-around md:flex-row md:gap-32 md:pl-24 md:pr-0 relative z-10 overflow-auto">
         <aside
            className="opacity-0 flex-1 bottom-24 self-end space-y-3 z-10 pt-40"
            id="info"
            style={{ opacity: 1, transform: "translateY(0px)" }}
         >
            <h1 className="font-semibold text-6xl tracking-widest">
               Daffodil Software
            </h1>
            <div className="flex justify-between">
               <p className="text-xl">Sr. Associate - Software Engineering</p>
               <p className="text-xl">Aug 2021 - Present</p>
            </div>
            <p className="text-xl">
               Led end-to-end development across the SDLC, ensuring on-time
               production releases by gathering critical requirements and
               meeting coding milestones. Translated designs into high-quality
               code, optimized performance by resolving complex UI/CSS issues,
               and enhanced state management with React Hooks for improved
               maintainability. Maintained code quality with static analysis
               tools, boosting reliability and cross-browser compatibility.
            </p>
         </aside>
         <article
            className="opacity-0 flex-1 font-prata md:space-y-10 space-y-5 
                        h-[90vh] md:overflow-auto scrollbar-thin scrollbar-track-gray-200 
                        scrollbar-thumb-gray-500 pt-10 md:py-10 md:pb-10 "
            id="links"
            style={{ opacity: 1 }}
         >
            <div>
               <a className="block duration-500 ease-out hover:-skew-x-12 hover:translate-x-10 leading-[0.95em] md:text-[5vw] text-[10vw] transition-all uppercase">
                  <h2>Get Insured</h2>
               </a>
               <p className="text-xl font-montserrat inline pl-5">
                  - Platform dedicated to help Americans easily find affordable
                  health insurance. They are the leading provider for
                  state-based marketplace technology with more experience than
                  any technology provider transitioning states off
                  healthcare.gov and implementing exchanges.GetInsured exchanges
                  enable states to run their marketplaces more efficiently,
                  realize cost savings, have greater autonomy over their
                  insurance markets, and leverage the marketplace to achieve
                  broader health reform goals.
               </p>
            </div>
            <div>
               <a className="block duration-500 ease-out hover:-skew-x-12 hover:translate-x-10 leading-[0.95em] md:text-[5vw] text-[10vw] transition-all uppercase">
                  <h2>Manaze</h2>
               </a>
               <p className="text-xl font-montserrat inline pl-5">
                  - In house product that is used to manage employees' details such as Attendance Monitoring, Task Assignment, Payroll Calculations, Tax Compliance, Assets Management, Platform to raise service tickets, manage organizational expenses and costs etc.
               </p>
            </div>
            {/* <div>
               <a className="block duration-500 ease-out hover:-skew-x-12 hover:translate-x-10 leading-[0.95em] md:text-[5vw] text-[10vw] transition-all uppercase">
                  <h2>Maya MD</h2>
               </a>
               <p className="text-xl font-montserrat inline pl-5">
                  - Virtual care solution which gives patients on-demand symptom
                  assessments, guides them to the right care, and gives them
                  engaging tools to manage their health better. The idea behind
                  Maya MD was to provide the highest quality healthcare.
                  Different clinics/hospitals are boarded on the Platform and
                  they can register their patient’s accounts and do remote
                  patient monitoring and chronic care management. The care team
                  gets different alerts when a patient has abnormal readings so
                  that patients can get care on time. MayaRED (Re-Engineered
                  Discharge) helps to automate the patient discharge process,
                  helping your patients with transitions in care, alleviating
                  staff time, and helping to improve patient satisfaction. This
                  web application allows the hospital staff to engage in remote
                  patient monitoring. It enables the staff to communicate with
                  the patients over chat as well as video call.
               </p>
            </div> */}
            <div>
               <a className="block duration-500 ease-out hover:-skew-x-12 hover:translate-x-10 leading-[0.95em] md:text-[5vw] text-[10vw] transition-all uppercase">
                  <h2>Dope Doctors</h2>
               </a>
               <p className="text-xl font-montserrat inline pl-5">
                  - A robust telehealth platform tailored for healthcare
                  providers, enabling them to configure and offer a variety of
                  dynamic services to patients. The platform allows patients to
                  book appointments for these services, complete
                  pre-consultation forms shared by their providers, and receive
                  prescriptions directly from their doctors. Additionally,
                  patients can log essential health metrics such as weight,
                  calorie intake, water intake, and sleep hours, all of which
                  are accessible to their providers. The platform also
                  facilitates secure communication, allowing patients to chat
                  with their doctors. Moreover, providers can manage pharmacy
                  orders and generate shipment labels, streamlining the process
                  of delivering medications to patients.
               </p>
            </div>
            <div>
               <a className="block duration-500 ease-out hover:-skew-x-12 hover:translate-x-10 leading-[0.95em] md:text-[5vw] text-[10vw] transition-all uppercase">
                  <h2>AutoChek</h2>
               </a>
               <p className="text-xl font-montserrat inline pl-5">
                  - Web app designed for buying and selling cars, with a focus
                  on the Nigerian market. It offers a unique feature where end
                  users who lack sufficient funds can apply for a loan, with
                  their eligibility assessed through the platform. The app has
                  partnered with financial institutions that provide these loans
                  to users.
               </p>
            </div>
            {/* <div>
               <a className="block duration-500 ease-out hover:-skew-x-12 hover:translate-x-10 leading-[0.95em] md:text-[5vw] text-[10vw] transition-all uppercase">
                  <h2>GPS Energia</h2>
               </a>
               <p className="text-xl font-montserrat inline pl-5">
                  - This Admin Web Portal is a comprehensive power management
                  application designed to oversee various aspects of energy
                  distribution and consumption. It tracks distributed
                  generation, provides access to distributor invoices,
                  calculates savings, and monitors accumulated credits. Users
                  can manage multiple consumer units across different
                  distributors and plants, making it easier to oversee energy
                  usage and efficiency. Additionally, the portal allows for the
                  management of user contracts within the GPS Energy app,
                  streamlining energy management processes.
               </p>
            </div> */}
         </article>
      </main>
   );
}
