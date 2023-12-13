import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Api from './components/Api.jsx'
import Form from './components/Form.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <div className='bg-gray-950 px-10 pt-5 pb-5 '>
      
      <h3 className='text-gray-300 text-2xl font-title'>RICK AND MORTY PROJECT</h3>
      <p className='text-gray-400'>Este proyecto tiene la finalidad de comprender algunos conceptos de React para el desarrollo de Aplicaciones Web.</p>
      {/* Inciaremos con el uso de UseState y Evento Click */}
     
    </div>
    </>
  )
}

export default App
