import {
  Typography,
  Container,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const docs = [
  {
    title: 'Инспектордук кызматтык нускамасы',
    url: 'https://muit.makalabox.com/documents/edu/a.pdf',
  },
  {
    title: 'Менеджеринин кызматтык нускамасы',
    url: 'https://muit.makalabox.com/documents/edu/b.pdf',
  },
  {
    title: 'Норма времени',
    url: 'https://muit.makalabox.com/documents/edu/c.pdf',
  },
  {
    title: 'Окуу башкармалыгынын башчысынын кызматтык нускамасы',
    url: 'https://muit.makalabox.com/documents/edu/d.pdf',
  },
  {
    title: 'Окуу борборунун менеджеринин кызматтык нускамасы',
    url: 'https://muit.makalabox.com/documents/edu/e.pdf',
  },
  {
    title: 'План работы',
    url: 'https://muit.makalabox.com/documents/edu/f.pdf',
  },
]

export const EduManagementPage = () => {
  return (
    <Container maxWidth="lg" className="py-10 px-4">
      <Typography
        variant="h4"
        className="font-bold text-center mb-8 text-gray-800"
        style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}
      >
        Учебное управление
      </Typography>

      <Box mb={4}>
        <Typography variant="h6" className="font-semibold mb-2">
          Задачи учебного управления:
        </Typography>
        <Typography>
          <ul>
            <li>
              Координация работы структур, обеспечивающих организацию и
              проведение учебного процесса;
            </li>
            <li>
              Организация учебного процесса на основе Государственных
              образовательных стандартов (ГОС) высшего профессионального
              образования и рабочих учебных планов;
            </li>
            <li>
              Контроль за выполнением рабочих учебных планов, правомерность
              вносимых в них изменений решением ученого совета университета;
            </li>
            <li>
              Расчет штатов профессорско-преподавательского и
              учебно-вспомогательного составов на основе определенных критериев
              и норм;
            </li>
          </ul>
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" className="font-semibold mb-2">
          Функции учебного управления:
        </Typography>
        <Typography>
          <ul>
            <li>
              Учебное управление - рабочий орган ректората, взаимодействующий с
              институтами, центрами, библиотеками и другими подразделениями
              университета;
            </li>
            <li>Работа с документами и регламентами учебного процесса;</li>
          </ul>
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" className="font-semibold mb-2">
          Отделы:
        </Typography>
        <Typography>
          <ul>
            <li>
              Отдел по работе со студентами: организация учета, оформление
              документов, архивирование данных;
            </li>
            <li>
              Отдел по расписанию: составление и сопровождение расписания
              учебных занятий;
            </li>
            <li>
              Отдел дистанционного обучения: координация работы системы Moodle;
            </li>
            <li>
              Центр карьеры и трудоустройства: помощь выпускникам в
              трудоустройстве;
            </li>
          </ul>
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" className="font-semibold mb-2">
          Основополагающие учебно-нормативные документы:
        </Typography>
        <Accordion className="mb-4 border border-gray shadow-none rounded">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className="text-gray-800 font-semibold">
              Документы
            </Typography>
          </AccordionSummary>
          {docs.map((doc, index) => (
            <AccordionDetails key={index}>
              <li key={index} className="mb-2">
                <a
                  data-fancybox="gallery"
                  href={doc.url}
                  className="text-blue hover:text-blue-700"
                >
                  {doc.title || `Открыть документ ${index + 1}`}
                </a>
              </li>
            </AccordionDetails>
          ))}
        </Accordion>
      </Box>
    </Container>
  )
}
