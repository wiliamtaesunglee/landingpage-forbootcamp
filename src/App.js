import React from 'react';
import EmbedVideo from './components/embedVideo/EmbedVideo'
import LandingPage from './LandingPage'
import { Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <Route path='/' exact component={LandingPage}/>
      <Route path='/record' exact component={EmbedVideo}/>
    </div>
  );
}

export default App;
