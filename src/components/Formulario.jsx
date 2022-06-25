import React from 'react'
import { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  useEffect(()=> {
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

 

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    console.log('Enviando Formulario...')

    //validando el formulario 

    if([nombre, email, fecha, sintomas].includes('')){
      console.log('Hay al menos un campo vacio')
      setError(true)
      return;
    } 
    setError(false)

    //objeto de pacientes
    const objetoPaciente = {
      nombre, 
      email, 
      fecha, 
      sintomas,

    }
    //Funcionamiento de boton "EDITAR"
    if(paciente.id){
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map(pacientesState => pacientesState.id === paciente.id ? objetoPaciente : pacientesState)
      setPacientes(pacientesActualizados)
      setPaciente({})
    } else{
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    

    //reiniciar el formulario

    setNombre('')
    setEmail('')
    setFecha('')
    setSintomas('')
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

        {error && <Error mensaje='Todos los campos son obligatorios'/>}

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
          value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente' } 
          
          />
        </div>

        
        
        

      </form>
    </div>
  )
}

export default Formulario