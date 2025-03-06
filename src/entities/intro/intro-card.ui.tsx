import { Box, Button, Typography } from '@mui/material'
import { useState } from 'react'
import { MaterialModal } from '~shared/ui/modal/MaterialModal.ui'
import { EventList } from '~widgets/events-list'
import { Quizizz } from '~widgets/quizizz'

export const IntroCard = ({ img, description }) => {
  const [modal, setModal] = useState(false)

  return (
    <>
      <section
        className="container border border-[gray]  h-[350px] w-full bg-no-repeat bg-center bg-cover rounded-xl flex flex-col justify-between p-10 md:bg-right text-left "
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* <Typography
          variant="h1"
          className="font-bold text-black text-[70px] max-w-[750px] sm:text-[40px] md:text-center md:text-[30px]"
        >
          {title}
        </Typography> */}
        {/* <EventList></EventList> */}

        <Box className="flex flex-col justify-between h-[100%] gap-5">
          <Typography
            variant="body1"
            className="text-black text-xl max-w-[550px] font-bold md:text-center"
          >
            {description}
          </Typography>
          <Button
            variant="contained"
            size="large"
            className="bg-green shadow-none self-start md:mx-auto"
            onClick={() => setModal(true)}
          >
            Подобрать программу
          </Button>
        </Box>
      </section>
      <MaterialModal open={modal} setOpen={setModal}>
        <Quizizz></Quizizz>
      </MaterialModal>
    </>
  )
}
