import React from 'react'
import Navbar from './_components/Navbar'

const layout = ({children}) => {
  return (
    <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary to-secondary">
        <Navbar />
        {children}
    </div>
  )
}

export default layout