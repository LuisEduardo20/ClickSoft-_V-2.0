import { user } from "./user.model";

export interface UserProviderProps {
  userData: user;
  searchedUsersList: user[];
  getUser: (name: string) => void;
  setCardUser: (user: user) => void;

  modalVisible: boolean;
  changeModalVisibility: (status: boolean) => void;
}
