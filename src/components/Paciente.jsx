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

    </div>
  )
}

export default Paciente