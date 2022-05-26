import { memo, SVGProps } from 'react';

const BackgroundIcon11 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 1400 770' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path fillRule='evenodd' clipRule='evenodd' d='M0 770V0h1400v770H0Z' fill='#1A1A1A' />
  </svg>
);

const Memo = memo(BackgroundIcon11);
export { Memo as BackgroundIcon11 };
