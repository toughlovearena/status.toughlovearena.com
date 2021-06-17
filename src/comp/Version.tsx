import React, { useCallback, useEffect, useState } from 'react';
import { fetchNoCache, PERIOD } from './shared';

export function Version() {
  const [version, setVersion] = useState(undefined as string | undefined);

  const fetchVersion = useCallback(async () => {
    const response = await fetchNoCache('https://toughlovearena.com/version.json');
    const data = await response.json() as { v: string, u: string, };
    setVersion(data.v);
  }, [setVersion]);

  useEffect(() => {
    fetchVersion();
    setInterval(() => fetchVersion(), PERIOD);
  }, [fetchVersion]);

  return <div>v{version ?? '???'}</div>;
}
