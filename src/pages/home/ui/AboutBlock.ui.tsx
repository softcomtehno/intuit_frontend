import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const AboutBlock = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Typography variant="h3" component="div" className="font-semibold">
        {t('homepage.aboutUniversity.title')}
      </Typography>
      <div className="flex justify-between md:flex-col-reverse">
        <div className="max-w-[800px]">
          <Typography variant="h4">
            <b className="text-blue">{t('homepage.aboutUniversity.goal')}</b>
          </Typography>
          <Typography variant="subtitle1">
            {t('homepage.aboutUniversity.description')}
          </Typography>
        </div>
        <img
          className="h-[350px] md:h-auto"
          src="https://intuit.kg/static/img/header/welcome.png"
          alt=""
        />
      </div>
    </div>
  )
}
