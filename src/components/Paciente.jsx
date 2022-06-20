import React from 'react'

const Paciente = ({paciente}) => {
  const {nombre, email, fecha, sintomas} = paciente;
  return (
    <div className='mx-5 my-10 bg-white shadow px-5 py-10 rounded-lg border-2'> 
        <p className='font-bold mb-3 uppercase text-gray-700'>
            Nombre: {""}
            <span className='font-normal normal-case'>{nombre}</span>
        </p>
        <p className='font-bold mb-3 uppercase text-gray-700'>
           email: {""}
            <span className='font-normal normal-case'>{email}</span>
        </p>
        <p className='font-bold mb-3 uppercase text-gray-700'>
           fecha diagnostico: {""}
            <span className='font-normal normal-case'>{fecha}</span>
        </p>
        <p className='font-bold mb-3 uppercase text-gray-700'>
           sintomas: {""}
            <span className='font-normal normal-case'>{sintomas}</span>
        </p>
        <div className='flex justify-between'>
          <button 
              type='button'
              className='py-2 px-10 bg-amber-700 hover:bg-amber-800 text-white font-bold uppercase rounded-lg '
          >
            editar    
          </button>
          <button 
              type='button'
              className='py-2 px-10 bg-red-700 hover:bg-red-800 text-white font-bold uppercase rounded-lg'
          >
            eliminar    
          </button>
        </div>

    </div>
  )
}

export default Paciente