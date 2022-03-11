import styled from "styled-components";

export const Container = styled.ul`
  background-color: #2f2531;
  overflow-x: hidden;
  padding: 0.25rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  /* gap: 2rem; */

  grid-area: UsersList;
`;

export const UserCard = styled.div`
  background-color: #959098;
  width: 80%;
  padding: 0.5rem;
  margin-bottom: 1rem;

  border-radius: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding: 0.5rem;
    flex-direction: row;
  }
`;

export const ContainerUserData = styled.div`
  width: 100%;
  padding: 0.75rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  justify-content: center;
`;

export const Title = styled.h3`
  width: 100%;
  margin: 1rem 0;

  color: #f8f9ff;
  text-align: center;
`;

export const Picture = styled.img`
  width: 100px;
  height: 100px;

  border-radius: 5px;
`;

export const Name = styled.p`
  width: 100%;
  padding: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  background-color: #9d4870;
  color: #f8f9ff;

  border-radius: 0.25rem;

  cursor: pointer;
`;

export const Login = styled.p`
  width: 100%;
  color: #f8f9ff;
`;

export const Location = styled.p`
  width: 100%;
  color: #f8f9ff;
`;
