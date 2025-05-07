export default function CaseStudies() {

  return (
    <>
      {/* Reusable Hero Section */}
      <section className="w-full h-[40vh] pt-16 flex items-center px-8 sm:px-16 lg:px-24 bg-black dark:bg-black relative shadow-[0_8px_16px_-8px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_16px_-8px_rgba(255,255,255,0.05)]">
        <div className="w-full max-w-[900px] mx-auto">
          <div className="text-left">
            <div className="flex items-center gap-3 mb-4">
              
            <h1 className="text-4xl sm:text-5xl font-bold text-white dark:text-white relative inline-block">
<span className="relative z-10">case studies</span>
<span className="absolute left-0 bottom-[2px] w-full h-[8px] bg-[#a3e635] z-0"></span>
</h1>
            </div>
            <p className="text-lg sm:text-xl text-white dark:text-gray-300 ">
            Coming soon
             </p>
          </div>
        </div>

        {/* Divider line at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_4px_rgba(255,255,255,0.05)]" />
      </section>

    </>
  );
}
