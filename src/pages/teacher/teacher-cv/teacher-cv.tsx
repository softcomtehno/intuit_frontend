import { useParams } from 'react-router-dom'
import { staffQueries } from '~entities/staff'

export const TeacherCv = () => {
  const { slug } = useParams()
  const { data, isLoading, isError } = staffQueries.useGetStaffDetail(slug)

  if(isLoading) (
    <div>Загрузка данных</div>
  )
  if(isError) (
    <div>Ошибка при загрузке данных</div>
  )
  return <div dangerouslySetInnerHTML={{ __html: data?.data.cv }}></div>
}
