import Task from './Task'
import styles from './TaskList.module.css'
import { ITask } from '../App'

interface TaskListProps {
  tasks: ITask[];
  onDeleteTask: (taskId:string) => void;
}

function TaskList({ tasks, onDeleteTask }: TaskListProps) {
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

      <div className={styles.list}>
        {tasks.map((task: ITask) => {
          return (
            <Task 
              key={task.id}
              task={task}
              onDelete={onDeleteTask}
            />
          )
        })}
      </div>
    </div>
  )
}

export default TaskList