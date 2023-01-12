import { v4 as uuidv4 } from 'uuid'
import { HTMLAttributes } from 'react'
import styles from './NewTask.module.css'
import plusIcon from '../assets/plus.svg'

interface NewTaskProps extends HTMLAttributes<HTMLDivElement> {
  onCreateNewTask: () => void
  className?: string;
}

function NewTask({onCreateNewTask, className, ...props}: NewTaskProps) {
  const id = uuidv4()

  function handleCreateNewTask() {
    onCreateNewTask()
  }

  return (
    <div className={styles.wrapper + ' ' + className} {...props}>
      <form>
        <input 
          className={styles.TextInput} 
          type="text" 
          placeholder='Adicione uma nova tarefa' 
          onSubmit={handleCreateNewTask}
        />
        <button 
          className={styles.Button}
          type="submit"
        >
          Criar <img src={plusIcon} height="16rem" width="16rem" />
        </button>
      </form>
    </div>
  )
}

export default NewTask