
export function fetchNoCache(url: string) {
  return fetch(url + '?cache=' + new Date().getTime());
}

export function chunk<T>(arr: T[], chunkSize: number): T[][] {
  const results = [];
  let start = 0;
  while (start < arr.length) {
    results.push(arr.slice(start, start + chunkSize));
    start += chunkSize;
  }
  return results;
}
