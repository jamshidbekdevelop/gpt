import React from "react";
import { Button, Container, Left, Right, Text } from "./styled";

const CTA = () => {
  return (
    <Container id="features">
      <Left>
        <Text>Request Early Access to Get Started</Text>
        <Text fw={800} size={24} color="#000000">
          Register today & start exploring the endless possiblities.
        </Text>
      </Left>
      <Right>
        <Button>Get Started</Button>
      </Right>
    </Container>
  );
};

export default CTA;
