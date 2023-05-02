import React from "react";
import { Container, H1, Line, Text, Title } from "./styled";

const Feature = ({ column, text, title, mw}) => {
  return (
    <Container column={column}>
      <Title>
        <Line />
        <H1>{title}</H1>
      </Title>
      <Text mw={mw}>{text}</Text>
    </Container>
  );
};

export default Feature;
