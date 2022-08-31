const tasks = [
    {
        id: 1,
        text: 'Doctors Appointment',
        day: '31/08/2022',
        reminder: true,

},
{
    id: 2,
    text: 'Go to School',
    day: '01/09/2022',
    reminder: true,
},
{
    id: 3,
    text: 'Get Food',
    day: '04/09/2022',
    reminder: false,
},
]

const Tasks = () => {
    return (
      <>
        {tasks.map((task) => (
          <h3 key={task.id}>{task.text}</h3>
        ))}
      </>
    )
  }

export default Tasks
