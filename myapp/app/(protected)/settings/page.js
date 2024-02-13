'use client'
import { Button, Card, CardHeader, Input } from '@nextui-org/react';
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { settings } from '@/lib/actions';
import { useTransition } from 'react';

const SettingsPage = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { data: session, status } = useSession();
  const [isPending, startTransition] = useTransition();
  const { user } = session || {};

  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const formData = new FormData(event.target); // Get form data
    const updatedValues = {
      name: formData.get('name'),
      email: formData.get('email'),
    };
    startTransition(() => {
      settings(session.user.id, updatedValues)
        .then((response) => {
          if (response.error) {
            setError(response.error);
            setSuccess('');
          } else if (response.success) {
            setSuccess(response.success);
            setError('');
          }
        })
        .catch((error) => {
          setError(error.message || 'An error occurred while updating user information');
          setSuccess('');
        });
    });
  };

  

  if (status === 'loading') return <div>Loading...</div>;

  return (
    <div className='bg-white'>
      <Card>
        <CardHeader>
          <p className='text-2xl font-semibold text-center'>Settings</p>
        </CardHeader>
        <form onSubmit={onSubmit} className='space-y-4'>
          <Input
            type='text'
            name='name'
            label='Name'
            defaultValue={user?.name || ''}
            autoComplete='off'
          />
          <Input
            type='email'
            name='email'
            label='Email'
            defaultValue={user?.email || ''}
            autoComplete='off'
          />
          <Button disabled={isPending} type='submit'>
            Update
          </Button>
        </form>
        {error && <span className='text-red-500'>{error}</span>}
        {success && <span className='text-green-500'>{success}</span>}
      </Card>
    </div>
  );
};

export default SettingsPage;
