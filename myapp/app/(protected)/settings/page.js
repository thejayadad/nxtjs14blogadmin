import { auth, signOut } from '@/auth'
import { Button } from '@nextui-org/react'
import React from 'react'

const SettingsPage = async () => {
    const session = await auth()
  return (
    <div>SettingsPage
      {JSON.stringify(session)}
      <form
      action={async () => {
        'use server'
        await signOut()
      }} 
      >
        <Button
        type='submit'
        >
          Signout
        </Button>
      </form>
    </div>
  )
}

export default SettingsPage