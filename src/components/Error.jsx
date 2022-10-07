import React from 'react'

export const Error = ({children}) => {
  return (
    <div className="bg-red-700 text-white text-center p-3 font-bold mb-3  rounded-md">
        <p className=''>{children}</p>
    </div>
  )
}

export default Error