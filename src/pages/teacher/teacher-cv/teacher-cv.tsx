import { t } from 'i18next'
import { useParams } from 'react-router-dom'
import { staffQueries } from '~entities/staff'

export const TeacherCv = () => {
  const { slug } = useParams()
  const { data, isLoading, isError } = staffQueries.useGetStaffDetail(slug)

  if(isLoading) (
    <div>{t("loading.dataLoading")}</div>
  )
  if(isError) (
    <div>{t("loading.dataNotLoaded")}</div>
  )
  return <div dangerouslySetInnerHTML={{ __html: data?.data.cv }}></div>
}
