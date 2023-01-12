import styles from './Wrapper.module.css'
import { HTMLAttributes, ReactNode } from 'react'

interface WrapperProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

function Wrapper({children, ...props }: WrapperProps) {
  return (
    <div {...props}>
      <div className={styles.wrapper}>
        {children}
      </div>
    </div>
  )
}

export default Wrapper