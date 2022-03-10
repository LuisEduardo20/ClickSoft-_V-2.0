import SearchedUsersList from "../../components/SearchedUsersList";
import SearchUser from "../../components/SearchUser";

import { Container } from "./styles";

type Props = {};

const Main = (props: Props) => {
  return (
    <Container>
      <SearchedUsersList />
      <SearchUser />
    </Container>
  );
};

export default Main;
