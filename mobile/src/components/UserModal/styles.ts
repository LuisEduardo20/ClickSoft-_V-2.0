import styled from "styled-components/native";

export const View = styled.View`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const Container = styled.ScrollView`
  width: 100%;
  height: 100%;

  shadow-color: #000;
  shadow-opacity: 0.8;
  shadow-radius: 5px;
  elevation: 20;

  border-radius: 5px;

  background-color: #e1e1e1;
`;

export const ContainerTitle = styled.View`
  width: 100%;
  padding: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const ContainerUserData = styled.View`
  width: 100%;
  margin-bottom: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.View`
  width: 100%;
  margin-left: 32px;
`;

export const Title = styled.Text`
  color: #2f2631;
  font-size: 24px;
  font-weight: bold;
`;

export const ProfilePic = styled.Image`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;

  border-radius: 5px;
`;

export const TextData = styled.Text`
  font-size: 16px;
  margin: 5px 0;
`;

export const TextDataTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;
