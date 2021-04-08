import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const NativeSelect = styled.select`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const StyledSelect = styled.div`
  background: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};
  font-size: 1rem;
  line-height: 19px;
  padding: 12px 52px 12px 16px;
  pointer-events: none;
  position: relative;

  ${NativeSelect}:focus + & {
    outline: 5px auto Highlight;
    //noinspection CssOverwrittenProperties
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const StyledIcon = styled(Icon)`
  bottom: 0;
  margin: auto;
  position: absolute;
  right: 10px;
  top: 0;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <StyledSelect>
        {displayedValue}
        <StyledIcon id="chevron-down" size={24} strokeWidth={2} />
      </StyledSelect>
    </Wrapper>
  );
};

export default Select;
