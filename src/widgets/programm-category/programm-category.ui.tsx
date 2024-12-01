import { Button, CircularProgress, Typography } from '@mui/material'
import Select from 'react-select'
import { ProfessionCard } from '~entities/profession'
import { useTranslation } from 'react-i18next' // импортируем хук для локализации
import { programQueries } from '~entities/programs'

const options = [
  { value: 'chocolate', label: 'Бакалавриат' },
  { value: 'strawberry', label: 'Магистратура' },
  { value: 'vanilla', label: 'Аспирантура' },
  { value: 'vanilla', label: 'Колледж' },
  { value: 'vanilla', label: 'Курсы' },
]

export const ProgramCategory = ({ data: propdata }) => {
  const { t } = useTranslation()
  const {
    data: serverData,
    isLoading,
    isError,
  } = programQueries.useGetPrograms()

  const professions = propdata || serverData

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
    <div className="my-20 rounded-lg">
      <Typography variant="h3" component="div" className="font-semibold">
        {t('homepage.degrees.programs')}
      </Typography>
      <div>
        <div className="flex gap-5 my-5 lg:flex-col lg:items-center ">
          <Select
            options={options}
            placeholder={t('homepage.degrees.selectDegreePlaceholder')}
            className="w-[350px] lg:w-full"
          />
          <Select
            options={options}
            placeholder={t('homepage.degrees.selectDirectionPlaceholder')}
            className="w-[350px] lg:w-full"
          />
          <Button
            variant="contained"
            className="shadow-none bg-blue px-10 w-[350px] lg:w-full"
          >
            {t('homepage.buttons.applyButton')}
          </Button>
        </div>
        <div className="flex flex-wrap gap-4">
          {professions?.data.map((profession, index) => (
            <ProfessionCard
              key={index}
              degree={profession.educationLevel[0].title}
              faculties={profession.faculty[0].title}
              title={profession.title}
              url={profession.slug}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
