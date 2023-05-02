import React from "react";
import { Bitmap, dropbox, google, shopify, slack } from "./index";
import { A, Brands, Img } from "./styled";
const Brand = () => {
  return (
    <Brands>
      <A>
        <Img src={google} alt="google" />
      </A>
      <A>
        <Img src={slack} alt="slack" />
      </A>
      <A>
        <Img src={Bitmap} alt="Bitmap" />
      </A>
      <A>
        <Img src={dropbox} alt="dropbox" />
      </A>
      <A>
        <Img src={shopify} alt="shopify" />
      </A>
    </Brands>
  );
};

export default Brand;
