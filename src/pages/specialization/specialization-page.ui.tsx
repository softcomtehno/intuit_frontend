import { SpecializationBanner } from './ui/SpecializationBanner.ui'
import { SkillsBlock } from './ui/SkillBlock.ui'
import { ProgramAccordion } from './ui/ProgramAccordion.ui.tsx'
import { CareerBlock } from './ui/CareerBlock.ui.tsx'
import { About } from './ui/About.ui.tsx'
import { EnrollForm } from '~widgets/enroll-form'
import { specializationQueries } from '~entities/specialization/'
import { useParams } from 'react-router-dom'

type RouteObject = {
  slug: string
}

export const SpecializationPage = () => {
  const { slug } = useParams<RouteObject>()

  if (!slug) {
    return <div>Неправильный адрес {slug}</div>
  }
  const {
    data: specializationData,
    isLoading,
    isSuccess,
    isError,
  } = specializationQueries.useGetSpecialization(slug)

  if (isLoading) {
    return <div>ЗАГРУЗКА</div>
  }
  if (isError) {
    return <div>Error</div>
  }
  if (isSuccess) {
    return (
      <div className="my-5">
        <SpecializationBanner {...specializationData.data} />
        <About {...specializationData.data} />
        <ProgramAccordion {...specializationData.data} />
        <SkillsBlock {...specializationData.data} />
        <CareerBlock {...specializationData.data} />
        <EnrollForm />
      </div>
    )
  }
}
