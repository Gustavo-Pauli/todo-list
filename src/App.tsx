import styles from './App.module.css'
import './global.css'
import logo from './assets/logo.svg'
import NewTask from './components/NewTask'
import TaskList from './components/TaskList'
import Wrapper from './components/Wrapper'
import { useState } from 'react'

export interface ITask {
  id: string;
  compleated: boolean;
  content: string;
}

function App() {
  const [taskList, setTaskList] = useState(
    [
      {
        id:'1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
        compleated: false,
        content: 'Terminar projeto todo-list da rocketseat'
      },
      {
        id:'1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bee',
        compleated: false,
        content: 'Etiam scelerisque turpis mi, venenatis tincidunt lectus tincidunt vitae. Donec tristique nibh nibh, in bibendum turpis pharetra vel. Vivamus feugiat pellentesque lorem'
      },
      {
        id:'1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bef',
        compleated: true,
        content: 'Aumentar a hitbox da checkbox'
      },
      {
        id:'1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4beg',
        compleated: true,
        content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
      },
    ]
  )

  function createNewTask(task:ITask) {
    setTaskList([...taskList, task])
  }

  function deleteTask(taskId:string) {
    setTaskList(taskList.filter((task) => (task.id != taskId)))
  }

  return (
    <>
      <header className={styles.header}>
        <img src={logo}></img>
      </header>

      <Wrapper>
        <NewTask className={styles.newTask} onCreateNewTask={createNewTask} />
      </Wrapper>
      <Wrapper className={styles.taskListWrapper}>
        <TaskList tasks={taskList} onDeleteTask={deleteTask} />
      </Wrapper>
    </>
  )
}

export default App
