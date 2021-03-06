import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import Tabs, { TabPane } from 'rc-tabs';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import GlideCarousel from 'common/components/GlideCarousel';
import GlideSlide from 'common/components/GlideCarousel/glideSlide';
import {
  PortfolioShowcaseWrapper,
  PortfolioShowcaseItem,
  PortfolioLink,
  BuiltWith,
  PortfolioMeta,
  MetaItem,
} from './portfolioShowcase.style';
import { PrevButton, NextButton } from '../portfolio.style';

const PortfolioShowcase = ({
  sectionWrapper,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  portfolioImage,
  portfolioDetails,
  titleStyle,
  detailsStyle,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      portfolioJson {
        PORTFOLIO_SHOWCASE {
          title
          portfolioItem {
            title
            description
            link
            view
            love
            feedback
            featuredIn
            featuredLink
            image {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  //Carousel Options
  const carouselOptions = {
    type: 'carousel',
    perView: 1,
    gap: 0,
    animationDuration: 900,
  };

  return (
    <Box {...sectionWrapper} as="section" id="portfolio_section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...sectionHeader}>
          <Text {...sectionSubTitle} content="PORTFOLIO" />
          <Heading {...sectionTitle} content="Projects I've worked on" />
        </Box>

        <PortfolioShowcaseWrapper>
          <Tabs
          // renderTabBar={() => <ScrollableInkTabBar />}
          // renderTabContent={() => <TabContent animated={false} />}
          >
            {Data.portfolioJson.PORTFOLIO_SHOWCASE.map((tabItem, index) => (
              <TabPane
                tab={
                  <Text
                    content={tabItem.title}
                    data-text={tabItem.title}
                    as="span"
                  />
                }
                key={index + 1}
              >
                <GlideCarousel
                  carouselSelector={`portfolio-showcase-carousel-${index + 1}`}
                  options={carouselOptions}
                  prevButton={
                    <PrevButton>
                      <span />
                    </PrevButton>
                  }
                  nextButton={
                    <NextButton>
                      <span />
                    </NextButton>
                  }
                >
                  <>
                    {tabItem.portfolioItem.map((portfolioItem, index) => (
                      <GlideSlide key={`PortfolioShowcaseItem-${index}`}>
                        <PortfolioShowcaseItem>
                          <Box {...portfolioImage}>
                            <Image
                              fluid={
                                (portfolioItem.image !== null) | undefined
                                  ? portfolioItem.image.childImageSharp.fluid
                                  : {}
                              }
                              alt={`PortfolioImage-${index + 1}`}
                            />
                          </Box>
                          <Box {...portfolioDetails}>
                            <PortfolioLink>
                              <a href={portfolioItem.link || '#'}>
                                VISIT LIVE SITE
                              </a>
                            </PortfolioLink>
                            <Heading
                              content={portfolioItem.title}
                              {...titleStyle}
                            />
                            <Text
                              content={portfolioItem.description}
                              {...detailsStyle}
                            />
                            {portfolioItem.buildWith ? (
                              <BuiltWith>
                                {portfolioItem.buildWith.map((item, index) => (
                                  <span key={`buildWith-item-${index}`}>
                                    {item.content}
                                  </span>
                                ))}
                              </BuiltWith>
                            ) : (
                              ''
                            )}
                          </Box>

                          {portfolioItem.featuredIn ||
                          portfolioItem.view ||
                          portfolioItem.love ||
                          portfolioItem.feedback ? (
                            <PortfolioMeta>
                              {portfolioItem.featuredIn ? (
                                <MetaItem className="meta_featured">
                                  FEATURED IN
                                  <a href={portfolioItem.featuredLink || '#'}>
                                    {portfolioItem.featuredIn}
                                  </a>
                                </MetaItem>
                              ) : (
                                ''
                              )}
                              {portfolioItem.view ? (
                                <MetaItem>
                                  <b>{portfolioItem.view}</b> View
                                </MetaItem>
                              ) : (
                                ''
                              )}
                              {portfolioItem.love ? (
                                <MetaItem>
                                  <b>{portfolioItem.love}</b> Love
                                </MetaItem>
                              ) : (
                                ''
                              )}
                              {portfolioItem.feedback ? (
                                <MetaItem>
                                  <b>{portfolioItem.feedback}</b> Feedback
                                </MetaItem>
                              ) : (
                                ''
                              )}
                            </PortfolioMeta>
                          ) : (
                            ''
                          )}
                        </PortfolioShowcaseItem>
                      </GlideSlide>
                    ))}
                  </>
                </GlideCarousel>
              </TabPane>
            ))}
          </Tabs>
        </PortfolioShowcaseWrapper>
      </Container>
    </Box>
  );
};

PortfolioShowcase.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  portfolioImage: PropTypes.object,
  portfolioDetails: PropTypes.object,
  titleStyle: PropTypes.object,
  detailsStyle: PropTypes.object,
};

PortfolioShowcase.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['60px', '80px', '80px', '80px'],
    pb: ['60px', '80px', '80px', '80px'],
    bg: '#f9f9f9',
  }, // section header default style
  sectionHeader: {
    mb: '56px',
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#0dcfa9',
    mb: '10px',
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  portfolioImage: {
    width: [1, 1, 1 / 2],
  },
  portfolioDetails: {
    width: [1, 1, 1 / 2],
    p: ['30px 0 0 0', '40px 0 0 0', '0 0 0 30px', '0 50px', '0 50px'],
  },
  titleStyle: {
    fontSize: ['22px', '22px', '26px', '40px', '40px'],
    fontWeight: '600',
    color: '#302b4e',
    mb: '17px',
  },
  detailsStyle: {
    fontSize: ['15px', '15px', '15px', '16px', '16px'],
    color: '#43414e',
    lineHeight: '1.5',
    mb: '0',
  },
};

export default PortfolioShowcase;
