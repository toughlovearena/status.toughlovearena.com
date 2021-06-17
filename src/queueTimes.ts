import { ChartRef } from './chart';
import { CRON } from './cron';
import { chunk, fetchNoCache } from './util';

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

class QueueTimesSingleton {
  private casual: ChartRef | undefined;
  private ranked: ChartRef | undefined;
  constructor() {
    CRON.register('chart', () => this.step());
  }

  registerCasual(cr: ChartRef) {
    this.casual = cr;
    this.step();
  }
  registerRanked(cr: ChartRef) {
    this.ranked = cr;
    this.step();
  }

  private convertQueueTimesToData(queueTimes: QueueTimes) {
    console.log(queueTimes);
    const lookup = {};
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
    const allLabels = [...Array(highest + 1).keys()];
    const allValues = allLabels.map(i => lookup[i.toString()] || 0);
    const labels = chunk(allLabels, 5).map(c => `${c[0]} - ${c.concat().pop()}`);
    const values = chunk(allValues, 5).map(c => c.reduce((sum, curr) => sum + curr, 0));
    return { labels, values, average };
  }
  private async step() {
    try {
      const response = await fetchNoCache('https://match.toughlovearena.com/details');
      const servers = await response.json() as ServerData[];
      const prod = servers.filter(s => s.label === 'prod')[0];
      const queues = [];
      if (this.casual) {
        queues.push({
          queueTimes: prod.casual.queueTimes,
          avgId: 'queue-casual',
          chart: this.casual.chart,
        });
      }
      if (this.ranked) {
        queues.push({
          queueTimes: prod.ranked.queueTimes,
          avgId: 'queue-ranked',
          chart: this.ranked.chart,
        });
      }
      queues.forEach(q => {
        const graphData = this.convertQueueTimesToData(q.queueTimes);
        if (!graphData) { return; }

        while (q.chart.data.labels.length) {
          q.chart.data.labels.pop();
        }
        q.chart.data.datasets.forEach(ds => {
          while (ds.data.length) {
            ds.data.pop();
          }
        });
        graphData.labels.forEach(lab => q.chart.data.labels.push(lab));
        graphData.values.forEach(val => q.chart.data.datasets.forEach(ds => ds.data.push(val)));
        q.chart.update();
        // document.getElementById(q.avgId).innerText = Math.round(graphData.average);
      });
    } catch (err) {
      console.log(err);
      // queues.forEach(q => {
      //   document.getElementById('queue-ranked').innerText = '???';
      //   document.getElementById('queue-casual').innerText = '???';
      // });
    }
  }
}

export const QUEUE_TIMES = new QueueTimesSingleton();
