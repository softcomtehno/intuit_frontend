import { Typography, Container, Box, Tabs, Tab, Button } from '@mui/material'
import { t } from 'i18next';
import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

export const StudentsPage = () => {
 
  const links = [
    {
      title: t("studentsPage.windowTitle"),
      description: t("studentsPage.windowDescription"),
      url: "/window",
      image: "https://via.placeholder.com/64",
      isExternal: false,
    },
    {
      title: t("studentsPage.nibTitle"),
      description: t("studentsPage.nibDescription"),
      url: "https://lib-intuit.online/",
      image: "https://via.placeholder.com/64",
      isExternal: true,
    },
    {
      title: t("studentsPage.moodleTitle"),
      description: t("studentsPage.moodleDescription"),
      url: "https://moodle.intuit.kg/",
      image: "https://via.placeholder.com/64",
      isExternal: true,
    },
    {
      title: t("studentsPage.makalaboxTitle"),
      description: t("studentsPage.makalaboxDescription"),
      url: "https://makalabox.com",
      image: "https://via.placeholder.com/64",
      isExternal: true,
    },
  ];

  const [activeTab, setActiveTab] = useState('bachelor')

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue)
  }

  const tabs = [
    {
      label: t("studentsPage.tabs.bachelor"),
      value: "bachelor",
      courses: [
        { name: t("studentsPage.tabs.course1"), url: "/bachelor/1" },
        { name: t("studentsPage.tabs.course2"), url: "/bachelor/2" },
        { name: t("studentsPage.tabs.course3"), url: "/bachelor/3" },
        { name: t("studentsPage.tabs.course4"), url: "/bachelor/4" },
      ],
    },
    {
      label: t("studentsPage.tabs.master"),
      value: "master",
      courses: [
        { name: t("studentsPage.tabs.course1"), url: "/master/1" },
        { name: t("studentsPage.tabs.course2"), url: "/master/2" },
      ],
    },
    {
      label: t("studentsPage.tabs.postgraduate"),
      value: "postgraduate",
      courses: [
        { name: t("studentsPage.tabs.course1"), url: "/postgraduate/1" },
        { name: t("studentsPage.tabs.course2"), url: "/postgraduate/2" },
      ],
    },
    {
      label: t("studentsPage.tabs.phd"),
      value: "phd",
      courses: [{ name: t("studentsPage.tabs.course1"), url: "/phd/1" }],
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
