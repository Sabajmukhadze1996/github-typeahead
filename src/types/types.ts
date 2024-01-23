export interface GitHubUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface GitHubResponse {
  items: GitHubUser[];
}

export interface ErrorProps {
  errorMessage: string;
}
