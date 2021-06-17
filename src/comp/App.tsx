import React from 'react';
import './App.css';
import { Poll } from './Poll';

const polls = [{
  label: 'toughlovearena.com',
  url: 'https://toughlovearena.com/version.json',
}, {
  label: 'cache.tla',
  url: 'https://cache.toughlovearena.com/health',
}, {
  label: 'handshake.tla',
  url: 'https://handshake.toughlovearena.com/health',
}, {
  label: 'leaderboard.tla',
  url: 'https://leaderboard.toughlovearena.com/health',
}, {
  label: 'match.tla',
  url: 'https://match.toughlovearena.com',
}, {
  label: 'presence.tla',
  url: 'https://presence.toughlovearena.com/health',
}, {
  label: 'stun.tla',
  url: 'https://stun.toughlovearena.com/health',
}, {
  label: 'api',
  url: 'https://us-central1-fighter-api.cloudfunctions.net/webApi/api/v1/',
}];

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
        <div className="column">
          <div className="large">
            Status: <span id="status-overall">???</span>
          </div>
          <table>
            <thead>
              <tr>
                <th>Service</th>
                <th>Status</th>
                <th>ms</th>
              </tr>
            </thead>
            <tbody>
              {polls.map((pd, pi) => <Poll key={pi} {...pd} />)}
            </tbody>
          </table>
        </div>
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
