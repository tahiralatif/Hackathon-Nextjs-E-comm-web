import React from 'react';
import Image from 'next/image';

interface ButtonProps {
  text: string;
  icon?: string;
  onClick?: () => void; 
  className?: string; 
}

const CustomButton: React.FC<ButtonProps> = ({ text, icon, onClick, className }) => {
  return (
    <button
      className={`bg-buttoncolor hover:bg-[#02a0aeea] h-[52px] w-[171px] py-[17px] px-[24px] flex items-center rounded-[10px] ${className}`}
      onClick={onClick}
    >
      <p className='text-[#FFFFFF] pr-[20px]'>{text}</p>
      {icon && (
        <Image 
          className='' 
          src={icon} 
          alt={`${text} Icon`} 
          width={20} 
          height={20} 
        />
      )}
    </button>
  );
};

export default CustomButton;
