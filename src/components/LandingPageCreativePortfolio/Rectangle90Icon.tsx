import { memo, SVGProps } from 'react';

const Rectangle90Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 169 101' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path opacity={0.01} fillRule='evenodd' clipRule='evenodd' d='M0 101V0h169v101H0Z' fill='#fff' />
  </svg>
);

const Memo = memo(Rectangle90Icon);
export { Memo as Rectangle90Icon };
