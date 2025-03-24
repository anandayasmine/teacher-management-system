export type TypeTeacher = {
  id: number
  email: string,
  first_name: string,
  last_name: string,
  avatar: string,
}

export type TypeListTeacherAPI = {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: TypeTeacher[]
}

export type TypeFormTeacher = {
  name: string,
  job: string,
}