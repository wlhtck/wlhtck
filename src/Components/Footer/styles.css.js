import styled from 'styled-components';

export const Footer = styled.footer`
  padding-top: 48px;
  padding-bottom: 48px;
  background-color: ${({ theme }) => theme.colors.jet};
  color: ${({ theme }) => theme.colors.quicksilver};
  font-size: 14px;
  text-align: center;
  position: relative;
`;

export const A = styled.a`
  color: ${({ theme }) => theme.colors.ghost}; 
  &:visited {
    color: ${({ theme }) => theme.colors.ghost}; 
  }
  &:hover, &:focus {
    color: ${({ theme }) => theme.colors.ghost};
  }

`

export const Copyright = styled.ul`
  margin: 0;
  padding: 0;
`;

export const CopyrightItem = styled.li`
  display: inline-block;
  margin: 0;
  padding: 0;
  line-height: 24px;
  &:before {
    content: "\2022";
    padding-left: 10px;
    padding-right: 10px;
    color: ${({ theme }) => theme.colors.jet};
  }
`;

export const SocialLinkList = styled.ul`
  margin: 18px 0 30px 0;
  padding: 0;
  font-size: 30px;
`;

export const SocialLink = styled.li`
  display: inline-block;
  margin: 0;
  padding: 0;
  margin-left: 42px;
  color: #F06000;
  &:first-child { 
    margin-left: 0;
  }
`;

export const GoTop = styled.a`
  position: absolute;
  top: -24px;
  left: 50%;
  margin-left: -30px;
  text-decoration: none;
  border: 0 none;
  display: block;
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.onyx};
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.colors.ghost};
  font-size: 21px;
  line-height: 60px;
  border-radius: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.colors.yale};
    color: ${({ theme }) => theme.colors.ghost};
  }
`;
