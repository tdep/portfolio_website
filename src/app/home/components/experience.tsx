import {getJobs} from "@/service/services";
import React, {useEffect, useState} from "react";
import {Job, JobsResponse} from "@/_types/Job";

//TODO: Add short overview of work to replace placeholder text - possibly even putting it into the JSON file
export default function Experience() {
  const [jobsResponse, setJobsResponse] = useState<JobsResponse>()
  useEffect( () => {
    getJobs().then(
        response => {
          setJobsResponse(response)
        }
    ).catch(e => console.log("----->", e))
  }, [])
  return (
      <article id={"experience"} className={"experience"}>
        <section className={"container"}>
          <h2>Work Experience</h2>
          <p>
            Each bullet point should have roll-over/click function to expand details.
            Details should open in a little box like the aside to the right within the work experience box.
          </p>
        </section>
        <section className={"jobs"}>
          {jobsResponse ? <JobsListComponent jobs={jobsResponse.jobs}/> : <h3>Loading .... </h3> }
          <blockquote className={"experience-description"}>
            {jobsResponse ? <JobsDescriptionComponent jobs={jobsResponse.jobs}/> : <h3>Loading ....</h3>}
          </blockquote>
        </section>
      </article>
  )
}
//TODO: Match description to job so they appear at the same time

type JobsComponentsProps = {
  jobs: Job[]
}
const JobsListComponent = (props: JobsComponentsProps) => {
  const {jobs} = props;
  return (
      <ul>
        {jobs.map(j => <li key={j.id} className={"job"}>{j.name}</li>)}
      </ul>
  )
}

const JobsDescriptionComponent = (props: JobsComponentsProps) => {
  const {jobs} = props;
  return (
      <>
        {jobs.map(j => <p key={j.id}>{j.description}</p>)}
      </>
  )
}
