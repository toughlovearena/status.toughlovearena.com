import { AsyncQueue } from "./asyncQueue";

export function isLongPoll() {
  return !!(new URLSearchParams(window.location.search).get('long'));
}

export function isSimple() {
  return !!(new URLSearchParams(window.location.search).get('simple'));
}

export function fetchNoCache(url: string): Promise<Response> {
  return fetch(url + '?cache=' + new Date().getTime());
}
export const QUEUE = new AsyncQueue();
export function queueFetch(url: string): Promise<Response> {
  return QUEUE.enqueue(() => fetchNoCache(url)).promise;
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
