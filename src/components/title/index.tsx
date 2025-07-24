import 'react'
import { z } from 'zod';

const nameSchema = z.string();

type Props = {
  text: z.infer<typeof nameSchema>;
};

const Title: React.FC<Props> = ({ text }) => {
  return <div className='w-[90%] text-center justify-center py-4 bg-[#FAFAFA] fixed top-0'>
    <p className='text-3xl'>{text}</p>
  </div>
};

export default Title;