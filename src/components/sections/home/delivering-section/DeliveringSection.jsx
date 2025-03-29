'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import Image from 'next/image';
import DeliveringStat from './DeliveringStat';

const Counter = ({ value }) => {
  const [count, setCount] = useState(0);
  const isDecimal = value.includes('.');

  useEffect(() => {
    let start = 0;
    const end = parseFloat(value);
    if (start === end) return;

    const duration = 2000;
    const incrementTime = 50;
    const steps = duration / incrementTime;
    const stepSize = end / steps;

    const timer = setInterval(() => {
      start += stepSize;
      if (start >= end) {
        clearInterval(timer);
        setCount(end.toFixed(isDecimal ? 1 : 0));
      } else {
        setCount(parseFloat(start.toFixed(1)));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, isDecimal]);

  return <motion.span animate={{ opacity: [0, 1] }}>{count}{value.replace(/[0-9.]+/, '')}</motion.span>;
};

const DeliveringSection = () => {
  return (
    <div className='flex w-full flex-col items-center'>
      <div className='grid w-full max-w-7xl gap-10 px-6 py-20 md:grid-cols-[5.2fr_4.8fr]'>
        <div className='flex flex-col gap-5'>
          <h2 className='font-medium text-secondary md:text-xl'>
            Unlocking your brand's true potential
          </h2>
          <h1 className='text-2xl font-medium md:text-5xl md:leading-[3.8rem]'>
            Delivering high-quality digital experiences
          </h1>
          <h2 className='mb-3 text-custom-black/70 md:text-xl'>
            We are a product design and development agency. While in close
            partnership with our clients, we design and develop intuitive,
            reliable, and sustainable web solutions for business and social
            purposes.
          </h2>
          <PrimaryButton title='Reach Us Out' className='w-fit' />
        </div>
        <div className='grid sm:grid-cols-2 max-w-xl place-items-center gap-5'>
          <DeliveringStat
            title={<Counter value='80+' />}
            desc='Clients from different industries trust us.'
          />
          <Image
            src='/logo/logo-light.png'
            width={168}
            height={168}
            alt='logo'
            loading='lazy'
            className='hidden sm:flex'
            quality={100}
          />
          <DeliveringStat
            title={<Counter value='92%' />}
            desc='Satisfaction rate from our awesome customers.'
          />
          <DeliveringStat
            title={
              <div className='item-center flex'>
                <Counter value='4.9' />
                <span className=''>/</span>
                <Counter value='5.0' />
              </div>
            }
            desc='Average rating from our clients around the globe.'
          />
        </div>
      </div>
    </div>
  );
};

export default DeliveringSection;