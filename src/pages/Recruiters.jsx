export default function Recruiters() {
    return (
      <>
      {/* Hero Section */}
      <section className="w-full h-[30vh] flex items-center bg-black dark:bg-black relative shadow-[...] px-8 sm:px-16 lg:px-24">
        <div className="mt-[15vh] w-full max-w-5xl mx-auto">
          <div className="text-left">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-white dark:text-white relative">
                <span className="relative z-10">recruiters</span>
                <span className="absolute left-0 bottom-[2px] w-full h-[8px] bg-[#a3e635] z-0"></span>
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-white dark:text-gray-300">
            A summary of experience, delivery highlights and skills across platform delivery, systems integration, and delivery
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[2px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_4px_rgba(255,255,255,0.05)]" />
      </section>

  
      {/* Search Bar Section */}
      <section className="w-full h-[10vh] bg-black dark:bg-black flex items-center">

    </section>

        {/* Recruiters Summary Table Section */}
        <section className="py-16 bg-white dark:bg-black px-8 sm:px-16 lg:px-24">
          <div className="w-full max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Professional Overview</h2>

            <div className="space-y-2">
              {/* Each major section as a details group */}

              <details open className="group overflow-hidden">
                <summary className="cursor-pointer dark:bg-slate-800 px-4 py-3 text-xl font-semibold text-gray-800 dark:text-white">
                  <span className="link-underline-thick">Professional Summary</span>
                </summary>
                <div className="px-4 py-4 space-y-4 text-base text-gray-800 dark:text-gray-300">
                  <p>I’m a product and implementation specialist with experience delivering internal tools, operational systems, and integrated platforms in complex, regulated environments.</p>
                  <p>I work across product, systems, and delivery to translate business needs into scalable tools that improve efficiency, strengthen data integrity, and deliver outcomes.</p>
                  <p>My approach is pragmatic, evidence-led, and user-conscious. I bring structure to ambiguity, working with cross-functional teams and third parties to simplify workflows and unlock value.</p>
                  <p>I apply lateral thinking, structured problem-solving, and precise communication to navigate complexity and ship solutions that work.</p>
                </div>
              </details>

              <details open className="group overflow-hidden">
                <summary className="cursor-pointer dark:bg-slate-800 px-4 py-3 text-xl font-semibold text-gray-800 dark:text-white">
                  <span className="link-underline-thick">How I Add Value</span>
                </summary>
                <ul className="list-disc pl-6 pr-4 py-4 text-base space-y-2 text-gray-800 dark:text-gray-300">
                  <li><strong>Simplifying complexity:</strong> turning fragmented processes into maintainable tools.</li>
                  <li><strong>Driving operational clarity:</strong> aligning teams, platforms, and processes.</li>
                  <li><strong>Integrating with real systems:</strong> working hands-on with CRMs, APIs, workflows, and platforms.</li>
                  <li><strong>Designing for usability and trust:</strong> ensuring adoption through intuitive solutions.</li>
                  <li><strong>Balancing delivery and governance:</strong> moving fast without compromising compliance.</li>
                </ul>
              </details>

              <details open className="group overflow-hidden">
                <summary className="cursor-pointer dark:bg-slate-800 px-4 py-3 text-xl font-semibold text-gray-800 dark:text-white">
                  <span className="link-underline-thick">Delivery Highlights</span>
                </summary>
                <div className="px-4 py-4 space-y-4 text-base text-gray-800 dark:text-gray-300">
                  <p><strong>Digital Lending Platform:</strong> Delivered FCA-compliant platform integrating CRM, loan management, payments, tools, and customer communications.</p>
                  <p><strong>Digital Acquisition Funnel:</strong> Led B2C onboarding journey converting leads 10× better than prior channels.</p>
                  <p><strong>Field Service Scheduling Platform:</strong> Integrated SimPro and internal tools for end-to-end engineer job tracking.</p>
                  <p><strong>Automated Audit for Mileage Claims:</strong> Used RPA to reduce effort and increase accuracy in expense auditing.</p>
                </div>
              </details>

              <details open className="group overflow-hidden">
                <summary className="cursor-pointer dark:bg-slate-800 px-4 py-3 text-xl font-semibold text-gray-800 dark:text-white">
                  <span className="link-underline-thick">Core Skills</span>
                </summary>
                <div className="px-4 py-4 text-base font-medium leading-relaxed text-gray-800 dark:text-gray-300">
                  Implementation Consulting, Platform Operations, Business Analysis, Workflow & Process Design, API Integration, Product Enablement, Requirements Gathering, User Journey Mapping, SaaS Configuration, Internal Tooling, Cross-functional Collaboration, Agile Delivery, Service Design, Stakeholder Workshops
                </div>
              </details>

              <details open className="group overflow-hidden">
                <summary className="cursor-pointer dark:bg-slate-800 px-4 py-3 text-xl font-semibold text-gray-800 dark:text-white">
                  <span className="link-underline-thick">Availability & Work Preferences</span>
                </summary>
                <ul className="pl-4 py-4 space-y-2 text-base font-medium text-gray-800 dark:text-gray-300">
                  <li><strong>Location:</strong> Leeds, UK (flexible across the UK)</li>
                  <li><strong>Work Format:</strong> Remote, hybrid, or on-site roles</li>
                  <li><strong>Role Type:</strong> Contract or permanent</li>
                  <li><strong>Availability:</strong> Immediate start</li>
                  <li><strong>Right to Work:</strong> British citizen</li>
                </ul>
              </details>
            </div>
          </div>
        </section>
        <section className="w-full bg-[#f9fafb] dark:bg-[#0f172a] py-16 px-6 sm:px-12 lg:px-24">
  <div className="max-w-3xl mx-auto text-center">
  <p className="text-lg sm:text-xl dark:text-[#f8fafc] max-w-xl text-center mx-auto ">
  Whether you're hiring, collaborating, or looking to solve a tough platform or process problem, I’d love to hear from you.
    </p>

    <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
      {/* LinkedIn Button */}
      <a
        href="https://www.linkedin.com/in/dominik-maliszewski-49724898/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-[240px] px-6 py-3 bg-black text-white rounded-md flex items-center justify-center gap-2 hover:opacity-90 transition font-bold"
      >
        <i className="fab fa-linkedin text-xl"></i> Connect on LinkedIn
      </a>

      {/* Email Button */}
      <a
        href="mailto:dommaliszewski@outlook.com"
        className="w-full sm:w-[240px] px-6 py-3 border-2 border-black text-black dark:text-white rounded-md flex items-center justify-center gap-2 hover:bg-[#a3e635] hover:text-black transition font-bold"
      >
        <i className="fas fa-envelope text-base"></i> Email Me
      </a>
    </div>
  </div>
</section>

      </>
    );
  }
  