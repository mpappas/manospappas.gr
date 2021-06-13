import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon } from 'react-icons-kit';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Button from 'common/components/Button';
import Container from 'common/components/UI/Container';
import { plus } from 'react-icons-kit/feather/plus';

// import { ButtonWrapper } from '../../Portfolio/portfolio.style';
import ProcessItem from './process.style';

const ProcessSection = ({
  button,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  processRow,
  processCol,
  processImageStyle,
  processTitleStyle,
  processDescriptionStyle,
  learningRow,
  learningContentArea,
  learningListArea,
  learningTitle,
  learningSubTitle,
  learningDescription,
  buttonWrapper,
  learningList,
  listItem,
  listText,
  listTitle,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      portfolioJson {
        PROCESS_STEPS {
          title
          description
          image {
            publicURL
          }
        }
        SERVICE_LIST {
          title
          listItems {
            content
          }
        }
      }
    }
  `);

  return (
    <Box {...sectionWrapper} as="section" id="process_section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...sectionHeader}>
          <Text {...sectionSubTitle} content="PORTFOLIO" />
          <Heading {...sectionTitle} content="Projects I've worked on" />
        </Box>

        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content="I'm a full-stack web developer" />
          <Text
            {...secDescription}
            content="Someone who is highly focused and attentive to detail, effective problem solver who understands and designs the solution in time."
          />
        </Box>

        <Box {...processRow}>
          {Data.portfolioJson.PROCESS_STEPS.map((item, index) => (
            <Box
              {...processCol}
              key={`process-item-${index}`}
              className="process_item_col"
            >
              <ProcessItem className="process_item">
                <Image
                  src={item.image.publicURL}
                  alt={`process-image-${index + 1}`}
                  {...processImageStyle}
                />
                <Heading as="h3" content={item.title} {...processTitleStyle} />
                <Text content={item.description} {...processDescriptionStyle} />
              </ProcessItem>
            </Box>
          ))}
        </Box>

        <Box {...learningRow}>
          <Box {...learningContentArea}>
            <Heading
              content="My almost 5 years journey so far in London"
              {...learningTitle}
            />
            <Text
              content="An amazing experience with various valueable lessons."
              {...learningSubTitle}
            />
            <Text
              {...learningDescription}
              content="I’m Manos Pappas, born and raised in Crete, the southern Greek island based in London for the last a few years."
            />
            <Text
              {...learningDescription}
              content="For the last almost 4 and a half years I am working for Vonage, a Cloud Communications company, contributing on the implementation of Communication (REST) APIs for Voice and Video RTC. I have been (charged/appointed) with optimising infrastructure sizing and scaling by performing loadtests to allow faster onboarding of new customers, and I have helped the team meet high quality standards -being one of the main contributors on the way to achieve 99% coverage."
            />
            <Text
              {...learningDescription}
              content="I have successfully collaborated across teams with tasks that include designing, developing, automating and deploying."
            />
            <Box {...buttonWrapper}>
              <a href="mailto:hello@manospappas.gr">
                <Button {...button} title="Get In Touch" />
              </a>
            </Box>
          </Box>
          <Box {...learningListArea}>
            {Data.portfolioJson.SERVICE_LIST.map((serviceList, index) => (
              <Box {...learningList} key={`serviceList-${index}`}>
                <Heading content={serviceList.title} {...listTitle} />
                {serviceList.listItems.map((item, index) => (
                  <Box {...listItem} key={`list-item-${index}`}>
                    <Icon icon={item.icon || plus} size={item.iconSize || 12} />
                    <Text as="span" content={item.content} {...listText} />
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

ProcessSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  processRow: PropTypes.object,
  processCol: PropTypes.object,
  processImageStyle: PropTypes.object,
  processTitleStyle: PropTypes.object,
  processDescriptionStyle: PropTypes.object,
  learningRow: PropTypes.object,
  learningContentArea: PropTypes.object,
  learningListArea: PropTypes.object,
  learningTitle: PropTypes.object,
  learningSubTitle: PropTypes.object,
  learningDescription: PropTypes.object,
  buttonWrapper: PropTypes.object,
  buttonLabelStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
  learningList: PropTypes.object,
  listItem: PropTypes.object,
  listText: PropTypes.object,
  listTitle: PropTypes.object,
};

ProcessSection.defaultProps = {
  sectionWrapper: {
    pt: ['60px', '80px', '90px', '100px', '140px'],
    pb: ['10px', '40px', '30px', '50px', '50px'],
  },
  secTitleWrapper: {
    mb: ['60px', '105px'],
  },
  secTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '30px'],
    fontWeight: '700',
    color: '#302b4e',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '20px'],
    textAlign: 'center',
  },
  secDescription: {
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '0',
    textAlign: 'center',
  },
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
  processRow: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: ['0', '-15px', '-30px', '-70px', '-70px'],
    mr: ['0', '-15px', '-30px', '-70px', '-70px'],
  },
  processCol: {
    width: [1, 1 / 3],
    pl: ['0', '15px', '30px', '70px', '70px'],
    pr: ['0', '15px', '30px', '70px', '70px'],
    mb: '40px',
  },
  processImageStyle: {
    ml: 'auto',
    mr: 'auto',
    mb: '35px',
  },
  processTitleStyle: {
    fontSize: ['20px', '18px', '20px', '20px', '20px'],
    fontWeight: '600',
    color: '#302b4e',
    textAlign: 'center',
    mb: ['20px', '20px', '27px', '27px', '27px'],
  },
  processDescriptionStyle: {
    fontSize: ['15px', '15px', '16px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    textAlign: 'center',
    lineHeight: '1.5',
  },
  learningRow: {
    flexBox: true,
    flexWrap: 'wrap',
    mt: ['20px', '30px', '70px', '80px', '110px'],
  },
  learningContentArea: {
    width: ['100%', '100%', '50%', '50%', '45%'],
    pr: ['0px', '0px', '60px', '80px', '130px'],
    mb: ['70px', '70px', '0', '0', '0'],
  },
  learningTitle: {
    fontSize: ['22px', '22px', '24px', '30px', '30px'],
    fontWeight: '700',
    color: '#302b4e',
    lineHeight: '1.34',
    mb: ['20px', '20px', '15px', '20px', '20px'],
    pr: ['0', '0', '0', '65px', '65px'],
  },
  learningSubTitle: {
    fontSize: ['16px', '16px', '18px', '20px', '20px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '20px',
    pr: ['0', '0', '0', '65px', '65px'],
  },
  learningDescription: {
    fontSize: '16px',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '25px',
  },
  buttonWrapper: {
    mt: ['25px', '50px'],
    flexBox: true,
    justifyContent: 'left',
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    height: '46px',
  },
  learningListArea: {
    width: ['100%', '100%', '50%', '50%', '55%'],
    flexBox: true,
    flexWrap: 'wrap',
  },
  learningList: {
    width: ['100%', '33.3333333%', '50%', '50%', '33%'],
    pl: ['0', '0', '35px', '35px', '35x'],
    pr: ['0', '30px', '0', '0', '0'],
    mb: ['40px', '40px', '60px', '80px', '90px'],
  },
  listTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#302b4e',
    mb: '25px',
  },
  listItem: {
    flexBox: true,
    alignItems: 'center',
    color: '#43414e',
    mb: '16px',
  },
  listText: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#43414e',
    mb: '0',
    ml: '5px',
  },
};

export default ProcessSection;
