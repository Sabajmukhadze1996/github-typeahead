import React from "react";
import { GitHubUser } from "../../types/types";
import "./github-users.css";


const GithubUsers: React.FC<{ users: GitHubUser[] }> = ({ users }) => {
  return (
    <>
      {users?.map((user: GitHubUser) => (
        <div key={user?.id} className="card">
          <img src={user?.avatar_url} alt={`${user?.login} avatar`} loading="lazy" />
          <div>
            <p>{user?.login?.length > 13 ? `${user?.login?.slice(0, 13)}...` : user?.login} </p>
            <a href={user?.html_url} target="_blank" rel="noopener noreferrer">
              GitHub Account
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default GithubUsers;
