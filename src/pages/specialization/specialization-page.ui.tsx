import { SpecializationBanner } from './ui/SpecializationBanner.ui'
import { SkillsBlock } from './ui/SkillBlock.ui'
// import { ProgramAccordion } from './ui/ProgramAccordion.ui.tsx'
import { CareerBlock } from './ui/CareerBlock.ui.tsx'
import { About } from './ui/About.ui.tsx'
import { EnrollForm } from '~widgets/enroll-form'
import { specializationQueries } from '~entities/specialization/'
import { useParams } from 'react-router-dom'
import { CircularProgress, Typography } from '@mui/material'
// import ProgramBlocks from './ui/ProgramBlocks.ui.tsx'
import { EducationForm } from '~widgets/education-form/education-form.ui.tsx'
import { t } from 'i18next'

type RouteObject = {
  slug: string
}

export const SpecializationPage = () => {
  const { slug } = useParams<RouteObject>()

  if (!slug) {
    return <div>{t("specialization.invalidAddress")} {slug}</div>
  }
  const {
    data: specializationData,
    isLoading,
    isSuccess,
    isError,
  } = specializationQueries.useGetSpecialization(slug)
  console.log(specializationData)

  if (isLoading) {
    return (
      <div className="flex flex-col gap-3 items-center justify-center h-[400px]">
        <CircularProgress className="text-blue" />
        <Typography variant="h6">{t("loading.loading")}</Typography>
      </div>
    )
  }

  if (isError) {
    return <div>{t("loading.error")}</div>
  }
  if (isSuccess) {
    return (
      <div className="my-5">
        <SpecializationBanner {...specializationData.data} />
        <About {...specializationData.data} />
        {/* <ProgramBlocks {...specializationData.data} /> */}
        <SkillsBlock {...specializationData.data} />
        {/* <ProgramAccordion {...specializationData.data} /> */}
        <CareerBlock {...specializationData.data} />
        <EducationForm />
        <EnrollForm />
      </div>
    )
  }
}
