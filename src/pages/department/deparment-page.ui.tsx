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
    title: 'Документы',
    urls: [
      'https://intuit.kg/media/faculty/images/documents/%D0%94%D0%B8%D0%BF%D0%BB%D0%BE%D0%BC%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0%D0%B2%D1%80%D0%B0.png',
      'https://intuit.kg/media/faculty/images/documents/%D0%94%D0%B8%D0%BF%D0%BB%D0%BE%D0%BC%D0%9C%D0%B0%D0%B3%D0%B8%D1%81%D1%82%D1%80%D0%B0.png',
    ],
  },
  {
    title: 'Положение',
    urls: [
      'https://intuit.kg/media/faculty/images/documents/%D0%94%D0%B8%D0%BF%D0%BB%D0%BE%D0%BC%D0%A1%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D%D%D0%9E.png',
      'https://example.com/another-document.pdf',
    ],
  },
  {
    title: 'Документ 3',
    urls: [
      'https://intuit.kg/media/faculty/images/documents/%D0%94%D0%B8%D0%BF%D0%BB%D0%BE%D0%BC%D0%A1%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D1%81%D1%82%D0%B0.png',
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
          className="text-gray-700 mb-10"
          style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)' }}
        >
          Основной целью Департамента качества образования является координация
          образовательного процесса и организация деятельности структурных
          подразделений, отделов и служб университета по управлению и
          обеспечению качества образования, с целью удовлетворения потребителей
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
          className="text-gray-700"
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
                  className="text-gray-700"
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
        Сведения, обязательные для публикации
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
                {doc.urls.map((url, urlIndex) => (
                  <li key={urlIndex} className="mb-2">
                    <a
                      data-fancybox="gallery"
                      href={url}
                      className="text-blue  hover:text-blue-700"
                    >
                      Открыть документ {urlIndex + 1}
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
