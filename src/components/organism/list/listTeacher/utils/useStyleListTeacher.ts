import React from 'react'

type Props = {}

const useStyleListTeacher = (props: Props) => {

  const flexRow = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 1,

  }

  return {
    main: {
      gap: 2,
    },
    lists: {
      ...flexRow,
    },
    header: {
      ...flexRow,
      justifyContent: 'space-between'
    }
  }
}

export default useStyleListTeacher