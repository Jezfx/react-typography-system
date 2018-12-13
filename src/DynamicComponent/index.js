import React from 'react';
import styled from 'styled-components';
import tag from 'clean-tag'
import { space, lineHeight, fontSize, size, color, colorStyle, textStyle, fontFamily, fontWeight, letterSpacing } from "styled-system";

const StyledDynamicComponent = styled(tag)`
  ${space}
  ${fontSize}
  ${color}
  ${size}
  ${colorStyle}
  ${textStyle}
  ${lineHeight}
  ${letterSpacing}
  ${fontFamily}
  ${fontWeight}
`;

const DynamicComponent = ({ tag = 'div', children, ...props }) => {
  const WithComponent = StyledDynamicComponent.withComponent(tag);
  return <WithComponent {...props}>{children}</WithComponent>;
};

DynamicComponent.defaultProps = {
  tag: 'div',
};

export default DynamicComponent;