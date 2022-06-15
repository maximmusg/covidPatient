import React from 'react'

const Error = ({mensaje}) => {
  return (
    <div className='bg-red-600 text-white text-center p-3 mb-3 uppercase rounded font-bold'>
        <p>
           {mensaje}
        </p>
    </div>
  )
}

export default Error