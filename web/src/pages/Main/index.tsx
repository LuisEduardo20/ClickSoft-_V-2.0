import SearchedUsersList from "../../components/SearchedUsersList";
import SearchUser from "../../components/MainSection";

import { Container } from "./styles";

const Main = () => {
  return (
    <Container>
      <SearchedUsersList />
      <SearchUser />
    </Container>
  );
};

export default Main;
