import React, { useCallback, useEffect, useState } from 'react';

export function Poll(props: {
  label: string;
  url: string;
}) {
  const {
    label,
    url,
  } = props;

  const [isUp, setIsUp] = useState(undefined as boolean | undefined);
  const [pingMs, setPingMs] = useState(undefined as number | undefined);

  const checkIsUp = useCallback(async () => {
    const before = performance.now();
    try {
      const response = await fetch(url + '?cache=' + before);
      if (!response.ok) {
        throw new Error('fetch failed: ' + url);
      }
      setIsUp(true);
    } catch (err) {
      setIsUp(false);
    }
    const after = performance.now();
    setPingMs(Math.round(after - before));
  }, [url, setIsUp, setPingMs]);

  useEffect(() => {
    checkIsUp();
    setInterval(() => checkIsUp(), 30 * 1000);
  }, [checkIsUp]);

  return (
    <tr>
      <td>{label}</td>
      <td>
        {isUp === undefined ? '???' : (
          <a href={url} style={{ color: isUp ? 'lightgreen' : 'salmon', }}>
            {isUp ? 'OK' : 'DOWN'}
          </a>
        )}
      </td>
      <td>
        {pingMs ?? '???'}
      </td>
    </tr>
  );
}
