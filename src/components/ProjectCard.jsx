
import { ExternalLink, Code2 } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

function ProjectCard({
  title,
  description,
  technologies,
  github,
  demo,
  image,
}) {
  return (
    <article className="group overflow-hidden rounded-lg border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">

      {/* Project image */}
      <div className="h-44 overflow-hidden bg-violet-50 dark:bg-slate-800">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Code2 size={48} className="text-violet-300 dark:text-violet-400" />
          </div>
        )}
      </div>

      {/* Project information */}
      <div className="p-5">
        <h3 className="mb-3 text-lg font-semibold text-violet-700 dark:text-violet-400">
          {title}
        </h3>

        <p className="mb-5 min-h-20 text-sm leading-6 text-gray-500 dark:text-gray-400">
          {description}
        </p>

        {/* Technologies */}
        <div className="mb-5 flex flex-wrap gap-2">
          {technologies.map((technology, index) => (
            <span
              key={index}
              className="rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700 dark:bg-violet-950 dark:text-violet-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 border-t border-gray-100 pt-4 dark:border-slate-700">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-medium text-gray-600 transition hover:text-violet-700 dark:text-gray-400 dark:hover:text-violet-400"
            >
              <FaGithub size={15} />
              GitHub
            </a>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-medium text-gray-600 transition hover:text-violet-700 dark:text-gray-400 dark:hover:text-violet-400"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
