import styled from "styled-components/native";

export const Divider = styled.View`
  width: 100%;
  margin: 16px 0 10px 0;

  border: 1px solid black;
`;

export const Container = styled.View`
  width: 100%;
  margin: 10px 0;
  padding: 16px;
`;

export const TextDataContainer = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextData = styled.Text`
  margin: 5px;
  font-size: 16px;
`;

export const TextDataTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Link = styled.Text`
  text-decoration: underline;
  color: #9d4870;
`;
