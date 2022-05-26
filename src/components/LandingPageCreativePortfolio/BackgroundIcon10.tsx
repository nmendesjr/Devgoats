import { memo, SVGProps } from 'react';

const BackgroundIcon10 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 741 107' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path fillRule='evenodd' clipRule='evenodd' d='M0 105.5V.5h812.459v105H0Z' fill='#1A1A1A' fillOpacity={0.01} />
    <path d='M.478 1h812.459M.478 106h812.459' stroke='#5E5E5E' />
  </svg>
);

const Memo = memo(BackgroundIcon10);
export { Memo as BackgroundIcon10 };
