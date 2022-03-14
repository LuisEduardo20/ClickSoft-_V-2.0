import { apiResponseRepositories } from "../../models/apiResponse.model";
import {
  View,
  Divider,
  Container,
  Icon,
  Text,
  RepositoryLink,
} from "./styles";

type RepositoryProps = {
  data: apiResponseRepositories;
};

const RepositoryList = ({ data }: RepositoryProps) => {
  return (
    <View>
      <Divider></Divider>
      <Container>
        <Text>
          <strong>Nome: </strong>
          <RepositoryLink
            href={data.html_url}
            target='__blank'
          >
            {data.name}
          </RepositoryLink>
          <Icon className='fa-brands fa-github-alt'></Icon>
        </Text>

        {data.language ? (
          <Text>
            <strong>Linguagem: </strong>
            {data.language}{" "}
            {data.language === "HTML" ? (
              <Icon
                className={`devicon-html5-plain colored`}
              ></Icon>
            ) : data.language === "CSS" ? (
              <Icon
                className={`devicon-css3-plain colored`}
              ></Icon>
            ) : (
              <Icon
                className={`devicon-${data.language.toLowerCase()}-plain colored`}
              ></Icon>
            )}
          </Text>
        ) : (
          <></>
        )}

        {data.description ? (
          <Text>
            <strong>Descrição: </strong> {data.description}
          </Text>
        ) : (
          <></>
        )}

        <Text>
          <strong>Criado em: </strong>

          {Intl.DateTimeFormat("pt-BR").format(
            new Date(data.created_at)
          )}
          <Icon className='fa-regular fa-calendar-days'></Icon>
        </Text>

        <Text>
          <strong>Último push: </strong>
          {Intl.DateTimeFormat("pt-BR").format(
            new Date(data.pushed_at)
          )}
          <Icon className='fa-solid fa-code-pull-request'></Icon>
        </Text>
      </Container>
    </View>
  );
};

export default RepositoryList;
