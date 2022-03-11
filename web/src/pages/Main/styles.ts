import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 25% 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "UsersList MainArea";

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr;
    grid-template-areas: "MainArea" "UsersList";
  }
`;
