import React from 'react'

const Paciente = () => {
  return (
    <div className='mx-5 my-10 bg-white shadow px-5 py-10 rounded-lg border-2'> 
        <p className='font-bold mb-3 uppercase text-gray-700'>
            Nombre: {""}
            <span className='font-normal normal-case'>Maxi</span>
        </p>
        <p className='font-bold mb-3 uppercase text-gray-700'>
           email: {""}
            <span className='font-normal normal-case'>correo@correo.com</span>
        </p>
        <p className='font-bold mb-3 uppercase text-gray-700'>
           fecha diagnostico: {""}
            <span className='font-normal normal-case'>09/06/2022</span>
        </p>
        <p className='font-bold mb-3 uppercase text-gray-700'>
           sintomas: {""}
            <span className='font-normal normal-case'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed error non sit possimus deserunt labore impedit harum, nihil, ullam dolorum veritatis vel numquam ab debitis temporibus, sunt maiores animi enim?</span>
        </p>

    </div>
  )
}

export default Paciente