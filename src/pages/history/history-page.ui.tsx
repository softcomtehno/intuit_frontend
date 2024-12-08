import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@mui/material';

const bachelorPrograms = [
  {
    code: '510200',
    program: 'Прикладная математика и информатика',
    profile: 'Программирование и компьютерные технологии',
  },
  {
    code: '530300',
    program: 'Психология',
    profile:
      'Психология в инновационной деятельности, Психология образования, Психология служебной деятельности',
  },
  {
    code: '531100',
    program: 'Лингвистика',
    profile:
      'Лингвистика и новые информационные технологии, Перевод и переводоведение',
  },
  {
    code: '531200',
    program: 'Компьютерная лингвистика',
    profile:
      'Компьютерная лингвистика; Межкультурная коммуникация и автоматизированная система перевода',
  },
  {
    code: '570400',
    program: 'Дизайн',
    profile: 'Дизайн интерьера, Дизайн одежды',
  },
  {
    code: '570020',
    program: 'Дизайн',
    profile: 'Анимационный дизайн, Моушн дизайн, Гейм дизайн',
  },
  {
    code: '580100',
    program: 'Экономика',
    profile:
      'Инновационное управление финансами на предприятии, Финансы и кредит, Бухгалтерский учет, анализ и аудит, 1С Технологии автоматизации бизнес процессов, Бизнес – анализ и прогнозирование в организациях, Налоги и налогообложение, Экономическая безопасность, Банковское дело и современные финансовые технологии',
  },
  {
    code: '580200',
    program: 'Менеджмент',
    profile:
      'Менеджмент инновационной деятельности, Менеджмент в гостиничном и ресторанном бизнесе',
  },
  {
    code: '590100',
    program: 'Информационная безопасность',
    profile:
      'Безопасность автоматизированных систем; Безопасность телекоммуникационных систем',
  },
  {
    code: '640200',
    program: 'Электроэнергетика и электротехника',
    profile: 'Электроснабжение, Альтернативные источники энергии',
  },
  {
    code: '670200',
    program: 'Эксплуатация транспортно-технологических машин и комплексов',
    profile: 'Автомобильный сервис, Автомобильное хозяйство',
  },
  {
    code: '710200',
    program: 'Информационные системы и технологии',
    profile:
      'Информационные системы и технологии в управлении; Информационные системы и технологии в таможенном деле; Информационные системы и технологии в банковском деле; Информационные системы и технологии в строительстве',
  },
  {
    code: '710300',
    program: 'Прикладная информатика по областям',
    profile:
      'Программное обеспечение компьютерных систем; Прикладная информатика в архитектуре; Прикладная информатика в экономике; Прикладная информатика в компьютерном дизайне; Прикладная информатика в организации безопасности дорожного движения',
  },
  {
    code: '710400',
    program: 'Программная инженерия',
    profile: 'Разработка программно-информационных систем',
  },
  {
    code: '740700',
    program: 'Технология и конструирование изделий легкой промышленности',
    profile: 'Конструирование швейных изделий',
  },
  { code: '750200', program: 'Дизайн архитектурной среды', profile: '' },
  {
    code: '750500',
    program: 'Строительство',
    profile:
      'Промышленное и гражданское строительство, Проектирование зданий, Производство строительных материалов, изделий и конструкций, БИМ-технологии информационного моделирования зданий',
  },
  {
    code: '630004',
    program: 'Физические процессы горного или нефтегазового производства',
    profile: '',
  },
];

const postgraduateSpecialties = [
  {
    code: '01.01.09',
    specialty: 'Дискретная математика и математическая кибернетика',
  },
  { code: '01.02.04', specialty: 'Механика деформируемого твердого тела' },
  {
    code: '05.13.01',
    specialty:
      'Системный анализ, управление и обработка информации (по отраслям)',
  },
  {
    code: '05.13.18',
    specialty:
      'Математическое моделирование, численные методы и комплексы программ',
  },
  {
    code: '05.23.01',
    specialty: 'Строительные конструкции, здания и сооружения',
  },
  { code: '05.23.05', specialty: 'Строительные материалы и изделия' },
  { code: '05.23.07', specialty: 'Гидротехническое строительство' },
  { code: '05.23.17', specialty: 'Строительная механика' },
  {
    code: '05.20.02',
    specialty: 'Электротехнологии и электрооборудование в сельском хозяйстве',
  },
  {
    code: '08.00.05',
    specialty:
      'Экономика и управление народным хозяйством (по отраслям и сферам деятельности)',
  },
  { code: '08.00.10', specialty: 'Финансы, денежное обращение и кредит' },
  { code: '08.00.12', specialty: 'Бухгалтерский учет, статистика' },
];

const masterPrograms = [
  {
    code: '580100',
    program: 'Экономика',
    details:
      'Инновационное управление финансами предприятий, Бухгалтерский учет, анализ и аудит, Налоговый консалтинг, Международный бизнес, Международная торговля, Оценка бизнеса и корпоративные финансы, Современное банковское дело и модели управления, Электронный бизнес, Информационная бизнес-аналитика',
  },
  {
    code: '580200',
    program: 'Менеджмент',
    details:
      'Менеджмент инновационной деятельности в научно – технической и производственной сферах',
  },
  {
    code: '640200',
    program: 'Электроэнергетика и электротехника',
    details: 'Оптимизация развивающихся систем электроснабжения',
  },
  {
    code: '710200',
    program: 'Информационные системы и технологии',
    details:
      'Информационные технологии в управлении, Информационные технологии в бухгалтерском учете',
  },
  {
    code: '750500',
    program: 'Строительство',
    details:
      'Проектирование, расчет и сейсмостойкость зданий и сооружений, Менеджмент качества в строительстве',
  },
];
const additionalCourses = [
  { course: 'Подготовка водителей категории «В» и «ВС»' },
  { course: 'Компьютерная грамотность по программированию' },
  { course: 'Курсы по фундаментальным дисциплинам программ по отраслям' },
  { course: 'Кройка и шитье, Швея' },
  { course: 'Штукатурщик – маляр, Бетонщик, Кладчик, Арматурщик' },
  { course: 'Наладчик по контрольно-измерительным приборам и автоматике' },
  { course: 'Электромонтажник по распределительным сетям и вторичным цепям' },
  { course: 'Слесарь по контрольно-измерительным приборам и автоматике' },
  { course: 'Электрогазосварщик' },
  { course: 'Охрана труда и техника безопасности' },
  { course: 'Основы бухгалтерского учета (1С бухгалтерия 8.2)' },
  {
    course:
      'Кыргызский, Русский, Английский, Немецкий, Китайский, Японский языки',
  },
  { course: 'Практическая психология и развитие личности' },
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
  { title: 'Российско-кыргызский институт автоматизации управления и бизнеса' },
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

export const HistoryPage = () => {
  return (
    <Container maxWidth="lg" className="py-10 px-4">
      <Typography
        variant="h4"
        className="font-bold text-center mb-8 text-gray-800"
        style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}
      >
        Международный университет инновационных технологий (МУИТ)
      </Typography>
      <section className="mb-10">
        <Typography variant="h5" className="font-semibold text-gray-700 mb-4">
          История Университета
        </Typography>
        <Typography variant="body1" className="text-gray-600">
          Международный университет инновационных технологий (создан в 2006 году
          как Академия инновационных технологий, далее - МУИТ, Университет) по
          своей организационно-правовой форме является учреждением, реализующим
          образовательные программы высшего профессионального образования.
          Адрес: 720048, Кыргызская Республика, г.Бишкек, ул.Анкара, 1/17 Номер
          свидетельства государственной регистрации/перерегистрации юридического
          лица: № 55786-3301-У-е; код ОКПО 24275760; ГПЮ № 0025883.
          Идентификационный налоговый номер: 00308200610153. Дата
          регистрации/перерегистрации в Министерстве юстиции Кыргызской
          Республики 02.05.2017 г. Университет действует на основании Закона
          Кыргызской Республики «Об образовании», Гражданского кодекса КР,
          Закона КР «О лицензировании», Устава МУИТ и других нормативных актов.
          В соответствии с Постановлением Правительства Кыргызской Республики
          «Об установлении двухуровневой структуры высшего профессионального
          образования в Кыргызской Республике» от 23 августа 2011 года №496 и
          приказа Министерства образования и науки Кыргызской Республики от 16
          апреля 2012 года №244/1 с 2012 года Университет перешел на
          двухуровневую структуру высшего образования.
        </Typography>
      </section>
      <section className="mb-10">
        <Typography variant="h5" className="font-semibold text-gray-700 mb-4">
          Адрес и регистрационные данные
        </Typography>
        <Typography variant="body1" className="text-gray-600">
          Адрес: 720048, Кыргызская Республика, г. Бишкек, ул. Анкара, 1/17.
          Номер свидетельства: № 55786-3301-У-е; код ОКПО: 24275760. Регистрация
          в Министерстве юстиции Кыргызской Республики: 02.05.2017.
        </Typography>
      </section>
      <section className="mb-10">
        <Typography variant="h5" className="font-semibold text-gray-700 mb-4">
          Лицензии и образовательные программы
        </Typography>
        <Typography variant="body1" className="text-gray-600">
          Университет осуществляет свою образовательную деятельность и готовит
          специалистов по программам высшего профессионального образования
          бакалавриата, магистратуры и аспирантуры на основании лицензий
          Министерства образования и науки Кыргызской Республики № LD150000763
          от 07.08.2015г., (бакалавриат, специалитет) LD150001054 № 1-18-1 от
          04.12.2015г., №LD 160000749 № 1-19 от 01.11.2016г. (магистратура),
          LE150000095 от 13.11.2014г., LE150001566 от 07.08.2015г., LF150000373
          от 23.09.2015г. (краткосрочные курсы повышения квалификации и
          дополнительного образования).
        </Typography>
      </section>
      <section className="mb-10">
        <Typography variant="h5" className="font-semibold text-gray-700 mb-4">
          Программы бакалавриата
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="font-bold text-gray-700">Код</TableCell>
                <TableCell className="font-bold text-gray-700">
                  Программа
                </TableCell>
                <TableCell className="font-bold text-gray-700">
                  Профиль
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bachelorPrograms.map((program, index) => (
                <TableRow key={index}>
                  <TableCell>{program.code}</TableCell>
                  <TableCell>{program.program}</TableCell>
                  <TableCell>{program.profile}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
      <section className="mb-10">
        <Typography variant="h5" className="font-semibold text-gray-700 mb-4">
          Программы магистратуры
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="font-bold text-gray-700">Код</TableCell>
                <TableCell className="font-bold text-gray-700">
                  Программа
                </TableCell>
                <TableCell className="font-bold text-gray-700">
                  Программы
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {masterPrograms.map((program, index) => (
                <TableRow key={index}>
                  <TableCell>{program.code}</TableCell>
                  <TableCell>{program.program}</TableCell>
                  <TableCell>{program.details}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
      <section className="mb-10">
        <Typography variant="h5" className="font-semibold text-gray-700 mb-4">
          Научные специальности аспирантуры
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="font-bold text-gray-700">Код</TableCell>
                <TableCell className="font-bold text-gray-700">
                  Специальность
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {postgraduateSpecialties.map((specialty, index) => (
                <TableRow key={index}>
                  <TableCell>{specialty.code}</TableCell>
                  <TableCell>{specialty.specialty}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
      <section className="mb-10">
        <Typography variant="h5" className="font-semibold text-gray-700 mb-4">
          Курсы дополнительного образования
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="font-bold text-gray-700">Курс</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {additionalCourses.map((course, index) => (
                <TableRow key={index}>
                  <TableCell>{course.course}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
      <section className="mb-10">
      <Typography variant="h5" className="font-semibold text-gray-700 mb-6">
        Структура МУИТ
      </Typography>
      <Grid container spacing={3}>
        {structureItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
           
              <Card className="h-full display-flex flex-direction-column">
                <CardContent className="flex-grow-1">
                  <Typography variant="h6" className="font-medium text-gray-700 mb-2">
                    {item.title}
                  </Typography>
                </CardContent>
              </Card>
          </Grid>
        ))}
      </Grid>
      </section>

      <section className="mb-10">
        <Typography variant="h5" className="font-semibold text-gray-700 mb-4">
          Финансирование и Профессорско-преподавательский состав
        </Typography>
        <Typography variant="body1" className="text-gray-600">
          Университет имеет плановые сметы доходов и расходов, которые
          корректируются каждый год. В настоящее время состав ППС МУИТ включает
          120 человек.
        </Typography>
      </section>

      {/* Контактная информация */}
      <section>
        <Typography variant="h5" className="font-semibold text-gray-700 mb-4">
          Контактная информация
        </Typography>
        <Typography variant="body1" className="text-gray-600">
          Адрес: 720048, Кыргызская Республика, г. Бишкек, ул. Анкара, 1/17.
          Телефон: +996 (312) 590-599.
        </Typography>
      </section>
    </Container>
  );
};
