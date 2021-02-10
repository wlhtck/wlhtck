import React from 'react';
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import resumeData from './resumeData.json';
import Header from './Components/Header/index';
import About from './Components/About/index';
import Footer from './Components/Footer/index';
import Resume from './Components/Resume/index';
import Scheduling from './Components/Scheduling/index';

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <Header 
        header={resumeData.main.header}
        description={resumeData.main.description}
        social={resumeData.main.social}
      />
      <About 
        headshot={`images/${resumeData.main.image}`}
        bio={resumeData.main.bio}
        resumeDownload={resumeData.main.resumedownload}
      />
      <Resume 
        experience={resumeData.resume.experience}
        skillmessage={resumeData.resume.skillmessage}
        skills={resumeData.resume.skills}
      />
      <Scheduling />
      <Footer 
        social={resumeData.main.social}
      />
    </div>
  </ThemeProvider>
);

export default App;
