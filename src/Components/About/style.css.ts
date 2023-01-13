import styled from 'styled-components';
import Image from 'next/image';

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

export const Headshot = styled(Image)`
  position: relative;
  border-radius: 100%;
  width: 100%;
  @media only screen and (max-width: 767px) {
    margin-bottom: 46px;
  }
`;

export const DownloadButton = styled.a`
  background: ${({ theme }) => theme.colors.onyx};
  border: none;
  border-radius: 3px;
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
  &:hover {
    background: ${({ theme }) => theme.colors.ghost};
    color: ${({ theme }) => theme.colors.jet};
  }
`;

export const DownloadIcon = styled.i`
  margin-right: 15px;
  font-size: 20px;
`;
