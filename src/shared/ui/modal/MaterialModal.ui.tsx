import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { CloseRounded } from '@mui/icons-material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export const MaterialModal = ({ children, open, setOpen }) => {
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <CloseRounded
              onClick={() => setOpen(false)}
              color='grey'
              sx={{
                position: 'absolute',
                right: 16,
                top: 16,
                cursor: 'pointer',
              }}
            ></CloseRounded>
          </Box>
          <Box>{children}</Box>
        </Box>
      </Modal>
    </div>
  )
}
