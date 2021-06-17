import React, { useCallback, useEffect, useState } from 'react';
import { fetchNoCache, PERIOD } from './shared';

export function News() {
  const [news, setNews] = useState(undefined as string | undefined);

  const fetchNews = useCallback(async () => {
    const response = await fetchNoCache('https://us-central1-fighter-api.cloudfunctions.net/webApi/api/v1/news');
    const data = await response.json() as { message: string, };
    setNews(data.message);
  }, [setNews]);

  useEffect(() => {
    fetchNews();
    setInterval(() => fetchNews(), PERIOD);
  }, [fetchNews]);

  const newsCopy = (
    (news === undefined && '???') ||
    (!news && <i>no news</i>) ||
    news
  );
  return <div>News: {newsCopy}</div>;
}
