import styled from "styled-components";

export const Navbar_Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 6rem;
  @media (max-width: 700px) {
    padding: 2rem 4rem;
  }
  @media (max-width: 550px) {
    padding: 2rem;
  }
`;
export const Link = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const Logo = styled.div`
  margin-right: 2rem;
`;
export const Img = styled.img`
  width: 62.56px;
  height: 16.02px;
`;
export const Container = styled.div`
  @media (max-width: 1050px) {
    display: none;
  }
  display: flex;
  flex-direction: row;
`;
export const Sign = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 550px) {
    display: none;
  }
`;
export const P = styled.p`
  color: #fff;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  text-transform: capitalize;
  margin: 0 1rem;
  cursor: pointer;
  display: inline-block;
`;
export const A = styled.a`
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #fff;
  background: #ff4820;
  border-radius: 5px;
  outline: none;
  border: 0;
  cursor: pointer;
  box-sizing: border-box;
`;
export const Manu = styled.div`
  @media (max-width: 1050px) {
    display: flex;
  }
  margin-left: 1rem;
  display: none;
  position: relative;

  .svg {
    cursor: pointer;
  }
`;
Manu.Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  text-align: end;
  background: var(--color-footer);
  padding: 2rem;
  position: absolute;
  top: 40px;
  right: 0;
  margin-top: 1rem;
  min-width: 210px;
  border-radius: 5px;
  box-shadow: 0 0 5 rgba * (0, 0, 0, 0.2);
`;
Manu.Link = styled.div`
  .close {
    display: none;
  }
  @media (max-width: 550px) {
    .close {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      text-align: end;
    }
  }
`;
