import React, { useEffect, useState} from 'react'
import apiFilmes from '../services/apiFilmes'

const deputados = () => {

    const[deputados, setDeputados] = useState([])

    useEffect(() => {
      apiFilmes.get('/deputados').then(resultado => {
          setDeputados(resultado.data.dados)
      })
  }, [])

  return (
      <>
          <h1>deputados</h1>

          <div>
              {deputados.map(item => (
                  <img key={item.id} src={item.urlFoto} width="100px" />
              ))}
          </div>


      </>
  )
}

export default deputados