import React from "react";
import styled from "styled-components";
import theme from "../theme";

const Block = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 580px;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: solid 1px #ccc;
  margin-bottom: 40px;

  @media screen and(min-width: ${theme.breakpoints[0]}) {
    flex-direction: row;
  }
`;

export default props => <Block>{props.children}</Block>;
