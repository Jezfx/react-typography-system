import React from "react";
import styled from "styled-components";

import theme from "../theme";

const Breakpoint = styled.span`
  padding: 2px 4px;
  background: ${theme.colours.citrineWhite};

  &:after {
    content: "A";

    @media screen and (min-width: ${theme.breakpoints[0]}) {
      content: "B";
    }
    @media screen and (min-width: ${theme.breakpoints[1]}) {
      content: "C";
    }
  }
`;

export default () => <Breakpoint>Breakpoint: </Breakpoint>;
