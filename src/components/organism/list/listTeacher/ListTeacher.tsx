import React from 'react'
import useListTeacher from './utils/useListTeacher'
import CardTeacher from '../../card/cardTeacher/CardTeacher'
import { Button, CircularProgress, Stack, Typography } from '@mui/material'
import useStyleListTeacher from './utils/useStyleListTeacher'
import ModalFormTeacher from '../../modal/modalFormTeacher/ModalFormTeacher'

type Props = {}

function ListTeacher({ }: Props) {

  const { 
    listTeachers, 
    openModalFormTeacher,
    setOpenModalFormTeacher, 
  } = useListTeacher({})

  const style = useStyleListTeacher({})

  return (
    <Stack sx={style.main}>
      <Stack sx={style.header}>
        <Typography variant={'h3'} component='h1'>List Teacher</Typography>
        <Button
          onClick={()=>setOpenModalFormTeacher(true)}
          variant="contained"
        >
          Add Teacher
        </Button>
        <ModalFormTeacher
          open={openModalFormTeacher}
          onClose={()=>setOpenModalFormTeacher(false)}
        />
      </Stack>
      <Stack sx={style.lists}>
        {
          listTeachers ?
            listTeachers?.length > 0 ?
              listTeachers?.map((teacher, index) => {

                return (
                  <CardTeacher
                    key={'list-teacher-' + index}
                    {...teacher}
                  />
                )

              })
              :
              <div>Data Empty</div>
            :
            <div>
              <CircularProgress />
              Loading...
            </div>


        }
      </Stack>
    </Stack>
  )
}

export default ListTeacher