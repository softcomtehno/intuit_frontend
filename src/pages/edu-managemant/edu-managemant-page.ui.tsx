import {
  Typography,
  Container,
  Box,
  List,
  ListItem,
  ListItemText,
  Link,
} from '@mui/material';

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
          Контакты:
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Сапарбаева Анара Макеновна"
              secondary="Начальник учебного управления"
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="Телефон" secondary="+996772124457" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary="anar_75@list.ru" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Адрес" secondary="г.Бишкек, ул.Анкара 1/17, МУИТ каб. 346б" />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="Уметалиева Бермет Раимкуловна"
              secondary="Заместитель начальника учебного управления"
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="Телефон" secondary="+996559888789" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary="bermet.raimkulovna@mail.ru" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Адрес" secondary="МУИТ каб. 346а" />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="Миталипов Темирлан Нурмаматович"
              secondary="Директор центра карьеры и трудоустройства"
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="Телефон" secondary="+996778111300" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary="tmitalipov@mail.ru" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Адрес" secondary="МУИТ каб. 309" />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="Кыйсаева Барчын Жыргалбековна"
              secondary="Старший инспектор по работе со студентами"
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="Телефон" secondary="+996707980788" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary="gule-huwgel@mail.ru" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Адрес" secondary="МУИТ каб. 346а" />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="Единное окно УК МУИТ"
              secondary={
                <Link href="http://178.217.169.139:3000/lms/login" target="_blank" rel="noopener">
                  http://178.217.169.139:3000/lms/login
                </Link>
              }
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="Эркинбек кызы Гулиза"
              secondary="Менеджер дистанционного обучения УК МУИТ"
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="Телефон" secondary="+996709988758" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary="guzi_95kg@mail.ru" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Адрес" secondary="МУИТ каб. 346а" />
          </ListItem>
        </List>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" className="font-semibold mb-2">
          Задачи учебного управления:
        </Typography>
        <Typography>
          <ul>
            <li>Координация работы структур, обеспечивающих организацию и проведение учебного процесса;</li>
            <li>Организация учебного процесса на основе Государственных образовательных стандартов (ГОС) высшего профессионального образования и рабочих учебных планов;</li>
            <li>Контроль за выполнением рабочих учебных планов, правомерность вносимых в них изменений решением ученого совета университета;</li>
            <li>Расчет штатов профессорско-преподавательского и учебно-вспомогательного составов на основе определенных критериев и норм;</li>
          </ul>
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" className="font-semibold mb-2">
          Функции учебного управления:
        </Typography>
        <Typography>
          <ul>
            <li>Учебное управление - рабочий орган ректората, взаимодействующий с институтами, центрами, библиотеками и другими подразделениями университета;</li>
            <li>Работа с документами и регламентами учебного процесса;</li>
          </ul>
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" className="font-semibold mb-2">
          Основополагающие учебно-нормативные документы:
        </Typography>
        <Typography>
          <ul>
            <li>График учебного процесса;</li>
            <li>Положения учебного управления;</li>
            <li>Регламент учебного процесса МУИТ;</li>
            <li>Инструкции по проведению ГАК;</li>
          </ul>
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h6" className="font-semibold mb-2">
          Отделы:
        </Typography>
        <Typography>
          <ul>
            <li>Отдел по работе со студентами: организация учета, оформление документов, архивирование данных;</li>
            <li>Отдел по расписанию: составление и сопровождение расписания учебных занятий;</li>
            <li>Отдел дистанционного обучения: координация работы системы Moodle;</li>
            <li>Центр карьеры и трудоустройства: помощь выпускникам в трудоустройстве;</li>
          </ul>
        </Typography>
      </Box>
    </Container>
  );
};
