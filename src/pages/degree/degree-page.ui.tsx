import InfoBlock from './ui/info-block.ui'; // Adjusted import statement
import {
  Breadcrumbs,
  Button,
  CircularProgress,
  Link,
  Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { degreeQueries } from '~entities/degree';
import { EnrollForm } from '~widgets/enroll-form';
import { OpportunitiesList } from '~widgets/opportunities-list';
import { FeedbackList } from '~widgets/feedback-list';

export const DegreePage = () => {
  const slug = useParams();

  const {
    data: degreeData,
    isLoading,
    isError,
  } = degreeQueries.useGetDegree(String(slug.slug));

  console.log(degreeData);

  if (isError) {
    return <div>Произошла Ошибка</div>;
  }

  if (isLoading) {
    return (
      <div className="flex flex-col gap-3 items-center justify-center h-[400px]">
        <CircularProgress className="text-blue" />
        <Typography variant="h6">Загрузка</Typography>
      </div>
    );
  }

  return (
    <>
      {!isLoading && (
        <div className="my-10">
          <div
            className="bg-cover bg-center min-h-[300px] rounded-2xl p-5 flex flex-col justify-between"
            // style={{
            //   backgroundImage: `url(${degreeData?.data.banner})`,
            // }}
            style={{
              background: `gray`,
            }}
          >
            <div>
              <Breadcrumbs aria-label="breadcrumb" className="text-[white]">
                <Link underline="hover" color="white" href="/">
                  Главная
                </Link>
                <Typography color="text.primary" className="text-[white]">
                  {degreeData?.data.title}
                </Typography>
              </Breadcrumbs>
              <Typography
                variant="h2"
                className="text-[white] font-semibold md:text-[40px]"
              >
                {degreeData?.data.title}
              </Typography>
            </div>
            <div>
              <Typography
                variant="body1"
                className="text-lg font-bold max-w-[320px] my-2 text-[white] "
              >
                Пройдите тест и узнайте, на кого вам лучше учиться
              </Typography>
              <Button
                variant="contained"
                size="large"
                className="bg-blue shadow-none px-[45px]"
              >
                Подобрать программу
              </Button>
            </div>
          </div>
          <InfoBlock
            title={degreeData?.data.text}
            description={degreeData?.data.subtext}
            tags={['Выпускники', 'Бакалавриат']}
            diplomaPhoto={degreeData?.data.diplomaPhoto}
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
          <ProgramCategory />
          <OpportunitiesList />
          <EnrollForm />
          <Typography variant="h2" className="my-5">
            Отзывы студентов
          </Typography>

          <FeedbackList></FeedbackList>
        </div>
      )}
      <FeedbackList></FeedbackList>
    </>
  );
};
