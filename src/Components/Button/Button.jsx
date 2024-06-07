import React from 'react'
import styles from "./Button.module.css"

const Button = ({title, onclick}) => {
  return (
    <div>
      <button onClick={onclick} className={styles.btn}>{title}</button>
    </div>
  )
}

export default Button
