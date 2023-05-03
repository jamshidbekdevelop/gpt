import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 4rem 6rem;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 1050px) {
    margin: 2rem 4rem;
  }
  @media (max-width: 550px) {
    margin: 2rem;
  }
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 340px;
  `;
export const Image = styled.img`
  max-width: 750px;
  width: 100%;
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding-top: 100px;
`;

export const Text = styled.h1`
  max-width: 550px;
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
  max-width: 550px;

  font-family: var(--font-family);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: ${({ color }) => (color ? color : "#71E5FF")};
`;
