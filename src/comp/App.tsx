import React from 'react';
import './App.css';
import { StatusTable } from './StatusTable';
import { ActivePlayers } from './ActivePlayers';

export function App() {
  return (
    <div id="container" className="column">
      <header>
        <img id="logo" src="logo.png" alt="logo" />
        <div>Tough Love Arena Status Page</div>
        <div>v<span id="version">???</span></div>
        <div>News: <span id="news">???</span></div>
      </header>

      <section id="data">
        <StatusTable />
        <ActivePlayers />
        <div className="column">
          <div className="large">
            Ranked Queue Time: <span id="queue-ranked">???</span> seconds
          </div>
          <canvas id="chart-ranked"></canvas>
        </div>
        <div className="column">
          <div className="large">
            Casual Queue Time: <span id="queue-casual">???</span> seconds
          </div>
          <canvas id="chart-casual"></canvas>
        </div>
      </section>

      <footer>
        Updates every 30 seconds
        <br />
        Last updated @ <span id="updated">???</span>
        <br />
        If anything is down, please email <a href="mailto:toughlovearena@gmail.com">toughlovearena@gmail.com</a>
      </footer>
    </div>
  );
}
