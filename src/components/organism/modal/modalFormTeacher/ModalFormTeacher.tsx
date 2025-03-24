import { Modal, ModalProps, Paper, Stack, TextField } from '@mui/material'
import React from 'react'

type Props = {
  open: boolean,
  onClose: () => void,
}

const ModalFormTeacher = ({ open, onClose }: Props) => {


  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Paper>
        <Stack>
          <TextField label='name'/>
          <TextField label='job'/>
        </Stack>
      </Paper>

    </Modal>
  )
}

export default ModalFormTeacher