import React from 'react'
import styles from "./Button.module.css"

const Button = ({title, onclickBtn}) => {
  return (
    <div>
      <button onClick={onclickBtn} className={styles.btn}>{title}</button>
    </div>
  )
}

export default Button
