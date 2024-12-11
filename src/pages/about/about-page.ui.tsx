import { Typography, Container, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const AboutPage = () => {
  const links = [
    {
      title: 'История университета',
      description: 'Узнайте больше о богатой истории нашего университета.',
      url: '/history', // Внутренний маршрут
      image: 'https://via.placeholder.com/64',
      isExternal: false,
    },
    {
      title: 'Видение университета',
      description: 'Наша миссия и цели в современном образовании.',
      url: '/vision', // Внутренний маршрут
      image: 'https://via.placeholder.com/64',
      isExternal: false,
    },
    {
      title: 'Департамент качества образования',
      description: 'Контроль и улучшение качества образовательных процессов.',
      url: '/departament-obespecheniya-i-kontrolya-kachestva-obrazovaniya/', // Внутренний маршрут
      image: 'https://via.placeholder.com/64',
      isExternal: false,
    },
    {
      title: 'Рейтинг преподавательского состава',
      description: 'Посмотрите рейтинг лучших преподавателей университета.',
      url: 'https://rating.makalabox.com/', // Внешний маршрут
      image: 'https://via.placeholder.com/64',
      isExternal: true,
    },
  ];

  return (
    <Container maxWidth="lg" className="py-10 px-4">
      <Typography
        variant="h4"
        className="font-bold text-center mb-8 text-gray-800"
        style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}
      >
        Об университете
      </Typography>

      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        className="notion-like-embed"
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
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
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
              }}
            />
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: '500',
                  color: 'text.primary',
                  marginBottom: '4px',
                }}
              >
                {link.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  marginBottom: '8px',
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
    </Container>
  );
};
