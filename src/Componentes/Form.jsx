import { useState } from 'react'
import Button from './Button'
import styles from '../styles/Form.module.css'

const Form = ({ setEstilo, setNombre, setMostrarCard }) => {
   const [datosForm, setDatosForm] = useState({
      nombre: '',
      estilo: '',
   })
   const [error, setError] = useState(false)
   const [isSubmit, setIsSubmit] = useState(false)

   const handleSubmit = event => {
      event.preventDefault()

      if (
         datosForm.nombre.trim().length >= 3 &&
         datosForm.estilo.trim().length >= 6
      ) {
         setNombre(datosForm.nombre)
         setEstilo(datosForm.estilo)
         setMostrarCard(true)
         setError(false)
         setDatosForm({ nombre: '', estilo: '' })
         setIsSubmit(true)
      } else {
         setError(true)
      }
   }

   return (
      <form className={styles.form_body} onSubmit={handleSubmit}>
         <div className={styles.form_input}>
            <label htmlFor='nombre'>Nombre</label>
            <input
               id='nombre'
               type='text'
               placeholder='Ingresa tu nombre'
               value={datosForm.nombre}
               onChange={event =>
                  setDatosForm({ ...datosForm, nombre: event.target.value })
               }
               disabled={isSubmit}
            />
         </div>
         <div className={styles.form_input}>
            <label htmlFor='estilo'>Estilo de música</label>
            <input
               id='estilo'
               type='text'
               placeholder='Estilo favorito'
               value={datosForm.estilo}
               onChange={event =>
                  setDatosForm({ ...datosForm, estilo: event.target.value })
               }
               disabled={isSubmit}
            />
         </div>
         <Button isSubmit={isSubmit} />
         {error && (
            <p className={styles.p_error}>Por favor, ingresa bien los datos</p>
         )}
      </form>
   )
}

export default Form
