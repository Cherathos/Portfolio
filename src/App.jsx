
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Skills from './components/Skills'

import { LanguageProvider } from './context/LanguageContext'
import { ThemeProvider, useTheme } from './context/ThemeContext'

function AppContent() {
  const { darkMode } = useTheme()

  return (
    <div className={`${darkMode ? 'dark' : ''} min-h-screen bg-white text-gray-900 dark:bg-slate-950 dark:text-gray-100`}>
      <div className="mx-auto max-w-5xl px-6">
        <Header />

        <main>
          <Hero />
          <Skills />
          <Profile />
          <Projects />
          <Footer />
        </main>
      </div>
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
