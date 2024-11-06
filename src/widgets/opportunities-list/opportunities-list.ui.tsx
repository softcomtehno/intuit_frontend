import { Card, Typography } from '@mui/material'
import BoltRoundedIcon from '@mui/icons-material/BoltRounded'
import { useTranslation } from 'react-i18next' // импортируем хук

export const OpportunitiesList = () => {
  const { t } = useTranslation() // инициализируем перевод

  return (
    <div className="my-10">
      <Typography variant="h3" component="div" className="font-semibold">
        {t('homepage.opportunities.title')} {/* С нами ваши возможности <br /> безграничны */}
      </Typography>
      <div className="flex gap-5 justify-between mt-4 flex-wrap lg:gap-10 lg:justify-center">
        <Card className="max-w-[280px] p-5 shadow-none bg-[#f5f5f5] transition-all duration-200 rounded-lg">
          <Typography
            variant="h6"
            component="div"
            className="leading-5 font-bold"
          >
            {t('homepage.opportunities.materials.title')} {/* Доступность учебных материалов */}
          </Typography>
          <ul className="mt-4 flex flex-col gap-2">
            <li>
              <BoltRoundedIcon className="text-green" />
              {t('homepage.opportunities.materials.moodle')} {/* Все материалы доступны в системе MOODLE. */}
            </li>
            <li>
              <BoltRoundedIcon className="text-green" />
              {t('homepage.opportunities.materials.review')} {/* Повторяйте материал и конспектируйте в любое время. */}
            </li>
            <li>
              <BoltRoundedIcon className="text-green" />
              {t('homepage.opportunities.materials.keepUp')} {/* Догоняйте сокурсников и будьте в курсе. */}
            </li>
          </ul>
        </Card>
        <Card className="max-w-[280px] p-5 shadow-none bg-[#f5f5f5] rounded-lg transition-all duration-200">
          <Typography
            variant="h6"
            component="div"
            className="leading-5 font-bold"
          >
            {t('homepage.opportunities.transfer.title')} {/* Перевод из другого вуза */}
          </Typography>
          <ul className="mt-4 flex flex-col gap-2">
            <li>
              <BoltRoundedIcon className="text-green" />
              {t('homepage.opportunities.transfer.contact')} {/* Обратитесь в приемную комиссию */}
            </li>
            <li>
              <BoltRoundedIcon className="text-green" />
              {t('homepage.opportunities.transfer.documents')} {/* Предоставьте пакет документов */}
            </li>
            <li>
              <BoltRoundedIcon className="text-green" />
              {t('homepage.opportunities.transfer.assistance')} {/* Наши сотрудники готовы ответить на все ваши вопросы и оказать содействие в переводе */}
            </li>
          </ul>
        </Card>
        <Card className="max-w-[280px] p-5 shadow-none bg-[#f5f5f5] rounded-lg transition-all duration-200">
          <Typography
            variant="h6"
            component="div"
            className="leading-5 font-bold"
          >
            {t('homepage.opportunities.payment.title')} {/* Оплата обучения онлайн */}
          </Typography>
          <ul className="mt-4 flex flex-col gap-2">
            <li>
              <BoltRoundedIcon className="text-green" />
              {t('homepage.opportunities.payment.onlineCheck')} {/* Онлайн проверка оплаты */}
            </li>
            <li>
              <BoltRoundedIcon className="text-green" />
              {t('homepage.opportunities.payment.mobileApps')} {/* Оплата по мобильным приложениям */}
            </li>
            <li>
              <BoltRoundedIcon className="text-green" />
              {t('homepage.opportunities.payment.monthly')} {/* Удобная, в т.ч. помесячная оплата по личному шифру */}
            </li>
          </ul>
        </Card>
        <Card className="max-w-[280px] p-5 shadow-none bg-[#f5f5f5] rounded-lg transition-all duration-200">
          <Typography
            variant="h6"
            component="div"
            className="leading-5 font-bold"
          >
            {t('homepage.opportunities.career.title')} {/* Трудоустройство и карьера */}
          </Typography>
          <ul className="mt-4 flex flex-col gap-2">
            <li>
              <BoltRoundedIcon className="text-green" />
              {t('homepage.opportunities.career.resumeHelp')} {/* Поможем составить резюме */}
            </li>
            <li>
              <BoltRoundedIcon className="text-green" />
              {t('homepage.opportunities.career.interviewPrep')} {/* Подготовят к собеседованию */}
            </li>
            <li>
              <BoltRoundedIcon className="text-green" />
              {t('homepage.opportunities.career.referenceLetter')} {/* Напишем рекомендательное письмо */}
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}
