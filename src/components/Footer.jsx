
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Mail, ArrowUp } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import profileData from '../data/profileData'

function Footer() {
  const { translations } = useLanguage()
  const footer = translations.footer

  return (
    <footer className="mt-24 border-t border-gray-200 py-10">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="mb-2 text-2xl font-semibold text-gray-900">
            {footer.title}
          </h2>

          <p className="text-sm text-gray-600">
            {footer.description}
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={`mailto:${profileData.email}`}
            aria-label="Email"
            className="text-gray-700 transition hover:text-violet-700"
          >
            <Mail size={22} />
          </a>

          <a
            href={profileData.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-gray-700 transition hover:text-violet-700"
          >
            <FaGithub size={22} />
          </a>

          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-gray-700 transition hover:text-violet-700"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">

        <a
          href="#top"
          className="flex items-center gap-2 transition hover:text-violet-700"
        >
          {footer.backToTop}
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
