import React, { useCallback, useEffect, useState } from 'react';
import { CRON } from '../cron';
import { queueFetch } from '../util';

export function News() {
  const [news, setNews] = useState(undefined as string | undefined);

  const fetchNews = useCallback(async () => {
    const response = await queueFetch('https://us-central1-fighter-api.cloudfunctions.net/webApi/api/v1/news');
    const data = await response.json() as { message: string, };
    setNews(data.message);
  }, [setNews]);
  useEffect(() => CRON.register('news', () => fetchNews()), [fetchNews]);

  const newsCopy = (
    (news === undefined && '???') ||
    news ||
    '<i>no news</i>'
  );
  return (
    <div>
      News: <span dangerouslySetInnerHTML={{ __html: newsCopy, }} />
    </div>
  );
}
