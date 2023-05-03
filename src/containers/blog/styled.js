import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 6rem;
  flex-wrap: wrap;
  @media (max-width: 1050px) {
    margin: 4rem;
  }
  @media (max-width: 550px) {
    margin: 2rem;
  }
  @media (max-width: 450px) {
    margin: 0rem;
  }
`;
export const Header = styled.div`
  @media (max-width: 450px) {
    text-align: center;
  }
  max-width: 750px;
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
export const Box = styled.div`
  margin: auto;
  max-width: 1500px;
  width: 100%;
  margin-top: 6rem;
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  flex-wrap: wrap;
  @media (max-width: 990px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;
export const Left = styled.span`
  @media (max-width: 990px) {
    margin: auto;
  }
`;
export const Right = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  flex-wrap: wrap;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;

  }
`;
