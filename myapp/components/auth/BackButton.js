'use client'
import { Button } from '@nextui-org/button'
import Link from 'next/link'
import React from 'react'

const BackButton = ({href, label}) => {
  return (
    <Button
    className="font-normal w-full"
    >
    <Link href={href}>
        {label}
    </Link>
    </Button>
  )
}

export default BackButton