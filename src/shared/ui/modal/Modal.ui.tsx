import { Box, IconButton, Typography } from '@mui/material'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded'

export function CustomModal({ active, setActive, children }) {
  return (
    <div
      onClick={() => setActive(false)}
      className={`fixed z-50 inset-0 bg-black/70 flex items-center justify-center ${
        active ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      } duration-300`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative bg-white w-full h-full max-w-[90%] max-h-[90%] rounded-lg overflow-hidden flex flex-col ${
          active ? 'scale-100' : 'scale-0'
        } duration-300`}
      >
        <Box className="absolute top-3 right-3">
          <IconButton onClick={() => setActive(false)}>
            <CancelRoundedIcon className="text-white bg-black rounded-full" />
          </IconButton>
        </Box>
        <Box className="flex-grow flex items-center justify-center">
          {children}
        </Box>
      </div>
    </div>
  )
}
