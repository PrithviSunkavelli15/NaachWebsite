import { useEffect, useState } from 'react';
import API from '../api';

export default function TeamPortal() {
  const [team, setTeam] = useState(null);

  useEffect(() => {
    API.get('/team/details')
      .then(res => setTeam(res.data))
      .catch(console.error);
  }, []);

  if (!team) return <p>Loading your team…</p>;

  return (
    <div>
      <h1>{team.name} Portal</h1>
      {/* TODO: insert form here later */}
    </div>
  );
}
