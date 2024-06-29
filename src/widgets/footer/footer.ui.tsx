import { Button, IconButton } from '@mui/material';
import IntuitLogo from '../../assets/intuit-logo.png';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TelegramIcon from '@mui/icons-material/Telegram';

const degreeSections = [
  'Колледж',
  'Бакалавриат',
  'Магистратура',
  'Второе высшее',
  'Специалитет',
  'Аспирантура',
  'Креатив',
  'Курсы',
  'Факультеты',
];
const fieldsOfStudy = [
  'Медицина',
  'Психология',
  'Юриспруденция',
  'Программирование',
  'Игровая индустрия и киберспорт',
  'Дизайн',
  'Клиническая психология',
  'Педагогика',
  'Менеджмент',
  'Экономика',
  'Информационные технологии',
];

const categories = [
  'Специальности',
  'Институты',
  'Колледжи',
  'Приемная комиссия',
  'Отзывы студентов',
  'Выпускники',
  'Оплата обучения',
];

const universityInfo = [
  'Жизнь Университета',
  'Почетные доктора',
  'Почетные профессора',
  'Совет по качеству',
  'История',
  'Партнеры - работодатели',
  'Контакты',
  'Рейтинг',
  'Рейтинг ППС',
  'Единное окно',
  'PHD',
];

const studentResources = ['Расписание', 'AVN', 'Moodle', 'Оплата обучения'];

export function Footer() {
  return (
    <footer className="bg-[#0d1140] text-white py-10">
      <div className=" max-w-[80%] mx-auto">
        <div className="flex items-center gap-1 mb-5">
          <img src={IntuitLogo} alt="Intuit" className="h-[58px]" />
          <p className="text-xs font-semibold leading-3">
            МЕЖДУНАРОДНЫЙ <br /> УНИВЕРСИТЕТ <br /> ИННОВАЦИОННЫХ <br />
            ТЕХНОЛОГИЙ
          </p>
        </div>
        <ul className="flex justify-between pb-3 border-b border-gray">
          {degreeSections.map((univer, index) => (
            <li className="text-white" key={index}>
              {univer}
            </li>
          ))}
        </ul>
        <div className="flex justify-between">
          <ul>
            <h4 className="font-bold mt-6">Факультеты</h4>
            {fieldsOfStudy.map((title, index) => (
              <li className="my-1" key={index}>
                {title}
              </li>
            ))}
          </ul>
          <ul>
            <h4 className="font-bold mt-6">Абитуриентам</h4>
            {categories.map((title, index) => (
              <li className="my-1" key={index}>
                {title}
              </li>
            ))}
          </ul>
          <ul>
            <h4 className="font-bold mt-6">Об Университете</h4>
            {universityInfo.map((title, index) => (
              <li className="my-1" key={index}>
                {title}
              </li>
            ))}
          </ul>
          <ul>
            <h4 className="font-bold mt-6">Студентам</h4>
            {studentResources.map((title, index) => (
              <li className="my-1" key={index}>
                {title}
              </li>
            ))}
          </ul>
        </div>
        <h4 className="border-b border-gray font-bold mt-7 pb-3">
          Приемная коммисия
        </h4>
        <div className="flex justify-between mt-6">
          <ul>
            <h5 className="font-bold mt-5">Адрес</h5>
            <li>г. Бишкек ул. Анкара 1/17</li>
          </ul>
          <ul>
            <h5 className="font-bold mt-5">График работы</h5>
            <li>Пн-пт09:00 — 20:00</li>
            <li>Сб10:00 — 19:00</li>
            <li>Вс10:00 — 17:00</li>
          </ul>
          <div>
            <h5 className="font-bold mt-5">По Всем вопросам</h5>
            <Button
              className="text-white"
              startIcon={<LocalPhoneRoundedIcon />}
            >
              +996 (312) 88-26-84
            </Button>
            <h5 className="font-bold mt-5">Приемная коммисия</h5>
            <Button
              className="text-white"
              startIcon={<LocalPhoneRoundedIcon />}
            >
              +996 (312) 46-79-14
            </Button>
          </div>
          <div>
            <Button
              variant="outlined"
              className="w-full mb-3 duration-300  font-bold text-white border-white hover:bg-green hover:border-green"
            >
              Обратная связь
            </Button>
            <div className="flex items-center">
              <p>Мы в соцсетях</p>
              <div>
                <IconButton  className='text-white'>
                  <FacebookRoundedIcon />
                </IconButton>
                <IconButton className='text-white'>
                  <WhatsAppIcon />
                </IconButton>
                <IconButton className='text-white'>
                  <InstagramIcon />
                </IconButton>
                <IconButton className='text-white'>
                  <TelegramIcon />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
