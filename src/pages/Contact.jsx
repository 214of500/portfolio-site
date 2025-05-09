export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full min-h-[80vh] flex flex-col lg:flex-row items-stretch relative z-10 bg-white dark:bg-black shadow-[0_8px_16px_-8px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_16px_-8px_rgba(255,255,255,0.05)]">
        {/* Left: Full-height image */}
        <div className="flex-1 h-full">
          <img
            src="/dominiks-photo.jpg"
            alt="Dominik Maliszewski"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 py-12 bg-white text-[#1f2937] dark:bg-[#0f172a] dark:text-[#f8fafc]">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center lg:text-left">
            Let’s connect ✉️
          </h1>
          <p className="text-lg sm:text-xl dark:text-[#f8fafc] mt-2 max-w-xl text-center lg:text-left mx-auto lg:mx-0">
          Whether you're hiring, collaborating, or looking to solve a tough platform or process problem, I’d love to hear from you.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {/* LinkedIn Button */}
            <a
              href="https://https://www.linkedin.com/in/dominik-maliszewski-49724898/.linkedin.com/in/your-link"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-[240px] px-6 py-3 bg-black text-white rounded-md flex items-center justify-center gap-2 hover:opacity-90 transition font-bold"
            >
              <i className="fab fa-linkedin text-xl"></i> Connect on LinkedIn
            </a>

            {/* Email Button */}
            <a
              href="mailto:dommaliszewski@outlook.com.com"
              className="w-full sm:w-[240px] px-6 py-3 border-2 border-black text-black dark:text-white rounded-md flex items-center justify-center gap-2 hover:bg-[#a3e635] hover:text-black transition font-bold"
            >
              <i className="fas fa-envelope text-base"></i> Email Me
            </a>
          </div>
        </div>
      </section>

      {/* Optional Additional Section */}
      <section className="bg-[#f9fafb] dark:bg-[#0f172a] py-20 px-8 sm:px-16 lg:px-24">
        <div className="max-w-[900px] mx-auto text-[#1f2937] dark:text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Let’s build something together</h2>
          <p className="text-base sm:text-lg mb-8">
            Whether you're hiring, collaborating, or looking to solve a tough platform or process problem, I’d love to hear from you.
          </p>
        </div>
      </section>
    </>
  );
}
