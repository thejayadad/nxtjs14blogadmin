import BackButton from '@/components/auth/BackButton'
import React from 'react'

const AuthErrorPage = () => {
  return (
    <div>AuthErrorPage
    <BackButton
    label='Back To Login'
    href='/auth/login'
    />
    </div>
  )
}

export default AuthErrorPage