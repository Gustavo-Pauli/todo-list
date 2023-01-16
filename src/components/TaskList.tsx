import Task from './Task'
import styles from './TaskList.module.css'
import { ITask } from '../App'

interface TaskListProps {
  tasks: ITask[];
  onDeleteTask: (taskId:string) => void;
  onCheckTask: (taskId:string) => void;
}

function TaskList({ tasks, onDeleteTask, onCheckTask }: TaskListProps) {
  const createdTasksNum = tasks.length;
  const compleatedTasksNum = tasks.reduce((total, task) => {
    if (task.compleated) {
      return total + 1
    } else {
      return total
    }
  }, 0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.created} >
          Tarefas criadas <span>{createdTasksNum}</span>
        </div>
        <div className={styles.compleated} >
          Concluídas <span>{compleatedTasksNum + ' de ' + createdTasksNum}</span>
        </div>
      </div>

      <div className={styles.list}>
        {tasks.map((task: ITask) => {
          return (
            <Task 
              key={task.id}
              task={task}
              onDelete={onDeleteTask}
              onCheck={onCheckTask}
            />
          )
        })}
      </div>
    </div>
  )
}

export default TaskList