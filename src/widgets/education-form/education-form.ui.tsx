import { useTranslation } from 'react-i18next'
import { EducationFormCard } from './ui/education-form-card.ui'

export const EducationForm = () => {
  const { t } = useTranslation()
  return (
    <section className="my-10">
      <h2 className="text-5xl font-bold mb-10">Формы обучения</h2>

      <div className="flex gap-5">
        <EducationFormCard
          title={t('homepage.education-form.title')}
          text={t('homepage.education-form.text')}
        ></EducationFormCard>
        <EducationFormCard
          title={t('homepage.education-form.secondTitle')}
          text={t('homepage.education-form.secondText')}

        ></EducationFormCard>
      </div>
    </section>
  )
}
