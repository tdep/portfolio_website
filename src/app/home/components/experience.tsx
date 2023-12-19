import {getJobs} from "@/service/services";
import React, {useEffect, useState} from "react";
import {Job, JobsResponse} from "@/_types/Job";

//TODO: Add short overview of work to replace placeholder text - possibly even putting it into the JSON file
export default function Experience() {
  const [jobsResponse, setJobsResponse] = useState<JobsResponse>();
  const [activeJob, setActiveJob] = useState("6");
  useEffect( () => {
    getJobs().then(
        response => {
          setJobsResponse(response)
        }
    ).catch(e => console.log("----->", e))
  }, []);

  type JobsComponentsProps = {
    jobs: Job[]
  }

  function handleJobSelect(e:any) {
    setActiveJob(e.target.id);
  }

  const JobsListComponent = (props: JobsComponentsProps) => {
    const {jobs} = props;
    return (
        <ul className={"jobs-list"}>
          {jobs.map(
              j => j.id === activeJob ? <li id={j.id} key={j.id} className={"job-active"} onClick={handleJobSelect}>{j.name}</li>: <li id={j.id} key={j.id} className={"job"} onClick={handleJobSelect}>{j.name}</li>)}
        </ul>
    )
  }

  const JobsDescriptionComponent = (props: JobsComponentsProps) => {
    const {jobs} = props;
    return (
        <>
          {jobs.map(j => j.id === activeJob ? <p id={j.id} key={j.id} className={"job-description"}>{j.description}</p>:null)}

        </>
    )
  }

  return (
      <article id={"experience"} className={"experience"}>
        <section className={"container"}>
          <h2>Work Experience</h2>
          <p>
            I'm lucky to have had a variety of work experiences over the years in all sorts of disciplines.
            Many have aligned with passions but a few have been particularly poignant. I've listed those below.
          </p>
        </section>
        <section className={"jobs-container"}>
          {jobsResponse ? <JobsListComponent jobs={jobsResponse.jobs}/> : <h3>Loading .... </h3> }
          <blockquote className={"job-description-container"}>
            {jobsResponse ? <JobsDescriptionComponent jobs={jobsResponse.jobs}/> : <h3>Loading ....</h3>}
          </blockquote>
        </section>
      </article>
  )
}