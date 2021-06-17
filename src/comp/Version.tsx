import React, { useCallback, useState } from 'react';
import { fetchNoCache, useLoop } from './shared';

export function Version() {
  const [version, setVersion] = useState(undefined as string | undefined);

  const fetchVersion = useCallback(async () => {
    const response = await fetchNoCache('https://toughlovearena.com/version.json');
    const data = await response.json() as { v: string, u: string, };
    setVersion(data.v);
  }, [setVersion]);

  useLoop(() => fetchVersion());

  return <div>v{version ?? '???'}</div>;
}
