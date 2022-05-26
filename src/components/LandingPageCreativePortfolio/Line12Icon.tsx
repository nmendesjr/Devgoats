import { memo, SVGProps } from 'react';

const Line12Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 50 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M2.123 2h46.052' stroke='#FAE824' strokeWidth={3} strokeLinecap='round' />
  </svg>
);

const Memo = memo(Line12Icon);
export { Memo as Line12Icon };
