/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import { UserCard } from './UserCard';
import type { User } from './Users';

type Props = {
  userId: number;
  onCancel: () => void;
};
export function UserDetails({ userId, onCancel }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    async function getUser() {
      try {
        const resp = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        if (!resp.ok) {
          throw new Error('Unable to fetch user');
        }
        const userJSON = await resp.json();
        const userObj: User = {
          id: userJSON.id,
          name: userJSON.name,
          email: userJSON.email,
          company: {
            name: userJSON.company.name,
          },
        };
        setUser(userObj);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    getUser();
  }, [userId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error || !user) {
    console.error('Fetch error:', error);
    return (
      <p>Error! {error instanceof Error ? error.message : 'Unknown Error'}</p>
    );
  }

  return (
    <div>
      <button onClick={() => onCancel()}>Close</button>
      <UserCard user={user} />
    </div>
  );
}
