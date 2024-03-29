import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { CRON } from '../cron';
import { fetchNoCache, QUEUE } from '../util';

const PollLink = styled.a<{ isUp: boolean }>`
  color: ${props => props.isUp ? 'lightgreen' : 'salmon'};
  text-decoration: none;
`;

export function Poll(props: {
  label: string;
  url: string;
  report(ok: boolean): void;
}) {
  const {
    label,
    url,
    report,
  } = props;

  const [isUp, setIsUp] = useState(undefined as boolean | undefined);
  const [pingMs, setPingMs] = useState(undefined as number | undefined);

  const checkIsUp = useCallback(() => {
    QUEUE.enqueue(async () => {
      const before = performance.now();
      try {
        const response = await fetchNoCache(url);
        if (!response.ok) {
          throw new Error('fetch failed: ' + url);
        }
        setIsUp(true);
        report(true);
      } catch (err) {
        setIsUp(false);
        report(false);
      }
      const after = performance.now();
      setPingMs(Math.round(after - before));
    });
  }, [url, report, setIsUp, setPingMs]);
  useEffect(() => CRON.register(`poll-${label}`, () => checkIsUp()), [label, checkIsUp]);

  return (
    <tr>
      <td>{label}</td>
      <td>
        {isUp === undefined ? '???' : (
          <PollLink href={url} isUp={isUp}>
            {isUp ? 'OK' : 'DOWN'}
          </PollLink>
        )}
      </td>
      <td>
        {pingMs ?? '???'}
      </td>
    </tr>
  );
}
