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
        id:'1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bec',
        compleated: false,
        content: "Marcar essa tarefa como completa"
      },
      {
        id:'1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
        compleated: true,
        content: "Implementar 'adicionar uma nova tarefa'"
      },
      {
        id:'1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bee',
        compleated: true,
        content: "Implementar 'Marcar e desmarcar uma tarefa como concluída'"
      },
      {
        id:'1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bef',
        compleated: true,
        content: "Implementar 'Remover uma tarefa da listagem'"
      },
      {
        id:'1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4beg',
        compleated: true,
        content: "Implementar 'Mostrar o progresso de conclusão das tarefas'"
      }
    ]
  )

  function createNewTask(task:ITask) {
    setTaskList([...taskList, task])
  }

  function deleteTask(taskId:string) {
    setTaskList(taskList.filter((task) => (task.id != taskId)))
  }

  function handleCheck(taskId:string) {
    const newTaskList = taskList.map((task) => {
      if (task.id === taskId) {
        return {id: task.id, compleated: !task.compleated, content: task.content}
      } else {
        return task
      }
    })
    setTaskList(newTaskList);
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
        <TaskList tasks={taskList} onDeleteTask={deleteTask} onCheckTask={handleCheck}/>
      </Wrapper>
    </>
  )
}

export default App
