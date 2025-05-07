export default function Hero({ title, subtitle, buttons }) {
  return (
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
          {title || <>Hi <span role="img" aria-label="wave">👋</span>, I’m <span className="text-[#a3e635] link-underline-thick">Dominik</span>.</>}
        </h1>
        
        <p className="text-lg sm:text-xl dark:text-[#f8fafc] max-w-xl text-center lg:text-left mx-auto lg:mx-0">
        I design and deliver integrated platforms and processes that improve <strong>efficiency</strong>, <strong>data integrity</strong> and <strong>scalability</strong> to unlock real business value.
        </p>
        <p className="text-lg sm:text-xl dark:text-[#f8fafc] mt-4 max-w-xl text-center lg:text-left mx-auto lg:mx-0">
        Looking for end-user focused solutions that teams adopt and trust?
        </p>



        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          {buttons || (
            <>
              <a
                href="/contact"
                className="bg-black text-white w-full sm:w-1/2 px-6 py-3 rounded-md flex items-center justify-center hover:opacity-90 transition font-bold"
              >
                Let’s talk 💬
              </a>
              <a
                href="/casestudies"
                className="border-2 border-black text-black dark:text-white w-full sm:w-1/2 px-6 py-3 rounded-md flex items-center justify-center hover:bg-[#a3e635] hover:text-black transition font-bold"
              >
                See my work 💼
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
