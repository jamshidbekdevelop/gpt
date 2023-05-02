import React from "react";
import { Container, Features, Heading, P, Section, Text } from "./styled";
import Feature from "../features/Features";

const WhatGPT3 = () => {
  return (
    <Section id="wgpt3">
      <Features>
        <Feature
          title={"What is GPT-3"}
          text={
            "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
          }
        />
      </Features>
      <Heading>
        <Text>The possibilities are beyond your imagination</Text>
        <P>Explore The Library</P>
      </Heading>
      <Container>
        <Feature
          column={'column'}
          mw={390}
          title={"Chatbots"}
          text={
            "We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
          }
        />
        <Feature
          column={'column'}
          mw={390}
          title={"Knowledgebase"}
          text={
            "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          }
        />
        <Feature
          column={'column'}
          mw={390}
          title={"Education"}
          text={
            "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          }
        />
      </Container>
    </Section>
  );
};

export default WhatGPT3;
