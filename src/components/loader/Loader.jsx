import React from 'react'
import css from './loader.module.css'

function Loader() {
  return (
    <div className={css.wrapper}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif" alt="" />
    </div>
  )
}

export default Loader