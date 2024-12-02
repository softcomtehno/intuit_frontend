import { Button, CircularProgress, Typography } from '@mui/material'
import Select from 'react-select'
import { ProfessionCard } from '~entities/profession'
import { useTranslation } from 'react-i18next'
import { programQueries } from '~entities/programs'
import { facultyQueries } from '~entities/faculties'
import { degreeQueries } from '~entities/degree'
import { useState } from 'react'

export const ProgramCategory = ({ data: propdata, degreeId, facultyId }) => {
  const { t } = useTranslation()

  const {
    data: serverData,
    isLoading,
    isError,
  } = programQueries.useGetPrograms(degreeId, facultyId)
  const {
    data: facultyData,
    isFacultyLoading,
    isFacultyError,
  } = facultyQueries.useGetFaculties()
  const {
    data: degreeData,
    isDegreeLoading,
    isDegreeError,
  } = degreeQueries.useGetDegrees()

  const sortedFaculties =
    facultyData?.data
      .sort((a, b) => a.id - b.id)
      .map((faculty) => ({
        value: faculty.id,
        label: faculty.titleRu || faculty.title,
      })) || []

  const sortedDegrees =
    degreeData?.data
      .sort((a, b) => a.id - b.id)
      .map((degree) => ({
        value: degree.id,
        label: degree.titleRu || degree.title,
      })) || []

  const [selectedDegree, setSelectedDegree] = useState(degreeId || null)
  const [selectedFaculty, setSelectedFaculty] = useState(facultyId || null)

  const professions = propdata || serverData

  const filteredProfessions = professions?.data.filter((profession) => {
    const matchesDegree = selectedDegree
      ? profession.educationLevel.some((level) => level.id === selectedDegree)
      : true
    const matchesFaculty = selectedFaculty
      ? profession.faculty.some((faculty) => faculty.id === selectedFaculty)
      : true
    return matchesDegree && matchesFaculty
  })

  if (isError) {
    return <div>Произошла ошибка</div>
  }

  if (isLoading || isDegreeLoading || isFacultyLoading) {
    return (
      <div className="flex flex-col gap-3 items-center justify-center h-[400px]">
        <CircularProgress className="text-blue" />
        <Typography variant="h6">Загрузка</Typography>
      </div>
    )
  }

  const handleDegreeChange = (selectedOption) => {
    setSelectedDegree(selectedOption?.value || null)
  }

  const handleFacultyChange = (selectedOption) => {
    setSelectedFaculty(selectedOption?.value || null)
  }

  const handleClearFilters = () => {
    setSelectedDegree(null)
    setSelectedFaculty(null)
  }

  return (
    <div className="my-20 rounded-lg">
      <Typography variant="h3" component="div" className="font-semibold">
        {t('homepage.degrees.programs')}
      </Typography>
      <div>
        <div className="flex gap-5 my-5 lg:flex-col items-center">
          <Select
            options={sortedDegrees}
            placeholder="Выберите уровень "
            className="w-[350px] lg:w-full"
            onChange={handleDegreeChange}
            value={
              sortedDegrees.find((degree) => degree.value === selectedDegree) ||
              null
            }
          />
          <Select
            options={sortedFaculties}
            placeholder="Выберите институт"
            className="w-[350px] lg:w-full"
            onChange={handleFacultyChange}
            value={
              sortedFaculties.find(
                (faculty) => faculty.value === selectedFaculty
              ) || null
            }
          />
          {/* <Button
            variant="contained"
            className="shadow-none bg-blue px-10 w-[350px] lg:w-full"
          >
            {t('homepage.buttons.applyButton')}
          </Button> */}
          <Button
            variant="outlined"
            className="shadow-none bg-blue text-white px-10 max-w-[250px] lg:w-full"
            onClick={handleClearFilters}
          >
            Очистить
          </Button>
        </div>
        <div className="flex flex-wrap gap-4">
          {filteredProfessions?.map((profession, index) => (
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
