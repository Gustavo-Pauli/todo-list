import Task from './Task'
import styles from './TaskList.module.css'
import { ITask } from '../App'

interface TaskListProps {
  tasks: ITask[];
}

function TaskList({ tasks }: TaskListProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.created} >
          Tarefas criadas <span>0</span>
        </div>
        <div className={styles.compleated} >
          Concluídas <span>0</span>
        </div>
      </div>

      <div>
        {tasks.map((task: ITask) => {
          return (
            <Task 
              key={task.id}
              id={task.id} 
              compleated={task.compleated} 
              content={task.content} 
            />
          )
        })}
      </div>
    </div>
  )
}

export default TaskList