console.log(`Simple Schedule Tracker`)
const Schedule = [
    { id: 1, name: "Mercy", date: "2025-06-10", time: "10:00 AM", appointment: "Doctor's Visit" },
    { id: 2, name: "David", date: "2025-06-11", time: "2:00 PM", appointment: "Business Meeting" },
    { id: 3, name: "Alex", date: "2025-06-12", time: "5:00 PM", appointment: "Gym Session" }
];
// to add a new appointment 
function addAppointment(id,name,date,time,appointment){
    return Schedule.push({
        id:id,
        name:name,
        date:date,
        time:time,
        appointment:appointment
    })
}
addAppointment(4,'karen',"2025-06-11","2:00pm","She just want's to disturb your life for no sane reason at all😒")
console.log(Schedule)
// to search for appointments by date 
function byDate (date){
    const filterByDate = Schedule.filter (s => s.date === date)
    if (filterByDate.length > 0){
        console.log(`Appointments scheduled for ${date}`)   
        filterByDate.forEach(s => {
            console.log(`${s.name} --- ${s.appointment}`)
        })
    }
    else {console.log(` No appointments scheduled for ${date}`)}
}

byDate('2025-06-11')