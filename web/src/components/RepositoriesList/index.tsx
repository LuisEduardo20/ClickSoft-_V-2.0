import { apiResponseRepositories } from "../../models/apiResponse.model";

type RepositoryProps = {
  data: apiResponseRepositories;
};

const RepositoryList = ({ data }: RepositoryProps) => {
  console.log("data:", data);

  return (
    <>
      <p>
        Nome:{" "}
        <a href={data.html_url} target='__blank'>
          {data.name}
        </a>
      </p>

      <p>Linguagem utilizada: {data.language}</p>

      <p>Descrição: {data.description}</p>

      <p>Criado em: {data.created_at}</p>

      <p>Último push: {data.pushed_at}</p>

      <br />
    </>
  );
};

export default RepositoryList;
