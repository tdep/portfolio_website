export type Job = {
  id: string
  name: string
  title: string
  start_date: string
  end_date: string
  description: string
}


export type JobsResponse = {
  jobs: Job[]
}