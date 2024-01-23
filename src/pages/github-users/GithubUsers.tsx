import React, { useState } from "react";
import { GitHubUser } from "../../types/types";
import NotFound from "../../components/not-found/NotFound";
import "./github-users.css";

const GithubUsers: React.FC<{ users: GitHubUser[] }> = ({ users }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredUsers = users.filter((user: GitHubUser) =>
    user.login.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="search-box-container">
        <input
          className="search-box"
          type="text"
          name="search"
          id="search"
          placeholder="Search User.."
          autoFocus
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
        />
        <img className="search-box-icon" src="search-icon.png" alt="search-icon" />
      </div>

      {filteredUsers.length === 0 && <NotFound />}

      {filteredUsers.map((user: GitHubUser) => (
        <div key={user?.id} className="card">
          <img src={user?.avatar_url} alt={`${user?.login} avatar`} />
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
