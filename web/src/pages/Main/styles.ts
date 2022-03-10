import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--yellow);

  display: grid;
  grid-template-columns: 25% 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "UsersList MainArea";
`;
