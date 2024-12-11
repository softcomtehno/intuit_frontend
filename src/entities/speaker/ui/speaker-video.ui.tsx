import { Box, Button, Typography } from '@mui/material'
import { useState } from 'react'
import { PlayCircleFilledRounded } from '@mui/icons-material/'
import { CustomModal } from '~shared/ui/modal'

export const SpeakerVideo = ({ name, description, videoUrl, preview }) => {
  const [active, setActive] = useState(false)

  const getYouTubeEmbedUrl = (url) => {
    const videoId = url.split('v=')[1]?.split('&')[0]
    return videoId ? `https://www.youtube.com/embed/${videoId}?rel=0` : ''
  }

  return (
    <>
      <Box
        className="flex flex-col justify-between  bg-cover bg-no-repeat bg-center min-h-[350px] p-1 rounded-2xl"
        sx={{ background: `url("${preview}")` }}
        onClick={() => setActive(true)}
      >
        <Button onClick={() => setActive(true)} className="self-end">
          <PlayCircleFilledRounded className="text-green" fontSize="large" />
        </Button>
        <Box className="backdrop-blur-md bg-white/30 p-3">
          <Typography variant="body1" className="text-black font-bold">
            {name}
          </Typography>
          <Typography className="text-black font-medium" variant="body2">
            {description}
          </Typography>
        </Box>
      </Box>
      <CustomModal active={active} setActive={setActive}>
        <iframe
          className="w-full h-72"
          src={getYouTubeEmbedUrl(videoUrl)}
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