import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-3);
  width: 85%;
  border-radius: 0px 0px 8px 8px;
  color: var(--color-5);
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 18px;
  @media screen and (min-width: 1024px) {
    width: 55%;
  }
`;
