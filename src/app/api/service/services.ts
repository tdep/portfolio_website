import type {JobsResponse} from '@/portfolio_frontend/_types/Job'
import {devEndpoint, prodEndpoint} from "@/portfolio_frontend/_utils/endpoint";

export async function getJobs(): Promise<JobsResponse> {
  const req = await fetch(`${prodEndpoint}/users/1`);
  const data = await req.json();

  return data.experience as JobsResponse
}

// export async function getAllJobs(): Promise<JobsResponse> {
//   const res = await fetch()
// }