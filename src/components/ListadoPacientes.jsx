import React from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({pacientes}) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>

      {pacientes && pacientes.length ? (
        <>
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
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>No Hay Pacientes</h2>
          <p className='text-lg mt-5 mb-10 text-center'> 
              Comienza Agregando Pacientes {''}
            <span className='font-bold text-amber-700'>Y administralos aqui</span>
          </p>
        
        </>
      )}

      

      
    

    </div>
  )
}

export default ListadoPacientes