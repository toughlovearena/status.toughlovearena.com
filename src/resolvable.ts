export interface Resolvable<T> {
  promise: Promise<T>;
  resolve: (value: T) => void;
  reject: (reason?: any) => void;
  hasResolved(): boolean;
  hasErrored(): boolean;
}
export function resolvable<T>(): Resolvable<T> {
  let resolveCallback: (value: T) => void = () => { };
  let rejectCallback: (reason?: any) => void = () => { };
  let resolved = false;
  let errored = false;
  const promise = new Promise<T>((resolve, reject) => {
    resolveCallback = value => {
      resolved = true;
      resolve(value);
    };
    rejectCallback = reason => {
      errored = true;
      reject(reason);
    };
  });
  return {
    promise,
    resolve: resolveCallback,
    reject: rejectCallback,
    hasResolved: () => resolved,
    hasErrored: () => errored,
  }
}
