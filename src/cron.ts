interface IntervalCallback {
  (): void;
}

class CronSingleton {
  private readonly PERIOD = 30 * 1000;
  private readonly callbacks: Record<string, IntervalCallback | undefined> = {};
  constructor() {
    setInterval(() => this.step(), this.PERIOD);
  }

  private step() {
    Object.values(this.callbacks).forEach(cb => cb && cb());
  }

  register(key: string, cb: IntervalCallback) {
    const existing = this.callbacks[key];
    if (existing !== undefined) {
      // do nothing
    } else {
      cb();
    }
    this.callbacks[key] = cb;
    return () => this.unregister(key);
  }
  private unregister(key: string) {
    this.callbacks[key] = () => { };
  }
}

export const CRON = new CronSingleton();
