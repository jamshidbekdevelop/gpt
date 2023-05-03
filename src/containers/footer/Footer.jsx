import React from "react";
import {
  Botton,
  Box,
  Container,
  End,
  Foter,
  Header,
  Image,
  Text,
} from "./styled";
import gpt from "../../assets/GPT-3.png";
const Footer = () => {
  return (
    <Container>
      <Header>Do you want to step in to the future before others</Header>
      <Botton>Request Early Access</Botton>
      <Foter>
        <Box>
          <Image src={gpt} alt="gpt" />
          <Text>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</Text>
        </Box>
        <Box>
          <Text size={14}>Links</Text>
          <Text>Overons</Text>
          <Text>Social Media</Text>
          <Text>Counters</Text>
          <Text>Contact</Text>
        </Box>
        <Box>
          <Text size={14}>Company</Text>
          <Text>Terms & Conditions</Text>
          <Text>Privacy Policy</Text>
          <Text>Contact</Text>
        </Box>
        <Box>
          <Text size={14}>Get in touch</Text>
          <Text>Crechterwoord K12 182 DK Alknjkcb</Text>
          <Text>085-132567</Text>
          <Text>info@payme.net</Text>
        </Box>
      </Foter>
      <End>
        <Text>© 2021 GPT-3. All rights reserved.</Text>
      </End>
    </Container>
  );
};

export default Footer;
