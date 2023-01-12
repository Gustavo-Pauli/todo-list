import styles from './TaskList.module.css'

function TaskList() {
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
        
      </div>
    </div>
  )
}

export default TaskList