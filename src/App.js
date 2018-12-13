import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

import {
  Canon,
  Trafalgar,
  Paragon,
  GreatPrimer,
  DoublePica,
  BodyCopy
} from "./Typeography";
import Breakpoint from "./Breakpoint";
import Block from "./Block";

import theme from "./theme";
import "./App.css";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Breakpoint />

          <Block>
            <Canon>Canon</Canon>
            <BodyCopy>Hero or blog post title</BodyCopy>
          </Block>

          <Block>
            <Trafalgar>Trafalgar</Trafalgar>
            <BodyCopy>Article title or section header</BodyCopy>
          </Block>

          <Block>
            <Paragon>Paragon</Paragon>
            <BodyCopy>Primary headline on indexes</BodyCopy>
          </Block>

          <Block>
            <DoublePica>DoublePica</DoublePica>
            <BodyCopy>Sub header</BodyCopy>
          </Block>

          <Block>
            <GreatPrimer>GreatPrimer</GreatPrimer>
            <BodyCopy>Headline title or subtitle</BodyCopy>
          </Block>

          <Block>
            <BodyCopy>BodyCopy</BodyCopy>
            <BodyCopy>Article body copy only</BodyCopy>
          </Block>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
