import styled from 'styled-components';

export const PERIOD = 30 * 1000;
export function fetchNoCache(url: string) {
  return fetch(url + '?cache=' + new Date().getTime());
}

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
`;

export const SectionTitle = styled.div`
  font-size: 1.5em;
  margin: 1em 0;
  margin-bottom: 0.5em;
`;
