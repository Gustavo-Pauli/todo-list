import styles from './Task.module.css'
import { ITask } from '../App'
import TrashIcon from '../assets/trashIcon'
import { ChangeEvent, useState } from 'react'

interface TaskProps {
  task: ITask;
  onDelete: (taskId:string) => void; 
}

function Task({task, onDelete }: TaskProps) {
  const [checked, setChecked] = useState(task.compleated)

  function handleCheckBoxChange(event:ChangeEvent<HTMLInputElement>) {
    event.target.checked = !checked
    setChecked(!checked)
  }

  function handleDeleteTask() {
    onDelete(task.id)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.checkboxWrapper}>
        <input 
          type='checkbox' 
          className={styles.checkbox} 
          checked={checked} 
          onChange={handleCheckBoxChange} 
        />
      </div>
      <p className={checked ? styles.checkedP : ''}>{task.content}</p>
      <button className={styles.deleteButton} onClick={handleDeleteTask}>
        <TrashIcon />
      </button>
    </div>
  )
}

export default Task