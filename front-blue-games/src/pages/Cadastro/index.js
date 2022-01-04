import React from 'react'

const Cadastro = () => {
  return (
    <div className='container'>
      <div className='card mt-4'>
        <div className='card-title'>
          <h3 className='m-3'>Cadastro de Games</h3>
        </div>
        <div className='card-body'>
          <form>
            <div className='row mb-4'>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='nome'>Nome do Game:</label>
                  <input id='nome' className='form-control' type='text' placeholder='Digite o nome do game' name='nome'/>
                </div>
              </div>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='plataforma'>Plataforma do Game:</label>
                  <input id='plataforma' className='form-control' type='text' placeholder='Digite a plataforma do game' name='plataforma'/>
                </div>
              </div>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='valor'>Valor do Game:</label>
                  <input id='valor' className='form-control' type='text' placeholder='Digite o valor do game' name='valor'/>
                </div>
              </div>
            </div>
            <div className='row mb-4'>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='genero'>Genero do Game:</label>
                  <input id='genero' className='form-control' type='text' placeholder='Digite o genero do game' name='genero'/>
                </div>
              </div>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='nota'>Nota do Game:</label>
                  <input id='nota' className='form-control' type='text' placeholder='Digite a nota do game' name='nota'/>
                </div>
              </div>
              <div className='col-4'>
                <div className='form-group'>
                  <label htmlFor='ano'>Ano do Game:</label>
                  <input id='ano' className='form-control' type='text' placeholder='Digite o ano do game' name='ano'/>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-4'>
                <button className='btn btn-success me-2'>Enviar</button>
                <button className='btn btn-outline-primary'>Voltar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cadastro
