import Header from '../components/Header'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'

export default function LanguageLearning() {
  const relatedProjects = [
    {
      title: "Digitising User Acquisition",
      tagline: "Boosting conversion by 10x by creating a user-focused digital-first acquisition journey.",
      icon: <i className="fas fa-project-diagram text-6xl text-black dark:text-white"></i>
    },
    {
      title: "0-1 Integrated Lending Platform",
      tagline: "Delivering an integrated digital lending journey from discovery to MVP.",
      icon: <i className="fas fa-credit-card text-6xl text-black dark:text-white"></i>
    }
  ]

  return (
    <>
      <Header />

      {/* Custom Hero for this project */}
      <section className="w-full min-h-[80vh] flex flex-col lg:flex-row items-stretch relative z-10 bg-white dark:bg-black shadow-[0_8px_16px_-8px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_16px_-8px_rgba(255,255,255,0.05)]">

        {/* Left: Video or GIF demo */}
        <div className="flex-1 h-full flex items-center justify-center bg-black">
          <video
            src="/demo-language-learning.mp4" // or use a .gif
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 py-12 bg-white text-[#1f2937] dark:bg-[#0f172a] dark:text-[#f8fafc]">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center lg:text-left">
            AI-Driven Language Learning
          </h1>
          <p className="text-lg sm:text-xl text-[#6b7280] dark:text-[#94a3b8] max-w-xl text-center lg:text-left mx-auto lg:mx-0">
            Transforming how users build confidence in speaking new languages with real-time AI conversations.
          </p>
          <div className="mt-6 flex justify-center lg:justify-start">
            <a
              href="mailto:your.email@example.com"
              className="bg-black text-white px-6 py-3 rounded-md font-bold hover:opacity-90 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      <section className="bg-[#f9fafb] dark:bg-[#0f172a] py-16 px-8 sm:px-16 lg:px-24">
        <div className="max-w-[1200px] mx-auto">

          {/* Header */}
          <div className="flex flex-col items-center mb-12">
            <div className="w-12 h-[2px] bg-black dark:bg-white mb-4" />
            <h2 className="text-xl font-semibold tracking-wide text-center text-[#1f2937] dark:text-white">
              Related Projects
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProjects.map((proj, idx) => (
              <ProjectCard
                key={idx}
                title={proj.title}
                tagline={proj.tagline}
                icon={proj.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
