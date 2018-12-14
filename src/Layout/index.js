import styled from "styled-components";
import theme from "../theme";

const Article = styled.article`
  padding: 10px 0;
  margin-bottom: 40px;
  border-bottom: solid 1px #ccc;
`;

export const Section = styled.section`
  margin-bottom: 80px;
`;

export const Split = styled(Article)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;

  @media screen and (min-width: ${theme.breakpoints[0]}) {
    flex-direction: row;
  }
`;

export const Row = styled(Article)`
  *:first-child {
    margin-bottom: 10px;
  }
`;
