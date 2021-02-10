import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components'
import { About, H2, P, Headshot, Button, Icon, ButtonRow } from './style.css';
import { Row, Column } from '../styles.css';

const openCalendly = (url, background, text, primary) => {
  console.log(background, text, primary)
  window.Calendly.initPopupWidget({ url: `https://calendly.com/wlhtck/${url}?background_color=${background}&text_color=${text}&primary_color=${primary}` })
}

const AboutContainer = ({ headshot, bio, resumeDownload }) => {
  const { colors: { jet, ghost, yale } } = useContext(ThemeContext)
  return (
    <About id="about">
      <Row>
        <Column width={3 / 12}>
          <Headshot src={headshot} alt="Will Hitchcock headshot" />
        </Column>
        <Column width={9 / 12}>
          <H2>About Me</H2>

          <P>{bio}</P>
          <ButtonRow>
            <Button target="_blank" rel="noopener noreferrer" href={resumeDownload}>
              <Icon className="fa fa-download"/>Download Resume
            </Button>
            <Button 
              onClick={() => openCalendly('video', ghost.substring(1), jet.substring(1), yale.substring(1))}
            >
              <Icon className="fa fa-video"/>Book a video chat
            </Button>
            <Button 
              onClick={() => openCalendly('phone', ghost.substring(1), jet.substring(1), yale.substring(1))}
            >
              <Icon className="fa fa-phone"/>Book a phone call
            </Button>
          </ButtonRow>
        </Column>
      </Row>
    </About>
    )};

export default AboutContainer;
