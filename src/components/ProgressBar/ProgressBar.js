import * as React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const CONFIG = {
  small: {
    height: '8px',
    padding: 0,
    radius: '4px',
  },
  medium: {
    height: '12px',
    padding: 0,
    radius: '4px',
  },
  large: {
    height: '24px',
    padding: '4px',
    radius: '8px',
  },
};

const OuterWrapper = styled.div`
  background: ${COLORS.transparentGray15};
  border-radius: ${({ config }) => config.radius};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  height: ${({ config }) => config.height};
  padding: ${({ config }) => config.padding};
`;

const InnerWrapper = styled.div`
  border-radius: 4px;
  height: 100%;
  overflow: hidden;
`;

const Bar = styled.div`
  background: ${COLORS.primary};
  height: 100%;
  width: ${({ value }) => value}%;
`;

function ProgressBar({ value, size }) {
  const config = CONFIG[size];
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <OuterWrapper config={config}>
        <InnerWrapper>
          <Bar value={value} />
        </InnerWrapper>
      </OuterWrapper>
    </div>
  );
}

export default ProgressBar;
