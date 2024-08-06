'use client'

import React from 'react'
import { formatAmount } from '@/lib/utils'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <div className='w-full'>
      <CountUp 
        end={amount}
        decimals={2}
        decimal='.'
        prefix='$'
        duration={1}
      />
    </div>
  )
}

export default AnimatedCounter