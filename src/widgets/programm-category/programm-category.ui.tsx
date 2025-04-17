import { Button, CircularProgress, Typography, Pagination } from '@mui/material'
import Select from 'react-select'
import { ProfessionCard } from '~entities/profession'
import { useTranslation } from 'react-i18next'
import { programQueries } from '~entities/programs'
import { facultyQueries } from '~entities/faculties'
import { degreeQueries } from '~entities/degree'
import { useState } from 'react'
import { FacultySchema } from '~entities/faculties/faculty.types'

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

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const totalPages = Math.ceil(
    (filteredProfessions?.length || 0) / itemsPerPage
  )
  const paginatedProfessions = filteredProfessions?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleDegreeChange = (selectedOption) => {
    setSelectedDegree(selectedOption?.value || null)
    setCurrentPage(1) 
  }

  const handleFacultyChange = (selectedOption) => {
    setSelectedFaculty(selectedOption?.value || null)
    setCurrentPage(1) 
  }

  const handleClearFilters = () => {
    setSelectedDegree(null)
    setSelectedFaculty(null)
    setCurrentPage(1) 
  }

  const handlePageChange = (event, value) => {
    setCurrentPage(value)
  }

  if (isError) {
    return <div>{t("loading.error")}</div>
  }

  if (isLoading || isDegreeLoading || isFacultyLoading) {
    return (
      <div className="flex flex-col gap-3 items-center justify-center h-[400px]">
        <CircularProgress className="text-blue" />
        <Typography variant="h6">{t("loading.loading")}</Typography>
      </div>
    )
  }

  return (
    <div className="my-20 rounded-lg ">
      <Typography
        variant="h3"
        component="h3"
        className="text-[2.5rem] font-semibold text-[#333] lg:text-[40px] md:!text-[30px]"
      >
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
                (faculty: FacultySchema) => faculty.value === selectedFaculty
              ) || null
            }
          />
          <Button
            variant="outlined"
            className="shadow-none bg-blue text-white px-10 max-w-[250px] lg:w-full"
            onClick={handleClearFilters}
          >
            {t("loading.clear")}
          </Button>
        </div>
        <div className="flex flex-wrap justify-between gap-7 lg:gap-4  lg:justify-center">
          {paginatedProfessions?.map((profession, index) => (
            <ProfessionCard
              key={index}
              degree={profession.educationLevel[0].title}
              faculties={profession.faculty[0].title}
              title={profession.title}
              url={profession.slug}
            />
          ))}
        </div>
        {totalPages > 1 && (
          <div className="flex justify-center mt-5">
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              sx={{
                '& .MuiPaginationItem-root.Mui-selected': {
                  color: 'white',
                  backgroundColor: '#00956F',
                },
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}
