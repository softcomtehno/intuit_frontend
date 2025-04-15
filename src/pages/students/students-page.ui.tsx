import { Typography, Container, Box, Tabs, Tab, Button } from '@mui/material'
import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

export const StudentsPage = () => {
  const links = [
    {
      title: 'Единое окно',
      description: 'Централизованный доступ ко всем сервисам.',
      url: '/window',
      image:
        'data:image/png;base64,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',
      isExternal: false,
    },
    {
      title: 'НИБ',
      description: 'Научно-исследовательская база.',
      url: 'https://lib-intuit.online/',
      image:
        'data:image/jpeg;base64,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',
      isExternal: true,
    },
    {
      title: 'Moodle',
      description: 'Система управления обучением.',
      url: 'https://moodle.intuit.kg/',
      image:
        'data:image/png;base64,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',
      isExternal: true,
    },
    {
      title: 'Makalabox',
      description:
        'это университетский веб-сайт, организованный в формате системы тематических блогов, называемых боксами, и включающий элементы новостного портала.',
      url: 'https://makalabox.com',
      image:
        'https://api.makalabox.com/media/article/photos/2024/05/19/maka.png',
      isExternal: true,
    },
  ]

  const [activeTab, setActiveTab] = useState('bachelor')

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue)
  }

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
  ]

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
        variant="scrollable"
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.value}
            className="text-black "
            label={tab.label}
            value={tab.value}
          />
        ))}
      </Tabs>
      <Box className="flex md:flex-col m-10" gap={2} mt={4}>
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
            className="md:flex md:flex-col"
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
            <Box className="md:flex md:flex-col md:items-center">
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
  )
}
