import React from "react";
import { Box, Container, Header, Left, Right } from "./styled";
import Article from "../../components/article/Article";
import img1 from "../../assets/first.png";
import img2 from "../../assets/second.png";
import img3 from "../../assets/third.png";
import img4 from "../../assets/forth.png";
import img5 from "../../assets/fifth.png";
const Blog = () => {
  return (
    <Container>
      <Header>A lot is happening, We are blogging about it.</Header>
      <Box>
        <Left>
          <Article
            height={697}
            width={418}
            img={img1}
            text1={"Sep 26, 2021"}
            text2={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
            text3={"Read Full Article"}
            mb={187}
            size={25}
          />
        </Left>
        <Right>
          <Article
            img={img2}
            text1={"Sep 26, 2021"}
            text2={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
            text3={"Read Full Article"}
            mb={40}
            size={17.7}
          />
          <Article
            img={img3}
            text1={"Sep 26, 2021"}
            text2={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
            text3={"Read Full Article"}
            mb={40}
            size={17.7}
          />
          <Article
            img={img4}
            text1={"Sep 26, 2021"}
            text2={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
            text3={"Read Full Article"}
            mb={40}
            size={17.7}
          />
          <Article
            img={img5}
            text1={"Sep 26, 2021"}
            text2={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
            text3={"Read Full Article"}
            mb={40}
            size={17.7}
          />
        </Right>
      </Box>
    </Container>
  );
};

export default Blog;
