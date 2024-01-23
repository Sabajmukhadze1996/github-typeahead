import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { GitHubUser } from "./types/types";
import Loading from "./components/loading/Loading";
import Error from "./components/errors/Error";
import GithubUsers from "./pages/github-users/GithubUsers";



const App: React.FC = () => {
  const [users, setUsers] = useState<GitHubUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: Response = await fetch(`https://api.github.com/users`);
        const data: GitHubUser[] = await response.json();
        setUsers(data);
      } catch (error: unknown) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        {loading && <Loading />}
        {error && <Error errorMessage={error} />}
        {!loading && !error && <GithubUsers users={users} />}
      </main>
      <Footer />
    </div>
  );

};

export default App;
