import {
  apiResponseData,
  apiResponseRepositories,
} from "./apiResponse.model";

export type user = {
  avatar_url: apiResponseData["avatar_url"];
  name: apiResponseData["name"];
  login: apiResponseData["login"];
  location: apiResponseData["location"];
  repos_list: apiResponseRepositories[];
  id: apiResponseData["id"];
  followers: apiResponseData["followers"];
  public_repos: apiResponseData["public_repos"];
};

export type repositories_list = {};
