import React, { useCallback, useEffect, useState } from 'react';
import { QUEUE } from '../asyncQueue';
import { CRON } from '../cron';
import { queueFetch } from '../util';

export function Version() {
  const [version, setVersion] = useState(undefined as string | undefined);

  const fetchVersion = useCallback(async () => {
    const response = await queueFetch(QUEUE, 'https://toughlovearena.com/version.json');
    const data = await response.json() as { v: string, u: string, };
    setVersion(data.v);
  }, [setVersion]);
  useEffect(() => CRON.register('version', () => fetchVersion()), [fetchVersion]);

  return (
    <div>
      <a href='https://toughlovearena.com?changelog'>
        v{version ?? '???'}
      </a>
    </div>
  );
}
