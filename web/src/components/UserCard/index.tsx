import { useContext } from "react";

import { UserContext } from "../../contexts/UserContext";

import { Container, ProfilePic } from "./styles";

const UserCard = () => {
  const { userData } = useContext(UserContext);

  const { avatar_url, name, login, location } = userData;

  console.log(Object.values(userData).length);
  console.log(!!userData);

  return (
    <Container>
      {Object.values(userData).length === 0 ? (
        <></>
      ) : (
        <>
          <ProfilePic
            src={avatar_url}
            alt='Foto de perfil do github'
          />
          <div>
            <p>{name}</p>
            <p>{login}</p>
            <p>{location}</p>
          </div>
        </>
      )}
    </Container>
  );
};

export default UserCard;
