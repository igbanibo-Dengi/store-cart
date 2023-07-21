import React from 'react';

const Button = ({ variant, children, ...restProps }) => {
  const getButtonStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary hover:bg-white hover:text-primary hover:outline hover:outline-primary w-fit text-white font-semibold py-2 px-4 rounded-full';
      case 'secondary':
        return 'bg-transparent hover:bg-primary hover:text-white w-fit border border-gray-700 text-gray-800 font-semibold py-2 px-4 rounded-full';
      case 'filterbtn':
        return 'bg-gray-300 w-fit text-sm text-black py-2 px-4  font-semibold rounded-full'
      default:
        return '';
    }
  };

  const buttonStyles = `transition-colors duration-200 focus:outline-none ${getButtonStyles()}`;

  return (
    <button className={buttonStyles} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
