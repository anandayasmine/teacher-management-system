import React from 'react'
import { TypeTeacher } from '../../list/listTeacher/utils/types'
import { Card, CardHeader } from '@mui/material'

type Props = TypeTeacher & {

}

const CardTeacher = ({
  id,
  email,
  first_name,
  last_name,
  avatar,
}: Props) => {

  const fullName = first_name + ' ' + last_name

  return (
    <Card>
      <CardHeader
        title={fullName}
        subheader={email}
      />
      <img src={avatar} alt={fullName + ' profile picture'} />
    </Card>
  )
}

export default CardTeacher