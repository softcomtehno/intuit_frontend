import InfoBlock from './ui/info-block.ui' // Adjusted import statement
import {
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Link,
  Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom'
import { degreeQueries } from '~entities/degree'
import { Loader } from '~shared/ui/loader'
import { EnrollForm } from '~widgets/enroll-form'
import { OpportunitiesList } from '~widgets/opportunities-list'
// import { FeedbackList } from '~widgets/feedback-list'
import { ProgramCategory } from '~widgets/programm-category'
import { SpeakerVideoList } from '~widgets/speaker-list'
export const DegreePage = () => {
  const slug = useParams()

  const {
    data: degreeData,
    isLoading,
    isError,
  } = degreeQueries.useGetDegree(String(slug.slug))

  console.log(degreeData)

  if (isError) {
    return <div>Произошла Ошибка</div>
  }

  if (isLoading) {
    return <Loader />
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
              background: `linear-gradient(200deg, rgba(42,33,115,1) 0%, rgba(0,149,111,1) 100%)`,
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
                {slug.slug === "magistratura" && (
        <Card className="p-4 shadow-md rounded-2xl border border-gray-200 bg-white">
          <CardHeader>
            <h2 className="text-2xl font-semibold text-gray-900">
              Кто такой магистр?
            </h2>
          </CardHeader>

          <CardContent className="space-y-6 text-gray-700 leading-relaxed">

            {/* Кто такой магистр */}
            <div>
              <p>
                Магистр — это квалификация, присваиваемая после окончания магистратуры.
                Обучение направлено на углублённое освоение выбранного направления и подготовку
                к научно-исследовательской, педагогической, аналитической и консультационной
                деятельности.
              </p>
            </div>

            {/* Где может работать магистр */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Где может работать магистр?
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Научно-исследовательские организации;</li>
                <li>Консалтинговые компании;</li>
                <li>Средние специальные и высшие учебные заведения;</li>
                <li>Аналитические подразделения учреждений и организаций.</li>
              </ul>
            </div>

            {/* Срок обучения */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Срок обучения
              </h3>
              <p>Очная форма — 2 года.</p>
              <p>Условие поступления — завершённая программа бакалавриата (4 года).</p>
              <p className="mt-2">
                Квалификация присваивается после успешной защиты магистерской диссертации и даёт
                право поступления в аспирантуру и докторантуру.
              </p>
            </div>

            {/* Обязанности обучающегося */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Обязанности обучающегося
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Осваивать образовательную программу и выполнять индивидуальный учебный план;</li>
                <li>Посещать занятия;</li>
                <li>Готовиться к занятиям и выполнять задания преподавателей.</li>
              </ul>
            </div>

            {/* Магистерская программа */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Магистерская программа
              </h3>

              <p className="mb-2">
                Магистратура обеспечивает углублённую фундаментальную и профессиональную подготовку.
                Учебный процесс организован на основе:
              </p>

              <ul className="list-disc pl-5 space-y-1">
                <li>Учебного плана;</li>
                <li>Календарного учебного графика.</li>
              </ul>
            </div>

            {/* Научный руководитель */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Научный руководитель
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Направляет научную и учебную деятельность;</li>
                <li>Помогает формировать индивидуальный план;</li>
                <li>Руководит подготовкой диссертации;</li>
              </ul>
              <p className="mt-1">Назначается в течение первого месяца обучения.</p>
            </div>

            {/* НИРМ */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Научно-исследовательская работа магистранта (НИРМ)
              </h3>
              <p>
                Выполняется на протяжении всего периода обучения. Формы и содержание отражаются
                в индивидуальном плане.
              </p>
            </div>

            {/* Диссертация */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Магистерская диссертация
              </h3>

              <ul className="list-disc pl-5 space-y-1">
                <li>Выполняется под руководством научного руководителя;</li>
                <li>Тема выбирается магистрантом или из утверждённого перечня;</li>
                <li>Перед защитой проходит рецензирование;</li>
              </ul>

              <p className="mt-1">
                К защите допускаются обучающиеся, завершившие программу и сдавшие госэкзамены.
              </p>

              <p className="mt-2 font-semibold">
                После успешной защиты выдаётся диплом магистра.
              </p>
            </div>

            {/* МБРС */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Модульно-балльно-рейтинговая система (МБРС)
              </h3>

              <p className="mb-2">
                МБРС — система оценки учебных достижений, обеспечивающая прозрачность и качество.
              </p>

              <ul className="list-disc pl-5 space-y-1">
                <li>100-балльная шкала;</li>
                <li>Учёт всех видов деятельности через AVN;</li>
                <li>Дисциплины делятся на модули;</li>
                <li>Итоговый балл = текущая работа + экзамен.</li>
              </ul>
            </div>

          </CardContent>
        </Card>
      )}
          <ProgramCategory degreeId={degreeData?.data.id} />
          <OpportunitiesList />
          <EnrollForm />
          <SpeakerVideoList />
          {/* <FeedbackList /> */}
        </div>
      )}
    </>
  )
}
