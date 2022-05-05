import styled from "styled-components";

export const UlProducts = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  gap: 30px;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 96%;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const LiProducts = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-top: 0.5px solid var(--color-1);

  figure {
    display: flex;
    align-items: center;
    height: 48vh;
  }
  img {
    height: 43vh;
  }

  h3 {
    font-size: 22px;
  }
  span {
    font-size: 22px;
  }
  p {
    font-size: 20px;
  }

  > button {
    background-color: var(--color-4);
    border: 1px solid var(--color-4);
    width: 36%;
    height: 5vh;
    border-radius: 8px;
    color: var(--text-button);
    font-size: 15px;
  }
  > button:hover {
    background-color: var(--button-hover);
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 40%;
    flex-wrap: wrap;

    > button {
      width: 70%;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 35%;
  }
`;
