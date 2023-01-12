import styles from './App.module.css'
import './global.css'
import logo from './assets/logo.svg'
import NewTask from './components/NewTask'
import TaskList from './components/TaskList'
import Wrapper from './components/Wrapper'

function App() {
  return (
    <>
      <header className={styles.header}>
        <img src={logo}></img>
      </header>

      <Wrapper>
        <NewTask className={styles.newTask} />
      </Wrapper>
      <Wrapper className={styles.taskListWrapper}>
        <TaskList />
      </Wrapper>
    </>
  )
}

export default App
