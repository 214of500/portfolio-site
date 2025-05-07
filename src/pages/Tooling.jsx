export default function Tooling() {
  const toolingSections = [
    {
      title: "CRM & Customer Tools",
      tools: [
        { name: "Segment", note: "Segmented customers by type and demographic to support targeting and data efforts" },
        { name: "Zendesk", note: "Managed support workflows and customer service tickets" },
        { name: "OSC", note: "Handled CRM data and supported operational workflows" },
        { name: "HubSpot", note: "Configured workflows, automated comms, and integrated across the customer journey" },
        { name: "Referral Factory", note: "Built and monitored referral journeys to drive acquisition" },
        { name: "ServiceNow", note: "Completed training toward CSA certification; supported ITSM workflow design" }
      ]
    },
    {
      title: "Payments & Finance",
      tools: [
        { name: "Barclaycard", note: "Integrated into onboarding and billing flows across CRM and backend systems" },
        { name: "Oracle R11/R12/Fusion", note: "Supported ERP and payment ops through tooling integration" },
        { name: "Financier", note: "Managed loan workflows using core Loan Management System" },
        { name: "Experian Delphi Select", note: "Integrated credit check data for instant lending decisioning" }
      ]
    },
    {
      title: "Design & Prototyping",
      tools: [
        { name: "FigJam", note: "Collaborated with teams and stakeholders using digital whiteboards" },
        { name: "Figma", note: "Mocked user flows and created interactive prototypes for internal tools" },
        { name: "Miro", note: "Mapped service blueprints, workshops, and process flows" },
        { name: "UserBrain", note: "Ran unmoderated user tests to validate internal prototypes" }
      ]
    },
    {
      title: "Docs & Workflow Tools",
      tools: [
        { name: "Trello", note: "Tracked team tasks and workflows with Kanban boards" },
        { name: "MS Office", note: "Created documents, spreadsheets, and presentations for day-to-day work" },
        { name: "Teams", note: "Managed internal notifications and event-driven workflows" }
      ]
    },
    {
      title: "Dev & Integration",
      tools: [
        { name: "Visual Studio Code", note: "Edited and debugged code across multiple prototyping projects" },
        { name: "MongoDB", note: "Prototyped backend data layers using MongoDB" },
        { name: "OpenAI", note: "Integrated GPT for summarisation and prompt-based tooling" },
        { name: "React", note: "Built internal tools and custom UIs for operational use" },
        { name: "Node.js", note: "Developed backend logic and API integrations for internal tools" }
      ]
    },
    {
      title: "Field Service & Ops",
      tools: [
        { name: "SimPRO", note: "Implemented FSM platform to manage scheduling, job tracking, and sales handoffs" },
        { name: "OpenSolar", note: "Integrated solar proposal tooling into B2C journeys" },
        { name: "Solcast API", note: "Connected live solar data into proposal generation workflows" }
      ]
    },
    {
      title: "Automation & AI",
      tools: [
        { name: "PowerAutomate", note: "Built automation flows across Microsoft and external systems" },
        { name: "PowerApps", note: "Developed low-code apps to support internal operations" },
        { name: "PowerVirtual Agents", note: "Built and configured internal-facing chatbot solutions" },
        { name: "ADA", note: "Configured chatbot conversation flows for internal use" },
        { name: "UIPath", note: "Led RPA initiative to audit mileage claims as part of Liberty Global’s citizen developer program" }
      ]
    },
    {
      title: "Reporting & Analytics",
      tools: [
        { name: "HEX", note: "Created data visualisations and reporting dashboards" },
        { name: "SAP Business Objects", note: "Built compliance and operations dashboards" },
        { name: "Google Analytics G4A", note: "Monitored digital product performance and user behaviour" },
        { name: "PowerBI", note: "Developed reporting for operations and leadership visibility" }
      ]
    },
  ];


  return (
    <>
      {/* Reusable Hero Section */}
      <section className="w-full h-[40vh] pt-16 flex items-center px-8 sm:px-16 lg:px-24 bg-black dark:bg-black relative shadow-[0_8px_16px_-8px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_16px_-8px_rgba(255,255,255,0.05)]">
        <div className="w-full max-w-[900px] mx-auto">
          <div className="text-left">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-white dark:text-white relative inline-block">
                <span className="relative z-10">tooling</span>
                <span className="absolute left-0 bottom-[2px] w-full h-[8px] bg-[#a3e635] z-0"></span>
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-white dark:text-gray-300">
              A summary of experience and impact across platform delivery, systems integration, and operational tooling
            </p>
          </div>
        </div>

        {/* Divider line at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_4px_rgba(255,255,255,0.05)]" />
      </section>

      {/* Tooling Section */}
      <section className="bg-[#f9fafb] dark:bg-[#0f172a] py-20 px-8 sm:px-16 lg:px-24">
        <div className="max-w-[900px] mx-auto text-[#1f2937] dark:text-white">
          {toolingSections.map((section, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-[#1e293b] p-6 sm:p-8 rounded-2xl shadow-sm mb-8 transition hover:shadow-md hover:-translate-y-[2px]"
            >
              <h3 className="text-lg sm:text-xl font-medium sm:font-semibold mb-4 relative inline-block link-underline-thick text-[#1f2937] dark:text-white">
                {section.title}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-base font-medium">
                {section.tools.map((tool, toolIdx) => (
                  <li key={toolIdx}>
                    <strong>{tool.name}:</strong> {tool.note}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
