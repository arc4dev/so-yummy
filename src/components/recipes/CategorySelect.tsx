import React from 'react';
import Select from 'react-select';
import useBreakpoints from '../../hooks/useBreakpoints';

const categories = [
  { value: 'Breakfast', label: 'Breakfast' },
  { value: 'Beef', label: 'Beef' },
  { value: 'Chicken', label: 'Chicken' },
  { value: 'Dessert', label: 'Dessert' },
  { value: 'Lamb', label: 'Lamb' },
  { value: 'Miscellaneous', label: 'Miscellaneous' },
  { value: 'Pasta', label: 'Pasta' },
  { value: 'Pork', label: 'Pork' },
  { value: 'Seafood', label: 'Seafood' },
  { value: 'Side', label: 'Side' },
  { value: 'Starter', label: 'Starter' },
  { value: 'Vegetarian', label: 'Vegetarian' },
];

const cookingTime = [
  { value: '5', label: '5 min' },
  { value: '10', label: '10 min' },
  { value: '15', label: '15 min' },
  { value: '20', label: '20 min' },
  { value: '25', label: '25 min' },
  { value: '30', label: '30 min' },
  { value: '35', label: '35 min' },
  { value: '40', label: '40 min' },
  { value: '45', label: '45 min' },
  { value: '50', label: '50 min' },
  { value: '55', label: '55 min' },
  { value: '60', label: '60 min' },
  { value: '65', label: '65 min' },
  { value: '70', label: '70 min' },
  { value: '75', label: '75 min' },
  { value: '80', label: '80 min' },
  { value: '85', label: '85 min' },
  { value: '90', label: '90 min' },
  { value: '95', label: '95 min' },
  { value: '100', label: '100 min' },
  { value: '105', label: '105 min' },
  { value: '110', label: '110 min' },
  { value: '115', label: '115 min' },
  { value: '120', label: '120 min' },
];

const styles = (isTablet: boolean) => ({
  dropdownIndicator: () => ({
    color: 'var(--color-action)',
    width: '10px',
    height: '9px',
    cursor: 'pointer',
    marginLeft: '12px',
    marginBottom: '12px',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  control: () => ({
    display: 'flex',
    justifyContent: 'flex-end',
    marginLeft: 'auto',
    border: 'none',
    fontSize: isTablet ? '14px' : '12px',
    lineHeight: '1',
    marginBottom: '6px',
  }),
  valueContainer: () => ({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    color: 'inherit',
  }),
  placeholder: () => ({
    fontSize: isTablet ? '14px' : '12px',
    color: 'inherit',
  }),
  singleValue: () => ({
    color: 'var(--color-primary)',
    fontWeight: '400',
  }),
  option: (baseStyles, state) => ({
    fontSize: isTablet ? '14px' : '12px',
    lineHeight: '1.5',
    marginBottom: '4px',
    color: state.isSelected ? 'var(--color-action)' : 'rgba(0, 0, 0, 0.5)',

    '&:hover': {
      color: 'var(--color-action)',
    },
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    width: isTablet ? '132px' : '123px',
    height: isTablet ? '162px' : '144px',
    borderRadius: '6px',

    boxShadow: '0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074)',
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,

    width: isTablet ? '132px' : '123px',
    height: isTablet ? '162px' : '144px',
    padding: isTablet ? '8px 18px' : '8px 14px',
    borderColor: 'transparent',
    backgroundColor: '#ffffff',
    borderRadius: '6px',
    marginLeft: isTablet ? '-3px' : '3px',
    overflowY: 'scroll',
    cursor: 'pointer',
    '::-webkit-scrollbar-thumb': {
      backgroundColor: '#E7E5E5',
      height: '93px',
      width: '4px',
      borderRadius: '12px',
    },
    '::-webkit-scrollbar-track': {
      background: '#FFFFFF',

      borderRadius: '12px',
      width: '4px',
    },
    '::-webkit-scrollbar': {
      borderRadius: '12px',
      width: '4px',
    },
  }),
});

type Props = {
  type: 'category' | 'cookingTime';
  // value: string;
  // name: string;
  // onChange: (value: string) => void;
};

const SmallSelect = React.forwardRef(({ type }: Props, ref) => {
  const { isTablet } = useBreakpoints();

  return (
    <Select
      placeholder={type === 'category' ? 'Breakfast' : '15 min'}
      options={type === 'category' ? categories : cookingTime}
      styles={styles(isTablet)}
    />
  );
});

export default SmallSelect;
