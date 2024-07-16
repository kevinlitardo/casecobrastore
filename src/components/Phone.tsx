import { cn } from '@/lib/utils';
import Image from 'next/image';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  src: string;
  dark?: boolean;
}

const Phone = ({ src, dark = false, className, ...rest }: Props) => {
  return (
    <div
      className={cn(
        'relative pointer-events-none z-50 overflow-hidden',
        className
      )}
      {...rest}
    >
      <Image
        className="pointer-events-none z-50 select-none"
        src={
          dark
            ? '/phone-template-dark-edges.png'
            : '/phone-template-white-edges.png'
        }
        alt="phone image"
        width={1000}
        height={1000}
      />

      <div className="absolute -z-10 inset-0">
        <Image
          className="object-cover min-w-full min-h-full"
          src={src}
          alt="overlaying phone image"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default Phone;
