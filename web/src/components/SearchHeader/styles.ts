import styled from "styled-components";

export const Header = styled.header`
  height: 100%;
  background-color: #e1e1e1;

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
  color: #2f2531;
`;

export const Input = styled.input`
  width: 14rem;
  height: 3rem;
  padding: 10px;
  margin-right: 1rem;

  border: none;
  border-radius: 5px;

  font-size: 1.1rem;
  color: var(--black);

  outline: none;
`;

export const Button = styled.button`
  width: 6rem;
  height: 3rem;

  font-size: 1.1rem;

  border: none;
  border-radius: 5px;

  color: #f8f9ff;
  background-color: #9d4870;
`;
