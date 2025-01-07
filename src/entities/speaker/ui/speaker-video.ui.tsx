import { Box, Button, Typography } from '@mui/material'
import { PlayCircleFilledRounded } from '@mui/icons-material/'
import { MaterialModal } from '~shared/ui/modal'
import { useState } from 'react'

export const SpeakerVideo = ({ name, description, preview, videoUrl }) => {
  // const getYouTubeEmbedUrl = (url) => {
  //   const videoId = url.split('v=')[1]?.split('&')[0]
  //   return videoId
  //     ? `https://www.youtube.com/embed/${videoId}?rel=0`
  //     : 'https://www.youtube.com/watch?v=2Y-Xa1h77KI'
  // }
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <Box
        className="flex flex-col justify-between bg-cover bg-no-repeat bg-center rounded-2xl "
        sx={{
          backgroundImage: `url("${preview}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '281px', // Высота соответствует соотношению 16:9
          cursor: 'pointer',
          position: 'relative',
        }}
        onClick={handleOpen} // Используем handleOpen из пропсов
      >
        <Button
          onClick={(e) => {
            e.stopPropagation()
            handleOpen() // Используем handleOpen из пропсов
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
          <Typography
            variant="body1"
            className="font-bold"
            sx={{ color: 'black' }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            className="font-medium"
            sx={{ color: 'black' }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
      {/* <Modal
        open={open}
        onClose={handleClose}
        BackdropProps={{
          style: {
            backgroundColor: 'rgba(0, 0, 0, 0.05)', // Черный с прозрачностью 50%
            border: 'none',
          },
        }}
      >
        <Box
          sx={{
            width: '800px', // Фиксированная ширина модального окна
            height: '500px', // Высота соответствует соотношению 16:9
            maxWidth: '100%', // Чтобы не выходить за границы экрана
            margin: '50px auto',
            padding: 3,
            background: 'white',
          }}
        >
          <Box
            className="flex justify-between items-center w-full"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography className="font-medium" variant="h4">
              Отзыв {name}
            </Typography>
            <IconButton onClick={handleClose}>
              <CancelRoundedIcon />
            </IconButton>
          </Box>
          <iframe
            src={getYouTubeEmbedUrl(videoUrl)}
            title="YouTube video player"
            frameBorder="0"
            style={{
              width: '100%',
              height: '80%',
              borderRadius: '8px', // Закруглённые углы
              marginTop: '30px',
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Box>
      </Modal> */}
      <MaterialModal
        videoUrl={videoUrl}
        handleClose={handleClose}
        open={open}
      ></MaterialModal>
    </>
  )
}
