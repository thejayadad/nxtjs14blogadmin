'use client'
import React from 'react';
import BoxWrapper from './BoxWrapper';
import { useForm } from 'react-hook-form';
import { Button, Input } from "@nextui-org/react";
import { LoginSchema } from '@/lib/schemas';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Your login logic here
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
            {...register('email', { required: 'Email is required', pattern: { value: LoginSchema.email } })}
            label="Email"
            autoComplete='off'
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>
        <div className='space-y-4'>
          <Input
            type="password"
            {...register('password', { required: 'Password is required' })}
            label="Password"
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
