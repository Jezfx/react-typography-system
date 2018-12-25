import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Split, Row, Section } from "./Layout";
import Link from "./Link";

import {
  Canon,
  Trafalgar,
  Paragon,
  GreatPrimer,
  DoublePica,
  BodyCopy,
  Code
} from "./Typography";
import Breakpoint from "./Breakpoint";

import theme from "./theme";
import "./App.css";

const Uppercase = styled(GreatPrimer)`
  text-transform: uppercase;
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Section>
            <Breakpoint />
          </Section>

          <Section>
            <Split>
              <Canon>Canon</Canon>
              <BodyCopy>Hero or blog post title</BodyCopy>
            </Split>

            <Split>
              <Trafalgar>Trafalgar</Trafalgar>
              <BodyCopy>Article title or section header</BodyCopy>
            </Split>

            <Split>
              <Paragon>Paragon</Paragon>
              <BodyCopy>Primary headline on indexes</BodyCopy>
            </Split>

            <Split>
              <DoublePica>DoublePica</DoublePica>
              <BodyCopy>Sub header</BodyCopy>
            </Split>

            <Split>
              <GreatPrimer>GreatPrimer</GreatPrimer>
              <BodyCopy>Headline title or subtitle</BodyCopy>
            </Split>

            <Split>
              <BodyCopy>BodyCopy</BodyCopy>
              <BodyCopy>Article body copy only</BodyCopy>
            </Split>

            <Split>
              <Code>Code</Code>
              <BodyCopy>For code wrapped snippets</BodyCopy>
            </Split>
          </Section>

          <Section>
            <Row>
              <Canon tag="p" color="red">
                Canon
              </Canon>
              <Code
                fontSize={2}
              >{`<Canon tag="p" color={theme.colours.mantis}>`}</Code>
            </Row>

            <Row>
              <Trafalgar textStyle="underline">Trafalgar</Trafalgar>
              <Code
                fontSize={2}
              >{`<Trafalgar textStyle="underline">Trafalgar</Trafalgar>`}</Code>
            </Row>

            <Row>
              <Trafalgar color="#fff" bg={theme.colours.bostonBlue}>
                Paragon
              </Trafalgar>
              <Code
                fontSize={2}
              >{`<Trafalgar color="#fff" bg={theme.colours.bostonBlue}>`}</Code>
            </Row>

            <Row>
              <DoublePica>
                <Link href="#">Double Pica</Link>
              </DoublePica>
              <Code
                fontSize={2}
              >{`<DoublePica><Link href="#">Double Pica</Link></DoublePica>`}</Code>
            </Row>

            <Row>
              <Uppercase fontSize={3} fontWeight={700} tag="h6">
                Great Primer
              </Uppercase>
              <Code
                fontSize={2}
              >{`<Uppercase fontSize={3} fontWeight={700} tag="h6">Great Primer</Uppercase>`}</Code>
            </Row>

            <Row>
              <BodyCopy tag="i">Body Copy</BodyCopy>
              <br />
              <Code
                fontSize={2}
              >{`<BodyCopy tag="i">Body Copy</BodyCopy>`}</Code>
            </Row>
          </Section>
          <Section>
            <BodyCopy>
              View the full write up on{" "}
              <Link href="https://medium.com/p/f9d1c8e16d55/">Medium</Link> ✌️
            </BodyCopy>
          </Section>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
