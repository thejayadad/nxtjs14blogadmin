'use client'
import React from 'react'
import {Card, CardHeader, CardBody, Image, CardFooter} from "@nextui-org/react";
import HeaderText from './HeaderText';
import SocialIcons from './SocialIcons';


const BoxWrapper = ({ children, headerLabel, backButtonLabel, backButtonHref, showSocial }) => {
    return (
    <Card className="py-4 px-2">
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <HeaderText label={headerLabel} />
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        {children}
      </CardBody>
        {showSocial && (
            <CardFooter>
                <SocialIcons />
            </CardFooter>
        )}
    </Card>
  )
}

export default BoxWrapper