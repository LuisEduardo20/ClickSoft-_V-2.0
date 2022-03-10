import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { api } from "../../services/api";

import {
  Container,
  Header,
  ContainerTitle,
  ContainerSearch,
  GitHubIcon,
  Title,
  Input,
  Button,
} from "./styles";

type Props = {};

const SearchHeader = (props: Props) => {
  const [name, setName] = useState("");
  const { userData, setUserData } = useContext(UserContext);

  console.log(userData);

  const handleClick = () => {
    api
      .get(`/users/${name}`)
      .then(({ data }) => setUserData(data));
  };

  return (
    <Container>
      <Header>
        <ContainerTitle>
          <GitHubIcon className='devicon-github-plain'></GitHubIcon>

          <Title>GitHub Users</Title>
        </ContainerTitle>

        <ContainerSearch>
          <Input
            type='text'
            placeholder='Ex: LuisEduardo20'
            onChange={(e) => setName(e.target.value)}
          />

          <Button onClick={handleClick}>Pesquisar</Button>
        </ContainerSearch>
      </Header>
    </Container>
  );
};

export default SearchHeader;
