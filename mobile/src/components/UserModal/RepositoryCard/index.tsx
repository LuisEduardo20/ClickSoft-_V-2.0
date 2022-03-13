import { Linking } from "react-native";
import React from "react";

import Moment from "moment";
import {
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { apiResponseRepositories } from "../../../models/apiResponse.model";

import {
  Divider,
  Container,
  TextDataContainer,
  TextData,
  TextDataTitle,
  Link,
} from "./styles";

interface RepositoryProps {
  data: apiResponseRepositories;
}

const RepositoryCard = ({ data }: RepositoryProps) => {
  Moment.locale("pt-br");

  return (
    <>
      <Divider />
      <Container>
        <TextDataContainer>
          <TextData>
            <TextDataTitle>Nome: </TextDataTitle>
            <Link
              onPress={() => Linking.openURL(data.html_url)}
            >
              {data.name}
            </Link>
          </TextData>
          <Ionicons name='logo-github' size={25} />
        </TextDataContainer>

        {!!data.language ? (
          <TextDataContainer>
            <TextData>
              <TextDataTitle>Linguagem: </TextDataTitle>
              {data.language}
            </TextData>
            {data.language === "HTML" ? (
              <MaterialCommunityIcons
                name={`language-html5`}
                size={25}
              />
            ) : data.language === "CSS" ? (
              <MaterialCommunityIcons
                name={`language-css3`}
                size={25}
              />
            ) : (
              <MaterialCommunityIcons
                name={`language-${data.language.toLowerCase()}`}
                size={25}
              />
            )}
          </TextDataContainer>
        ) : (
          <></>
        )}

        <TextDataContainer>
          <TextData>
            <TextDataTitle>Descrição: </TextDataTitle>
            {data.description}
          </TextData>
        </TextDataContainer>

        <TextDataContainer>
          <TextData>
            <TextDataTitle>Criado em: </TextDataTitle>
            {Moment(data.created_at).format("DD/MM/YYYY")}
          </TextData>
          <MaterialCommunityIcons
            name='calendar'
            size={25}
          />
        </TextDataContainer>

        <TextDataContainer>
          <TextData>
            <TextDataTitle>Último push: </TextDataTitle>
            {Moment(data.pushed_at).format("DD/MM/YYYY")}
          </TextData>
          <Ionicons name='git-pull-request' size={25} />
        </TextDataContainer>
      </Container>
    </>
  );
};

export default RepositoryCard;
