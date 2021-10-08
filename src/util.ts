
export function isLongPoll() {
  return !!(new URLSearchParams(window.location.search).get('long'));
}

export function fetchNoCache(url: string) {
  return fetch(url + '?cache=' + new Date().getTime());
}

export function range(length: number): number[] {
  const out = [] as number[];
  for (let i = 0; i < length; i++) {
    out.push(i);
  }
  return out;
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
