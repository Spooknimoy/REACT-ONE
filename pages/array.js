import React from 'react'
import Pagina from '../Component/Pagina'


const array = () => {

  const carros = [
    'Opala',
    'Classic',
    'Ka',
    'Omega',
    'Fuscão',
  ]

  return (
    <>
      <Pagina titulo="Arrays">

        <ol>
          {carros.map(item => (
            <li><p>{item}</p></li>
          ))}
        </ol>

      </Pagina>
    </>
  )
}

export default array