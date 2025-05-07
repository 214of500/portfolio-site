export default function Recruiters() {
    return (
      <>
        {/* Reusable Hero Section */}
        <section className="w-full h-[40vh] pt-16 flex items-center px-8 sm:px-16 lg:px-24 bg-black dark:bg-black relative shadow-[0_8px_16px_-8px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_16px_-8px_rgba(255,255,255,0.05)]">
          <div className="w-full max-w-[900px] mx-auto">
            <div className="text-left">
              <div className="flex items-center gap-3 mb-4">
                
              <h1 className="text-4xl sm:text-5xl font-bold text-white dark:text-white relative inline-block">
  <span className="relative z-10">recruiters</span>
  <span className="absolute left-0 bottom-[2px] w-full h-[8px] bg-[#a3e635] z-0"></span>
</h1>
              </div>
              <p className="text-lg sm:text-xl text-white dark:text-gray-300 ">
              A summary of experience and impact across platform delivery, systems integration, and operational tooling
               </p>
            </div>
          </div>
  
          {/* Divider line at bottom */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_4px_rgba(255,255,255,0.05)]" />
        </section>
  
        {/* Main Recruiters Section */}
        <section id="recruiters" className="bg-[#f9fafb] dark:bg-[#0f172a] py-20 px-8 sm:px-16 lg:px-24">
          <div className="max-w-[900px] mx-auto text-[#1f2937] dark:text-white">
  
            {/* Card Component Style */}
            {[
              {
                title: "Professional Summary",
                content: (
                  <div className="text-base space-y-4">
                    <p>
                      I’m a platform-focused product and implementation specialist with experience delivering
                      <strong> internal tools</strong>, <strong>operational systems</strong>, and integrated platforms in
                      complex, regulated environments.
                    </p>
                    <p>
                      I work across product, systems, and delivery to translate business and operational needs into
                      scalable tools that meet <strong>user needs</strong>, improve <strong>efficiency</strong>, strengthen
                      <strong> data integrity</strong>, and deliver measurable outcomes.
                    </p>
                    <p>
                      My approach is pragmatic, evidence-led, and user-conscious. I bring structure to ambiguity,
                      working closely with <strong>cross-functional teams</strong> and third parties to design and deliver
                      solutions that simplify workflows, integrate with existing tools, and unlock long-term business value.
                    </p>
                    <p>
                      I apply <strong>lateral thinking</strong>, structured problem-solving, and precise written and visual
                      communication to navigate complexity and ship solutions that work.
                    </p>
                  </div>
                )
              },
              {
                title: "How I Add Value",
                content: (
                  <div className="text-base space-y-4">
                    <p><strong>Simplifying complexity:</strong> I turn fragmented processes and systems into scalable, maintainable tools that teams can rely on.</p>
                    <p><strong>Driving operational clarity:</strong> I align people, platforms, and processes to reduce friction and support confident decision-making.</p>
                    <p><strong>Integrating with real systems:</strong> I work hands-on with CRMs, APIs, workflows, and third-party platforms to deliver solutions that fit how teams actually operate.</p>
                    <p><strong>Designing for usability and trust:</strong> I focus on adoption by designing solutions that meet user needs and embed naturally into daily work.</p>
                    <p><strong>Balancing delivery and governance:</strong> I help organisations move fast without losing sight of risk, compliance, or long-term maintainability.</p>
                  </div>
                )
              },
              
              {
                title: "Delivery Highlights",
                content: (
                  <div className="text-base space-y-4">
                    <p>
                      <strong>Digital Lending Platform:</strong> Enabled multi-million revenue growth by delivering a ground-up, FCA-compliant digital lending platform. Integrated CRM, CRA, loan management, payments, direct debits, operational tools, and customer communications — streamlining processes and enabling scale in a regulated environment.
                    </p>
                    <p>
                      <strong>Digital Acquisition Funnel:</strong> Outperformed all existing acquisition channels with a digital-first onboarding journey for B2C solar customers — converting leads at 10× the rate of partner referrals and third-party lead gen.
                    </p>
                    <p>
                      <strong>Field Service Scheduling Platform:</strong> Streamlined delivery operations by implementing SimPro and integrating it with internal tools and scheduling processes — enabling end-to-end job tracking for engineers and contractors.
                    </p>
                    <p>
                      <strong>Automated Audit for Mileage Claims:</strong> Reduced audit effort and increased accuracy by automating mileage expense validation using RPA. Delivered Liberty Global’s first citizen-led automation within Virgin Media, unlocking new governance processes and reducing manual review overhead across finance and operations.
                    </p>
                  </div>
                )
              },
              
              {
                title: "Core Skills",
                content: (
                  <div className="text-base font-medium leading-relaxed">
                    Implementation Consulting, Platform Operations, Business Analysis, Workflow & Process Design, API Integration, Product Enablement, Requirements Gathering, User Journey Mapping, SaaS Configuration, Internal Tooling, Cross-functional Collaboration, Agile Delivery, Service Design, Stakeholder Workshops
                  </div>
                )
              },
              
              
              {
                title: "Availability & Work Preferences",
                content: (
                  <div className="text-base space-y-4 font-medium">
                    <p><strong>Location:</strong> Leeds, UK (flexible across the UK)</p>
                    <p><strong>Work Format:</strong> Open to remote, hybrid, or on-site roles</p>
                    <p><strong>Role Type:</strong> Open to contract or permanent positions</p>
                    <p><strong>Availability:</strong> Available for immediate start</p>
                    <p><strong>Right to Work:</strong> British citizen (UK work eligible)</p>
                  </div>
                )
              },
              

            ].map((section, idx) => (
              <div
                key={idx}
                className="group bg-white dark:bg-[#1e293b] p-6 sm:p-8 rounded-2xl shadow-sm mb-8 transition hover:shadow-md hover:-translate-y-[2px]"
              >
                <h3 className="text-lg sm:text-xl font-medium sm:font-semibold mb-4 relative inline-block link-underline-thick text-[#1f2937] dark:text-white">
                  {section.title}
                </h3>
                {section.content}
              </div>
            ))}
            <div className="text-center mt-16">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#1f2937] dark:text-white">
                Think I might be a fit for your team or project?
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-6">
                Let’s connect — I’d love to hear what you’re working on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* LinkedIn Button */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href="https://www.linkedin.com/in/your-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-[240px] px-6 py-3 bg-black text-white rounded-md flex items-center justify-center gap-2 hover:opacity-90 transition font-bold"
                >
                    <i className="fab fa-linkedin text-xl"></i> Connect on LinkedIn
                </a>
                <a
                    href="mailto:your@email.com"
                    className="w-full sm:w-[240px] px-6 py-3 border-2 border-black text-black dark:text-white rounded-md flex items-center justify-center gap-2 hover:bg-[#a3e635] hover:text-black transition font-bold"
                >
                    <i className="fas fa-envelope text-base"></i> Email Me
                </a>
                </div>


            </div>
            </div>



          </div>
        </section>
      </>
    );
  }
  