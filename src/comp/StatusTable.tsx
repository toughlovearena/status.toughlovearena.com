import React, { useCallback, useState } from 'react';
import { Poll } from './Poll';
import styled from 'styled-components';
import { DataSection, DataTable, SectionTitle } from './shared';

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
  label: 'matchmaker.tla',
  url: 'https://matchmaker.toughlovearena.com',
}, {
  label: 'presence.tla',
  url: 'https://presence.toughlovearena.com/health',
}, {
  label: 'lobbya.tla',
  url: 'https://lobbya.toughlovearena.com/health',
}, {
  label: 'lobbyb.tla',
  url: 'https://lobbyb.toughlovearena.com/health',
}, {
  label: 'stun.tla',
  url: 'https://stun.toughlovearena.com/health',
}, {
  label: 'serverless accounts API	',
  url: 'https://us-central1-fighter-api.cloudfunctions.net/webApi/api/v1/',
}];

const StatusLabel = styled.a<{ isUp: boolean }>`
  color: ${props => props.isUp ? 'lightgreen' : 'salmon'};
`;

// todo not sure where to put this w/ hooks
const records: Record<string, boolean> = {};

export function StatusTable() {
  const [allUp, setAllUp] = useState(undefined as boolean | undefined);

  const reportPoll = useCallback((url: string, success: boolean) => {
    records[url] = success;
    setAllUp(Object.values(records).every(b => b));
  }, [setAllUp]);

  return (
    <DataSection>
      <SectionTitle>
        Status: {allUp === undefined ? '???' : (
          <StatusLabel isUp={allUp}>
            {allUp ? 'OK' : 'DOWN'}
          </StatusLabel>
        )}
      </SectionTitle>
      <DataTable>
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
      </DataTable>
    </DataSection>
  )
}
