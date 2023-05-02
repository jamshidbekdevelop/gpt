import React from "react";
import {
  A,
  Button,
  Content,
  Content_Second,
  Footer,
  HeaderPeople,
  Headers,
  Img,
  Input,
  P,
  Text,
} from "./styled";
import people from "../../assets/Header Illustration.png";
import gr from "../../assets/Group.png";
const Header = () => {
  return (
    <>
      <Headers id="home">
        <Content>
          <Text>Let’s Build Something amazing with GPT-3 OpenAI</Text>
          <P>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </P>
          <Content.Input>
            <Input type="email" placeholder="Your Email Address" />
            <Button type="button">Get Start</Button>
          </Content.Input>
          <HeaderPeople>
            <Img width="182px" src={gr} alt="gr" /> 1,600 people requested
            access a visit in last 24 hours
          </HeaderPeople>
        </Content>
        <Content_Second>
          <Img width="100%" src={people} alt="people" />
        </Content_Second>
      </Headers>
      {/* <Footer>
        <A>Google</A>
        <A>slack</A>
        <A>Atlassian</A>
        <A>Dropbox</A>
        <A>shopify</A>
      </Footer> */}
    </>
  );
};

export default Header;
