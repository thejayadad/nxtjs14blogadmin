'use client'
import React, { useState } from 'react';
import BoxWrapper from './BoxWrapper';
import { useForm } from 'react-hook-form';
import { Button, Input } from "@nextui-org/react";
import { RegisterSchema } from '@/lib/schemas';
import { useTransition } from 'react';
import Link from 'next/link';
import { registerUser } from '@/lib/actions';

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onSubmit = (data) => {
    startTransition(() => {
      registerUser(data)
        .then((response) => {
          if (response.error) {
            setError(response.error); // Set error message received from server
            setSuccess(""); // Clear success message
          } else if (response.success) {
            setSuccess(response.success); // Set success message received from server
            setError(""); // Clear error message
          }
        })
        .catch((error) => {
          setError("An error occurred while processing your request."); // Set generic error message
          setSuccess(""); // Clear success message
        });
    });
  };

  return (
    <BoxWrapper
      headerLabel={'Register Below'}
      showSocial={true}
      backButtonHref={'/'}
      backButtonLabel={'Back To Home'}
    >
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
        <div className='space-y-4'>
          <Input
            type="email"
            disabled={isPending}
            {...register('email', { 
              required: 'Email is required', 
              pattern: { 
                value: RegisterSchema.email, 
                message: 'Invalid email format' // Custom error message for pattern validation
              } 
            })}
            label="Email"
            autoComplete='off'
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>
        <div className='space-y-4'>
          <Input
            type="password"
            disabled={isPending}
            {...register('password', { 
              required: 'Password is required' 
            })}
            label="Password"
            autoComplete='off'
          />
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}
        </div>
        <div className='space-y-4'>
          <Input
            type="text"
            disabled={isPending}
            {...register('name', { 
              required: 'Name is required', 
              pattern: { 
                value: RegisterSchema.name, 
                message: 'Invalid name format' // Custom error message for pattern validation
              } 
            })}
            label="Name"
            autoComplete='off'
          />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        </div>
        {error && <span className="text-red-500">{error}</span>} {/* Display error message */}
        {success && <span className="text-green-500">{success}</span>} {/* Display success message */}
        <Button
          className='w-full' type='submit'>Register</Button>
      </form>
      <span>
        Already have an account? <Link href={'/auth/login'}>Log in here</Link>
      </span>
    </BoxWrapper>
  );
}

export default RegisterForm;
