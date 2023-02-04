import React from 'react'
import Input from '../../components/input/Input'
import css from './LoginPage.module.css'

function LoginPage() {
  return  (
  <div className={css.loginPage}>
    <div className={css.loginPart}>
    <h1 className={css.btn}>Instagram</h1>
    <Input  type='text' className={css.btn}/>
    <Input type="password" className={css.btn}/>
    <button className={css.btnLogin}>Login</button>
    <p className={css.btn}>Forgot your login details?</p> 
    </div>
    <br />
    <div className={css.accForgot}>
    <button className={css.buttons}>login as @bbjlbkjbkj</button>
    <p className={css.or}>or</p>
    <span> <p className={css.btn}>dont have account</p> <a className={css.btn} href="">Sign up</a></span>
    </div>
    <br /><br />
  </div>
  )
}

export default LoginPage