import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--gray);
`;

export const Header = styled.header`
  height: 100%;
  background-color: var(--yellow);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const ContainerTitle = styled.div`
  display: flex;
`;

export const ContainerSearch = styled.div``;

export const GitHubIcon = styled.i`
  font-size: 3rem;
  margin-right: 1rem;
`;

export const Title = styled.h1`
  color: var(--gray);
`;

export const Input = styled.input`
  width: 14rem;
  height: 2rem;
  padding: 10px;
  margin-right: 1rem;

  border: none;
  border-radius: 5px;

  color: var(--black);

  outline: none;
`;

export const Button = styled.button`
  width: 6rem;
  height: 2rem;

  border: none;
  border-radius: 5px;

  color: var(--yellow);
  background-color: var(--black);
`;
