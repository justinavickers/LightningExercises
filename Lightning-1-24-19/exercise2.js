fetch("https://spyproxy.bangazon.com/student/commit/https://api.github.com/users/justinavickers/events")
.then(events => events.json())
.then(parsedEvents => {
    console.log(parsedEvents[2].payload.commits[0].message)
    //look at the console.log for your latest "Push Event"
    //parse that index in the array, and print your latest commit message to the DOM
})