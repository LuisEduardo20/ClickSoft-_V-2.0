import styled from "styled-components/native";

export const Container = styled.View`
  height: 130px;
  background-color: #e1e1e1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleContainer = styled.View`
  flex: 1;
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SearchContainer = styled.View`
  flex: 1;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  margin-left: 16px;

  color: #2f2631;
  font-weight: bold;
  font-size: 32px;
`;

export const Input = styled.TextInput`
  width: 50%;
  height: 40px;
  padding: 10px;

  background-color: #fff;
  border-radius: 5px;
`;

export const Button = styled.TouchableOpacity`
  height: 40px;
  margin-left: 10px;
  padding: 5px;
  border-radius: 5px;

  background-color: #9d4870;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #f8f9fe;
`;
