import React from 'react';
import AsyncSelect from 'react-select/async';
import useBreakpoints from '../../hooks/useBreakpoints';
import _ from 'lodash';
import { getIngredientsByQuery } from '../../services/recipesApi';

const styles = (isTablet: boolean) => ({
  control: () => ({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: isTablet ? '59px' : '53px',
    borderRadius: '6px',
    backgroundColor: '#F5F5F5',
    padding: isTablet ? '16px 18px' : '16px',
    cursor: 'pointer',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: () => ({
    color: 'var(--color-action)',
    width: '10px',
    height: '5px',
    cursor: 'pointer',
    marginLeft: '12px',
    marginBottom: '12px',
  }),
  valueContainer: (baseStyles: any) => ({
    ...baseStyles,
    padding: '0',
    margin: '0',
    height: isTablet ? '27px' : '20px',
  }),
  input: (baseStyles: any) => ({
    ...baseStyles,
    caretColor: '#BDBDBD',
    padding: '0',
    margin: '0',
    height: isTablet ? '27px' : '20px',
    fontSize: isTablet ? '18px' : '14px',
    lineHeight: '1.5',
    letterSpacing: '-2%',
    color: '#23262A',
  }),
  placeholder: (baseStyles: any) => ({
    ...baseStyles,
    fontSize: isTablet ? '18px' : '14px',
    lineHeight: '1.5',
    letterSpacing: '-2%',
    color: 'rgba(0, 0, 0, 0.5)',
  }),
  option: (_: any, state: any) => ({
    fontSize: isTablet ? '14px' : '12px',
    lineHeight: '1.5',
    letterSpacing: '-2%',
    marginBottom: '6px',
    color: state.isSelected ? 'var(--color-action)' : 'rgba(0, 0, 0, 0.5)',

    '&:hover': {
      color: 'var(--color-action)',
    },
  }),
  menu: (baseStyles: any) => ({
    ...baseStyles,
    width: '100%',
    height: isTablet ? '172px' : '154px',
    borderRadius: '6px',
    boxShadow: '0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074)',
  }),
  menuList: (baseStyles: any) => ({
    ...baseStyles,
    width: '100%',
    height: isTablet ? '172px' : '154px',
    padding: '8px 4px 8px 18px',
    fontSize: isTablet ? '14px' : '12px',
    overflowY: 'scroll',
    cursor: 'pointer',
    '::-webkit-scrollbar-thumb': {
      backgroundColor: '#E7E5E5',
      height: '93px',
      width: isTablet ? '6px' : '4px',
      borderRadius: '12px',
    },
    '::-webkit-scrollbar-track': {
      background: '#FFFFFF',

      borderRadius: '12px',
      width: isTablet ? '6px' : '4px',
    },
    '::-webkit-scrollbar': {
      borderRadius: '12px',
      width: isTablet ? '6px' : '4px',
    },
  }),
});

type Props = {};

const IngredientSelect = React.forwardRef(({}: Props, ref) => {
  const { isTablet } = useBreakpoints();

  const convertData = async (value: string) => {
    const { data } = await getIngredientsByQuery(value);

    return data.map((ingredient) => {
      return {
        value: ingredient._id,
        label: ingredient.name,
      };
    });
  };

  const promiseOptions = (inputValue: string, callback) => {
    convertData(inputValue).then((results) => callback(results));
    return;
  };

  return (
    <AsyncSelect
      loadOptions={_.debounce(promiseOptions, 500)}
      placeholder="Ingredient"
      noOptionsMessage={({ inputValue }) =>
        !inputValue ? 'Start typing...' : 'Ingredients not found'
      }
      styles={styles(isTablet)}
    />
  );
});

export default IngredientSelect;
