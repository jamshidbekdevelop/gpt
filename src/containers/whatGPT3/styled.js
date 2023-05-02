import styled from "styled-components";

export const Section = styled.div`
  margin: 6rem;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  background: var(--color-footer);
  background: -moz-radial-gradient(circle);
  background: -webkit-radial-gradient(circle);
  background: -o-radial-gradient(circle);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  @media (max-width: 1050px) {
    margin: 2rem 4rem;
  }
  @media (max-width: 550px) {
    margin: 2rem;
    padding: 2rem;
  }
`;

export const Features = styled.div``;
export const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 4rem 0 2rem;
  flex-wrap: wrap;
`;
export const Text = styled.h1`
  max-width: 700px;
  font-family: var(--font-family);
  font-style: normal;
  font-weight: 800;
  font-size: 34px;
  line-height: 45px;
  background: linear-gradient(103.22deg, #ae67fa -13.86%, #f49867 99.55%),
    #ffffff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -text-fill-color: transparent;
`;
export const P = styled.p`
  font-family: var(--font-family);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #ff8a71;
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  justify-content: space-between;
`;
