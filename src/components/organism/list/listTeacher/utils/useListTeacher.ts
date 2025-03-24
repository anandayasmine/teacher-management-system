import React from 'react'
import { TypeFormTeacher, TypeListTeacherAPI, TypeTeacher } from './types'
import { API_LIST_URL } from '@/constants/endpoint'

type Props = {}
const initialStates = {
  listTeachers: undefined ,
  openModalFormTeacher: false,
}

const useListTeacher = (props: Props) => {

  const [listTeachers, setListTeachers] = React.useState<undefined | TypeTeacher[]>(initialStates.listTeachers)
  const [openModalFormTeacher, setOpenModalFormTeacher] = React.useState<boolean>(initialStates.openModalFormTeacher)

  const getData = async () => {

    try {

      const response = await fetch(API_LIST_URL)
      const data: TypeListTeacherAPI = await response.json()

      return data?.data


    }
    catch (err) {

    }

  }

  const addTeacher = async ({data}:{
    data: TypeFormTeacher
  }) => {

    try {

      const rawResponse = await fetch(API_LIST_URL, {
        method: 'POST',
        body: JSON.stringify(data),
      })
      const response = await rawResponse.json()
      assignListTeacher() // update list on hit
      return response

    }
    catch (err) {

    }

  }

  const assignListTeacher = async () => {

    const newListTeacher = await getData()
    setListTeachers(newListTeacher as TypeTeacher[])

  }

  React.useEffect(() => {
    (
      async function () {
        await assignListTeacher()
      }
    )()
  }, [])

  return {
    listTeachers,
    setListTeachers,
    addTeacher,
    openModalFormTeacher,
    setOpenModalFormTeacher,
  }
}

export default useListTeacher