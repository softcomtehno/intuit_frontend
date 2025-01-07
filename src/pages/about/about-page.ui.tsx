import {
  Typography,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import RatingImg from "./rating.jpg";
import VisionImg from "./vision.webp";
import HistoryImg from "./history.jpg";
import EducationImg from "./education.jpg";


export const AboutPage = () => {
  const links = [
    {
      title: 'История университета',
      description: 'Узнайте больше о богатой истории нашего университета.',
      url: '/history', 
      image: HistoryImg,
      isExternal: false,
    },
    {
      title: 'Видение университета',
      description: 'Наша миссия и цели в современном образовании.',
      url: '/vision', 
      image: VisionImg,
      isExternal: false,
    },
    {
      title: 'Департамент качества образования',
      description: 'Контроль и улучшение качества образовательных процессов.',
      url: '/departament-obespecheniya-i-kontrolya-kachestva-obrazovaniya/', 
      image: EducationImg,
      isExternal: false,
    },
    {
      title: 'Рейтинг преподавательского состава',
      description: 'Посмотрите рейтинг лучших преподавателей университета.',
      url: 'https://rating.makalabox.com/',
      image: RatingImg,
      isExternal: true,
    },
    {
      title: 'CSSTEAP',
      description: 'Centre for Space Science and Technology Education in Asia and the Pacific',
      url: '/cssteapun',
      image: RatingImg,
      isExternal: false,
    },
    {
      title: 'Ректорат',
      description: 'Узнайте больше о нашем Ректорате',
      url: '/head',
      image: "https://i.pinimg.com/736x/32/97/2d/32972d6da61a2463e1de505863e67840.jpg",
      isExternal: false,
    },
  ];

  
  const structureItems = [
    { title: 'Ученый Совет' },
    { title: 'Совет по менеджменту качества образования' },
    { title: 'Совет по государственному языку' },
    { title: 'Учебно-методический совет' },
    { title: 'Совет молодых ученых' },
    { title: 'Департамент по обеспечению и контролю качества образования' },
    { title: 'Учебное управление' },
    { title: 'Институт цифровой трансформации и программирования' },
    { title: 'Институт дизайна, архитектуры и текстиля' },
    { title: 'Институт строительства и инновационных технологий' },
    { title: 'Институт энергетики и транспорта' },
    { title: 'Институт экономики и менеджмента' },
    {
      title: 'Российско-кыргызский институт автоматизации управления и бизнеса',
    },
    { title: 'Институт межкультурной коммуникации и психологии' },
    { title: 'Институт дистанционного образования' },
    { title: 'Кафедра «Философии и общественных наук»' },
    { title: 'Кафедра «Рекреация, физкультура и спорт»' },
    { title: 'Высшая школа экономики и менеджмента' },
    { title: 'Школа креативной индустрии' },
    { title: 'Центр повышения квалификации и дополнительного образования' },
    { title: 'Центр поддержки технологий и инноваций' },
    { title: 'Молодежный центр' },
    { title: 'Центр компетенции по электронным закупкам' },
    { title: 'Центр трудоустройства и карьеры' },
    { title: 'Студенческий центр программирования' },
    { title: 'Учебно-научно-производственные лаборатории' },
    { title: 'Научно-информационная библиотека' },
    { title: 'Медицинский пункт' },
    { title: 'Спортивно-оздоровительный комплекс' },
  ];

  return (
    <Container maxWidth="lg" className="py-10 px-4">
      <Typography
        variant="h4"
        className="font-bold text-center mb-8 text-gray-800"
        style={{ fontSize: 'clamp(1.5rem, 5vw, 2.4rem)' }}
      >
        Об университете
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        className="notion-like-embed embed code notion-like-embed  mb-20"
      >
        {links.map((link, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              padding: '16px',

              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
              },
            }}
          >
            <Box
              component="img"
              src={link.image}
              alt={link.title}
              sx={{
                width: 64,
                height: 64,
                borderRadius: '8px',
                marginRight: '16px',
                objectFit:"cover"
              }}
            />
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: '500',
                  color: 'text.primary',
                }}
              >
                {link.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',

                }}
              >
                {link.description}
              </Typography>
              {link.isExternal ? (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#1976d2',
                    textDecoration: 'none',
                  }}
                >
                  Перейти
                </a>
              ) : (
                <RouterLink
                  to={link.url}
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#1976d2',
                    textDecoration: 'none',
                  }}
                >
                  Перейти
                </RouterLink>
              )}
            </Box>
          </Box>
        ))}
      </Box>
      {/* <section className="mb-10">
        <Typography variant="h5" className="font-bold text-black text-xxl mb-5">
          Структура МУИТ
        </Typography>
        <Grid container spacing={3}>
          {structureItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card className="h-full flex flex-col">
                <CardContent className="flex-grow">
                  <Typography className="font-base text-gray-700 mb-4">
                    {item.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    className='shadow-none'
                    href={`#/${item.title.replace(/\s+/g, '-').toLowerCase()}`}
                  >
                    Узнать подробнее
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </section> */}
    </Container>
  );
};
