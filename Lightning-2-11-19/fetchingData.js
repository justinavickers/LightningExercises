fetch("https://api.stevebrownlee.com/jobs/")
    .then(jobs => jobs.json())
    .then(parsedJobs => {
        console.table(parsedJobs)
       const allJobs = parsedJobs.results.reverse()
       allJobs.forEach(job => {
          const jobAsHTML = jobFactory(job)
          addJobsToDom(jobAsHTML)

      })
    })
