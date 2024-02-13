'use client'
import { useCurrentRole } from '@/lib/useCurrentRole'
import React from 'react'

const AdminPage = () => {
    const role = useCurrentRole()
  return (
    <div>AdminPage
        {role}
    </div>
  )
}

export default AdminPage