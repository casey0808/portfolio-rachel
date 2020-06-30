import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy } from './item.css';
// import Modal from 'containers/modal';

const Item = ({ title, copy, image }) => (
  <figure>
    <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    <figcaption>
      <Title>{title}</Title>
      <Copy>{copy}</Copy>
    </figcaption>
    {/* <Modal>
      <h1>{title}</h1>
      <p>{description}</p>
    </Modal> */}
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
};

export default Item;
