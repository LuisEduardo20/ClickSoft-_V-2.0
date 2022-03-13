import styled from "styled-components/native";

export const Container = styled.View`
  width: 80%;
  height: 120px;
  margin: 6px 0 10px 0;
  background-color: #959098;

  border-radius: 5px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const ImageContainer = styled.View`
  width: 40%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DataContainer = styled.View`
  width: 60%;
  height: 100%;

  display: flex;
  justify-content: space-evenly;
`;

export const ProfilePic = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 5px;
`;

export const NameButton = styled.TouchableOpacity`
  max-width: 90%;
  padding: 10px;

  background-color: #9d4870;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DataText = styled.Text`
  color: #f8f9ff;
  font-size: 16px;
`;
