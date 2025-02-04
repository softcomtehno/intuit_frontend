import { Typography, Container, Box } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import RatingImg from './rating.jpg'
import VisionImg from './vision.webp'
import HistoryImg from './history.jpg'
import EducationImg from './education.jpg'
import { documentQueries, documentTypes } from '~entities/document'

export const AboutPage = () => {
  const { data: documentData } = documentQueries.useGetDocuments()
  console.log(documentData)

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
      description:
        'Centre for Space Science and Technology Education in Asia and the Pacific',
      url: '/cssteapun',
      image: RatingImg,
      isExternal: false,
    },
    {
      title: 'Ректорат',
      description: 'Узнайте больше о нашем Ректорате',
      url: '/head',
      image:
        'https://i.pinimg.com/736x/32/97/2d/32972d6da61a2463e1de505863e67840.jpg',
      isExternal: false,
    },
    {
      title: 'Учебное управление',
      description: 'Ознакомьтесь  с нашим учебным управлением',
      url: '/educatiion-management',
      image:
        'https://i.pinimg.com/736x/32/97/2d/32972d6da61a2463e1de505863e67840.jpg',
      isExternal: false,
    },
    {
      title: 'PHD',
      description: 'Ознакомьтесь  с нашим положением PHD',
      url: '/phd',
      image:
        'https://i.pinimg.com/736x/32/97/2d/32972d6da61a2463e1de505863e67840.jpg',
      isExternal: false,
    },
  ]

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
                objectFit: 'cover',
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
        {documentData?.data.map(
          (document: documentTypes.DocumentSchema, i: number) => (
            <Box
              key={i}
              className="flex items-center rounded-[8px] p-[16px] border border-[#e0e0e0] transition-transform duration-200 hover:translate-y-[-4px]"
            >
              <Box
                component="img"
                src={document.photo}
                alt={document.title}
                className="w-[64px] h-[64px] rounded-[8px] mr-[16px] object-cover"
              />
              <Box>
                <Typography variant="h6" className="font-medium text-primary">
                  {document.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                  }}
                >
                  {document.subtitle}
                </Typography>

                <RouterLink
                  to={`/document/${document.slug}`}
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#1976d2',
                    textDecoration: 'none',
                  }}
                >
                  Перейти
                </RouterLink>
              </Box>
            </Box>
          )
        )}
      </Box>
    </Container>
  )
}
