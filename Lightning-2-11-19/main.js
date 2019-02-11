
const jobFactory = displayJob => {
  return `
  <div class="jobList">
      <h2>${displayJob.organization}</h2>
      <p>Role: ${displayJob.role}</p>
      <p>Start Year: ${displayJob.start_year}</p>
      <p>End Year: ${displayJob.end_year}</p>
      <p>City: ${displayJob.city}</p>
      <p>State: ${displayJob.state}</p>
      <p>Synopsis: ${displayJob.Synopsis}</p>
  </div>
  `
}

const addJobsToDom = jobHTML => {
document.querySelector(".jobContainer").innerHTML += jobHTML
}