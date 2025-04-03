import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  const projects = [
    {
      title: "Digitising User Acquisition",
      tagline: "Boosting conversion by 10x by creating a user focussed digital-first acquisition journey.",
      icon: <i className="fas fa-project-diagram text-6xl text-black dark:text-white"></i> // Icon for this project
    },
    {
      title: "0-1 Integrated Lending Platform",
      tagline: "Delivering an integrated digital lending journey from discovery to MVP.",
      icon: <i className="fas fa-credit-card text-6xl text-black dark:text-white"></i> // Icon for this project
    },
    {
      title: "AI-Driven Language Learning",
      tagline: "Transforming language learning with AI conversations that build user confidence.",
      icon: <i className="fas fa-robot text-6xl text-black dark:text-white"></i> // Icon for this project
    }
  ]

  return (
    <>
      <Hero />

      {/* Projects Section */}
      <section className="bg-[#f9fafb] dark:bg-[#0f172a] py-16 px-8 sm:px-16 lg:px-24">
      <div className="max-w-[1200px] mx-auto">

          {/* Header */}
          <div className="flex flex-col items-center mb-12">
            <div className="w-12 h-[2px] bg-black dark:bg-white mb-4" />
            <h2 className="text-xl font-semibold tracking-wide text-center text-[#1f2937] dark:text-white">
              See what I’ve been working on
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <ProjectCard
                key={idx}
                title={proj.title}
                tagline={proj.tagline}
                icon={proj.icon} // Pass the icon prop to each ProjectCard
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
