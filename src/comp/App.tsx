import React from 'react';
import './App.css';
import { StatusTable } from './StatusTable';

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
        <div className="column">
          <div className="large">
            Active Players: <span id="count">???</span>
          </div>
          <table>
            <thead>
              <tr>
                <th>Game Mode</th>
                <th>#</th>
                <th>Game Mode</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Welcome</td>
                <td id="welcome">?</td>
                <td>Online Menu</td>
                <td id="online_menu">?</td>
              </tr>
              <tr>
                <td>Tutorial</td>
                <td id="tutorial">?</td>
                <td>Ranked Match</td>
                <td id="online_ranked">?</td>
              </tr>
              <tr>
                <td>Local Versus</td>
                <td id="local">?</td>
                <td>Casual Match</td>
                <td id="online_casual">?</td>
              </tr>
              <tr>
                <td>Versus CPU</td>
                <td id="cpu">?</td>
                <td>Private Match</td>
                <td id="online_private">?</td>
              </tr>
              <tr>
                <td>Training</td>
                <td id="training">?</td>
                <td>Private Lobby</td>
                <td id="online_lobby">?</td>
              </tr>
            </tbody>
          </table>
        </div>
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
