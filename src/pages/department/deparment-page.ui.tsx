import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import Fancybox from '~widgets/diplom-list/Fancybox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const documents = [
  {
    title: 'Положения ДОККО',
    urls: [
      {
        url: 'https://muit.makalabox.com/documents/%D0%9F%D0%9E%D0%9B%D0%9E%D0%96%D0%95%D0%9D%D0%98%D0%95_%D0%BE_%D1%80%D0%B5%D0%B9%D1%82%D0%B8%D0%BD%D0%B3%D0%B5_%D0%9F%D0%9F%D0%A1_%D0%9C%D0%A3%D0%98%D0%A2_%D1%81_%D0%B8%D0%B7%D0%BC_2.pdf',
        name: 'Положения о рейтинге профессорско-преподавательского состава МУИТ',
      },
      {
        url: 'https://muit.makalabox.com/documents/%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%A1%D0%B0%D0%BC%D0%BE%D0%BE%D1%86%D0%9C%D0%A3%D0%98%D0%A2%20(2).pdf',
        name: 'Положения о самооценке в процессе аккредитации образовательной организации',
      },
      {
        url: 'https://muit.makalabox.com/documents/%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BE%20%D1%80%D0%B5%D0%B9%D1%82%D0%B8%D0%BD%D0%B3%D0%B5%20(1)%20(2).pdf',
        name: 'Положения о проведении открытого электронного мониторинга профессорско-преподавательского состава и структурных подразделений МУИТ',
      },
      {
        url: 'https://muit.makalabox.com/documents/%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%D0%90%D1%83%D0%B4%D0%B8%D1%82%D0%9C%D0%A3%D0%98%D0%A2%20(2).pdf',
        name: 'Положения о системе внутреннего аудита в МУИТ',
      },
      {
        url: 'https://muit.makalabox.com/documents/%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%D0%94%D0%9E%D0%9A%D0%9A%D0%9E%20(2).pdf',
        name: 'Положения департамента обеспечения и контроля качества образования МУИТ',
      },
      {
        url: 'https://intuit.kg/media/faculty/images/documents/%D0%94%D0%B8%D0%BF%D0%BB%D0%BE%D0%BC%D0%9C%D0%B0%D0%B3%D0%B8%D1%81%D1%82%D1%80%D0%B0.png',
        name: 'Положения о проведении открытого электронного мониторинга профессорско-преподавательского состава и структурных подразделений МУИТ',
      },
    ],
  },
  {
    title: 'Планы ДОККО',
    urls: [
      {
        url: 'https://muit.makalabox.com/documents/%D0%A4%D1%83%D0%BD%D0%BA%D1%86.%D0%9E%D0%B1%D1%8F%D0%B7%D0%B0%D0%BD.%D0%9D%D0%B0%D1%87%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%20(2).pdf',
        name: 'Должная инструкция',
      },
      {
        url: 'https://muit.makalabox.com/documents/%D0%94%D0%9F_%D0%A3%D0%9F1_03_%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B8%D1%80_%D0%B5_%D1%83%D1%87%D0%B5%D0%B1%D0%BD%D0%BE_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC_%D0%B4%D0%BE%D0%BA%D1%83%D0%BC_3_2.pdf',
        name: 'Документированная процедура',
      },
      {
        url: 'https://muit.makalabox.com/documents/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0%20%D0%A1%D0%9C%D0%9A%20%D0%9C%D0%A3%D0%98%D0%A2%20(2).pdf',
        name: 'Политика Международного Университета Инновационных Технологий в области обеспечения качества образования',
      },
      {
        url: 'https://muit.makalabox.com/documents/%D0%A0%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE_%D0%BF%D0%BE_%D0%BA%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D1%83_%D0%9C%D0%A3%D0%98%D0%A2_2023_1_2.pdf',
        name: 'Руководство по качеству МУИТ',
      },
      {
        url: 'https://muit.makalabox.com/documents/%D0%A1%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%BD%D1%8B%D0%B5%D0%92%D0%B7%D0%B0%D0%B8%D0%BC%D0%BE%D0%B4%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B8%D1%8F_%D0%94%D0%9E%D0%9A%D0%9A%D0%9E_%D0%A3%D0%91_2.pdf',
        name: 'Структурные взаимодействия докков муит. структура, внутренние и внешние направления деятельности докко',
      },
    ],
  },
  {
    title: 'Отчеты ДОККО',
    urls: [],
  },
  {
    title: 'Положение МУИТ',
    urls: [
      {
        url: 'https://muit.makalabox.com/documents/%D0%A1%D0%B1%D0%BE%D1%80%D0%BD%D0%B8%D0%BA%20%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B9%20%D0%9C%D0%A3%D0%98%D0%A2_%D0%9A%D0%BD%D0%B8%D0%B3%D0%B0%201.pdf',
        name: 'Сборник положений, регламентирующих деятельность Международного Университета Инновационных Технологий. Книга 1',
      },
      {
        url: 'https://muit.makalabox.com/documents/%D0%A1%D0%B1%D0%BE%D1%80%D0%BD%D0%B8%D0%BA%20%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B9%20%D0%9C%D0%A3%D0%98%D0%A2_%D0%9A%D0%BD%D0%B8%D0%B3%D0%B0%202.pdf',
        name: 'Сборник положений, регламентирующих деятельность Международного Университета Инновационных Технологий. Книга 2',
      },
      {
        url: 'https://muit.makalabox.com/documents/%D0%A1%D0%B1%D0%BE%D1%80%D0%BD%D0%B8%D0%BA%20%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B9%20%D0%9C%D0%A3%D0%98%D0%A2_%D0%9A%D0%BD%D0%B8%D0%B3%D0%B0%203.pdf',
        name: 'Сборник положений, регламентирующих деятельность Международного Университета Инновационных Технологий. Книга 3',
      },
      {
        url: 'https://muit.makalabox.com/documents/%D0%9A%D0%BD%D0%B8%D0%B3%D0%B0%204_%D0%A1%D0%B1%D0%BE%D1%80%D0%BD%D0%B8%D0%BA%20%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B9%20%D0%9C%D0%A3%D0%98%D0%A2.pdf',
        name: 'Сборник положений, регламентирующих деятельность Международного Университета Инновационных Технологий. Книга 4',
      },
    ],
  },
  {
    title: 'Результаты рейтинга ППС и Структурных подразделений',
    urls: [
      {
        url: 'https://muit.makalabox.com/documents/rating/rating_2017.pdf',
        name: 'Рейтинг ППС и СП - 2017',
      },
      {
        url: 'https://muit.makalabox.com/documents/rating/rating_2018.pdf',
        name: 'Рейтинг ППС и СП - 2018',
      },
      {
        url: 'https://muit.makalabox.com/documents/rating/rating_2019.pdf',
        name: 'Рейтинг ППС и СП - 2019',
      },
      {
        url: 'https://muit.makalabox.com/documents/rating/rating_2022.pdf',
        name: 'Рейтинг ППС и СП - 2022',
      },
      {
        url: 'https://muit.makalabox.com/documents/rating/rating_2023.pdf',
        name: 'Рейтинг ППС и СП - 2023',
      },
      {
        url: 'https://muit.makalabox.com/documents/rating/rating_2024.pdf',
        name: 'Рейтинг ППС и СП - 2024',
      },
    ],
  },
];

export const DeparmentPage = () => {
  return (
    <Container maxWidth="lg" className="py-10 px-4">
      <Typography
        variant="h4"
        className="font-bold text-center mb-8 text-gray-800"
        style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}
      >
        Департамент качества образования
      </Typography>
      <Typography
        variant="body1"
        className="text-gray-700 mb-10 text-justify"
        style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)' }}
      >
        Основной целью Департамента качества образования является координация
        образовательного процесса и организация деятельности структурных
        подразделений, отделов и служб университета по управлению и обеспечению
        качества образования, с целью удовлетворения потребителей
        (работодателей, студентов, родителей, общества и т.д.) и других
        заинтересованных сторон.
      </Typography>
      <Typography
        variant="h5"
        className="font-bold text-gray-800 mb-6"
        style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)' }}
      >
        Миссия Университета
      </Typography>
      <Box className="border border-gray rounded-lg p-6 mb-8 bg-white">
        <Typography
          variant="body1"
          className="text-gray-700 text-justify"
          style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)' }}
        >
          Миссия МУИТ - подготовка конкурентоспособных специалистов, отвечающих
          требованиям и ожиданиям заинтересованных сторон, владеющих
          инновационными технологиями, способных эффективно решать инженерные и
          социально-экономические проблемы современного общества.
        </Typography>
      </Box>
      <Typography
        variant="h5"
        className="font-bold text-gray-800 mb-6"
        style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)' }}
      >
        Стратегические цели
      </Typography>
      <Grid container spacing={4}>
        {[
          'Модернизация деятельности учебно-образовательного комплекса через наращивание научного потенциала ППС...',
          'Поддерживать тесное сотрудничество с работодателями на предмет модернизации учебных программ...',
          'Разрабатывать и внедрять актуальные на рынке труда инновационные образовательные программы...',
          'Улучшать материально-техническую базу образовательной и научной деятельности...',
        ].map((goal, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="border border-gray  shadow-none rounded-lg h-full bg-white">
              <CardContent>
                <Typography
                  variant="body2"
                  className="text-gray-700 text-justify"
                  style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}
                >
                  {goal}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography
        variant="h5"
        className="font-bold text-gray-800 my-6"
        style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)' }}
      >
        Документы ДОККО
      </Typography>
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        {documents.map((doc, index) => (
          <Accordion
            key={index}
            className="mb-4 border border-gray shadow-none rounded"
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className="text-gray-800 font-semibold">
                {doc.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul className="list-disc pl-5">
                {doc.urls.map((item, urlIndex) => (
                  <li key={urlIndex} className="mb-2">
                    <a
                      data-fancybox="gallery"
                      href={item.url}
                      className="text-blue hover:text-blue-700"
                    >
                      {item.name || `Открыть документ ${urlIndex + 1}`}
                    </a>
                  </li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
        ))}
      </Fancybox>
    </Container>
  );
};
