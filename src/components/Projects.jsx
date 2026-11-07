
import ProjectCard from './ProjectCard'
import { useLanguage } from '../context/LanguageContext'

const projectLinks = {
  1: {
    github: 'https://github.com/Cherathos/fsweb-s8-challenge-pizza',
    demo: '',
    image: null,
  },
  2: {
    github: 'https://github.com/Cherathos/.Net_Web_API',
    demo: '',
    image: null,
  },
  3: {
    github: 'https://github.com/Cherathos/Foundry-Product-Tracking-Backend',
    demo: '',
    image: null,
  },
}

function Projects() {
  const { translations } = useLanguage()
  const projects = translations.projects

  return (
    <section
      id="projects"
      className="border-b border-gray-200 py-12"
    >
      <h2 className="mb-3 text-2xl font-bold text-gray-800">
        {projects.title}
      </h2>

      <p className="mb-10 max-w-xl text-sm leading-6 text-gray-500">
        {projects.description}
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.items.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
            {...projectLinks[project.id]}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
