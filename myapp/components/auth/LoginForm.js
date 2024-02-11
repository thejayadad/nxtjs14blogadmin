'use client'
import React from 'react';
import BoxWrapper from './BoxWrapper';
import { useForm } from 'react-hook-form';
import { LoginSchema } from '@/lib/schemas'; // Import your Zod schema
import { Button, Input } from "@nextui-org/react";

const LoginForm = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    try {
      // Validate form data using Zod schema
      const validatedData = LoginSchema.parse(data);
      console.log(validatedData); // Log validated data to console
    } catch (error) {
      console.error(error.errors); // Log validation errors to console
    }
  };

  return (
    <BoxWrapper
      headerLabel={'Login Below'}
      showSocial={true}
      backButtonHref={'/'}
      backButtonLabel={'Back To Home'}
    >
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
  <div className='space-y-4'>
    <Input
      type="email"
      name='email' // Match this with the schema key 'email'
      label="Email"
      placeholder='jace.jace@gmail.com'
      control={control}
      autoComplete='off'
    />
    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
  </div>
  <div className='space-y-4'>
    <Input
      type="password"
      name='password' // Match this with the schema key 'password'
      label="Password"
      control={control}
      autoComplete='off'
    />
    {errors.password && <span className="text-red-500">{errors.password.message}</span>}
  </div>
  <Button className='w-full' type='submit'>Login</Button>
</form>

    </BoxWrapper>
  );
}

export default LoginForm;
