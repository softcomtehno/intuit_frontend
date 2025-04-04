import { Box, Button, Modal, Paper, Typography } from '@mui/material'
import { useState } from 'react'
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
      <Paper
        elevation={1}
        className="container   h-[350px] w-full bg-no-repeat bg-center bg-cover rounded-xl flex flex-col justify-between p-10 md:bg-right text-left 
        border-opacity-95 border-[1px] border-[gray]
        "
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
            Подобрать программу
          </Button>
        </Box>
      </Paper>
      {/* <MaterialModal open={modal} setOpen={setModal}> */}
      <Modal open={modal} onClose={() => setModal(false)}>
        <Box sx={style}>
          <Quizizz onClose={setModal}></Quizizz>
        </Box>
      </Modal>
    </>
  )
}
