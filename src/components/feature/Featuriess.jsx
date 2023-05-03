import React from "react";
import { Container, Features, Heading, P, Text } from "./styled";
import { Feature } from "../../containers";
// import { Feature } from "../../containers";

const FeatureData = [
  {
    id: 1,
    title: "Improving end distrusts instantly ",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    id: 2,
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    id: 3,
    title: "Message or am nothing ",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    id: 4,
    title: "Really boy law county",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
  },
];

const Featuriess = () => {
  return (
    <Container>
      <Heading>
        <Text>
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </Text>
        <P>Request Early Access to Get Started</P>
      </Heading>
      <Features>
        {FeatureData.map(({ id, title, text }) => {
          return <Feature size={18} mw={390} key={id} title={title} text={text} />;
        })}
      </Features>
    </Container>
  );
};

export default Featuriess;
