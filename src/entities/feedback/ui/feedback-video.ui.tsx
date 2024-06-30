import { Box, Button, Typography } from '@mui/material'
import { useState } from 'react'
import { PlayCircleFilledRounded } from '@mui/icons-material/'
import { CustomModal } from '~shared/ui/modal'

export const FeedbackVideo = ({ name, description, link, img }) => {
  const [active, setActive] = useState(false)

  return (
    <>
      <Box
        className="flex flex-col justify-between  bg-cover bg-no-repeat bg-center min-h-96 p-5 rounded-2xl"
        sx={{ background: `url("${img}")` }}
        onClick={() => setActive(true)}
      >
        <Button onClick={() => setActive(true)} className="self-end">
          <PlayCircleFilledRounded className="text-green" fontSize="large" />
        </Button>
        <Box>
          <Typography variant="body1" className="text-white font-bold">
            {name}
          </Typography>
          <Typography className="text-gray " variant="body2">
            {description}
          </Typography>
        </Box>
      </Box>
      <CustomModal active={active} setActive={setActive}>
        <iframe
          className="w-full h-72"
          src={link}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </CustomModal>
    </>
  )
}
