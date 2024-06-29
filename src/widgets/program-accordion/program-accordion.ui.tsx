import React, { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const ProgramAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const courses = [
    {
      title: '1 Курс',
      details: [
        'Управление потребительским опытом и взаимоотношениями с клиентами в каналах дистрибуции',
        'Современные технологии продвижения и маркетинговых коммуникаций в каналах распределения',
        'Маркетинговые исследования и сквозная аналитика в дистрибуции',
        'Управление товарным ассортиментом и категорийный менеджмент',
        'Маркетинговая Web-аналитика',
      ],
    },
    {
      title: '2 Курс',
      details: [
        'Управление комплексной системой распределения',
        'Data-driven маркетинг',
        'Сбытовая политика в цифровой среде',
        'UX-исследования потребительского опыта',
        'Аналитика и визуализация маркетинговых данных',
        'Инфографика и презентация маркетинговых проектов',
        'Бизнес-аналитика и анализ больших данных',
      ],
    },
  ];

  return (
    <div className="container my-10">
      {courses.map((course, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          className={`shadow-none ${
            index !== 0 ? 'border-t' : ''
          } border-gray rounded-none`}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            {course.title}
          </AccordionSummary>
          <AccordionDetails>
            <ul className="list-disc pl-7">
              {course.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
