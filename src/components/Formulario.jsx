import React from 'react'
import { useState } from 'react'

const Formulario = () => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Enviando Formulario...')
  }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5 '>

      <h2 className='font-black text-center text-3xl'>
        Seguimiento Pacientes
      </h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Agrega Pacientes y {""} 
        <span className='font-bold text-amber-700'>
          Administralos
        </span>
      </p>
      <form  onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 mb-10 px-5 border-2'>

        <div className='mb-5'>
          <label htmlFor='paciente' className='block text-gray-700 uppercase font-bold'>Apellido y Nombre Paciente</label>
          <input 
            id='paciente'
            type="text"
            placeholder='Apellido y Nombre del Paciente' 
            className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Email</label>
          <input 
            id='email'
            type="email"
            placeholder='Email Paciente' 
            className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='positivo' className='block text-gray-700 uppercase font-bold'>Fecha Diagnostico Positivo</label>
          <input 
            id='positivo'
            type="date"
            className='border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md'
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='Sintomas' className='block text-gray-700 uppercase font-bold'>Sintomas</label>
          <textarea 
            className='border-2 w-full mt-2 p-2 rounded-md text-gray-500' 
            id='sintomas' 
            placeholder='Describe los sintomas'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}  
          />
         <input 
          className='bg-amber-700 w-full mt-2 p-3 text-white rounded-md hover:bg-indigo-700 transition-all cursor-pointer' 
          type="submit" 
          value='Agregar paciente' 
          
          />
        </div>

        
        
        

      </form>
    </div>
  )
}

export default Formulario