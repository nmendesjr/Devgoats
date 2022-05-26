import { memo, SVGProps } from 'react';

const LineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 369 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M.5 2.5h368' stroke='#A8A8A8' strokeWidth={5} />
  </svg>
);

const Memo = memo(LineIcon);
export { Memo as LineIcon };
