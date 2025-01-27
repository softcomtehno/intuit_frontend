import {
  Typography,
  Container,
  Box,
  Link,
  Tabs,
  Tab,
  Button,
} from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

export const StudentsPage = () => {
  const links = [
    {
      title: 'Единое окно',
      description: 'Централизованный доступ ко всем сервисам.',
      url: '/window',
      image: 'https://via.placeholder.com/64',
      isExternal: false,
    },
    {
      title: 'НИБ',
      description: 'Научно-исследовательская база.',
      url: 'https://lib-intuit.online/',
      image: 'https://via.placeholder.com/64',
      isExternal: true,
    },
    {
      title: 'Moodle',
      description: 'Система управления обучением.',
      url: 'https://moodle.intuit.kg/',
      image: 'https://via.placeholder.com/64',
      isExternal: true,
    },
    {
      title: 'Makalabox',
      description:
        'это университетский веб-сайт, организованный в формате системы тематических блогов, называемых боксами, и включающий элементы новостного портала.',
      url: 'https://makalabox.com',
      image: 'https://via.placeholder.com/64',
      isExternal: true,
    },
  ];

  const [activeTab, setActiveTab] = useState('bachelor');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const tabs = [
    {
      label: 'Бакалавриат',
      value: 'bachelor',
      courses: [
        { name: '1 курс', url: '/bachelor/1' },
        { name: '2 курс', url: '/bachelor/2' },
        { name: '3 курс', url: '/bachelor/3' },
        { name: '4 курс', url: '/bachelor/4' },
      ],
    },
    {
      label: 'Магистратура',
      value: 'master',
      courses: [
        { name: '1 курс', url: '/master/1' },
        { name: '2 курс', url: '/master/2' },
      ],
    },
    {
      label: 'Аспирантура',
      value: 'postgraduate',
      courses: [
        { name: '1 курс', url: '/postgraduate/1' },
        { name: '2 курс', url: '/postgraduate/2' },
      ],
    },
    {
      label: 'PHD',
      value: 'phd',
      courses: [{ name: '1 курс', url: '/phd/1' }],
    },
  ];

  return (
    <Container maxWidth="lg" className="py-10 px-4">
      <Typography
        variant="h4"
        className="font-bold text-center mb-8 text-gray-800"
        style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}
      >
        Расписание
      </Typography>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        className="text-green"
        TabIndicatorProps={{
          style: { backgroundColor: 'green' }, // Нижняя линия
        }}
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.value}
            className="text-black"
            label={tab.label}
            value={tab.value}
          />
        ))}
      </Tabs>
      <Box className="flex" gap={2} mt={4}>
        {tabs
          .find((tab) => tab.value === activeTab)
          ?.courses.map((course, index) => (
            <Button
              key={index}
              variant="contained"
              className="bg-green shadow-none px-10"
              component={RouterLink}
              to={course.url}
              sx={{ textTransform: 'none' }}
            >
              {course.name}
            </Button>
          )) || <Typography>Нет доступных курсов</Typography>}
      </Box>
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
