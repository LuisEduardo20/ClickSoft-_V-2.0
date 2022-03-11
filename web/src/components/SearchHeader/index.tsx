import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

import {
  Header,
  ContainerTitle,
  ContainerSearch,
  GitHubIcon,
  Title,
  Input,
  Button,
} from "./styles";

const SearchHeader = () => {
  const [name, setName] = useState("");
  const { userData, getUser } = useContext(UserContext);

  const handleClick = () => {
    getUser(name);
  };

  return (
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
  );
};

export default SearchHeader;
