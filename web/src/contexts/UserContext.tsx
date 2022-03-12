import { createContext, ReactNode, useState } from "react";
import { api } from "../services/api";

import { user } from "../models/user.model";
import { apiResponseRepositories } from "../models/apiResponse.model";
import { UserProviderProps } from "../models/userContext.model";

export const UserContext = createContext<UserProviderProps>(
  {} as UserProviderProps
);

interface ContextProps {
  children: ReactNode;
}

export const UserProvider = ({
  children,
}: ContextProps) => {
  const [userData, setUserData] = useState<any>({});
  const [searchedUsersList, setSearchedUsersList] =
    useState<any>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const changeModalVisibility = (status: boolean) => {
    setModalVisible(status);
  };

  const addSearchedUser = (newUser: user) => {
    const searchedNames = searchedUsersList.map(
      (user: user) => user.name
    );

    if (!searchedNames.includes(newUser.name)) {
      setSearchedUsersList([...searchedUsersList, newUser]);
    }
  };

  const getRepositories = (
    name: string
  ): apiResponseRepositories[] => {
    const response: apiResponseRepositories[] = [];
    api
      .get(`${name}/repos`)
      .then(({ data }) => response.push(...data));

    return response;
  };

  const getUser = (name: string) => {
    api
      .get(name)
      .then(({ data }) => {
        const user: user = {
          avatar_url: data.avatar_url,
          name: data.name,
          login: data.login,
          location: data.location,
          repos_list: getRepositories(data.login),
          id: data.id,
          followers: data.followers,
          public_repos: data.public_repos,
        };

        setUserData(user);

        addSearchedUser(user);
      })
      .catch((error) =>
        window.alert("Usuário não encontrado")
      );
  };

  const setCardUser = (user: user) => {
    setUserData(user);
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        searchedUsersList,
        getUser,
        setCardUser,
        modalVisible,
        changeModalVisibility,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
