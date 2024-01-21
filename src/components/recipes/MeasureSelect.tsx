import Select from 'react-select';
import useBreakpoints from '../../hooks/useBreakpoints';
import styled from 'styled-components';
import { measures } from '../../utils/data';
import React, { useState } from 'react';
import { ControllerProps, FieldValues, useController } from 'react-hook-form';

const styles = (isTablet: boolean) => ({
  container: () => ({
    marginLeft: 'auto',
    paddingRight: '8px',
    height: '53px',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: () => ({
    color: 'var(--color-action)',
    width: '9px',
    height: '4.5px',
    cursor: 'pointer',
    marginBottom: '14px',
  }),
  control: () => ({
    display: 'flex',
    justifyContent: 'flex-end',
    marginLeft: 'auto',
    fontSize: isTablet ? '18px' : '14px',
    lineHeight: '1.5',
    letterSpacing: '-0.02em',
  }),
  valueContainer: () => ({
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0',
    margin: '0',
    height: isTablet ? '27px' : '20px',
  }),
  option: (_: any, state: any) => ({
    fontSize: isTablet ? '14px' : '12px',
    lineHeight: '1.5',
    marginBottom: '4px',
    letterSpacing: '-2%',
    cursor: 'pointer',
    color: state.isSelected ? 'var(--color-action)' : 'rgba(0, 0, 0, 0.5)',

    '&:hover': {
      color: 'var(--color-action)',
    },
  }),

  menu: (baseStyles: any) => ({
    ...baseStyles,
    width: 'auto',
    height: isTablet ? '128px' : '112px',
    borderRadius: '6px',
    boxShadow: '0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074)',

    marginLeft: '-16px',
  }),
  menuList: (baseStyles: any) => ({
    ...baseStyles,
    width: isTablet ? '117px' : '104px',
    height: isTablet ? '128px' : '112px',
    paddingLeft: isTablet ? '37px' : '28px',
    paddingTop: '8px',
    overflowY: 'scroll',
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

const StyledMeasure = styled.div`
  position: relative;
  width: 104px;
  height: 53px;
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 6px;

  @media screen and (min-width: 768px) {
    width: 117px;
    height: 59px;
  }
`;

const Input = styled.input`
  position: absolute;
  width: 40px;
  margin: 0;
  background-color: transparent;
  line-height: 1.5;
  letter-spacing: -0.02em;

  border: none;
  outline: none;

  &:focus {
    border: none;
    outline: none;
  }

  &::placeholder {
    line-height: 1.5;
    letter-spacing: -0.02em;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
    margin: 0;
  }
  -moz-appearance: textfield;
  appearance: textfield;

  @media screen and (min-width: 768px) {
    width: 50px;
    font-size: 18px;
  }
`;

const MeasureSelect = <T extends FieldValues>({
  ...controllerProps
}: ControllerProps<T>) => {
  const { isTablet } = useBreakpoints();
  const {
    field: { onChange },
  } = useController(controllerProps);

  const [inputValue, setInputValue] = useState('0');
  const [selectValue, setSelectValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange(`${e.target.value} ${selectValue}`);
  };

  return (
    <StyledMeasure>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        type="number"
        placeholder="0"
        autoComplete="off"
      />
      <Select
        options={measures}
        placeholder="tbs"
        isSearchable={false}
        styles={styles(isTablet)}
        onChange={(newValue) => {
          setSelectValue(newValue?.value as string);
          onChange(`${inputValue} ${newValue?.value}`);
        }}
      />
    </StyledMeasure>
  );
};

export default MeasureSelect;
