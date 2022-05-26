import { memo, SVGProps } from 'react';

const Rectangle240Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 120 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path fillRule='evenodd' clipRule='evenodd' d='M4 40a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h116v40H4Z' fill='#FAE824' />
  </svg>
);

const Memo = memo(Rectangle240Icon);
export { Memo as Rectangle240Icon };
