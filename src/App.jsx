import { useState } from 'react'
import './App.css'
import Card from './Componentes/Card'
import Form from './Componentes/Form'

function App() {
   const [nombre, setNombre] = useState('')
   const [estilo, setEstilo] = useState('')
   const [mostrarCard, setMostrarCard] = useState(false)

   return (
      <>
         <h1>🎵 Tu música favorita </h1>
         <Form
            setEstilo={setEstilo}
            setNombre={setNombre}
            setMostrarCard={setMostrarCard}
         />
         {mostrarCard && <Card nombre={nombre} estilo={estilo} />}
      </>
   )
}

export default App
