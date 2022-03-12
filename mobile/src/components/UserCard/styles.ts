import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 350px;
  background-color: #f8f9ff;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfilePic = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 5px;
`;

export const TextContainer = styled.View`
  width: 100%;
  padding-left: 16px;
`;

export const UserDataTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #2f2531;
`;

export const UserDataText = styled.Text`
  font-size: 16px;
  margin: 8px 0;
  color: #2f2531;
`;
