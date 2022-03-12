import SearchedUsersList from "../../components/SearchedUsersList";
import SearchUser from "../../components/MainSection";

import { Container } from "./styles";
import UserModal from "../../components/UserModal";

const Main = () => {
  return (
    <Container>
      <SearchedUsersList />
      <SearchUser />

      <UserModal />
    </Container>
  );
};

export default Main;
