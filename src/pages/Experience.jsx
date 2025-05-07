
import { useMemo, useState } from "react";

export default function Experience() {
  const startDate = 2005 + 6 / 12;
  const endDate = 2025 + 5 / 12;
  const totalDuration = endDate - startDate;
  const containerHeight = 5100;
  const topPadding = 50;
  const spacingFactor = 0.96;
  const [expandedIndex, setExpandedIndex] = useState(null);

  
  

  const experiences = [
    { title: "Senior Product Manager", company: "Egg", start: 2021 + 8 / 12, end: 2024 + 11 / 12, color: "#fcd400" },
    { title: "Project & Governance Lead", company: "Liberty Shared Services", start: 2019 + 9 / 12, end: 2021 + 8 / 12, color: "#005aa7" },
    { title: "Variable Pay Analyst", company: "Virgin Media", start: 2017 + 5 / 12, end: 2019 + 9 / 12, color: "#E60000" },
    { title: "Sales Advisor", company: "Virgin Media", start: 2016 + 1 / 12, end: 2017 + 5 / 12, color: "#E60000" },
    { title: "Owner – Independent Restaurant", company: "Entrepreneurial Venture", start: 2014, end: 2016, color: "#ec4899" },
    { title: "Career Break – Hospitality", company: "Various", start: 2011 + 6 / 12, end: 2013 + 11 / 12, color: "#d1d5db" },
    { title: "Quality Coordinator", company: "Serco", start: 2011, end: 2011 + 5 / 12, color: "#ffffff", text: "#000000" },
    { title: "Quality Analyst", company: "The Listening Company", start: 2009 + 5 / 12, end: 2010 + 11 / 12, color: "#ffffff", text: "#000000" },
    { title: "Technical Support", company: "The Listening Company", start: 2008 + 11 / 12, end: 2009 + 4 / 12, color: "#ffffff", text: "#000000" },
    { title: "BA (Hons) Three Dimensional Design", company: "Northumbria University", start: 2005 + 8 / 12, end: 2008 + 7 / 12, color: "#334155" }
  ];

  const callouts = [
    { type: "Achievement", icon: "🚀", date: 2024.5, title: "Delivered Lending Platform", summary: "Launched a full digital lending stack, integrating CRM, CRA, LMS, billing & comms.", color: "#0f766e" },
    { type: "Achievement", icon: "🚀", date: 2024.2, title: "Built B2C Solar Acquisition Funnel", summary: "Created a high-converting digital journey, outperforming all other lead sources.", color: "#0f766e" },
    { type: "Achievement", icon: "🚀", date: 2021.25, title: "RPA Mileage Audit", summary: "Designed and delivered Liberty Global’s first citizen-led RPA automation.", color: "#0f766e" },
    { type: "Achievement", icon: "🚀", date: 2020.6, title: "Finance Academy P2P Content", summary: "Built training material for Liberty Global’s internal finance academy.", color: "#0f766e" },
    { type: "Training", icon: "🌍", date: 2018.1, title: "Accenture Commission Training", summary: "Led training in Bangalore on commission process for offshored BPO teams.", color: "#64748b" },
    { type: "Training", icon: "🌍", date: 2018.8333, title: "SOx Controls Testing – Unity Media", summary: "Supported Sox testing and compliance preparation in Cologne.", color: "#64748b" },
    { type: "Certification", icon: "🎓", date: 2019.1667, title: "UI Path Developer (Foundation)", summary: "Completed to gain hands-on knowledge of RPA development fundamentals.", color: "#6366f1" },
    { type: "Certification", icon: "🎓", date: 2025.25, title: "ServiceNow Admin Fundamentals", summary: "Self-led learning to deepen platform admin and workflow configuration skills.", color: "#6366f1" },
    { type: "Certification", icon: "🎓", date: 2019.5, title: "Executive Programme – Digital Transformation", summary: "Liberty Global-sponsored exec program with Leeds University.", color: "#6366f1" },
    { type: "Certification", icon: "🎓", date: 2023.8333, title: "Solar PV for Non-Installers", summary: "Expanded industry knowledge through practical solar training.", color: "#6366f1" },
    { type: "Certification", icon: "🎓", date: 2021.5, title: "Finance Academy – Procurement", summary: "Completed procurement module as part of LG’s Finance Academy.", color: "#6366f1" },
    { type: "Recognition", icon: "🏆", date: 2018.5833, title: "Superstar Award", summary: "Recognised for exceptional delivery and team contribution.", color: "#facc15" },
    { type: "Recognition", icon: "🏆", date: 2019.5833, title: "Superstar Award", summary: "Second consecutive leadership nominated recognition.", color: "#facc15" },
    { type: "Recognition", icon: "🏆", date: 2023.9167, title: "Outstanding Contribution Award", summary: "Leadership recognition for outstanding contribution in B2C product", color: "#facc15" },
    { type: "Community", icon: "🧠", date: 2020.8333, title: "Neurodiversity SteerCo", summary: "Contributed to internal efforts supporting neurodivergent colleagues.", color: "#a855f7" }
  ];

  const logoMap = {
    "Egg": "💼",
    "Liberty Shared Services": "💼",
    "Virgin Media": "💼",
    "National Movers Centre": "💼",
    "Entrepreneurial Venture": "💼",
    "Various": "💼",
    "Serco": "💼",
    "The Listening Company": "💼",
    "Northumbria University": "🎓"
  };

  const groupLabels = {
    "Egg": "Part of Liberty Global Group",
    "Liberty Shared Services": "Part of Liberty Global Group",
    "Virgin Media": "Part of Liberty Global Group",
    "National Movers Centre": "Part of Liberty Global Group"
  };

  const yearMarkers = useMemo(() => {
    const years = [];
    for (let y = Math.ceil(startDate); y <= Math.floor(endDate); y++) {
      years.push(y);
    }
    return years;
  }, []);

  const formatDate = (val) => {
    const y = Math.floor(val);
    const m = Math.round((val - y) * 12);
    const date = new Date(y, m);
    return date.toLocaleString("default", { month: "short", year: "numeric" });
  };
// Prevent overlapping callouts
const processedCallouts = [];
let lastBottom = -Infinity;
const minSpacing = 70; // pixels between boxes

callouts
  .sort((a, b) => b.date - a.date) // newest first
  .forEach((item) => {
    const rawTop = topPadding + ((endDate - item.date) / totalDuration) * (containerHeight - 2 * topPadding);
    const top = Math.max(rawTop, lastBottom + minSpacing);
    processedCallouts.push({ ...item, top });
    lastBottom = top;
  });

  return (
    <>
        {/* Reusable Hero Section */}
        <section className="w-full h-[40vh] pt-16 flex items-center px-8 sm:px-16 lg:px-24 bg-black dark:bg-black relative shadow-[0_8px_16px_-8px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_16px_-8px_rgba(255,255,255,0.05)]">
          <div className="w-full max-w-[900px] mx-auto">
            <div className="text-left">
              <div className="flex items-center gap-3 mb-4">
                
              <h1 className="text-4xl sm:text-5xl font-bold text-white dark:text-white relative inline-block">
  <span className="relative z-10">experience</span>
  <span className="absolute left-0 bottom-[2px] w-full h-[8px] bg-[#a3e635] z-0"></span>
</h1>
              </div>
              <p className="text-lg sm:text-xl text-white dark:text-gray-300 ">
              A visual timeline of professional experience and education
               </p>
            </div>
          </div>
  
          {/* Divider line at bottom */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_4px_rgba(255,255,255,0.05)]" />
        </section>

      <section className="relative bg-[#f9fafb] dark:bg-[#0f172a] px-8 sm:px-16 lg:px-24" style={{ height: `${containerHeight}px` }}>
        <div className="relative w-full max-w-[1200px] mx-auto h-full">

          <div className="absolute left-1/2 bg-gray-300 dark:bg-gray-600 transform -translate-x-1/2"
            style={{ top: `${topPadding}px`, height: `${containerHeight - 2 * topPadding}px`, width: "4px" }}
          />

          {yearMarkers.map((year) => {
            const top = topPadding + ((endDate - year) / totalDuration) * (containerHeight - 2 * topPadding);
            return (
              <div key={year} style={{ top }} className="absolute left-1/2 transform -translate-x-1/2">
                <div className="flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-full shadow text-sm text-gray-600">
                  {year}
                </div>
              </div>
            );
          })}

          {/* LEFT: Experience Boxes */}
          {experiences.map((exp, idx) => {
            const top = topPadding + ((endDate - exp.end) / totalDuration) * (containerHeight - 2 * topPadding);
            const height = ((exp.end - exp.start) / totalDuration) * (containerHeight - 2 * topPadding) * spacingFactor;
            return (
              <div key={idx} className="absolute w-1/2 pr-8 flex justify-end" style={{ top, height }}>
                <div className="rounded-lg p-4 max-w-sm shadow-md w-full flex items-start gap-4"
                  style={{ backgroundColor: exp.color, color: exp.text || "#fff", height: "100%" }}
                >
                  {logoMap[exp.company] && (
                    typeof logoMap[exp.company] === 'string' && !logoMap[exp.company].includes('/') ? (
                      <span className="text-2xl w-10 h-10 flex items-center justify-center">{logoMap[exp.company]}</span>
                    ) : (
                      <img src={logoMap[exp.company]} alt={`${exp.company} logo`} className="w-10 h-10 object-contain" />
                    )
                  )}
                  <div>
                    <h3 className="font-semibold text-lg leading-tight">{exp.title}</h3>
                    <p className="text-sm italic leading-tight">{exp.company}</p>
                    <p className="text-sm leading-tight">{formatDate(exp.start)} – {formatDate(exp.end)}</p>
                    {groupLabels[exp.company] && (
                      <p className="text-xs mt-1 leading-tight">{groupLabels[exp.company]}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

{/* RIGHT: Expandable Callouts */}
{processedCallouts.map((item, idx) => {
  const isExpanded = expandedIndex === idx;

  return (
    <div
      key={idx}
      className="absolute left-1/2 pl-8 w-1/2 flex justify-start items-start cursor-pointer transition-all"
      style={{ top: item.top, zIndex: isExpanded ? 10 : 1 }}
      onClick={() => setExpandedIndex(isExpanded ? null : idx)}
    >
      <div
        className="group relative rounded-lg shadow-md max-w-sm w-full transition-all duration-300 overflow-hidden border"
        style={{
          backgroundColor: "#ffffff",
          color: "#0f172a",
          borderColor: "#e5e7eb",
          maxHeight: isExpanded ? "500px" : "64px",
        }}
      >
        <div className="flex items-start gap-3 p-4">
          <div className="text-xl">{item.icon}</div>
          <div>
            <h4 className="font-semibold text-base leading-tight text-black dark:text-white relative inline-block">
              <span className="relative z-10">{item.title}</span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#a3e635] transition-all duration-300 group-hover:w-full"></span>
            </h4>
            {isExpanded && (
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{item.summary}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
})}




        </div>
      </section>
    </>
  );
}
