import { v4 as uuidv4 } from 'uuid'
import { ChangeEvent, FormEvent, HTMLAttributes, useState } from 'react'
import styles from './NewTask.module.css'
import plusIcon from '../assets/plus.svg'
import { ITask } from '../App'

interface NewTaskProps extends HTMLAttributes<HTMLDivElement> {
  onCreateNewTask: (task:ITask) => void
  className?: string;
}

function NewTask({onCreateNewTask, className, ...props}: NewTaskProps) {
  const [textInput, setTextInput] = useState('')

  function handleCreateNewTask(event:FormEvent) {
    event.preventDefault();
    onCreateNewTask({id: uuidv4(), content: textInput, compleated: false});
    setTextInput('');
    (event.currentTarget.children[0] as HTMLInputElement).value = ''
  }

  function handleChangeTextInput(event:ChangeEvent<HTMLInputElement>) {
    setTextInput(event.target.value)
  }

  return (
    <div className={styles.wrapper + ' ' + className} {...props}>
      <form onSubmit={handleCreateNewTask}>
        <input 
          className={styles.TextInput} 
          type='text' 
          placeholder='Adicione uma nova tarefa' 
          name='content'
          onChange={handleChangeTextInput}
        />
        <button className={styles.Button} type="submit" disabled={textInput.trimStart() == '' ? true : false}>
          Criar <img src={plusIcon} height="16rem" width="16rem" />
        </button>
      </form>
    </div>
  )
}

export default NewTask