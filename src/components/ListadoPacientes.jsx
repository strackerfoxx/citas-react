import React, { useState, useEffect } from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

        {pacientes && pacientes.length ? (
          <>
            <h2 className="font-black text-3xl text-center mt-10">
            Listado de Pacientes
            </h2>
            <p className='text-xl m-5 text-center mb-7'>
              Administra tus {''} 
              <span className="text-indigo-600 font-bold ">Pacientes y Citas</span>
            </p>

            { pacientes.map( (paciente) => (
                <Paciente 
                  key={paciente.id} 
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                  paciente={paciente}
                />
            ))}
          </>
        ) : 
        <>
          <h2 className="font-black text-3xl text-center mt-10">
            Agrega nuevos pacientes
          </h2>
          <p className='text-xl m-5 text-center mb-7'>
            Comienza agregando nuevos pacientes y {''} 
            <span className="text-indigo-600 font-bold ">apareceran en este lugar</span>
          </p>
        </>
        }

        

        
    </div>
  )
}

export default ListadoPacientes