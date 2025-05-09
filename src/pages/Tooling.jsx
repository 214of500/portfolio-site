import { useState } from "react";

const toolingData = [
  {
    category: "CRM & Customer Platforms",
    tool: "HubSpot",
    entries: [
      {"module": "Marketing Hub", "workType": "Email Automation", "usage": "Built and automated marketing and transactional email flows across the customer journey", "tags": ["Configuration","Automation","Segmentation"], "usedAt": "Egg"},
      {"module": "Sales Hub", "workType": "CRM Workflows", "usage": "Created lifecycle flows, triggered events, set up custom workflows using webhooks and custom objects", "tags": ["Implementation","Workflow Design","Webhooks"], "usedAt": "Egg"},
      {"module": "CMS Hub", "workType": "Website Integration", "usage": "Integrated hubspot forms, tracking scripts, and custom events with client websites", "tags": ["Integration","Tracking","Data Enrichment"], "usedAt": "Egg"},
      {"module": "Service Hub", "workType": "Support Enablement", "usage": "Configured chatbots, playbooks, and knowledge management tools for internal cs teams", "tags": ["Chatbot Config","KMS Setup","Internal Tooling"], "usedAt": "Egg"},
      {"module": "Operations Hub", "workType": "App Development & Reporting", "usage": "Built internal hubspot apps, dashboards, and automated processes for operations teams", "tags": ["App Development","Dashboarding","Internal Tooling"], "usedAt": "Egg"}
    ]
  },
  {
    category: "CRM & Customer Platforms",
    tool: "Zendesk",
    entries: [
      {"module": "Support", "workType": "Support Operations", "usage": "Configured support teams, user roles, SLA policies, and routing rules; integrated with simPRO for streamlined customer service", "tags": ["Configuration","Support Enablement","SLA Management"], "usedAt": "Egg"},
      {"module": "Guide", "workType": "Knowledge Management", "usage": "Developed and maintained a centralised knowledge management system to support customer service teams", "tags": ["KMS Setup","Internal Tooling","Documentation"], "usedAt": "Egg"},
      {"module": "Chat", "workType": "Chatbot Configuration", "usage": "Implemented an integrated chatbot linked to the knowledge base to streamline support interactions", "tags": ["Chatbot Config","CRM Integration","Support Enablement"], "usedAt": "Egg"},
      {"module": "Explore", "workType": "Reporting & Dashboards", "usage": "Created dashboards and reports to monitor support performance and drive data-informed decisions", "tags": ["Analytics","Dashboarding","Internal Reporting"], "usedAt": "Egg"}
    ]
  },
  {
    category: "CRM & Customer Platforms",
    tool: "Oracle Service Cloud",
    entries: [
      {"module": "Incident Management", "workType": "Incident Management", "usage": "Optimised incident routing and handled unassigned or misrouted communications to improve case resolution efficiency", "tags": ["Workflow Design","SLA Management","Automation"], "usedAt": "Liberty Shared Services, Virgin Media"},
      {"module": "Customer Portal", "workType": "Customer Self-Service", "usage": "Redesigned the internal and external customer portal to enhance user experience and accessibility", "tags": ["Portal Design","Workflow Support","Knowledge Integration"], "usedAt": "Liberty Shared Services, Virgin Media"},
      {"module": "Knowledge Management", "workType": "Knowledge Management", "usage": "Maintained and updated a knowledge base to ensure accessible and accurate internal information", "tags": ["KMS Setup","Documentation","Support Enablement"], "usedAt": "Liberty Shared Services, Virgin Media"}
     ]
  },
  {
    category: "CRM & Customer Platforms",
    tool: "Segment",
    entries: [
      {"module": "Customer Data Platform", "workType": "Customer Data Management", "usage": "Segmented customer data based on email activity, web behaviour, and product interactions for targeted outreach", "tags": ["Segmentation","Data Enrichment","CRM Integration"], "usedAt": "Egg"}
     ]
  },
  {
    category: "CRM & Customer Platforms",
    tool: "Referral Factory",
    entries: [
      {"module": "Referral Campaign Builder", "workType": "Referral Campaigns", "usage": "Integrated referral tracking into CRM and FMS systems to monitor conversions and sales attribution", "tags": ["Configuration","Customer Acquisition","Campaign Automation"], "usedAt": "Egg"}
     ]
  },
  {
    category: "Finance & Payments",
    tool: "Oracle Fusion",
    entries: [
      {"module": "Various", "workType": "Platform Implementation", "usage": "Supported the implementation of various modules and contributed to business process design and workflow optimization", "tags": ["Implementation","Workflow Design","Cross-functional Delivery"], "usedAt": "Egg"}
    ]
  },
  {
    category: "Finance & Payments",
    tool: "Oracle R11 / R12",
    entries: [
      {"module": "Various", "workType": "ERP Migration", "usage": "Led ERP migration for Payment Operations, ensuring data integrity, continuity, and thorough data cleansing", "tags": ["ERP","Data Migration","Operational Workflows"], "usedAt": "Liberty Shared Services"}
    ]
  },
  {
    category: "Finance & Payments",
    tool: "Barclaycard",
    entries: [
      {"module": "Payment Portal", "workType": "Payment Integration", "usage": "Integrated payment processing into digital customer journeys with backend systems for reconciliation and compliance", "tags": ["API Integration","CRM Sync","Onboarding"], "usedAt": "Egg"}
    ]
  },
  {
    category: "Finance & Payments",
    tool: "GoCardless",
    entries: [
      {"module": "Direct Debit", "workType": "Payment Integration", "usage": "Integrated payment processing into digital customer journeys with backend systems for reconciliation and compliance", "tags": ["API Integration","CRM Sync","Onboarding"], "usedAt": "Egg"}
    ]
  },
  {
    category: "Finance & Payments",
    tool: "Experian",
    entries: [
      {"module": "Delphi Select / KYC", "workType": "Credit Decisioning", "usage": "Configured and integrated Delphi Select into lending platform to support credit risk assessment processes", "tags": ["Data Integration","Compliance","Real-time Scoring"], "usedAt": "Egg"}
    ]
  },
  {
    category: "Finance & Payments",
    tool: "Financier",
    entries: [
      {"module": "Loan Management System", "workType": "Loan Operations", "usage": "Integrated loan origination workflows with credit reference APIs, decisioning logic, and end-to-end communications", "tags": ["Workflow Management","Internal Tooling","Ops Support"], "usedAt": "Egg"}
    ]
  },
  {
    category: "Automation & Low Code",
    tool: "MS Power Platform",
    entries: [
      {"module": "Power Automate", "workType": "Workflow Automation", "usage": "Automated business workflows and approval processes using Power Automate", "tags": ["Business Logic","System Flows","Integration"], "usedAt": "Liberty Shared Services, Egg"},
      {"module": "Power Apps", "workType": "Low-code App Development", "usage": "Developed custom apps for on-site customer interaction and feedback collection", "tags": ["Internal Apps","Process Digitisation","Workflow Tools"], "usedAt": "Egg"},
      {"module": "Power Virtual Agents", "workType": "Chatbot Development", "usage": "Built virtual agents to automate and support P2P queries", "tags": ["Bot Logic","Internal Support","Low-code AI"], "usedAt": "Liberty Shared Services"}
     ]
  },
  {
    category: "Automation & Low Code",
    tool: "ADA",
    entries: [
      {"module": "Chatbot", "workType": "Chatbot Configuration", "usage": "Onborading and implementation and config of chatbot", "tags": ["Conversation Design","Internal Automation","NLP Tools"], "usedAt": "Egg"}
     ]
  },
  {
    category: "Automation & Low Code",
    tool: "UIPath",
    entries: [
      {"module": "Developmer / Orchestrator", "workType": "Robotic Process Automation", "usage": "Delivery of rpa process improvements including dev and orchestrator experience", "tags": ["RPA","Internal Auditing","Citizen Developer"], "usedAt": "Liberty Shared Services"}
    ]
  },
  {
    category: "Productivity & Delivery",
    tool: "Atlassian Suite",
    entries: [
      {"module": "Jira", "workType": "Business Intelligence", "usage": "Managed change governance processes, ticketing, and backlog refinement using Jira", "tags": ["Reporting","Dashboarding","Compliance Analytics"], "usedAt": "Egg"},
      {"module": "Confluence", "workType": "Agile Project Management", "usage": "Built and maintained internal knowledge systems for team-wide access and documentation", "tags": ["Sprints","Backlogs","Issue Tracking"], "usedAt": "Egg"},
      {"module": "Trello", "workType": "Documentation Management", "usage": "Coordinated internal and third-party task tracking using Trello for Kanban-based workflows", "tags": ["Knowledge Sharing","Team Collaboration","Documentation"], "usedAt": "Egg"}
    ]
  },
  {
    category: "Productivity & Delivery",
    tool: "MS 365 Suite",
    entries: [
      {"module": "Office 365", "workType": "Task Management", "usage": "Proficient in m265 suite", "tags": ["Kanban Boards","Team Coordination","Workflow Tracking"], "usedAt": "Liberty Shared Services, Virgin Media, Egg"},
      {"module": "Teams", "workType": "Productivity & Communication", "usage": "App integration for notifications, updated and business comms", "tags": ["Document Creation","Collaboration","Workflow Management"], "usedAt": "Egg"}
    ]
  },
  {
    category: "Developer & Integration",
    tool: "MongoDB",
    entries: [
      {"module": "Database", "workType": "Internal Communication", "usage": "Integration and db for web app", "tags": ["Messaging","Workflow Triggers","Collaboration"], "usedAt": "Personal"}
    ]
  },
  {
    category: "Developer & Integration",
    tool: "Node.js",
    entries: [
      {"module": "Node.js", "workType": "Backend Development", "usage": "Web app development to run servers", "tags": ["API Integration","Server-side Logic","Tool Connectivity"], "usedAt": "Personal"}
     ]
  },
  {
    category: "Developer & Integration",
    tool: "React",
    entries: [
      {"module": "React", "workType": "Frontend Development", "usage": "Web development for desktop and mobile", "tags": ["Component Design","UI Development","Internal Tools"], "usedAt": "Personal"}
    ]
  },
  {
    category: "Developer & Integration",
    tool: "OpenAI",
    entries: [
      {"module": "Prompt API", "workType": "Database Prototyping", "usage": "Engineered and deployed prompt logic within a custom web app using OpenAI's Prompt API", "tags": ["NoSQL","Backend Prototyping","Data Modeling"], "usedAt": "Personal"},
      {"module": "GPT creation", "workType": "AI Integration", "usage": "Created a tailored GPT model for a web app, fine-tuned for user-specific tasks", "tags": ["Prompt Engineering","Text Summarisation","GPT Integration"], "usedAt": "Personal"}   
    ]
  },
  {
    category: "Analytics & Reporting",
    tool: "Google Analytics",
    entries: [
      {"module": "GA4", "workType": "UX Analytics", "usage": "Set up GA4 to track onboarding funnels, user drop-off, and conversion rates across digital touchpoints", "tags": ["Heatmaps","A/B Testing","Engagement Metrics"], "usedAt": "Egg"}
    ]
  },
  {
    category: "Analytics & Reporting",
    tool: "SAP",
    entries: [
      {"module": "Business Objects", "workType": "Product Performance Analytics", "usage": "Developed audit and reconciliation reports to support business performance tracking and compliance", "tags": ["GA4","Traffic Monitoring","Behaviour Analysis"], "usedAt": "Liberty Shared Services, Virgin Media"}
    ]
  },
  {
    category: "Analytics & Reporting",
    tool: "MS Power Platform",
    entries: [
      {"module": "Power BI", "workType": "Data Visualisation", "usage": "Created dashboards and configured FTL reporting to support data-driven decisions", "tags": ["Dashboarding","Reporting","BI Integration"], "usedAt": "Egg"}
    ]
  },
  {
    category: "Analytics & Reporting",
    tool: "HEX",
    entries: [
      {"module": "", "workType": "Data Analysis", "usage": "Used for reporting and data story telling", "tags": ["Analytics","Reporting","Collaboration"], "usedAt": "Egg"}
    ]
  },
  {
  category: "Design & Research",
  tool: "Figma",
  entries: [
    {"module": "Design", "workType": "Customer Analytics", "usage": "Created wireframes and prototypes to support UI/UX and product development efforts", "tags": ["Data Tracking","Segmentation","Product Optimisation"], "usedAt": "Egg"},
    {"module": "FigJam", "workType": "UI Design", "usage": "Used FigJam for collaborative ideation and whiteboarding with stakeholders", "tags": ["Prototyping","Design Systems","UX"], "usedAt": "Egg"} 
  ]
},
{
  category: "Design & Research",
  tool: "Miro",
  entries: [
    {"module": "Miro", "workType": "Workshop Facilitation", "usage": "Whiteboarding", "tags": ["Collaboration","Ideation","Service Mapping"], "usedAt": "Egg"}
  ]
},
{
  category: "Design & Research",
  tool: "Hotjar",
  entries: [
    {"module": "Heatmaps", "workType": "User Testing", "usage": "Analysed user behaviour through heatmaps to inform design and content decisions", "tags": ["Prototype Validation","Usability Testing","Feedback Collection"], "usedAt": "Egg"}
  ]
},
{
  category: "Design & Research",
  tool: "Crazy Egg",
  entries: [
    {"module": "Heatmaps", "workType": "UX Analytics", "usage": "Used scroll maps and click tracking to optimize UX and identify drop-off points", "tags": ["Heatmaps","Funnel Tracking","Behaviour Analysis"], "usedAt": "Egg"}
   ]
},
{
  category: "Platform Operations",
  tool: "SimPRO",
  entries: [
    {"module": "Field Service Management", "workType": "Field Service Management", "usage": "Implemented FSM including workshops with stakeholders, process design, reporting, integrations into front and back end", "tags": ["Scheduling","FSM Implementation","Workflow Setup"], "usedAt": "Egg"}
  ]
},
{
  category: "Platform Operations",
  tool: "OpenSolar",
  entries: [
    {"module": "OpenSolar", "workType": "Proposal Integration", "usage": "Onboarding, configuration, integration in CRM and custom apps", "tags": ["Tool Integration","Customer Journey","Digital Proposal Design"], "usedAt": "Egg"}
  ]
},
{
  category: "Platform Operations",
  tool: "Solcast",
  entries: [
    {"module": "API", "workType": "API Integration", "usage": "Used Solcast API to access real-time and historical solar data for a renewable energy project", "tags": ["Live Data Integration","Energy Forecasting","Proposal Support"], "usedAt": "Egg"}
  ]
},
{
  category: "Platform Operations",
  tool: "ServiceNow",
  entries: [
    {"module": "ITSM", "workType": "Workflow Design", "usage": "Independently studied and practiced ServiceNow admin fundamentals to build foundational ITSM knowledge", "tags": ["ITSM","Workflow Design","Implementation"], "usedAt": "Personal"}
  ]
}
];

export default function ToolingExperienceTable() {
  const [search, setSearch] = useState("");

  const filteredData = toolingData.filter(({ tool, entries }) =>
    tool.toLowerCase().includes(search.toLowerCase()) ||
    entries.some(entry =>
      (entry.module || "").toLowerCase().includes(search.toLowerCase()) ||
      entry.workType.toLowerCase().includes(search.toLowerCase()) ||
      entry.usage.toLowerCase().includes(search.toLowerCase()) ||
      entry.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
    )
  );

  const groupedByCategory = filteredData.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <>
      {/* Hero Section */}
      <section className="w-full h-[30vh] flex items-center bg-black dark:bg-black relative shadow-[...] px-8 sm:px-16 lg:px-24">
        <div className="mt-[15vh] w-full max-w-5xl mx-auto">
          <div className="text-left">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-white dark:text-white relative">
                <span className="relative z-10">tooling</span>
                <span className="absolute left-0 bottom-[2px] w-full h-[8px] bg-[#a3e635] z-0"></span>
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-white dark:text-gray-300">
              A summary of experience and impact across platform delivery, systems integration, and operational tooling
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[2px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_4px_rgba(255,255,255,0.05)]" />
      </section>

  
{/* Search Bar Section */}
<section className="w-full h-[10vh] bg-black dark:bg-black flex items-center sticky top-16 z-40">
  <div className="w-full max-w-5xl mx-auto px-8 sm:px-16 lg:px-24">
    <div className="max-w-md w-full mx-auto">
      <input
        type="text"
        placeholder="Search tools, modules, or tags..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
      />
    </div>
  </div>
</section>


  
      {/* Tooling Table Section */}
      <section className="py-16 bg-white dark:bg-black px-8 sm:px-16 lg:px-24">
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Tooling Experience</h2>
    
          <div className="space-y-2">
            {Object.entries(groupedByCategory).map(([category, tools]) => (
              <details key={category} open className="group overflow-hidden">
                <summary className="cursor-pointer dark:bg-slate-800 px-4 py-3 text-xl font-semibold text-gray-800 dark:text-white">
                  <span className="link-underline-thick">{category}</span>
                </summary>
                <div className="space-y-3 px-2 sm:px-4 py-4">
                  {tools.map(({ tool, entries }) => (
                    <details key={tool} className="group border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                    <summary className="cursor-pointer bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 px-4 py-3 font-semibold text-lg text-gray-900 dark:text-white">
                      {tool}
                    </summary>

                      <div className="divide-y divide-gray-200 dark:divide-gray-600">
                        {entries.map((entry, idx) => (
                          <div key={idx} className="p-4 bg-white dark:bg-slate-800">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                              <div>
                                <div className="text-base font-semibold text-gray-900 dark:text-white">
                                  {entry.module || "General"}
                                </div>
                                <div className="text-sm italic text-gray-600 dark:text-gray-400">
                                  [{entry.workType}]
                                </div>
                              </div>
                              <div className="text-sm text-gray-500 dark:text-gray-400 sm:pt-1">
                                Used at: {entry.usedAt}
                              </div>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{entry.usage}</p>
                            <div className="flex flex-wrap gap-2">
                              {entry.tags.map((tag, i) => (
                                <span
                                  key={i}
                                  className="inline-block px-2 py-1 text-xs font-medium bg-black dark:bg-slate-600 text-[#a3e635] dark:text-white rounded"
                                  style={{ fontVariant: 'small-caps', textTransform: 'lowercase' }}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </details>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}