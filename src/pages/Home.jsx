export default function Home() {
    return (
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 py-16 max-w-6xl mx-auto px-4">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-neutral-800 dark:text-white mb-4">
            Turning cleantech ideas into digital products
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-xl">
            I’m Dominik—a product strategist and builder. I help launch and scale energy and sustainability-focused digital products that work.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/Dominik_Maliszewski_CV.pdf"
              className="bg-black text-white px-6 py-3 rounded-md hover:opacity-90 transition"
            >
              Download CV
            </a>
            <a
              href="/projects"
              className="text-black dark:text-white border border-black dark:border-white px-6 py-3 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            >
              View Projects
            </a>
          </div>
        </div>
  
        {/* Right Image */}
        <div className="flex-1">
          <img
            src="https://via.placeholder.com/500x300?text=Your+Image+Here"
            alt="Placeholder"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>
    )
  }
  