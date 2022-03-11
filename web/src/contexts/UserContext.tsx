import { createContext, ReactNode, useState } from "react";
import { api } from "../services/api";

interface apiResponseData {
  avatar_url: string;
  bio: string;
  blog: string;
  company: string | boolean;
  created_at: string;
  email: string | null;
  events_url: string;
  followers: number;
  followers_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: boolean;
  html_url: string;
  id: number;
  location: string;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: string | null;
  type: string;
  updated_at: string;
  url: string;
}

type user = Pick<
  apiResponseData,
  "avatar_url" | "name" | "login" | "location" | "repos_url"
>;

interface TransactionProviderProps {
  userData: user;
  searchedUsersList: user[];
  getUser: (name: string) => void;
  setCardUser: (user: user) => void;
}

export const UserContext =
  createContext<TransactionProviderProps>(
    {} as TransactionProviderProps
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

  const addSearchedUser = (newUser: user) => {
    const searchedNames = searchedUsersList.map(
      (user: user) => user.name
    );

    if (!searchedNames.includes(newUser.name)) {
      setSearchedUsersList([...searchedUsersList, newUser]);
    }
  };

  const getUser = (name: string) => {
    api.get(`/users/${name}`).then(({ data }) => {
      const user: user = {
        avatar_url: data.avatar_url,
        name: data.name,
        login: data.login,
        location: data.location,
        repos_url: data.repos_url,
      };

      setUserData(user);

      addSearchedUser(user);
    });
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
