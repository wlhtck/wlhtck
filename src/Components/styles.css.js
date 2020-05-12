import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1020px;
  margin: 0 auto;

  @media only screen and (max-width: 767px) {
    width: 460px;
    margin: 0 auto;
    padding: 0;
  }

  @media only screen and (max-width: 460px) {
    width: auto;
  }
`;

export const Column = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  ${({ justify = 'space-between' }) => `justify-content: ${justify}`};
  width: ${({ width }) => width * 100}%;
  @media only screen and (max-width: 767px) {
    width: auto !important;
    margin-left: 0;
    margin-right: 0;
    padding: 0 30px;
  }
`;
