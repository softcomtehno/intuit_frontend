import Fancybox from '~widgets/diplom-list/Fancybox'

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
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
        Положение PHD
      </Typography>
      <Typography
        variant="body1"
        className="text-gray-700 mb-10 text-justify"
        style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)' }}
      >
        Здесь вы можете ознакомиться с документами, относящимися к Положению PHD нашего университета. Перейдите по ссылкам ниже, чтобы
        просмотреть или загрузить файлы.
      </Typography>
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
      </Fancybox>
    </Container>
  )
}
