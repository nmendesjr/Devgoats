import { memo, SVGProps } from 'react';

const LineIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 368 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 3h368' stroke='#A8A8A8' strokeWidth={5} />
  </svg>
);

const Memo = memo(LineIcon2);
export { Memo as LineIcon2 };
