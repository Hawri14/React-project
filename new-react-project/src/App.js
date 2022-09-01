import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([
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
])

//delete tasks
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==
  id))
}

//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) =>
     task.id === id ? { ...task, reminder:
       !task.reminder } : task
       )
       )
}

  return (
    <div className='container'>
      <Header  />
      <AddTask />
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete=
      {deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks'
      )}
    </div>
  );
}

export default App;