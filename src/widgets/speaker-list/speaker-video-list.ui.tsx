import { Box, Typography } from '@mui/material';
import { speakerQueries } from '~entities/speaker';
import { SpeakerVideo } from '~entities/speaker';

interface SpeakerVideoListProps {
  facultyId?: number;
}

export const SpeakerVideoList: React.FC<SpeakerVideoListProps> = ({ facultyId }) => {
  const {
    data: filteredSpeakersData,
    isLoading: isFilteredLoading,
    isError: isFilteredError,
  } = speakerQueries.useGetSpeakers(facultyId); 

  const {
    data: allSpeakersData,
    isLoading: isAllLoading,
    isError: isAllError,
  } = speakerQueries.useGetSpeakers(); 

  const isLoading = isFilteredLoading || isAllLoading;
  const isError = isFilteredError && isAllError; 

  const speakersData =
    filteredSpeakersData?.data?.length > 0
      ? filteredSpeakersData.data
      : allSpeakersData?.data; 

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (isError) {
    return <div>Ошибка загрузки данных</div>;
  }

  if (!speakersData || speakersData.length === 0) {
    return <div>Нет данных для отображения</div>;
  }

  return (
    <>
      <Typography variant="h3" component="div" className="font-semibold">
        Отзывы
      </Typography>
      <Box className="py-10 cursor-pointer grid grid-cols-5 gap-5 md:grid-cols-subgrid">
        {speakersData.map((item, i) => {
          if (i <= 4) {
            return (
              <div className="flex justify-center" key={i}>
                <SpeakerVideo {...item} />
              </div>
            );
          }
          return null;
        })}
      </Box>
    </>
  );
};
