import React from 'react';
import './App.css';
import { MainContainer, DataContainer } from './shared';
import { StatusTable } from './StatusTable';
import { Version } from './Version';
import { News } from './News';
import { ActivePlayers } from './ActivePlayers';
import { RankedQueueTimes } from './RankedQueueTimes';

export function App() {
  return (
    <MainContainer>
      <header>
        <img id="logo" src="logo.png" alt="logo" />
        <div>Tough Love Arena Status Page</div>
        <Version />
        <News />
      </header>

      <DataContainer>
        <StatusTable />
        <ActivePlayers />
        <RankedQueueTimes />
        <div className="column">
          <div className="large">
            Casual Queue Time: <span id="queue-casual">???</span> seconds
          </div>
          <canvas id="chart-casual"></canvas>
        </div>
      </DataContainer>

      <footer>
        Updates every 30 seconds
        <br />
        Last updated @ <span id="updated">???</span>
        <br />
        If anything is down, please email <a href="mailto:toughlovearena@gmail.com">toughlovearena@gmail.com</a>
      </footer>
    </MainContainer>
  );
}
