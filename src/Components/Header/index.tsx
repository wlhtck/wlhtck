import React, { FC } from 'react';
import { Header, Banner, BannerText, H1, H3, Social, SocialItem, Scrolldown } from './styles.css';
import { SocialType } from '../../../types/social';

interface HeaderContainerProps {
  header: string;
  description: string;
  social: SocialType[];
}

const HeaderContainer: FC<HeaderContainerProps> = ({ header, description, social }) => (
  <Header id="home">
    <Banner>
      <BannerText>
        <H1>{header}</H1>
        <H3>{description}</H3>
        <Social>
          {social.map(({ name, url, className }) => (
            <SocialItem key={name}>
              <a href={url} target="_blank" rel="noopener noreferrer"><i className={className} /></a>
            </SocialItem>
          ))}
        </Social>
      </BannerText>
    </Banner>
    <Scrolldown href="#about"><i className="icon-down-circle" /></Scrolldown>
  </Header>
);

export default HeaderContainer;
