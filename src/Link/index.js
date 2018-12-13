import styled from "styled-components";
import theme from "../theme";

export default styled.a`
  color: ${theme.colours.bostonBlue};
  text-decoration: underline;

  &:hover {
    color: ${theme.colours.stTropaz};
  }
`;
