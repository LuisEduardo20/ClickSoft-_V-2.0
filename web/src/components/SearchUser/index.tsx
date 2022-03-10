import SearchHeader from "../SearchHeader";
import UserCard from "../UserCard";
import { Container } from "./styles";

type Props = {};

const SearchUser = (props: Props) => {
  return (
    <Container>
      <SearchHeader />
      <UserCard />
    </Container>
  );
};

export default SearchUser;
