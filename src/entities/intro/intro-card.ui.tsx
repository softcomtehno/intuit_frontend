import { Box, Button, Typography } from '@mui/material'
import { t } from 'i18next'
import { useState } from 'react'
import { MaterialModal } from '~shared/ui/modal/MaterialModal.ui'
import { EventList } from '~widgets/events-list'
import { Quizizz } from '~widgets/quizizz'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 650,
  height: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
}

export const IntroCard = ({ img, description }) => {
  const [modal, setModal] = useState(false)

  return (
    <>
      <section
        className="container border border-[gray]  h-[350px] w-full bg-no-repeat bg-center bg-cover rounded-xl flex flex-col justify-between p-10 md:bg-right text-left "
        style={{ backgroundImage: `url(${img})` }}
      >
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
           {t("institutesPage.pickProgram")}
          </Button>
        </Box>
      </section>
      {/* <MaterialModal open={modal} setOpen={setModal}>
        <Quizizz></Quizizz>
      </MaterialModal> */}
    </>
  )
}
