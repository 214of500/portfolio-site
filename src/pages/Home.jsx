import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Hero /> {/* Full width now */}

      {/* Content inside layout container */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold">Welcome</h2>
        <p>More content here...</p>
      </section>
    </>
  )
}
