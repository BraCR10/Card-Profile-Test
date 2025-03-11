import { useState, useEffect } from "react";

export function useGitHubAvatar(githubUsername: string) {
  const [avatar, setAvatar] = useState<string>("");

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}`,
        );
        const userData = await response.json();
        setAvatar(userData.avatar_url);
      } catch (error) {
        console.error("Error fetching avatar:", error);
      }
    };

    if (githubUsername) {
      fetchAvatar();
    }
  }, [githubUsername]);

  return { avatar };
}
