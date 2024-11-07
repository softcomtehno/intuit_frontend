import React from 'react';
import { Card, CardContent, Typography, Divider, Box } from '@mui/material';
import { styled } from '@mui/system';
import { StaffCard, staffQueries, staffTypes } from '~entities/staff'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

interface DescriptionCardProps {
  subtitle: string;
  text: string;
  subtext: string;
}

const staffData = [
  {
    name: "Иван Иванов",
    description: "Преподаватель математики с более чем 10-летним опытом работы в области образования. Учит решать задачи легко и эффективно.",
    image: "https://via.placeholder.com/110x140",
    slug: "ivan-ivanov"
  },
  {
    name: "Анна Петрова",
    description: "Специалист по химии, помогает студентам понять и полюбить науку через интересные эксперименты и исследования.",
    image: "https://via.placeholder.com/110x140",
    slug: "anna-petrova"
  },
  {
    name: "Сергей Смирнов",
    description: "Опытный преподаватель физики, делает сложные темы простыми для понимания и объясняет теорию на практике.",
    image: "https://via.placeholder.com/110x140",
    slug: "sergey-smirnov"
  },
  {
    name: "Елена Васильева",
    description: "Учитель информатики, обучает программированию и основам компьютерных наук, помогая студентам войти в мир IT.",
    image: "https://via.placeholder.com/110x140",
    slug: "elena-vasilyeva"
  }
];


const DescriptionCard: React.FC<DescriptionCardProps> = ({
  subtitle,
  text,
  subtext,
}) => {
  return (
    <div className="flex gap-5 my-10">
      <div className="p-5 bg-white shadow-lg rounded-lg max-w-[55%]">
        <Typography variant="h3" className="font-semibold">
          О Факультете
        </Typography>
        <p className=' mt-5'>{subtext}</p>
      </div>
      <div className="min-w-[45%] bg-[#e0e1e5] p-5 rounded-xl">
      <Typography variant="h4" className="font-semibold">
        Ведущие преподаватели
        </Typography>
        <div className='flex justify-center'>
        <Swiper
        className=" py-10 px-1 staff-list"
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {staffData.map((staff) => (
          <SwiperSlide className='flex justify-center' key={staff.id}>
            <StaffCard {...staff} />
          </SwiperSlide>
        ))}
      </Swiper>
        </div>
      </div>
    </div>
  );
};

export default DescriptionCard;
