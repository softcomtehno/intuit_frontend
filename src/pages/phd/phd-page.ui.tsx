import Fancybox from '~widgets/diplom-list/Fancybox'

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const docs = [
  {
    title: 'Положение о защите докторской диссертации',
    url: 'https://muit.makalabox.com/documents/phd/a.pdf',
  },
  {
    title: 'Положение о научных консультантах',
    url: 'https://muit.makalabox.com/documents/phd/b.pdf',
  },
  {
    title: 'Положение о подготовке диссертации',
    url: 'https://muit.makalabox.com/documents/phd/c.pdf',
  },
  {
    title: 'Положение о порядке подготовки доктора',
    url: 'https://muit.makalabox.com/documents/phd/d.pdf',
  },
  {
    title: 'Положение о приёме в докторантуру ',
    url: 'https://muit.makalabox.com/documents/phd/e.pdf',
  },
]

export const PhdPage = () => {
  return (
    <Container maxWidth="lg" className="py-10">
      <Typography
        variant="h4"
        className="font-bold text-center mb-8 text-gray-800"
        style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}
      >
        Докторантура PHD
      </Typography>
      <Typography
        variant="body1"
        className=" mb-10 text-justify font-bold"
        style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)' }}
      >
        Образовательная программа Докторантура PhD{' '}
        <span className="font-normal">
          – это подготовка научных и научно-педагогических кадров высшей
          квалификации нового поколения, генерирование новых знаний в
          соответствующих сферах практической деятельности с целью осуществления
          вклада в развитие экономики Кыргызской Республики.
        </span>
      </Typography>
      <Typography
        variant="body1"
        className=" mb-10 text-justify font-bold"
        style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)' }}
      >
        Миссия образовательной программы докторантуры PhD{' '}
        <span className="font-normal">
          заключается в поддержке молодых научных и научно-педагогических кадров
          высшей квалификации в достижении ими высокого уровня научной
          деятельности и развитии их научно-исследовательского и инновационного
          потенциала, а также поддержка развития сообщества ученых, их
          омоложения, приведения к международным стандартам качества подготовки
          и аттестации ученых, содействия развитию научно-исследовательской
          работы в высших учебных заведениях и научно-исследовательских
          учреждениях.
        </span>
      </Typography>
      <Typography
        variant="body1"
        className=" mb-10 text-justify font-bold"
        style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)' }}
      >
        Цель образовательной программы докторантуры PhD МУИТ{' '}
        <span className="font-normal">
          организация и координация деятельности по реализации докторских
          программ PhD и подготовка докторов философии (PhD)/доктора по профилю
          по направлению (специальности) 580100 «Экономика» направленные на
          подготовку научных и научно-педагогических кадров высшей квалификации.
        </span>
      </Typography>
      <Typography variant="h5">
        Преимущества и достижения образовательной программы докторантура PhD
      </Typography>
      <ul>
        <li>
          <Typography
            variant="body1"
            className=" mb-10 text-justify font-bold"
            style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)' }}
          >
            1. Высокий уровень академической подготовки.
            <span className="font-normal">
              Докторанты PhD демонстрируют высокий уровень подготовки, что
              отражается в качестве исследовательских работ, глубоком знании
              предметных областей и умении применять теоретические знания на
              практике.
            </span>
          </Typography>
        </li>
        <li>
          <Typography
            variant="body1"
            className=" mb-10 text-justify font-bold"
            style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)' }}
          >
            2. Инновационные исследования.
            <span className="font-normal">
              Одним из ярких преимуществ докторантуры PhD является проведение
              инновационных исследований в различных областях науки. Докторанты
              представляют ряд значимых исследовательских проектов,
              способствующих развитию новых знаний и технологий.
            </span>
          </Typography>
        </li>{' '}
        <li>
          <Typography
            variant="body1"
            className=" mb-10 text-justify font-bold"
            style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)' }}
          >
            3. Международное сотрудничество.
            <span className="font-normal">
              Программа докторантуры PhD активно сотрудничает с ведущими
              зарубежными университетами и исследовательскими центрами,
              обеспечивая академическую мобильность докторантов, а также обмен
              опытом и знаниями на международном уровне.
            </span>
          </Typography>
        </li>
        <li>
          <Typography
            variant="body1"
            className=" mb-10 text-justify font-bold"
            style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)' }}
          >
            4. Профессиональное развитие.
            <span className="font-normal">
              Докторанты PhD имеют возможность профессионального развития и
              карьерного роста через участие в научно-практических конференциях,
              семинарах, стажировках и научных публикациях, что способствует их
              интеллектуальному и профессиональному развитию.
            </span>
          </Typography>
        </li>
        <li>
          <Typography
            variant="body1"
            className=" mb-10 text-justify font-bold"
            style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)' }}
          >
            5. Образовательная программа докторантура PhD
            <span className="font-normal">
              представляет собой качественную образовательную программу,
              обеспечивающую высокий уровень подготовки, научное развитие и
              интеллектуальное стимулирование.
            </span>
          </Typography>
        </li>
      </ul>
      <Box className='mb-10'>
        <b>Срок обучения </b> <span>– 3 года</span>
        <br />
        <b>Документ</b>{' '}
        <span>
          – Диплом о присуждении ученой степени доктора PhD по специальности
          58.01.00 «Экономика»
        </span>
      </Box>
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <Accordion className="mb-4 border border-gray shadow-none rounded">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className="text-gray-800 font-semibold">
              Положение PHD
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
      </Fancybox>
    </Container>
  )
}
