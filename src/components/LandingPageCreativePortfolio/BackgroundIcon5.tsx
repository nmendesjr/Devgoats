import { memo, SVGProps } from 'react';

const BackgroundIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 368 331' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path fillRule='evenodd' clipRule='evenodd' d='M0 331V0h368v331H0Z' fill='#262525' />
  </svg>
);

const Memo = memo(BackgroundIcon5);
export { Memo as BackgroundIcon5 };
