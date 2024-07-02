import { SwiperIntro } from '~widgets/swiper-intro';
import InfoBlock from './ui/info-block.ui'; // Adjusted import statement
import { Breadcrumbs, Button, CircularProgress, Link, Typography } from '@mui/material';
import { FeedbackList } from '~widgets/feedback-list';
import { useParams } from 'react-router-dom';
import { degreeQueries } from '~entities/degree';
import { EnrollForm } from '~widgets/enroll-form';
import { OpportunitiesList } from '~widgets/opportunities-list';

export const DegreePage = () => {
  const slug = useParams();

  const {
    data: degreeData,
    isLoading,
    isError,
  } = degreeQueries.useGetDegree(String(slug.slug));

  console.log(degreeData?.data.title);

  if (isLoading) {
    return <div className='flex flex-col gap-3 items-center justify-center h-[400px]'>
      <CircularProgress className='text-blue'/>
      <Typography variant='h6'>Загрузка</Typography>
    </div>;
  }

  return (
    <>
      {!isLoading && (
        <div className="my-10">
          <div
            className="bg-cover bg-center min-h-[500px] rounded-2xl p-10 flex flex-col justify-between"
            style={{
              backgroundImage: `url(${degreeData?.data.banner})`,
            }}
          >
            <div>
              <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                  Главная
                </Link>
                <Typography color="text.primary">
                  {degreeData?.data.title}
                </Typography>
              </Breadcrumbs>
              <Typography variant="h2" className="font-semibold">
                {degreeData?.data.title}
              </Typography>
            </div>
            <div>
              <Typography
                variant="body1"
                className="text-lg font-medium max-w-[320px] my-2"
              >
                Пройдите тест и узнайте, на кого вам лучше учиться
              </Typography>
              <Button
                variant="contained"
                size="large"
                className="bg-blue  shadow-none"
              >
                Подобрать программу
              </Button>
            </div>
          </div>
          <InfoBlock
            title={degreeData?.data.text}
            description={degreeData?.data.subtext}
            tags={['Выпускники', 'Бакалавриат']}
            stats={[
              { value: `${degreeData?.data.programCount}`, label: 'программ' },
              {
                value: `${degreeData?.data.studyPeriod}`,
                label: 'срок обучения',
              },
              {
                value: `${degreeData?.data.employment}`,
                label: 'Трудоустройство',
              },
              { value: 'Документ', label: `${degreeData?.data.diploma}` },
            ]}
          />
          <Typography variant="h2">Программы обучения</Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nulla
            alias voluptates facilis, molestiae veritatis amet laborum eligendi
            totam similique incidunt earum cum corporis autem cupiditate eveniet
            nesciunt officia inventore deserunt sunt! Iure quae officia
            mollitia, facere aperiam debitis quo. Eum minima expedita accusamus
            qui repudiandae. Sit mollitia nemo culpa?
          </p>
          <OpportunitiesList/>
          <EnrollForm/>
          <Typography variant="h2" className="my-5">
            Отзывы студентов
          </Typography>

          <FeedbackList></FeedbackList>
        </div>
      )}
    </>
  );
};
