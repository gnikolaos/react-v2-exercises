import { useParams } from "react-router-dom";
import GithubUser from "./GithubUser2";

function ShowGithubUser() {
  const { username } = useParams()
  return (
    <div>
      <GithubUser username={username} />
    </div>
  )  
}

export default ShowGithubUser