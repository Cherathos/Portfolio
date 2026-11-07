import { Code2, Monitor, Database } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

function Skills() {
  const { translations } = useLanguage()

  const icons = [Code2, Monitor, Database]

  return (
    <section id="skills" className="border-b border-gray-200 py-12">

      <h2 className="mb-10 text-2xl font-bold text-gray-800">
        {translations.skills.title}
      </h2>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

        {translations.skills.items.map((skill, index) => {
          const Icon = icons[index] || Code2

          return (
            <div key={skill.id} className="flex flex-col items-start">

              <div className="mb-4 text-violet-600">
                <Icon size={28} />
              </div>

              <h3 className="mb-3 text-base font-semibold text-violet-700">
                {skill.title}
              </h3>

              <p className="text-sm leading-6 text-gray-500">
                {skill.description}
              </p>

            </div>
          )
        })}

      </div>
    </section>
  )
}

export default Skills