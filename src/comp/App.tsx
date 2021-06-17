import React from 'react';
import styled from 'styled-components';
import { MainContainer, DataContainer } from './shared';
import { StatusTable } from './StatusTable';
import { Version } from './Version';
import { News } from './News';
import { ActivePlayers } from './ActivePlayers';
import { RankedQueueTimes } from './RankedQueueTimes';
import { CasualQueueTimes } from './CasualQueueTimes';

const Header = styled.div`
  padding-bottom: 0.5rem;
  border-bottom: 1px solid white;
`;
const Logo = styled.img`
  display: block;
  width: 100%;
  max-width: 600px;
  height: auto;
`;
const Footer = styled.div`
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid white;
`;

export function App() {
  return (
    <MainContainer>
      <Header>
        <Logo src="logo.png" alt="logo" />
        <div>Tough Love Arena Status Page</div>
        <Version />
        <News />
      </Header>

      <DataContainer>
        <StatusTable />
        <ActivePlayers />
        <RankedQueueTimes />
        <CasualQueueTimes />
      </DataContainer>

      <Footer>
        Updates every 30 seconds
        <br />
        Last updated @ <span id="updated">???</span>
        <br />
        If anything is down, please email <a href="mailto:toughlovearena@gmail.com">toughlovearena@gmail.com</a>
      </Footer>
    </MainContainer>
  );
}
