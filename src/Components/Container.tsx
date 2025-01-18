import React, { ReactNode } from 'react'

function Container({children} : {children : ReactNode}) {
  return (
    <div className=' md:mx-24 mx-[25px]'>
        {children}
    </div>
  )
}

export default Container