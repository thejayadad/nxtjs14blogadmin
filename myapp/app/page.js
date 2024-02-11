import React from 'react'
import {Button} from "@nextui-org/react";
import LoginButton from '@/components/auth/LoginButton';


const HomePage = () => {
  return (
   <main className='flex h-full flex-col items-center justify-center bg-gradient-to-br from-primary to-secondary'>
<div className='text-center space-y-6'>
<h1  className="font-bold text-3xl md:text-6xl text-grey">
      Site Name
    </h1>
    <p className='text-tiny uppercase font-bold'>
      The Admin Description
    </p>
    <div>
      <Button>
        <LoginButton>
          SignIn
        </LoginButton>
      </Button>
    </div>
</div>
   </main>
  )
}

export default HomePage