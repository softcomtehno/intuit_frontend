import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Stats } from './Stats.ui'

export const AboutBlock = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Typography
        variant="h3"
        component="h3"
        className="text-[2.5rem] font-semibold text-[#333] lg:text-[40px] md:!text-[30px]"
      >
        {t('homepage.aboutUniversity.title')}
      </Typography>
      <div className="flex justify-between md:flex-col-reverse gap-5 md:mt-5">
        <div className="max-w-[47%] md:max-w-max bg-[#ecedf0] p-5 rounded-xl">
          <Typography variant="h4">
            <b className="text-blue">{t('homepage.aboutUniversity.goal')}</b>
          </Typography>
          <Typography variant="subtitle1">
            {t('homepage.aboutUniversity.description')}
          </Typography>
        </div>
        <div className="p-3 bg-[#ecedf0] w-[50%] md:w-full rounded-lg flex justify-center">
          <iframe
            className="w-[95%] h-full rounded md:w-full"
            src="https://www.youtube.com/embed/diIcqVN1Dag?si=0HPGrFl0BrTQEhn0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <Stats />
    </div>
  )
}
