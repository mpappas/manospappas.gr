import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import SocialProfile from '../SocialProfile';

import { FooterWrapper } from './footer.style';

const Footer = ({ row, col, titleStyle, linkStyle, copyrightStyle }) => {
  const Data = useStaticQuery(graphql`
    query {
      portfolioJson {
        FOOTER_MENU {
          label
          path
        }
        SOCIAL_PROFILES {
          icon
          url
        }
      }
    }
  `);

  return (
    <FooterWrapper>
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          <Box {...col}>
            <SocialProfile
              className="footer_social"
              items={Data.portfolioJson.SOCIAL_PROFILES}
              iconSize={40}
            />
            <Text
              as="span"
              content="© 2018 All rights reserved. "
              {...copyrightStyle}
            />
            <a href="#1">
              <Text as="span" content=" RedQ, Inc." {...copyrightStyle} />
            </a>
          </Box>
          <Box {...col}>
            <Heading
              as="h2"
              content="Having a project in mind?"
              {...titleStyle}
            />
            <a href="mailto:hello@manospappas.gr">
              <Heading as="h5" content="Let’s Work Together" {...linkStyle} />
            </a>
          </Box>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  titleStyle: PropTypes.object,
  linkStyle: PropTypes.object,
  copyrightStyle: PropTypes.object,
};

Footer.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    ml: '-15px',
    mr: '-15px',
    mb: ['0', '70px', '80px', '100px', '100px'],
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3, 1 / 3],
    pl: '15px',
    pr: '15px',
    mb: ['40px', '0', '0', '0', '0', '0'],
  },
  titleStyle: {
    fontSize: ['16px', '18px'],
    fontWeight: '600',
    mb: ['20px', '25px'],
  },
  linkStyle: {
    fontSize: ['22px', '26px', '26px', '30px'],
    color: '#3444f1',
    mb: 0,
  },
  copyrightStyle: {
    fontSize: '14px',
    color: '#fff',
  },
};

export default Footer;
