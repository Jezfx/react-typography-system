## React typography system
This is a collection of tools and conventions I've used to create a typography system in React. It uses [styled-components](https://www.styled-components.com/) and [styled-system](https://github.com/jxnblk/styled-system/) to allow you to import styled typeography elements and override both the styling and markup like so: 

```jsx
<Canon tag="p" color="red">
  Canon
</Canon>
```

I've this approach to re-create [GEL](http://bbc.co.uk/gel/guidelines/typography), the excellent CSS based typography system by the BBC. 
Examples of this are on [CodeSandbox](https://codesandbox.io/s/kw89ro5y2r) and the full process is documented on [Medium](https://medium.com/@jezfx/building-a-react-typography-system-f9d1c8e16d55). 

## Quick overview

The DynamicComponent is what enables you to override the styling and markup

```jsx
import React from "react";
import styled from "styled-components";
import tag from "clean-tag";
import {
  space,
  lineHeight,
  fontSize,
  fontStyle,
  size,
  color,
  colorStyle,
  textStyle,
  fontFamily,
  fontWeight,
  letterSpacing,
  borderRadius
} from "styled-system";

const StyledDynamicComponent = styled(tag)`
  ${space}
  ${fontSize}
  ${fontStyle}
  ${color}
  ${size}
  ${colorStyle}
  ${textStyle}
  ${lineHeight}
  ${letterSpacing}
  ${fontFamily}
  ${fontWeight}
  ${borderRadius}
`;

const DynamicComponent = ({ tag = "div", children, ...props }) => {
  const WithComponent = StyledDynamicComponent.withComponent(tag);
  return <WithComponent {...props}>{children}</WithComponent>;
};

DynamicComponent.defaultProps = {
  tag: "div"
};

export default DynamicComponent;
```
[./DynamicComponent/index.js](https://github.com/Jezfx/react-typography-system/blob/master/src/DynamicComponent/index.js)

Each of the Typography styles use the higher orer DynamicComponent to enable style and markup overrides. The default styles get spread in from the theme.js file which is also passed into the ThemeProvider. 


```jsx
export const Canon = props => (
  <DynamicComponent {...canon} {...props}>
    {props.children}
  </DynamicComponent>
);
```
[./Typography/index.js](https://github.com/Jezfx/react-typography-system/blob/master/src/Typography/index.js)
