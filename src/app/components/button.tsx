import * as React from 'react';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({children, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`flex justify-center items-center overflow-hidden gap-1 self-stretch px-1.5 py-1.5 rounded-[50px] text-sm 
        font-semibold bg-amber-400 border border-black border-solid
        shadow-[3px_3px_0px_2px_rgba(0,0,0,1)] text-black`}
      type="button"
    >
      {children}
    </button>
  );
};