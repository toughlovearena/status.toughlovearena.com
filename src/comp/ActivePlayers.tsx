import React, { useCallback, useEffect, useState } from 'react';
import { fetchNoCache, PERIOD, Section, SectionTitle } from './shared';

export function ActivePlayers() {
  const [counts, setCounts] = useState(undefined as Record<string, number> | undefined);

  const fetchCounts = useCallback(async () => {
    const response = await fetchNoCache('https://presence.toughlovearena.com');
    const counts = await response.json() as Record<string, number>;
    setCounts(counts);
  }, [setCounts]);

  useEffect(() => {
    fetchCounts();
    setInterval(() => fetchCounts(), PERIOD);
  }, [fetchCounts]);

  const total = counts && Object.values(counts).reduce((c, sum) => sum + c, 0);
  const renderCount = (key: string) => (counts && counts[key]) ?? '?';

  return (
    <Section>
      <SectionTitle>
        Active Players: {total ?? '???'}
      </SectionTitle>
      <table>
        <thead>
          <tr>
            <th>Game Mode</th>
            <th>#</th>
            <th>Game Mode</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Welcome</td>
            <td>{renderCount('welcome')}</td>
            <td>Online Menu</td>
            <td>{renderCount('online_menu')}</td>
          </tr>
          <tr>
            <td>Tutorial</td>
            <td>{renderCount('tutorial')}</td>
            <td>Ranked Match</td>
            <td>{renderCount('online_ranked')}</td>
          </tr>
          <tr>
            <td>Local Versus</td>
            <td>{renderCount('local')}</td>
            <td>Casual Match</td>
            <td>{renderCount('online_casual')}</td>
          </tr>
          <tr>
            <td>Versus CPU</td>
            <td>{renderCount('cpu')}</td>
            <td>Private Match</td>
            <td>{renderCount('online_private')}</td>
          </tr>
          <tr>
            <td>Training</td>
            <td>{renderCount('training')}</td>
            <td>Private Lobby</td>
            <td>{renderCount('online_lobby')}</td>
          </tr>
        </tbody>
      </table>
    </Section>
  );
}
