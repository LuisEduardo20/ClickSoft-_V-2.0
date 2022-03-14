import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RepositoriesContainer = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  color: #2f2531;
`;

export const CloseButton = styled.button`
  width: 30px;
  height: 30px;

  font-size: 1rem;
  font-weight: bold;
`;

export const ProfilePicture = styled.img`
  width: 300px;
  height: 300px;

  border-radius: 0.25rem;

  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

export const UserDataContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    flex-direction: column;

    margin-bottom: 2rem;
    gap: 2rem;
  }
`;

export const TextContainer = styled.div`
  margin-left: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
