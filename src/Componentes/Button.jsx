import React from 'react'
import styles from '../styles/Button.module.css'

const Button = ({ isSubmit }) => {
   return <button disabled={isSubmit}>Enviar</button>
}

export default Button
