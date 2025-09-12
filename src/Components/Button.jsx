import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = 'font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200';
  
  const variants = {
    primary: 'bg-[#2E6F40] text-white hover:bg-[#255a33] focus:ring-[#68BA7F]',
    secondary: 'bg-white text-[#2E6F40] border-2 border-[#2E6F40] hover:bg-[#F0F8F2] focus:ring-[#68BA7F]',
    outline: 'bg-transparent text-[#2E6F40] border-2 border-[#2E6F40] hover:bg-[#F0F8F2] focus:ring-[#68BA7F]',
    ghost: 'bg-transparent text-[#2E6F40] hover:bg-[#F0F8F2] focus:ring-[#68BA7F]',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
