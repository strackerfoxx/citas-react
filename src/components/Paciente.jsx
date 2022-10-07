import React from 'react'
import { useEffect } from 'react'
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombre, propietario, email, date, sintomas, id} = paciente 
  const handleEliminar = () => {
    const respuesta = confirm('deseas eliminar este paciente?')

    if(respuesta) {
      eliminarPaciente(id)
    }
  }
  
  return (
    <div className="mx-5 my-7 bg-white shadow-md ml-5 px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre de la Mascota: {''}
        <span className="font-normal normal-case">{nombre}</span>
        </p>
        
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre del Propietario: {''}
        <span className="font-normal normal-case">{propietario}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email de contacto: {''}
        <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha del alta: {''}
        <span className="font-normal normal-case">{date}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
        <span className="font-normal normal-case">{sintomas}</span>
        </p>

        <div className="flex justify-between">
          <button type='button' className='py-2 px-10 bg-blue-600 hover:bg-indigo-800 m-2 
          rounded-md text-white font-bold uppercase transition-all' 
          onClick={() => setPaciente(paciente)}
          >
            Editar
          </button>


          <button className='py-2 px-10 bg-red-600 hover:bg-red-800 m-2 
          rounded-md text-white font-bold uppercase transition-all'
          type='button' onClick={handleEliminar}
          >Eliminar</button>
        </div>
    </div>
  )
}

export default Paciente

