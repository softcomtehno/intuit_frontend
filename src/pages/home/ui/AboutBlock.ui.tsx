import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Stats } from './Stats.ui'
import { Lightbulb } from '@mui/icons-material'

export const AboutBlock = () => {
  const { t } = useTranslation()

  return (
    <section className="py-10  bg-gradient-to-b from-white to-gray-50 rounded-2xl ">
      <Typography
        variant="h3"
        component="h3"
        className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r  mb-6"
      >
        {t('homepage.aboutUniversity.title')}
      </Typography>

      <div className="flex justify-between md:flex-col-reverse gap-8 ">
        <div className="w-1/2 md:w-full bg-white rounded-2xl shadow-none ">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="text-blue-600" />
            <Typography variant="h5" className="text-blue-600 font-bold">
              {t('homepage.aboutUniversity.goal')}
            </Typography>
          </div>
          <Typography variant="body1" className="text-gray-700 leading-relaxed">
            {t('homepage.aboutUniversity.description')}
          </Typography>
        </div>

        <div className="w-1/2 md:w-full">
          <div className="aspect-video w-full overflow-hidden rounded-2xl border-4 border-blue-200 shadow-md">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/diIcqVN1Dag?si=0HPGrFl0BrTQEhn0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <Stats />
    </section>
  )
}
