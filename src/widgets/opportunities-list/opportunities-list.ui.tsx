import { Card, Typography } from '@mui/material'
import BoltRoundedIcon from '@mui/icons-material/BoltRounded'

export const OpportunitiesList = () => {
  return (
    <div className="my-10">
      <Typography variant="h3" component="div" className="font-semibold">
        С нами ваши возможности <br /> безграничны
      </Typography>
      <div className="flex gap-5 justify-between mt-4 flex-wrap lg:gap-10 lg:justify-center">
        <Card className="max-w-[280px] p-5 shadow-none bg-[#f5f5f5] transition-all duration-200  rounded-lg">
          <Typography
            variant="h6"
            component="div"
            className="leading-5 font-bold"
          >
            Доступность учебных материалов
          </Typography>
          <ul className="mt-4 flex flex-col gap-2">
            <li>
              <BoltRoundedIcon className="text-green" />
              Все материалы доступны в системе MOODLE.
            </li>
            <li>
              <BoltRoundedIcon className="text-green" />
              Повторяйте материал и конспектируйте в любое время.
            </li>
            <li>
              <BoltRoundedIcon className="text-green" />
              Догоняйте сокурсников и будьте в курсе.
            </li>
          </ul>
        </Card>
        <Card className="max-w-[280px] p-5 shadow-none bg-[#f5f5f5] rounded-lg transition-all duration-200  ">
          <Typography
            variant="h6"
            component="div"
            className="leading-5 font-bold"
          >
            Перевод из другого вуза
          </Typography>
          <ul className=" mt-4 flex flex-col gap-2">
            <li>
              <BoltRoundedIcon className="text-green" />
              Обратитесь в приемную комиссию
            </li>
            <li>
              <BoltRoundedIcon className="text-green" />
              Предоставьте пакет документов
            </li>
            <li>
              <BoltRoundedIcon className="text-green" />
              Наши сотрудники готовы ответить на все ваши вопросы и оказать
              содействие в переводе
            </li>
          </ul>
        </Card>
        <Card className="max-w-[280px] p-5 shadow-none bg-[#f5f5f5] rounded-lg transition-all duration-200  ">
          <Typography
            variant="h6"
            component="div"
            className="leading-5 font-bold"
          >
            Оплата обучения онлайн
          </Typography>
          <ul className=" mt-4 flex flex-col gap-2">
            <li>
              <BoltRoundedIcon className="text-green" />
              Онлайн проверка оплаты
            </li>
            <li>
              <BoltRoundedIcon className="text-green" />
              Оплата по мобильным приложениям
            </li>
            <li>
              <BoltRoundedIcon className="text-green" />
              Удобная, в т.ч. помесячная оплата по личному шифру
            </li>
          </ul>
        </Card>
        <Card className="max-w-[280px] p-5 shadow-none bg-[#f5f5f5] rounded-lg transition-all duration-200  ">
          <Typography
            variant="h6"
            component="div"
            className="leading-5 font-bold"
          >
            Трудоустройство и карьера
          </Typography>
          <ul className=" mt-4 flex flex-col gap-2">
            <li>
              <BoltRoundedIcon className="text-green" />
              Поможем составить резюме
            </li>
            <li>
              <BoltRoundedIcon className="text-green" />
              Подготовят к собеседованию
            </li>
            <li>
              <BoltRoundedIcon className="text-green" />
              Напишем рекомендательное письмо
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}
