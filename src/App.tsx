import styles from './App.module.css'
import './global.css'
import logo from './assets/logo.svg'
import NewTask from './components/NewTask'
import TaskList from './components/TaskList'
import Wrapper from './components/Wrapper'

export interface ITask {
  id: string;
  compleated: boolean;
  content: string;
}

let tasks:ITask[] = [
  {
    id:'1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
    compleated: false,
    content: 'Terminar projeto todo-list da rocketseat'
  }
]


function App() {
  function onCreateNewTask() {
    
  }

  return (
    <>
      <header className={styles.header}>
        <img src={logo}></img>
      </header>

      <Wrapper>
        <NewTask onCreateNewTask={onCreateNewTask} className={styles.newTask} />
      </Wrapper>
      <Wrapper className={styles.taskListWrapper}>
        <TaskList tasks={tasks}/>
      </Wrapper>
    </>
  )
}

export default App
