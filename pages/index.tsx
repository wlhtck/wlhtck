import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';
import resumeData from '../src/resumeData.json';
import Header from '../src/Components/Header/index';
import About from '../src/Components/About/index';
import Footer from '../src/Components/Footer/index';
import Resume from '../src/Components/Resume/index';

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
      <Footer 
        social={resumeData.main.social}
      />
    </div>
  </ThemeProvider>
);

export default App;
