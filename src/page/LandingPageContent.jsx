import React from 'react';
import { isMobile } from 'react-device-detect';
import ReactFullpage from '@fullpage/react-fullpage';
import Page1 from './landingPage/Page1';
import Page2 from './landingPage/Page2';
import Page3 from './landingPage/Page3';
import Page4 from './landingPage/Page4';
// import Page5 from './landingPage/Page5';
// import Page6 from './landingPage/Page6';
// import Page7 from './landingPage/Page7';
import Page8 from './landingPage/Page8';

export default function LandingPageContent() {
  return (
    <ReactFullpage
      render={() => (
        <ReactFullpage.Wrapper>
          <div className="section fp-auto-height-responsive">
            <Page1 isMobile={isMobile} />
          </div>
          <div className="section fp-auto-height-responsive">
            <Page2 isMobile={isMobile} />
          </div>
          <div className="section fp-auto-height-responsive">
            <Page3 isMobile={isMobile} />
          </div>
          <div className="section fp-auto-height-responsive">
            <Page4 isMobile={isMobile} />
          </div>
          <div className="section fp-auto-height-responsive">
            <Page8 isMobile={isMobile} />
          </div>
        </ReactFullpage.Wrapper>
      )}
    />

  );
}
