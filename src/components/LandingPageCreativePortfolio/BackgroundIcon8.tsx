import { memo, SVGProps } from 'react';

const BackgroundIcon8 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 742 107' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M.563 105.5V.5h812.459v105H.562Z'
      fill='#1A1A1A'
      fillOpacity={0.01}
    />
    <path d='M1.04 1H813.5M1.04 106H813.5' stroke='#5E5E5E' />
  </svg>
);

const Memo = memo(BackgroundIcon8);
export { Memo as BackgroundIcon8 };
