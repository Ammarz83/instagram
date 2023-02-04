import React from 'react'
import css from './input.module.css'

function Input(props) {
  return (
    <label className={css.labelInp}>
        <input type={props.type} />
    </label>
  )
}

export default Input