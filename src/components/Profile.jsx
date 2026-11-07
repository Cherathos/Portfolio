import { useLanguage } from '../context/LanguageContext'

function Profile() {
  const { translations } = useLanguage()
  const profile = translations.profile

  return (
    <section id="profile" className="border-b border-gray-200 py-12">
      <h2 className="mb-10 text-2xl font-bold text-gray-800">
        {profile.title}
      </h2>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <h3 className="mb-5 text-lg font-semibold text-violet-700">
            {profile.personalInformation}
          </h3>

          <div className="space-y-4">
            {profile.details.map((detail) => (
              <div key={detail.id} className="flex items-center gap-2">
                <p className="text-sm font-semibold text-gray-800">
                  {detail.label}
                </p>
                <p className="text-sm text-gray-500">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-lg font-semibold text-violet-700">
            {profile.aboutMe}
          </h3>

          <p className="text-sm leading-7 text-gray-500">
            {profile.description}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Profile