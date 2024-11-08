import styles from '../styles/Card.module.css'

const Card = ({ nombre, estilo }) => {
   return (
      <div className={styles.card_body}>
         <div>
            Hola <span>{nombre}</span>,
         </div>
         <div>
            Tu estilo favorito de música es: <span>{estilo}</span>
         </div>
      </div>
   )
}

export default Card
