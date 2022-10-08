import { resolvable, Resolvable } from "./resolvable";

export class AsyncQueue {
  private readonly threads;
  private count = 0;
  private queue: {
    id: number;
    resolvable: Resolvable<any>;
  }[] = [];

  constructor(threads?: number) {
    this.threads = Math.max(1, threads ?? 3);
  }

  enqueue<T>(cb: () => Promise<T>): Resolvable<T> {
    const id = this.count++;
    const item = resolvable<T>();
    const process = async () => cb()
      .then(out => item.resolve(out))
      .catch(err => item.resolve(err))
      .finally(() => this.dequeue(id));

    const prevIndex = this.queue.length - this.threads;
    const prevResolve = this.queue[prevIndex];
    const prevPromise = prevResolve?.resolvable.promise ?? Promise.resolve();
    prevPromise
      .catch(console.log)
      .finally(process);

    this.queue.push({
      id,
      resolvable: item,
    });
    return item;
  }

  private dequeue(id: number) {
    this.queue = this.queue.filter(elm => elm.id !== id);
  }

}

export const QUEUE = new AsyncQueue();
