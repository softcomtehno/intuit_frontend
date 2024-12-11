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
        className="flex flex-col justify-between bg-cover bg-no-repeat bg-center rounded-2xl"
        sx={{
          backgroundImage: `url("${preview}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '500px', // Фиксированная ширина
          height: '281px', // Высота соответствует соотношению 16:9
          cursor: 'pointer',
          position: 'relative',
        }}
        onClick={() => setActive(true)}
      >
        <Button
          onClick={(e) => {
            e.stopPropagation()
            setActive(true)
          }}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '50%',
          }}
        >
          <PlayCircleFilledRounded className="text-green" fontSize="large" />
        </Button>
        <Box
          className="backdrop-blur-md p-3"
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <Typography variant="body1" className="font-bold" sx={{ color: 'black' }}>
            {name}
          </Typography>
          <Typography variant="body2" className="font-medium" sx={{ color: 'black' }}>
            {description}
          </Typography>
        </Box>
      </Box>
      <CustomModal active={active} setActive={setActive}>
        <Box
          sx={{
            width: '800px', // Фиксированная ширина модального окна
            height: '450px', // Высота соответствует соотношению 16:9
            maxWidth: '100%', // Чтобы не выходить за границы экрана
            margin: '0 auto',
          }}
        >
          <iframe
            src={getYouTubeEmbedUrl(videoUrl)}
            title="YouTube video player"
            frameBorder="0"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '8px', // Закруглённые углы
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Box>
      </CustomModal>
    </>
  )
}
