'use client'
import { logout } from "@/lib/actions"

import React from 'react'

const LogoutButton = ({children}) => {
    const onClick = () => {
        logout()
    }
  return (
    <span onClick={onClick} className="cursor-pointer">
    {children}
  </span>
  )
}

export default LogoutButton