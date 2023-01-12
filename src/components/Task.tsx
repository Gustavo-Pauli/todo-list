import styles from './Task.module.css'
import { ITask } from '../App'
import trashIcon from '../assets/trash.svg'

function Task({id, compleated, content}: ITask) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.checkboxWrapper}>
        <input type='checkbox' className={styles.checkbox}/>
      </div>
      <p>{content}</p>
      <button>
        <img src={trashIcon}></img>
      </button>
    </div>
  )
}

export default Task