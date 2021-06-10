import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Masonry from 'react-masonry-component';
import { Icon } from 'react-icons-kit';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';

import Container from 'common/components/UI/ContainerTwo';
import Image from 'common/components/Image';
import Link from 'common/components/Link';
import SectionHeading from '../SectionHeading';
import Section, { ContentWrapper, BlogPost } from './news.style';

const masonryOptions = {
  originTop: false,
};

const News = () => {
  const data = useStaticQuery(graphql`
    query {
      portfolioJson {
        newsFeed {
          id
          title
          desc
          link
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
  `);
  const newsFeed = data.portfolioJson.newsFeed;
  return (
    <Section id="blog">
      <Container>
        <SectionHeading
          slogan="A few highlights of my life"
          title="Things I am proud or excited about"
        />
        <ContentWrapper>
          <Masonry className="masonryGrid" options={masonryOptions}>
            {newsFeed.map((news) => {
              return (
                <BlogPost key={news.id}>
                  <figure>
                    <Image
                      src={news.image.childImageSharp.fluid.src}
                      alt={news.title}
                    />
                  </figure>
                  <h4>{news.title}</h4>
                  {news.desc && <p>{news.desc}</p>}
                  {news.link && (
                    // <Link href={news.link} className="learnMore">
                    <h4>{news.title}</h4>
                    // </Link>
                  )}
                </BlogPost>
              );
            })}
          </Masonry>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default News;
