import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Logo from 'common/components/UIElements/Logo';
import Container from 'common/components/UI/Container';

import SectionWrapper, {
  ClientWrapper,
  ImageSlider,
  ImageSlide,
} from './experience.style';

const Experiences = () => {
  const data = useStaticQuery(graphql`
    query {
      portfolioJson {
        experiences {
          technologies {
            id
            logo {
              publicURL
            }
            name
            link
          }
        }
      }
    }
  `);

  const { technologies } = data.portfolioJson.experiences;

  return (
    <SectionWrapper id="experience">
      <Container>
        <ClientWrapper>
          <ImageSlider>
            <ImageSlide>
              {clients.map((item) => (
                <Logo
                  key={`slide1__key${item.id}`}
                  href={item.link}
                  logoSrc={item.logo.publicURL}
                  title={item.name}
                />
              ))}
            </ImageSlide>
            <ImageSlide>
              {clients.map((item) => (
                <Logo
                  key={`slide2__key${item.id}`}
                  href={item.link}
                  logoSrc={item.logo.publicURL}
                  title={item.name}
                />
              ))}
            </ImageSlide>
          </ImageSlider>
        </ClientWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Experiences;
