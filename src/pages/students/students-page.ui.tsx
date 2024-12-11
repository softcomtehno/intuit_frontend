import {
  Typography,
  Container,
  Box,
  Link,
} from '@mui/material';

export const StudentsPage = () => {
  const links = [
    { 
      title: 'Единое окно', 
      description: 'Централизованный доступ ко всем сервисам.',
      url: 'https://example.com/dashboard', 
      image: 'https://via.placeholder.com/64'
    },
    { 
      title: 'Расписание', 
      description: 'Посмотрите актуальное расписание занятий.',
      url: 'https://example.com/schedule', 
      image: 'https://via.placeholder.com/64'
    },
    { 
      title: 'НИБ', 
      description: 'Научно-исследовательская база.',
      url: 'https://example.com/nib', 
      image: 'https://via.placeholder.com/64'
    },
    { 
      title: 'Moodle', 
      description: 'Система управления обучением.',
      url: 'https://example.com/moodle', 
      image: 'https://via.placeholder.com/64'
    },
    { 
      title: 'Makalabox', 
      description: 'это университетский веб-сайт, организованный в формате системы тематических блогов, называемых боксами, и включающий элементы новостного портала.',
      url: 'https://makalabox.com', 
      image: 'https://via.placeholder.com/64'
    },
  ];

  return (
    <Container maxWidth="lg" className="py-10 px-4">
      <Typography
        variant="h4"
        className="font-bold text-center mb-8 text-gray-800"
        style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}
      >
        Студентам
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
              <Link
                href={link.url}
                target="_blank"
                rel="noopener"
                underline="none"
                sx={{
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: 'primary.main',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Перейти
              </Link>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};
