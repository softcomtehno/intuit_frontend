import { Box, Typography } from '@mui/material'
import { speakerQueries } from '~entities/speaker'
import { SpeakerVideo } from '~entities/speaker'

export const SpeakerVideoList = () => {
  // Переместите вызов хука внутрь компонента
  const {
    data: speakersData,
    isLoading,
    isSuccess,
    isError,
  } = speakerQueries.useGetSpeakers()

  if (isLoading) {
    return <div>Загрузка...</div>
  }

  if (isError) {
    return <div>Ошибка загрузки данных</div>
  }

  if (!isSuccess || !speakersData) {
    return <div>Нет данных для отображения</div>
  }

  console.log(speakersData) // Для отладки, можно удалить позже

  return (
    <>
      <Typography variant="h2">Отзывы</Typography>
      <Box className="py-10 cursor-pointer grid grid-cols-5 gap-5 md:grid-cols-subgrid">
        {/* Теперь отобразите данные, например, через speakersData */}
        {speakersData.data.map((item, i) => {
          if (i <= 4) {
            return (
              <div className="flex justify-center" key={i}>
                <SpeakerVideo {...item} />
              </div>
            )
          }
          return null
        })}
      </Box>
    </>
  )
}
