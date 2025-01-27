import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  CardActionArea,
  Grid,
  IconButton,
} from '@mui/material';
import { FileCopy as FileIcon } from '@mui/icons-material';
import Fancybox from '~widgets/diplom-list/Fancybox';

export const HeadPage = () => {
  const documents = [
    {
      title: 'План ректората 2020-2021',
      link: 'https://muit.makalabox.com/documents/head/rectorate_regulations.pdf',
    },
    {
      title: 'План ректората март 2021',
      link: 'https://muit.makalabox.com/documents/head/rectorate_report_2020.pdf',
    },
    {
      title: 'План ректората апрель-июль 2021',
      link: 'https://muit.makalabox.com/documents/head/rectorate_april_2021.pdf',
    },
    {
      title: 'План заседаний ректората ноябрь 2021',
      link: 'https://muit.makalabox.com/documents/head/rectorate_november_2022.pdf',
    },
    {
      title: 'План заседаний ректората декабрь 2021 - январь 2022',
      link: 'https://muit.makalabox.com/documents/head/rectorate_december_2022.docx',
    },
    {
      title: 'План заседаний ректората февраль - июль 2022',
      link: 'https://muit.makalabox.com/documents/head/rectorate_febraury_2022.pdf',
    },
    {
      title: 'План заседаний ректората октябрь 2022 - январь 2023',
      link: 'https://muit.makalabox.com/documents/head/rectorate_octember_2023.pdf',
    },
    {
      title: 'План заседаний ректората январь - август 2023',
      link: 'https://muit.makalabox.com/documents/head/rectorate_january_2023.pdf',
    },
    {
      title: 'План заседаний ректората август - декабрь 2023',
      link: 'https://muit.makalabox.com/documents/head/rectorate_august_2023.pdf',
    },
    {
      title: 'План заседаний ректората январь-август 2024',
      link: 'https://muit.makalabox.com/documents/head/rectorate_january_2024.pdf',
    },
    {
      title: 'План заседаний ректората август - декабрь 2024',
      link: 'https://muit.makalabox.com/documents/head/rectorate_august_2024.pdf',
    },
    {
      title: 'План заседаний ректората январь - август 2025',
      link: 'https://muit.makalabox.com/documents/head/rectorate_januar_2025.pdf'
    }
  ];

  return (
    <Container maxWidth="lg" className="py-10">
      <Typography
        variant="h4"
        className="font-bold text-center mb-8 text-gray-800"
        style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}
      >
        Ректорат Университета
      </Typography>
      <Typography
        variant="body1"
        className="text-gray-700 mb-10 text-justify"
        style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)' }}
      >
        Здесь вы можете ознакомиться с документами, относящимися к деятельности
        ректората нашего университета. Перейдите по ссылкам ниже, чтобы
        просмотреть или загрузить файлы.
      </Typography>
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <Grid container spacing={4}>
          {documents.map((document, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
                <a href={document.link} data-fancybox="gallery">
                <Card>
                  <CardActionArea>
                    <CardContent>
                      <Box display="flex" alignItems="center">
                        <IconButton>
                          <FileIcon />
                        </IconButton>
                        <Typography variant="h6" component="div">
                          {document.title}
                        </Typography>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </a>
              </Grid>
          ))}
        </Grid>
      </Fancybox>
    </Container>
  );
};
