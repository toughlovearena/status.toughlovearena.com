import React, { useCallback, useEffect, useState } from 'react';
import { CRON } from '../cron';
import { DataSection, SectionTitle, DataTable } from './shared';
import { QUEUE } from '../asyncQueue';
import { queueFetch } from '../util';

export function ActivePlayers() {
  const [counts, setCounts] = useState(undefined as Record<string, number> | undefined);

  const fetchCounts = useCallback(async () => {
    const response = await queueFetch(QUEUE, 'https://presence.toughlovearena.com');
    const counts = await response.json() as Record<string, number>;
    setCounts(counts);
  }, [setCounts]);
  useEffect(() => CRON.register('activePlayers', () => fetchCounts()), [fetchCounts]);

  const total = counts ? Object.values(counts).reduce((c, sum) => sum + c, 0) : '???';
  const renderCount = (key: string) => (counts && counts[key]) ?? '?';

  return (
    <DataSection>
      <SectionTitle>
        Active Players: {total}
      </SectionTitle>
      <DataTable>
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
            <td>Menu</td>
            <td>{renderCount('menu')}</td>
          </tr>
          <tr>
            <td>How to Play</td>
            <td>{renderCount('how_to_play')}</td>
            <td>Ranked Match</td>
            <td>{renderCount('online_ranked')}</td>
          </tr>
          <tr>
            <td>Local Versus</td>
            <td>{renderCount('vs_local')}</td>
            <td>Casual Match</td>
            <td>{renderCount('online_casual')}</td>
          </tr>
          <tr>
            <td>Versus CPU</td>
            <td>{renderCount('vs_cpu')}</td>
            <td>Private Match</td>
            <td>{renderCount('online_private')}</td>
          </tr>
          <tr>
            <td>Boss Fight</td>
            <td>{renderCount('vs_boss')}</td>
            <td>Private Lobby</td>
            <td>{renderCount('online_lobby')}</td>
          </tr>
          <tr>
            <td>Training</td>
            <td>{renderCount('training')}</td>
            <td>Account Login</td>
            <td>{renderCount('online_account')}</td>
          </tr>
          <tr>
            <td>Frame Data</td>
            <td>{renderCount('frame_data')}</td>
            <td>Account Stats</td>
            <td>{renderCount('online_stats')}</td>
          </tr>
          <tr>
            <td>Debug Ref</td>
            <td>{renderCount('debug_ref')}</td>
            <td>Leaderboard</td>
            <td>{renderCount('online_leaderboard')}</td>
          </tr>
          <tr>
            <td>About</td>
            <td>{renderCount('about')}</td>
            <td>Hall of Fame</td>
            <td>{renderCount('hall_of_fame')}</td>
          </tr>
          <tr>
            <td>Modding</td>
            <td>{renderCount('modding')}</td>
            <td>Replay</td>
            <td>{renderCount('replay')}</td>
          </tr>
        </tbody>
      </DataTable>
    </DataSection>
  );
}
