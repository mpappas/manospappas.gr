import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { portfolioTheme } from 'common/theme/portfolio';
import { ResetCSS } from 'common/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from 'containers/Portfolio/portfolio.style';

import BannerSection from 'containers/Portfolio/Banner';
import Navbar from 'containers/Portfolio/Navbar';
// import PortfolioShowcase from 'containers/Portfolio/PortfolioShowcase';
import ProcessSection from 'containers/Portfolio/Process';
import TimelineSection from 'containers/Portfolio/TimelineSection';
import Footer from 'containers/Portfolio/Footer';
import SEO from 'components/seo';
// import News from 'containers/Portfolio/News';
// import Support from 'containers/Portfolio/Support';

export default () => {
  return (
    <ThemeProvider theme={portfolioTheme}>
      <Fragment>
        <SEO title="Manos Pappas" />
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <ProcessSection />
          <TimelineSection />
          {/* <PortfolioShowcase /> */}
          {/* <Support /> */}
          {/* <News /> */}
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
