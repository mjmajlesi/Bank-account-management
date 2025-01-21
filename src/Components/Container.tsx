import React from 'react'

export interface Ichildren {
  children : React.ReactNode
}
function Container({children} : Ichildren) {
  return (
    <div className=' md:mx-24 mx-[25px]'>
        {children}
    </div>
  )
}

export default Container