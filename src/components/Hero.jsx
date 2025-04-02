export default function Hero() {
    return (
      <section className="w-full h-[80vh] min-h-[500px] flex overflow-hidden">
        {/* Recruiters */}
        <div className="group flex-1 bg-lime-500 relative flex items-center justify-center transition-all duration-300 hover:flex-[1.2] hover:brightness-110 hover:z-10">
          <h2 className="text-white text-2xl sm:text-3xl font-bold z-10 transition-all group-hover:scale-105">
            For Recruiters
          </h2>
          <div className="absolute inset-0 bg-lime-500 opacity-40 group-hover:opacity-20 transition-opacity duration-300" />
        </div>
  
        {/* Consulting */}
        <div className="group flex-1 bg-cyan-500 relative flex items-center justify-center transition-all duration-300 hover:flex-[1.2] hover:brightness-110 hover:z-10">
          <h2 className="text-white text-2xl sm:text-3xl font-bold z-10 transition-all group-hover:scale-105">
            For Consulting
          </h2>
          <div className="absolute inset-0 bg-cyan-500 opacity-40 group-hover:opacity-20 transition-opacity duration-300" />
        </div>
      </section>
    )
  }
  