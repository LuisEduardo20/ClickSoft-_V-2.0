import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* background-color: green; */

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

export const Title = styled.h2`
  color: red;
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

  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

export const UserDataContainer = styled.div`
  width: 100%;

  /* background-color: green; */

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const TextContainer = styled.div`
  /* width: 50%; */
  margin-left: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  /* background-color: red; */
`;
