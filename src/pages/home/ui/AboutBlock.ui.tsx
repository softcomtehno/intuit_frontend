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
          className="max-w-[550px] object-cover  rounded-xl h-[350px] md:h-auto"
          src="https://cachizer2.2gis.com/reviews-photos/30b96412-86d8-4ac0-8211-8fe942dace70.jpg?w=640"
          alt=""
        />
      </div>
    </div>
  )
}
