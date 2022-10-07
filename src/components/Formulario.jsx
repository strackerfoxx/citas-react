import React from 'react'
import {useState, useEffect} from  'react'
import Error from './Error'


const Formulario = ({ pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [error ,setError] = useState(false)
  
  
  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setNombre       (paciente.nombre)
      setPropietario  (paciente.propietario)
      setEmail        (paciente.email)
      setDate         (paciente.date)
      setSintomas     (paciente.sintomas)

    }
  }, [paciente])

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion del formulario
    if([nombre, propietario, email, date, sintomas].includes('')){
      return setError(true);
    }

    const generarId = () => {
      const random = Math.random().toString(36).substr(2);
      const date = Date.now().toString(36);
      const id = random + date;

      return id;
    }

    setError(false);

    //Objeto de paciente
    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      date, 
      sintomas,
    }
    
    if(paciente.id){
      // Editando registro
      objetoPaciente.id = paciente.id

      const actu = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

      setPacientes(actu)
      setPaciente({})

    }else{
      //Nuevo Registro
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente]);
    }

    
    

    setNombre('')
    setPropietario('')
    setEmail('')
    setDate('')
    setSintomas('')
  }


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center mt-10">
          Seguimiento Pacientes
        </h2>
        <p className='text-lg mt-5 text-center mb-7'>
          Añade Pacientes y {''}
          <span className='text-indigo-700 font-bold'>Administralos</span>
        </p>

        <form action="" className='bg-white shadow-md rounded-lg py-10 px-5 mb-0' onSubmit={handleSubmit}>

          {/* mensaje de error */}
          {error &&  <Error><p>ERROR TODOS los datos son OBLIGATORIOS</p></Error> }
          <div className='mb-5'>
            <label htmlFor="mascota" className='block text-center text-gray-800 uppercase font-bold'>
              Nombre Mascota
            </label>
            <input type="text" id='mascota' placeholder='Nombre de la Mascota' value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
          </div>

          <div className='mb-5'>
            <label htmlFor="propietario" className='block text-center text-gray-800 uppercase font-bold'>
              Nombre Propietario 
            </label>
            <input type="text" id='propietario'  placeholder='Nombre del Propietario' 
            onChange={(e) => setPropietario(e.target.value)} value={propietario}
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
          </div>

          <div className='mb-5'>
            <label htmlFor="email" className='block text-center text-gray-800 uppercase font-bold'>
              Email 
            </label>
            <input type="email" id='email'  placeholder='Email de contacto' 
            onChange={(e) => setEmail(e.target.value)} value={email}
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
          </div>

          <div className='mb-5'>
            <label htmlFor="date" className='block text-center text-gray-800 uppercase font-bold'>
              Fecha del alta
            </label>
            <input type="date" id='date' onChange={(e) => setDate(e.target.value)} value={date}
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
          </div>

          <div className='mb-5'>
            <label htmlFor="sintomas" className='block text-center text-gray-800 uppercase font-bold'>
              sintomas 
            </label>
            <textarea id="sintomas" placeholder='describe los sintomas' onChange={(e) => setSintomas(e.target.value)}
            value={sintomas}
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'/>
          </div>

          <input type="submit" value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente' }
          className="bg-indigo-600 w-full p-3 rounded-lg text-white uppercase 
          font-bold hover:bg-indigo-800 cursor-pointer transition-all"/>
        </form>
    </div>
  )
}

export default Formulario