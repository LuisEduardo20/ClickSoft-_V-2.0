import { useContext } from "react";

import { UserContext } from "../../contexts/UserContext";

import {
  Container,
  UserCard,
  ContainerUserData,
  Title,
  Picture,
  Name,
  Login,
  Location,
} from "./styles";

const SearchedUsersList = () => {
  const {
    searchedUsersList,
    setCardUser,
    changeModalVisibility,
  } = useContext(UserContext);

  return (
    <Container>
      <Title>Visualizados recentemente</Title>

      {searchedUsersList.map((user, index) => {
        return (
          <UserCard key={`user-${index}`}>
            <Picture
              src={user.avatar_url}
              alt='GitHub Profile Picture'
              onClick={() => {
                changeModalVisibility(true);
                setCardUser(user);
              }}
            />

            <ContainerUserData>
              <Name onClick={() => setCardUser(user)}>
                {user.name}
              </Name>

              <Login>{user.login}</Login>

              <Location>{user.location}</Location>
            </ContainerUserData>
          </UserCard>
        );
      })}
    </Container>
  );
};

export default SearchedUsersList;
