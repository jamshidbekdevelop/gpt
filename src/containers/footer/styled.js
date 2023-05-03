import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  padding: 4rem 2rem 0;
  flex-wrap: wrap;
  @media (max-width: 1050px) {
    margin-top: 4rem;
    padding: 4rem;
    padding-bottom: 0rem;
  }
  @media (max-width: 550px) {
    padding: 2rem;
    padding-bottom: 0rem;

  }
  @media (max-width: 450px) {
    padding: 0rem;
  }
  background: #031b34;
  align-items: center;
`;

export const Header = styled.div`
  text-align: center;
  max-width: 1000px;
  padding: 8rem 0px 3rem;
  margin: auto;
  font-family: var(--font-family);
  font-style: normal;
  font-weight: 800;
  font-size: 62px;
  line-height: 75px;
  letter-spacing: -0.04em;
  background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -text-fill-color: transparent;
`;
export const Botton = styled.div`
  width: 218px;
  height: 65px;
  border: 1px solid #ffffff;
  font-family: "Gilroy-Medium";
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  margin: auto;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  cursor: pointer;
`;

export const Foter = styled.div`
  max-width: 1600px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 8rem 0 2rem;
  flex-wrap: wrap;
  gap: 2rem;
    @media (max-width: 450px) {
      display: flex;
      flex-direction: column;
      align-items: center;
  }

`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: fit-content;
  max-width: 200px;
  min-width: 150px;
`;
export const Image = styled.img`
  width: 150px;
  height: 40px;
`;
export const Text = styled.p`
  text-align: start;
  font-family: "Gilroy-Medium";
  font-size: ${({ size }) => (size ? `${size}px` : "12px")};
  line-height: 14px;
  font-feature-settings: "liga" off;

  color: #ffffff;
`;
export const End = styled.div`
  margin: 2rem auto;
`;
