import { useState } from 'react'
import { StaffCard, staffQueries } from '~entities/staff'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { useTranslation } from 'react-i18next'
import 'swiper/css'
import 'swiper/css/pagination'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { Staff } from '~entities/staff/staff.types'
import { MenuItem, Select } from '@mui/material'

const StaffList = () => {
  const { t } = useTranslation()
  const [selectedPosition, setSelectedPosition] = useState<number | null>(29)

  const {
    data: staffData,
    isError: isStaffError,
    isLoading: isStaffLoading,
  } = staffQueries.useGetStaffs()
  const {
    data: positionsData,
    isSuccess: isPositionsSuccess,
    isError: isPositionsError,
    isLoading: isPositionsLoading,
  } = staffQueries.useGetStaffPositions()

  if (isStaffLoading || isPositionsLoading) {
    return <div>{t('homepage.loading.loading')}</div>
  }

  if (isStaffError || isPositionsError) {
    return <div>{t('homepage.loading.error')}</div>
  }

  const filterData = staffData?.data.filter((staff: Staff) => {
    if (staff.position.id == selectedPosition) {
      return staff
    }
  })

  return (
    <div>
      {/* Навигация по стажу */}
      <div className="position-navigation flex justify-start my-4 lg:hidden">
        {isPositionsSuccess && (
          <ButtonGroup
            sx={{
              '& .MuiButtonGroup-grouped:not(:last-of-type)': {
                borderRight: '1px solid green', // Зеленый цвет
              },
            }}
            variant="contained"
            aria-label="position navigation"
          >
            {positionsData.data.map(
              (position: { id: number; title: string; level: number }) => (
                <Button
                  key={position.id}
                  className={` ${
                    selectedPosition === position.id
                      ? 'bg-blue text-white'
                      : 'bg-green'
                  }`}
                  onClick={() => setSelectedPosition(position.id)}
                >
                  {position.title}
                </Button>
              )
            )}
          </ButtonGroup>
        )}
      </div>
      <div>
        <Select
          value={selectedPosition}
          className="mt-5 hidden lg:block"
          onChange={(e) => setSelectedPosition(e.target.value)}
        >
          {positionsData?.data.map(
            (position: { id: number; title: string; level: number }) => (
              <MenuItem key={position.id} value={position.id}>
                {position.title}
              </MenuItem>
            )
          )}
        </Select>
      </div>

      <Swiper
        className="py-10 px-1 staff-list lg:pb-28"
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={2.5}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2.5,
          },
        }}
      >
        {filterData &&
          filterData.map((staff: Staff) => (
            <SwiperSlide key={staff.id} className="shadow-lg rounded-lg">
              <StaffCard {...staff} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}

export default StaffList
