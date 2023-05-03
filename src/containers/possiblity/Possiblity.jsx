import React from "react";
import { Container, Image, Left, P, Right, Text } from "./styled";
import person from "../../assets/Person.png";
const Possiblity = () => {
  return (
    <Container id="possibility">
      <Left>
        <Image src={person} alt="person" />
      </Left>
      <Right>
        <P >Request Early Access to Get Started</P>
        <Text>The possibilities are beyond your imagination</Text>
        <P color='#81AFDD'>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </P>
        <P color="#FF8A71">Request Early Access to Get Started</P>
      </Right>
    </Container>
  );
};

export default Possiblity;
