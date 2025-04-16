import { Accordion, Button, IconButton } from '@mui/material';
import IntuitLogo from '../../assets/intuit-logo.png';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CallIcon from '@mui/icons-material/Call';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { degreeQueries } from '~entities/degree';
import { t } from 'i18next';

// const degreeSections = [
//   'Институты',
//   'Бакалавриат',
//   'Магистратура',
//   'Аспирантура',
//   'Колледж',
//   'Креатив',
//   'Курсы',
// ];
const fieldsOfStudy = [
  t('footer.fields.medical'),
  t('footer.fields.psychology'),
  t('footer.fields.law'),
  t('footer.fields.programming'),
  t('footer.fields.gamingEsports'),
  t('footer.fields.design'),
  t('footer.fields.clinicalPsychology'),
  t('footer.fields.pedagogy'),
  t('footer.fields.management'),
  t('footer.fields.economics'),
  t('footer.fields.it'),
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
interface ContactInfo {
  address: string;
  admissionOfficePhone: string;
  facebook: string;
  hoursSaturday: string;
  hoursSunday: string;
  hoursWeekdays: string;
  id: number;
  instagram: string;
  receptionPhone: string;
  telegram: string;
  whatsapp: string;
  youtube: string;
}

const studentResources = ['Расписание', 'AVN', 'Moodle', 'Оплата обучения'];

export function Footer() {
  const [data, setData] = useState<ContactInfo>();

  const {
    data: degreeData,
    isLoading,
    isError,
  } = degreeQueries.useGetDegrees();


  useEffect(() => {
    axios
      .get('https://intuit.makalabox.com/api/university/university-info/1/')
      .then((res) => setData(res.data));
  }, []);

  if (!data) {
    return <div>Ошибка при получении данных</div>;
  }

  return (
    <footer className="bg-[#0d1140] text-white py-5 ">
      <div className=" max-w-[95%] mx-auto hidden lg:block">
        <div className="flex items-center gap-1 mb-5">
          <img src={IntuitLogo} alt="Intuit" className="h-[58px]" />
          <p className="text-xs font-semibold leading-3">
            МЕЖДУНАРОДНЫЙ <br /> УНИВЕРСИТЕТ <br /> ИННОВАЦИОННЫХ <br />
            ТЕХНОЛОГИЙ
          </p>
        </div>
        {/* <Accordion
          className="bg-blue/40 text-white rounded-md my-1"
          defaultExpanded
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-white" />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Институты
          </AccordionSummary>
          <AccordionDetails>
            {fieldsOfStudy.map((title, index) => (
              <li className="my-1" key={index}>
                {title}
              </li>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion className="bg-blue/40 text-white rounded-md my-1">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-white" />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Абитуриентам
          </AccordionSummary>
          <AccordionDetails>
            {degreeSections.map((univer, index) => (
              <li key={index}>{univer}</li>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion className="bg-blue/40 text-white rounded-md my-1">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-white" />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Студентам
          </AccordionSummary>
          <AccordionDetails>
            {degreeSections.map((univer, index) => (
              <li key={index}>{univer}</li>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion className="bg-blue/40 text-white rounded-md my-1">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-white" />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Об Университете
          </AccordionSummary>
          <AccordionDetails>
            {universityInfo.map((title, index) => (
              <li className="my-1" key={index}>
                {title}
              </li>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion className="bg-blue/40 text-white rounded-md my-1">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-white" />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Приемная коммисия
          </AccordionSummary>
          <AccordionDetails>
            <p>г. Бишкек ул. Анкара 1/17</p>
            <Button
              variant="outlined"
              className="text-white my-2 w-full"
              startIcon={<CallIcon />}
            >
              +996 (312) 46-79-14
            </Button>
            <Button
              variant="outlined"
              className="text-white my-2 w-full"
              startIcon={<CallIcon />}
            >
              +996 (312) 46-79-14
            </Button>
          </AccordionDetails>
        </Accordion> */}
        <Button
          variant="outlined"
          className="w-full my-3 duration-300  font-bold text-white bg-green hover:border-green"
        >
          Обратная связь
        </Button>
        <div className="flex justify-between">
          <Link
            className=" border border-white rounded px-3"
            to={data.facebook}
          >
            <IconButton className="text-white">
              <FacebookRoundedIcon />
            </IconButton>
          </Link>
          <Link
            className=" border border-white rounded px-3"
            to={data.whatsapp}
          >
            <IconButton className="text-white">
              <WhatsAppIcon />
            </IconButton>
          </Link>
          <Link
            className=" border border-white rounded px-3"
            to={data.instagram}
          >
            <IconButton className="text-white">
              <InstagramIcon />
            </IconButton>
          </Link>

          <Link
            className=" border border-white rounded px-3"
            to={data.telegram}
          >
            <IconButton className="text-white">
              <TelegramIcon />
            </IconButton>
          </Link>
        </div>
        <p className="my-3 text-center">&copy; 2024 Intuit</p>
      </div>
      <div className=" max-w-[80%] mx-auto lg:hidden">
        <div className="flex items-center gap-1 mb-5">
          <img src={IntuitLogo} alt="Intuit" className="h-[58px]" />
          <p className="text-xs font-semibold leading-3">
            МЕЖДУНАРОДНЫЙ <br /> УНИВЕРСИТЕТ <br /> ИННОВАЦИОННЫХ <br />
            ТЕХНОЛОГИЙ
          </p>
        </div>
        <ul className="flex justify-between pb-3 border-b border-gray">
          {degreeData?.data.map((univer, index) => (
            <li className="text-white" key={index}>
             <Link to={`/degree/${univer.slug}`}>{univer.title}</Link> 
            </li>
          ))}
        </ul>
        {/* <div className="flex justify-between">
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
        </div> */}
        {/* <h4 className="border-b border-gray font-bold mt-7 pb-3">
          Приемная коммисия
        </h4> */}
        <div className="flex justify-between mt-6">
          <ul>
            <h5 className="font-bold mt-5">Адрес</h5>
            <li>{data.address}</li>
          </ul>
          <ul>
            <h5 className="font-bold mt-5">График работы</h5>
            <li>Пн-пт {data.hoursWeekdays}</li>
            <li>Сб Выходной</li>
            <li>Вс Выходной</li>
          </ul>
          <div>
            <h5 className="font-bold mt-5">По Всем вопросам</h5>
            <Button
              className="text-white"
              startIcon={<LocalPhoneRoundedIcon />}
            >
              {data.admissionOfficePhone}
            </Button>
            <h5 className="font-bold mt-5">Приемная коммисия</h5>
            <Button
              className="text-white"
              startIcon={<LocalPhoneRoundedIcon />}
            >
              {data.receptionPhone}
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
                <Link to={data.facebook}>
                  <IconButton className="text-white">
                    <FacebookRoundedIcon />
                  </IconButton>
                </Link>
                <Link to={data.whatsapp}>
                  <IconButton className="text-white">
                    <WhatsAppIcon />
                  </IconButton>
                </Link>
                <Link to={data.instagram}>
                  <IconButton className="text-white">
                    <InstagramIcon />
                  </IconButton>
                </Link>

                <Link to={data.telegram}>
                  <IconButton className="text-white">
                    <TelegramIcon />
                  </IconButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
