import { Typography } from '@mui/material';
import { facultyApi, facultyQueries } from '~entities/faculties';
import { IntroCard } from '~entities/intro';
import { EnrollForm } from '~widgets/enroll-form';
import { FacultyCard } from '~widgets/faculty-card';
import { OpportunitiesList } from '~widgets/opportunities-list';

// const institutes = [
//   { name: 'Институт Цифровой Трансформации и Программирования', programs: 15 },
//   { name: 'Институт Дизайна, Архитектуры и Текстиля', programs: 9 },
//   { name: 'Институт Строительства и Инновационных Технологий', programs: 18 },
//   { name: 'Институт Энергетики и Транспорта', programs: 5 },
//   { name: 'Институт Экономики и Менеджмента', programs: 6 },
//   {
//     name: 'Российско-Кыргызский Институт Автоматизации Управления Бизнеса',
//     programs: 11,
//   },
//   { name: 'Институт Межкультурной Коммуникации и Психологии', programs: 5 },
//   { name: 'Креатив', programs: 2 },
//   { name: 'Институт Маркетинга и Электронной Коммерции', programs: 4 },
// ];

export const InstitutesPage = () => {
  const { data:facultyData, isLoading, isError } = facultyQueries.useGetFaculties()

  if (isLoading) {
    return <div>Произошла Ошибка</div>;
  }
  if (isError) {
    return <div>Произошла Ошибка</div>;
  }
  console.log('data', facultyData?.data);

  return (
    <div className="my-5 mb-10">
      <IntroCard
        description={
          'С университетом МУИТ вы получаете качественное образование и востребованные в современном мире профессии.'
        }
        img={
          'https://synergy.ru/assets/template/v5/new3/images/s_main_banner/main_banner_2_lg.webp'
        }
        title={'Институты '}
      ></IntroCard>
      <div className="my-5">
        <Typography className="font-medium" variant="h3" component="div">
          Институты
        </Typography>
        <div className="flex flex-wrap justify-between my-10 gap-5 ">
          {facultyData?.data.map((institute, index) => (
            <FacultyCard
              key={index}
              slug={institute.slug}
              instituteName={institute.title}
              programCount={institute.programs}
            />
          ))}
        </div>
      </div>
      <OpportunitiesList />
      <EnrollForm />
    </div>
  );
};
