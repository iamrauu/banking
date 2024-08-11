import React, { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button'
import { PlaidLinkOptions, usePlaidLink } from 'react-plaid-link'
import { StyledString } from 'next/dist/build/swc';
import { useRouter } from 'next/navigation';
import { createLinkToken, exchangePublicToken } from '@/lib/actions/user.actions';
import Image from 'next/image';

const PlaidLink = ({user , variant}: PlaidLinkProps) => {
  const router = useRouter();
  const [token, setToken] = useState('');

  useEffect(() => {
    const getLinkToken = async () => {
      const data = await createLinkToken(user);
      setToken(data?.linkToken);
    }

    getLinkToken();
  }, [])
  
  const onSuccess = useCallback(async (public_token: string) => {
    await exchangePublicToken({
      publicToken: public_token,
      user
    })
    router.push('/');
  }, [user]);

  const config: PlaidLinkOptions = {
    token,
    onSuccess
  }

  const {open, ready} = usePlaidLink(config);

  return (
    <>
      {variant === 'primary' ? (
        <Button
          className='plaidlink-primary'
          onClick={() => open()}
          disabled={!ready}
        >
          Connect bank
        </Button>
      ): variant === 'ghost' ? (
        <Button 
          className='plaidlink-ghost' 
          onClick={() => open()}
          variant={`ghost`}
        >Connect bank</Button>
      ): (
        <Button className='plaidlink-default' onClick={() => open()}>
          <Image 
            src='/icons/connect-bank.svg'
            alt='Connect bank'
            width={24}
            height={24}
          />
          <p className='hidden text-16 font-semibold text-black-2 xl:block'>
            Connect bank
          </p>
        </Button>
      )}
    </>
  )
}

export default PlaidLink