import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImage from '../assets/profile.jpeg';
import { useLanguage } from '../context/LanguageContext';

function Hero() {
  const { translations } = useLanguage()
  return (
    <section
      id="home"
      className="grid grid-cols-1 items-center gap-10 py-12 md:grid-cols-2 md:gap-12"
    >

      {/* Sol taraf */}
      <div className="flex flex-col items-start">

        {/* İsim */}
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-7 bg-violet-500"></span>

          <span className="text-xs text-violet-600">
            Ahmet Emir
          </span>
        </div>

        {/* Başlık */}
        <h1 className="mb-5 text-4xl font-bold leading-[1.05] tracking-tight text-gray-800 md:text-5xl">
          {translations.hero.title}
        </h1>

        {/* Açıklama */}
        <p className="mb-6 max-w-md text-sm leading-6 text-gray-500">
          {translations.hero.description}
        </p>

        {/* Butonlar */}
        <div className="flex flex-wrap items-center gap-2">

          <a
            href="mailto:a.emirkayali@hotmail.com?subject=Job%20Opportunity"
            className="rounded-sm bg-violet-700 px-5 py-2.5 text-xs font-medium text-white transition hover:bg-violet-800"
          >
            {translations.hero.hireMe}
          </a>

          <a
            href="https://github.com/Cherathos"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 rounded-sm border border-violet-300 px-3 py-2.5 text-xs text-violet-700 transition hover:bg-violet-50"
          >
            <FaGithub size={14} />
            Github
          </a>

          <a
            href="https://www.linkedin.com/in/ahmet-emir-kayal%C4%B1-36216128b/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 rounded-sm border border-violet-300 px-3 py-2.5 text-xs text-violet-700 transition hover:bg-violet-50"
          >
            <FaLinkedin size={14} />
            Linkedin
          </a>

        </div>
      </div>

      {/* Sağ taraf */}
      <div className="flex justify-center md:justify-end">

        <img
          src={profileImage}
          alt="Ahmet Emir Kayalı"
          className="h-64 w-64 rounded-full object-cover object-center shadow-xl ring-1 ring-gray-200 transition hover:scale-105 hover:shadow-2xl"
        />

      </div>

    </section>
  )
}

export default Hero