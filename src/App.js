import React, { Component } from 'react';
import resumeData from './resumeData';
import Header from './Components/Header/index';
import About from './Components/About/index';
import Footer from './Components/Footer/index';
import Resume from './Components/Resume/index';

const App = () => (
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
);

export default App;
