import { HTMLAttributes } from 'react'
import styles from './NewTask.module.css'
import plusIcon from '../assets/plus.svg'

interface NewTaskProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

function NewTask({className, ...props}: NewTaskProps) {
  return (
    <div className={styles.wrapper + ' ' + className} {...props}>
      <form>
        <input 
          className={styles.TextInput} 
          type="text" 
          placeholder='Adicione uma nova tarefa' 
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