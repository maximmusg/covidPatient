import React from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({pacientes}) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
      <p className='text-lg mt-5 mb-10 text-center'> 
        Administra tus {''}
        <span className='font-bold text-amber-700'>Pacientes</span>
      </p>

      {pacientes.map((paciente)=>{
        return(
          <Paciente
            key={paciente.id}
            paciente={paciente}
          />
        )
      })}

      
    

    </div>
  )
}

export default ListadoPacientes