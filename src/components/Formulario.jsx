import React from 'react'

const Formulario = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5 '>

      <h2 className='font-black text-center text-3xl'>
        Seguimiento Pacientes
      </h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Agrega Pacientes y {""} 
        <span className='font-bold text-amber-700'>
          Administralos
        </span>
      </p>
      <form className='bg-white shadow-md rounded-lg py-10 mb-10 px-5 border-2'>

        <div className='mb-5'>
          <label htmlFor='paciente' className='block text-gray-700 uppercase font-bold'>Apellido y Nombre Paciente</label>
          <input 
            id='paciente'
            type="text"
            placeholder='Apellido y Nombre del Paciente' 
            className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md'
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Email</label>
          <input 
            id='email'
            type="email"
            placeholder='Email Paciente' 
            className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md'
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='positivo' className='block text-gray-700 uppercase font-bold'>Fecha Diagnostico Positivo</label>
          <input 
            id='positivo'
            type="date"
            className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md'
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='Sintomas' className='block text-gray-700 uppercase font-bold'>Sintomas</label>
          <textarea className='border-2 w-full mt-2 p-2 rounded-md text-gray-500' id='sintomas' placeholder='Describe los sintomas'/>
         <input className='bg-amber-700 w-full mt-2 p-3 text-white rounded-md hover:bg-indigo-700 transition-all cursor-pointer' type="submit" value='Agregar paciente' />
        </div>

        
        
        

      </form>
    </div>
  )
}

export default Formulario