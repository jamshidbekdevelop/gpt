import React from "react";
import { Bottom, Box, Image, P } from "./styled";

const Article = ({ img, text1, text2, text3, size, height, width, mb }) => {
  return (
    <Box height={height} width={width}>
      <Image height={height} src={img} alt={img} />
      <Bottom height={height}>
        <P>{text1}</P>
        <P size={size}>{text2}</P>
        <P mb={mb}>{text3}</P>
      </Bottom>
    </Box>
  );
};

export default Article;
