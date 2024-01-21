import Select from 'react-select';
import useBreakpoints from '../../hooks/useBreakpoints';
import { categories, cookingTime } from '../../utils/data';
import {
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';

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
  menu: (baseStyles: any) => ({
    ...baseStyles,
    width: isTablet ? '132px' : '123px',
    height: isTablet ? '162px' : '144px',
    borderRadius: '6px',

    boxShadow: '0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074)',
  }),
  menuList: (baseStyles: any) => ({
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

type Props<T extends FieldValues> = {
  type: 'category' | 'cookingTime';
} & UseControllerProps<T>;

const SmallSelect = <T extends FieldValues>({
  type,
  ...controllerProps
}: Props<T>) => {
  const { isTablet } = useBreakpoints();
  const {
    field: { onChange },
  } = useController(controllerProps);

  return (
    <Select
      onChange={
        type === 'category'
          ? (newValue) => onChange(newValue?.value)
          : (newValue) => onChange(parseInt(newValue?.value))
      }
      placeholder={type === 'category' ? 'Breakfast' : '15 min'}
      options={type === 'category' ? categories : cookingTime}
      isSearchable={false}
      styles={styles(isTablet)}
    />
  );
};

export default SmallSelect;
