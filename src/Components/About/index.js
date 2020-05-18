import React from 'react';
import { About, H2, P, Headshot, DownloadButton, DownloadIcon } from './style.css';
import { Row, Column } from '../styles.css';

const AboutContainer = ({ headshot, bio, resumeDownload }) => (
  <About id="about">
    <Row>
      <Column width={3 / 12}>
        <Headshot src={headshot} alt="Will Hitchcock headshot" />
      </Column>
      <Column width={9 / 12}>
        <H2>About Me</H2>

        <P>{bio}</P>
          <div>
            <DownloadButton target="_blank" href={resumeDownload}>
              <DownloadIcon className="fa fa-download"/>Download Resume
            </DownloadButton>
          </div>
      </Column>
    </Row>
  </About>
);

export default AboutContainer;
