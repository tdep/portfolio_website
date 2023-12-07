export default function Experience() {
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
            <ul>
              <li className={"job"}>Spotify</li>
              <li className={"job"}>Flatiron School</li>
              <li className={"job"}>Piano Technician</li>
              <li className={"job"}>Brooklyn College</li>
              <li className={"job"}>Roli</li>
              <li className={"job"}>Farming</li>
            </ul>
            <blockquote className={"experience-description"}>
              <p>
                Description Blurb will go in here.
              </p>
            </blockquote>
        </section>
      </article>
  )
}