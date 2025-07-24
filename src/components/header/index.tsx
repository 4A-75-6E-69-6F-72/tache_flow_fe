import { strSchema } from '@/types';
import 'react'
import { z } from 'zod';

type Props = {
  text: z.infer<typeof strSchema>;
};

const Header: React.FC<Props> = ({ text }) => {
  return <div className='w-full text-center justify-center'>
    {text}
  </div>
};

export default Header;