import { memo, SVGProps } from 'react';

const BackgroundIcon9 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 742 106' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path fillRule='evenodd' clipRule='evenodd' d='M.563 105V0h812.459v105H.562Z' fill='#1A1A1A' fillOpacity={0.01} />
    <path d='M1.04.5H813.5M1.04 105.5H813.5' stroke='#5E5E5E' />
  </svg>
);

const Memo = memo(BackgroundIcon9);
export { Memo as BackgroundIcon9 };
