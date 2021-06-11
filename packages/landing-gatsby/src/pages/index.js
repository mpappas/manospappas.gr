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
// import AwardsSection from 'containers/Portfolio/Awards';
import PortfolioShowcase from 'containers/Portfolio/PortfolioShowcase';
import ProcessSection from 'containers/Portfolio/Process';
// import SkillSection from 'containers/Portfolio/Skill';
// import CallToAction from 'containers/Portfolio/CallToAction';
// import TestimonialSection from 'containers/Portfolio/Testimonial';
// import ClientsSection from 'containers/Portfolio/Clients';
import TimelineSection from 'containers/Portfolio/TimelineSection';
import ContactSection from 'containers/Portfolio/Contact';
import Footer from 'containers/Portfolio/Footer';
import SEO from 'components/seo';
import News from 'containers/Portfolio/News';
import Support from 'containers/Portfolio/Support';
// import Experiences from 'containers/Portfolio/Experience';

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
          {/* <Experiences /> */}
          {/* <SkillSection /> */}
          <PortfolioShowcase />
          <Support />
          <News />
          {/* <AwardsSection /> */}
          {/* <TestimonialSection /> */}
          {/* <ClientsSection /> */}
          {/* <CallToAction /> */}
          <ContactSection />

          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
