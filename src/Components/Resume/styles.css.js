import styled from 'styled-components';
import { Row, Column } from '../styles.css';

export const Resume = styled.section`
  background: ${({ theme }) => theme.colors.ghost};
  padding: 96px 0 66px;
  overflow: hidden;
  @media only screen and (max-width: 767px) {
    padding: 0px 0 33px;
  }
`;

export const H1 = styled.h1`
  border-bottom: 5px solid ${({ theme }) => theme.colors.yale};
  display: inline-flex;
  align-self: flex-end;
  font: 18px/24px 'opensans-bold', sans-serif;
  letter-spacing: 1px;
  padding-bottom: 6px;
  text-align: right;
  text-transform: uppercase;
  @media only screen and (max-width: 767px) {
    margin: 48px 0 33px;
    align-self: flex-start;
  }
`;

export const HeaderCol = styled(Column)`
  text-align: right;
  padding-right: 35px;
`;

export const MainCol = styled(Column)`
  padding-right: 10%; 
`;

export const Section = styled(Row)`
  margin-bottom: 48px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.ghost};
`;

export const BulletSpan = styled.span`
  margin-right: 5px;
  margin-left: 5px;
`;

export const Date = styled.em`
  font: 15px/24px 'opensans-regular', sans-serif;
`;

export const SkillHeader = styled.em`
  font: 15px 'opensans-bold', sans-serif;
  color: ${({ theme }) => theme.colors.onyx};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: normal;
  text-align: center;
  padding: 20px 0;
`;

export const BarExpand = styled.span`
  background: #313131;
  border-radius: 3px 0 0 3px;
  display: inline-block;
  height: 42px;
  left: 0;
  line-height: 42px;
  margin: 0;
  padding-right: 24px;
  position: absolute;
  top: 0;
  width: ${({ level }) => level};
`
