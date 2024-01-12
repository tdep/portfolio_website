import type {JobsResponse} from '@/_types/Job'
import {devEndpoint, experimentalEndpoint} from "@/_utils/endpoint";

export async function getJobs(): Promise<JobsResponse> {
  const req = await fetch(`${devEndpoint}`);
  const data = await req.json();

  return data.experience as JobsResponse
}
