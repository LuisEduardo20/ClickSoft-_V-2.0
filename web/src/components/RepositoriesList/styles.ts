import styled from "styled-components";

export const View = styled.div`
  width: 100%;
`;

export const Divider = styled.div`
  width: 100%;
  border: 1px solid black;
  margin: 1rem 0 2rem 0;
`;

export const Container = styled.div`
  margin-bottom: 2rem;
`;

export const Text = styled.p`
  margin-bottom: 1rem;

  font-size: 1.25rem;
  color: #2f2531;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const RepositoryLink = styled.a`
  font-size: 1.25rem;
  color: #9d4870;
  /* text-decoration: none; */

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Icon = styled.i`
  margin-left: 0.5rem;
  font-size: 1.5rem;

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;
