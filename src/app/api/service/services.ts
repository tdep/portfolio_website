import type {JobsResponse} from '@/app/(portfolio_frontend)/_types/Job'
import {devEndpoint, prodEndpoint} from "@/app/(portfolio_frontend)/_utils/endpoint";

export async function getJobs(): Promise<JobsResponse> {
  const req = await fetch(`${prodEndpoint}/users/1`);
  const data = await req.json();

  return data.experience as JobsResponse
}

// export async function getAllJobs(): Promise<JobsResponse> {
//   const res = await fetch()
// }