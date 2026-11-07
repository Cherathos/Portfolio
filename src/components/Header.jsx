import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import profileData from '../data/profileData'


function Header({ darkMode, setDarkMode }) {
  const {
    language,
    translations,
    changeLanguage,
    loading,
    error,
  } = useLanguage()

  const { darkMode: isDarkMode, toggleTheme } = useTheme()

  return (
    <header
      id="top"
      className="flex items-start justify-between pt-7"
    >
      {/* Logo */}
      <a
        href="#top"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-violet-600"
      >
        <ArrowUpRight size={17} />
      </a>

      <div className="flex flex-col items-end gap-5">

        {/* Tema ve dil */}
        <div className="flex items-center gap-2 text-[9px] font-medium tracking-wide">

          <button
            onClick={toggleTheme}
            className="flex items-center gap-1"
          >
            <span
              className={`relative inline-flex h-3 w-6 items-center rounded-full transition-colors ${
                isDarkMode ? 'bg-violet-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`absolute left-0 h-3 w-3 rounded-full bg-yellow-300 transition-transform duration-300 ${
                  isDarkMode ? 'translate-x-3' : 'translate-x-0'
                }`}
              />
            </span>

            {isDarkMode
              ? translations.theme.lightMode
              : translations.theme.darkMode}
          </button>

          <span className="text-gray-400">|</span>

          <button
            onClick={() => changeLanguage(language === 'en' ? 'tr' : 'en')}
            disabled={loading}
            className="text-violet-600 disabled:opacity-50"
          >
            {loading
              ? 'LOADING...'
              : language === 'en'
                ? "TÜRKÇE'YE GEÇ"
                : 'SWITCH TO ENGLISH'}
          </button>

        </div>

        {/* Navigasyon */}
        <nav className="flex items-center gap-7 text-xs text-gray-600 dark:text-gray-300">

          <a
            href="#skills"
            className="transition-colors hover:text-violet-600"
          >
            {translations.navigation.skills}
          </a>

          <a
            href="#projects"
            className="transition-colors hover:text-violet-600"
          >
            {translations.navigation.projects}
          </a>

          <a
            href={`mailto:${profileData.email}`}
            className="rounded border border-violet-400 px-4 py-2 text-violet-600 transition-colors hover:bg-violet-600 hover:text-white"
          >
            {translations.navigation.hireMe}
          </a>

        </nav>

        {error && (
          <p className="text-xs text-red-500">{error}</p>
        )}

      </div>
    </header>
  )
}

export default Header
