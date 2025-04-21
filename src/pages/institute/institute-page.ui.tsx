import { useParams } from 'react-router-dom'
import { EnrollForm } from '~widgets/enroll-form'
import { OpportunitiesList } from '~widgets/opportunities-list'
// import StaffList from '~widgets/staff-list/staff-list.ui'
import { InstituteBanner } from './ui/InstituteBanner.ui'
import { facultyQueries } from '~entities/faculties'
import { CircularProgress, Typography } from '@mui/material'
import DescriptionCard from './ui/Description.ui'
// import ProgramCategory from './ui/ProgramCategory.ui';
import { NewsList } from '~widgets/news-list'
import { ProgramCategory } from '~widgets/programm-category'
import { SpeakerVideoList } from '~widgets/speaker-list'
import { Documents } from './ui/Document.ui'

export const InstitutePage = () => {
  const slug = useParams()

  const {
    data: facultyData,
    isError,
    isLoading,
  } = facultyQueries.useGetFaculty(String(slug.slug))

  console.log('facultyData', facultyData)

  if (isError) {
    return <div>Произошла Ошибка</div>
  }

  if (isLoading) {
    return (
      <div className="flex flex-col gap-3 items-center justify-center h-[400px]">
        <CircularProgress className="text-blue" />
        <Typography variant="h6">Загрузка</Typography>
      </div>
    )
  }

  return (
    <div className="my-5">
      <InstituteBanner
        title={facultyData?.data.title}
        banner={facultyData?.data.banner}
        programCount={facultyData?.data.programCount}
      />
      <DescriptionCard
        subtitle={facultyData?.data.subtitle}
        text={facultyData?.data.text}
        subtext={facultyData?.data.subtext}
        id={facultyData?.data.id}
      />
      {/* <ProgramCategory /> */}
      <Documents data={facultyData?.data?.documentCollections} />
      <ProgramCategory facultyId={facultyData?.data.id} />
      <EnrollForm />
      <OpportunitiesList />
      <NewsList id={facultyData?.data.id} />
      <SpeakerVideoList facultyId={facultyData?.data.id} />
    </div>
  )
}
