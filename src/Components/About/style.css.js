import styled from 'styled-components';
import { Row } from '../styles.css'

export const About = styled.section`
  background: ${({ theme }) => theme.colors.jet};
  padding: 96px 0 66px;
  overflow: hidden;
  @media only screen and (max-width: 767px) {
    padding: 48px 0 33px;
  }
`;

export const H2 = styled.h2`
  font: 22px/30px 'opensans-bold', sans-serif;
  color: ${({ theme }) => theme.colors.ghost};
  margin-bottom: 12px;
`;

export const P = styled.p`
  line-height: 30px;
  color: ${({ theme }) => theme.colors.quicksilver};
`;

export const Headshot = styled.img`
  position: relative;
  border-radius: 100%;
  width: 100%;
  @media only screen and (max-width: 767px) {
    margin-bottom: 46px;
  }
`;

export const ButtonRow = styled(Row)`
  justify-content: flex-start;
  margin: 0;
  @media only screen and (max-width: 767px) {
    margin: 0;
  }
  
`

export const Button = styled.a`
  background: ${({ theme }) => theme.colors.onyx};
  border-radius: 3px;
  border: none;
  color: ${({ theme }) => theme.colors.ghost};
  cursor: pointer;
  display: inline-block;
  font: 16px/30px 'opensans-bold', sans-serif;
  height: auto;
  letter-spacing: 0;
  margin-bottom: 18px;
  margin-top: 6px;
  padding: 12px 20px;
  text-decoration: none;
  transition: all .2s ease-in-out;
  &:not(:first-child) {
    margin-left: 32px;
  }

  @media only screen and (max-width: 460px) {
    width: 100%;
    &:not(:first-child) {
      margin-left: 0;
    }
  }


  &:hover {
    background: ${({ theme }) => theme.colors.ghost};
    color: ${({ theme }) => theme.colors.jet};
  }
`;

export const Icon = styled.i`
  margin-right: 15px;
  font-size: 20px;
`;
