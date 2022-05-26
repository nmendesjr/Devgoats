import { memo, SVGProps } from 'react';

const BackgroundIcon7 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 741 106' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path fillRule='evenodd' clipRule='evenodd' d='M0 105V0h812v105H0Z' fill='#1A1A1A' fillOpacity={0.01} />
    <path d='M.04.5H812.5M.04 105.5H812.5' stroke='#5E5E5E' />
  </svg>
);

const Memo = memo(BackgroundIcon7);
export { Memo as BackgroundIcon7 };
