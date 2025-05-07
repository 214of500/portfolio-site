import { Link } from 'react-router-dom'

export default function ProjectCard({ title, tagline, icon, link }) {
  const CardContent = (
    <div className="group relative bg-[#f4f4f4] dark:bg-[#333333] hover:bg-black transition-colors duration-300 text-[#1f2937] dark:text-white hover:text-white rounded-xl shadow-md overflow-hidden hover:shadow-lg">
      <div className="w-full h-48 bg-[#e5e5e5] dark:bg-[#1e293b] flex items-center justify-center rounded-t-xl">
        <span className="text-6xl text-black dark:text-white group-hover:text-[#a3e635]">
          {icon}
        </span>
      </div>

      <div className="p-6 flex flex-col justify-start items-start h-[120px] relative overflow-hidden">
        <h3 className="text-lg font-semibold text-inherit dark:text-white link-underline-thick card-underline group-hover:text-[#a3e635]">
          {title}
        </h3>
        <div className="text-sm text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          {tagline}
        </div>
      </div>
    </div>
  )

  return link ? (
    <Link to={link} className="block hover:no-underline">
      {CardContent}
    </Link>
  ) : (
    <div>{CardContent}</div>
  )
}
