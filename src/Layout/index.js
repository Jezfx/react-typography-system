import styled from "styled-components";
import theme from "../theme";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: solid 1px #ccc;
  margin-bottom: 40px;

  @media screen and (min-width: ${theme.breakpoints[0]}) {
    flex-direction: row;
  }
`;

export const Section = styled.section`
  margin-bottom: 80px;
`;
