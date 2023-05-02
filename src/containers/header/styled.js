import styled from "styled-components";

export const Headers = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 6rem;
  @media (max-width: 1050px) {
    flex-direction: column;
    padding: 2rem 4rem;
  }
  @media (max-width: 550px) {
    padding: 2rem;
  }
`;
export const Content = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  @media (max-width: 1050px) {
    margin: 0 0 3rem;
  }
`;
export const Text = styled.h1`
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
  @media (max-width: 650px) {
    font-size: 48px;
    line-height: 60px;
  }
  @media (max-width: 490px) {
    font-size: 36px;
    line-height: 48px;
  }
`;
Content.Input = styled.div`
  height: 73px;
  background: #052d56;
  border-radius: 20px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  flex-wrap: nowrap;
  @media (max-width: 490px) {
    height: 60px;
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 73px;
  border: none;
  font-family: var(--font-family);
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  padding-left: 32px;
  color: #3d6184;
  background: #052d56;
  :focus {
    outline: none;
  }
  @media (max-width: 650px) {
    font-size: 16px;
    padding-left: 15px;
  }
  @media (max-width: 490px) {
    font-size: 12px;
    height: 60px;
  }
`;
export const Button = styled.button`
  background: #ff4820;
  border-radius: 0px 5px 5px 0px;
  width: 174px;
  height: 73px;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #ffffff;
  @media (max-width: 650px) {
    font-size: 16px;
  }
  @media (max-width: 490px) {
    font-size: 12px;
    height: 60px;
  }
`;
export const P = styled.p`
  margin: 33px 0;
  font-family: var(--font-family);
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  color: #81afdd;
  @media (max-width: 650px) {
    font-size: 16px;
    line-height: 24px;
  }
  @media (max-width: 490px) {
    font-size: 14px;
    line-height: 24px;
  }
`;
export const HeaderPeople = styled.div`
  margin-top: 38px;
  height: 38px;
  display: flex;
  gap: 14px;
  font-family: var(--font-family);

  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 38px;
  color: #ffffff;
  box-sizing: border-box;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;
export const Img = styled.img`
  height: 100%;
`;

export const Content_Second = styled.div`
  flex: 5;
  display: flex;
`;
export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 47px;
`;
export const A = styled.a`
  font-size: 30px;
  color: #686c75;
`;
