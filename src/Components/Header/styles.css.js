import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  height: 100vh;
  min-height: 500px;
  width: 100%;
  background: #161415 url(images/header-background.jpg) no-repeat top center;
  background-size: cover !important;
  text-align: center;
  overflow: hidden;
  &:before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
`;

export const Banner = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin: 0 auto;
  width: 85%; 
  max-width: 1020px;
  padding-bottom: 30px;
  text-align: center;
`;

export const BannerText = styled.div`
  width: 100%;
`;

export const H1 = styled.h1`
  font: 90px/1.1em 'opensans-bold', sans-serif;
  color: #fff;
  letter-spacing: -2px;
  margin: 0 auto 18px auto;
  text-shadow: 0px 1px 3px rgba(0, 0, 0, .8);
`;

export const H3 = styled.h3`
  font: 18px/1.9em 'opensans-regular', serif;
  color: #fff;
  margin: 0 auto;
  width: 70%;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, .5);
`;

export const Social = styled.ul`
  margin: 24px 0;
  padding: 0;
  font-size: 30px;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, .8);
`;

export const SocialItem = styled.li`
  display: inline-block;
  margin: 0 15px;
  padding: 0;
`;

export const Scrolldown = styled.a`
  background: transparent;
  position: absolute;
  bottom: 30px;
  left: 50%;
  margin-left: -29px;
  display: block;
  height: 42px;
  width: 42px;
  font-size: 42px;
  line-height: 42px;
  border-radius: 100%;

  transition: all .3s ease-in-out;
  &:hover {
    color: #11ABB0;
  }
`;
