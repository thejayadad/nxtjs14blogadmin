'use client'
import React from 'react'
import {FcGoogle} from "react-icons/fc"
import {Button} from "@nextui-org/react";

const SocialIcons = () => {
  return (
    <div className=' flex items-center w-full gap-x-2'>
        <Button
        className='w-full'
        variant="light"
        onClick={() => {}}
        >
            <FcGoogle className='h-5 w-5' /> <span>Google Login</span>
        </Button>
    </div>
  )
}

export default SocialIcons