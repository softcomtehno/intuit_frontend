import React from 'react';
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

export const TeapunPage = () => {
  const documents = [
    {
      title:
        ' Справочный документ к 24-му заседанию Совета управляющих (Background document for 24th meeting of the Governing Board)',
      link: 'https://muit.makalabox.com/documents/24th%20GB_Meeting_Dec_12_2019_Minutes_removed.pdf',
    },
    {
      title:
        'Справочный документ к 25-му заседанию Совета управляющих (Background document for 25th meeting of the Governing Board)',
      link: 'https://muit.makalabox.com/documents/25th%20GB_Meeting_Dec_10_2020_removed.pdf',
    },
    {
      title:
        'Справочный документ к 26-му заседанию Совета управляющих (Background document for 26th meeting of the Governing Board)',
      link: 'https://muit.makalabox.com/documents/26th%20GB_Meeting_Dec_22_2021_removed_removed.pdf',
    },
    {
      title:
        'Справочный документ к 27-му заседанию Совета управляющих (Background document for 27th meeting of the Governing Board)',
      link: 'https://muit.makalabox.com/documents/27th%20GB_Meeting_Dec_14_2022_removed_removed.pdf',
    },
    {
      title:
        'Справочный документ к 28-му заседанию Совета управляющих (Background document for 28th meeting of the Governing Board)',
      link: 'https://muit.makalabox.com/documents/28TH%20GB_Meeting_Dec_12_2023_removed_removed.pdf',
    },
  ];

  return (
    <Container maxWidth="lg" className="py-10">
      <Typography
        variant="h4"
        className="font-bold text-center mb-8 text-gray-800"
        style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}
      >
        Centre for Space Science and Technology Education in Asia and the
        Pacific (CSSTEAP)
      </Typography>
      <Typography
        variant="body1"
        className="text-gray-700 mb-10 text-justify"
        style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)' }}
      >
        Ознакомьтесь с нашими ресурсами и документами, относящимися к Учебному
        центру космической науки и техники. Перейдите по ссылкам ниже, чтобы
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
              <Card>
                <CardActionArea href={document.link} target="_blank">
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
            </Grid>
          ))}
        </Grid>
      </Fancybox>
    </Container>
  );
};
