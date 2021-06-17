import React, { useState } from 'react';
import { Poll } from './Poll';
import styled from 'styled-components';

const polls = [{
  label: 'toughlovearena.com',
  url: 'https://toughlovearena.com/version.json',
}, {
  label: 'cache.tla',
  url: 'https://cache.toughlovearena.com/health',
}, {
  label: 'handshake.tla',
  url: 'https://handshake.toughlovearena.com/health',
}, {
  label: 'leaderboard.tla',
  url: 'https://leaderboard.toughlovearena.com/health',
}, {
  label: 'match.tla',
  url: 'https://match.toughlovearena.com',
}, {
  label: 'presence.tla',
  url: 'https://presence.toughlovearena.com/health',
}, {
  label: 'stun.tla',
  url: 'https://stun.toughlovearena.com/health',
}, {
  label: 'api',
  url: 'https://us-central1-fighter-api.cloudfunctions.net/webApi/api/v1/',
}];

const StatusLabel = styled.a<{ isUp: boolean }>`
  color: ${props => props.isUp ? 'lightgreen' : 'salmon'};
`;

export function StatusTable() {
  const records: Record<string, boolean> = {};
  const [allUp, setAllUp] = useState(undefined as boolean | undefined);

  const reportPoll = (url: string, success: boolean) => {
    records[url] = success;
    setAllUp(Object.values(records).every(b => b));
  };

  return (
    <div className="column">
      <div className="large">
        Status: {allUp === undefined ? '???' : (
          <StatusLabel isUp={allUp}>
            {allUp ? 'OK' : 'DOWN'}
          </StatusLabel>
        )}
      </div>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Status</th>
            <th>ms</th>
          </tr>
        </thead>
        <tbody>
          {polls.map((pd, pi) => (
            <Poll
              key={pi}
              report={ok => reportPoll(pd.url, ok)}
              {...pd}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
