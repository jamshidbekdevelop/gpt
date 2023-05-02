import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 4rem 6rem;
  justify-content: space-between;
`;

export const Heading = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex-wrap: wrap;
  max-width: 550px;
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

export const Features = styled.div`
  background: red;
  flex: 3;
  display: flex;
  flex-direction: column;
`;
