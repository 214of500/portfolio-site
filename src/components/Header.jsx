import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="border-b border-neutral-200 dark:border-neutral-700 bg-white dark:bg-black">
      <nav className="flex justify-between items-center max-w-6xl mx-auto px-4 py-4">
        <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100">
          Dominik Maliszewski
        </h1>
        <div className="space-x-4 text-sm font-medium">
          <Link to="/" className="text-neutral-600 dark:text-neutral-300 hover:underline">Home</Link>
          <Link to="/projects" className="text-neutral-600 dark:text-neutral-300 hover:underline">Projects</Link>
          <Link to="/competencies" className="text-neutral-600 dark:text-neutral-300 hover:underline">Competencies</Link>
          <Link to="/insights" className="text-neutral-600 dark:text-neutral-300 hover:underline">Insights</Link>
          <Link to="/consulting" className="text-neutral-600 dark:text-neutral-300 hover:underline">Consulting</Link>
          <Link to="/contact" className="text-neutral-600 dark:text-neutral-300 hover:underline">Contact</Link>
        </div>
      </nav>
    </header>
  )
}
