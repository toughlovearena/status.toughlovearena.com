import styled from 'styled-components';

export const PERIOD = 30 * 1000;
export function fetchNoCache(url: string) {
  return fetch(url + '?cache=' + new Date().getTime());
}

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;

  padding: 2rem 1rem;
  box-sizing: border-box;
  max-width: 800px;

  @media (min-width: 800px) {
    max-width: 1200px;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`;

export const DataSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;

  @media (min-width: 800px) {
    width: 500px;
  }
`;

export const SectionTitle = styled.div`
  font-size: 1.5em;
  margin: 1em 0;
  margin-bottom: 0.5em;
`;
