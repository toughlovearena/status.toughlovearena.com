import { ChartRef } from './chart';
import { CRON } from './cron';
import { chunk, queueFetch, range } from './util';

type QueueTimes = Record<string, Record<string, number>>;
type QueueData = {
  counter: number;
  searching: string[];
  queueTimes: QueueTimes;
}
type ServerData = {
  label: string;
  path: string;
  casual: QueueData;
  ranked: QueueData;
}
type QueueRef = {
  chart: ChartRef;
  setAverage(average: number | undefined): void;
}

class QueueTimesSingleton {
  private casual: QueueRef | undefined;
  private ranked: QueueRef | undefined;
  constructor() {
    CRON.register('chart', () => this.step());
  }

  registerCasual(cr: QueueRef) {
    this.casual = cr;
    this.step();
  }
  registerRanked(cr: QueueRef) {
    this.ranked = cr;
    this.step();
  }

  private convertQueueTimesToData(queueTimes: QueueTimes) {
    console.log(queueTimes);
    const lookup: Record<string, number> = {};
    const latestDate = Object.keys(queueTimes).sort().pop();
    if (!latestDate) { return; }

    const queueDate = queueTimes[latestDate];
    for (const key in queueDate) {
      const seconds = parseFloat(key.split('s')[0]);
      const count = queueDate[key];
      lookup[seconds.toString()] = (lookup[seconds.toString()] || 0) + count;
    }
    const dataSet = [];
    let sum = 0;
    let sumCount = 0;
    for (const key in lookup) {
      const seconds = parseFloat(key);
      const count = lookup[key];
      dataSet.push({ seconds, count, });
      sum += seconds * count;
      sumCount += count;
    }
    const average = sum / sumCount;
    const highest = Math.max(...dataSet.map(d => d.seconds));
    const allLabels = range(highest + 1);
    const allValues = allLabels.map(i => lookup[i.toString()] || 0);
    const labels = chunk(allLabels, 5).map(c => `${c[0]} - ${c.concat().pop()}`);
    const values = chunk(allValues, 5).map(c => c.reduce((sum, curr) => sum + curr, 0));
    return { labels, values, average };
  }
  private async step() {
    const queues: { queueTimes: QueueTimes, ref: QueueRef }[] = [];
    try {
      const response = await queueFetch('https://matchmaker.toughlovearena.com/details');
      const servers = await response.json() as ServerData[];
      const prod = servers.filter(s => s.label === 'prod')[0];
      if (this.casual) {
        queues.push({
          queueTimes: prod.casual.queueTimes,
          ref: this.casual,
        });
      }
      if (this.ranked) {
        queues.push({
          queueTimes: prod.ranked.queueTimes,
          ref: this.ranked,
        });
      }
      queues.forEach(q => {
        const graphData = this.convertQueueTimesToData(q.queueTimes);
        if (!graphData) { return; }

        while (q.ref.chart.chart.data.labels?.length) {
          q.ref.chart.chart.data.labels.pop();
        }
        q.ref.chart.chart.data.datasets.forEach(ds => {
          while (ds.data.length) {
            ds.data.pop();
          }
        });
        graphData.labels.forEach(lab => q.ref.chart.chart.data.labels!.push(lab));
        graphData.values.forEach(val => q.ref.chart.chart.data.datasets.forEach(ds => ds.data.push(val)));
        q.ref.chart.chart.update();
        q.ref.setAverage(Math.round(graphData.average));
      });
    } catch (err) {
      console.log(err);
      queues.forEach(q => {
        q.ref.setAverage(undefined);
      });
    }
  }
}

export const QUEUE_TIMES = new QueueTimesSingleton();
