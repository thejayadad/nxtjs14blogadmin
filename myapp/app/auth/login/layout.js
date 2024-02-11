import React from 'react'

const layout = ({children}) => {
  return (
    <div className='h-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary'>
        {children}
    </div>
  )
}

export default layout