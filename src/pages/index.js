import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
// import IOExample from 'components/io-example';
// import Modal from 'containers/modal';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
      {/* <Modal>
        <p>
          Pariatur incididunt reprehenderit aliqua sit mollit proident magna
          cupidatat duis non. Ex minim incididunt ut quis aliqua in ad non
          tempor do laborum ea. Eu veniam et do et magna consequat excepteur
          voluptate commodo. Exercitation excepteur incididunt occaecat minim
          adipisicing ea ex veniam aute fugiat sunt occaecat.
        </p>
      </Modal> */}
    </Box>
    <Gallery items={data.homeJson.gallery} />
    <div style={{ height: '50vh' }} />
    {/* <IOExample /> */}
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        description
      }
    }
  }
`;
