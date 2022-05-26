import { memo, SVGProps } from 'react';

const BackgroundIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 1366 4934' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path fillRule='evenodd' clipRule='evenodd' d='M0 4934V0h1366v4934H0Z' fill='#1A1A1A' />
  </svg>
);

const Memo = memo(BackgroundIcon);
export { Memo as BackgroundIcon };
