import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { Article, Section } from "./Layout";
import Link from "./Link";

import {
  Canon,
  Trafalgar,
  Paragon,
  GreatPrimer,
  DoublePica,
  BodyCopy,
  Code
} from "./Typeography";
import Breakpoint from "./Breakpoint";

import theme from "./theme";
import "./App.css";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Breakpoint />

          <Section>
            <Article>
              <Canon>Canon</Canon>
              <BodyCopy>Hero or blog post title</BodyCopy>
            </Article>

            <Article>
              <Trafalgar>Trafalgar</Trafalgar>
              <BodyCopy>Article title or section header</BodyCopy>
            </Article>

            <Article>
              <Paragon>Paragon</Paragon>
              <BodyCopy>Primary headline on indexes</BodyCopy>
            </Article>

            <Article>
              <DoublePica>DoublePica</DoublePica>
              <BodyCopy>Sub header</BodyCopy>
            </Article>

            <Article>
              <GreatPrimer>GreatPrimer</GreatPrimer>
              <BodyCopy>Headline title or subtitle</BodyCopy>
            </Article>

            <Article>
              <BodyCopy>BodyCopy</BodyCopy>
              <BodyCopy>Article body copy only</BodyCopy>
            </Article>

            <Article>
              <Code>Code</Code>
              <BodyCopy>For code wrapped snippets</BodyCopy>
            </Article>
          </Section>

          <Section>
            <Article>
              <Canon tag="p" color={theme.colours.mantis}>
                Canon
              </Canon>
              <BodyCopy>
                <Code
                  fontSize={2}
                >{`<Canon tag="p" color="green">Canon</Canon>`}</Code>
              </BodyCopy>
            </Article>
          </Section>

          <Section>
            <GreatPrimer>
              Links in <Link href="#">Headings</Link>
            </GreatPrimer>
            <BodyCopy>
              And also <Link href="#">links</Link> body copy work the same way.
              Just nest the Link tag inside the typeography component.
            </BodyCopy>
          </Section>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
