import { memo, SVGProps } from 'react';

const BackgroundIcon6 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 1296 642' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10 642c-5.523 0-10-4.477-10-10V10C0 4.477 4.477 0 10 0h1276c5.52 0 10 4.477 10 10v622c0 5.523-4.48 10-10 10H10Z'
      fill='#232323'
    />
  </svg>
);

const Memo = memo(BackgroundIcon6);
export { Memo as BackgroundIcon6 };
