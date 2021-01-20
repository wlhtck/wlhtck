import React  from 'react';
import { Footer, A, Copyright, CopyrightItem, SocialLink, SocialLinkList, GoTop } from './styles.css'
import { Row, Column } from '../styles.css';

const FooterContainer = ({ social }) => (
  <Footer>
    <Row>
      <Column width={1}>
        <SocialLinkList>
          {social.map(({ name, url, className }) => (
            <SocialLink key={name}>
              <A href={url}>
                <i className={className} />
              </A>
            </SocialLink>
          ))}
        </SocialLinkList>

        <Copyright>
          <CopyrightItem>&copy; Copyright 2020 Will Hitchcock</CopyrightItem>
          <CopyrightItem>
            Design by <A target="_blank" title="Styleshout" href="http://www.styleshout.com/">Styleshout</A>
          </CopyrightItem>
        </Copyright>

      </Column>
      <GoTop id="go-top" title="Back to Top" href="#home"><i className="fa fa-chevron-up" /></GoTop>
    </Row>
  </Footer>
);

export default FooterContainer;
