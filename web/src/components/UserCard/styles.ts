import styled from "styled-components";

export const Container = styled.div`
  background-color: #f8f9ff;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerData = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;

    flex-direction: column;
  }
`;

export const InfoContainerData = styled.div`
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  margin-left: 1rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

export const ProfilePic = styled.img`
  width: 300px;
  height: 300px;

  border-radius: 0.25rem;

  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

export const Text = styled.p`
  color: #2f2531;
  font-size: 1.5rem;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
