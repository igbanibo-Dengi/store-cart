import React from 'react';

const FilterBtn = ({ variant, children, icon, ...restProps }) => {
  const getButtonStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gray-300 w-fit text-sm text-black py-2 px-4 font-semibold rounded-full';
      case 'secondary':
        return 'bg-transparent border border-gray-700 w-fit text-sm text-black py-2 px-4 font-semibold rounded-full';
      default:
        return '';
    }
  };

  const buttonStyles = `transition-colors flex items-center duration-200 focus:outline-none ${getButtonStyles()}`;

  return (
    <button className={buttonStyles} {...restProps}>
      {children}
      {icon && (
        <span className="ml-2">{icon}</span>
      )}
    </button>
  );
};

export default FilterBtn;
