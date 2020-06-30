import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy } from './item.css';
import Modal from 'containers/modal';

const Item = ({ title, copy, image }) => (
  <figure>
    <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    <figcaption>
      <Title>{title}</Title>
      <Copy>{copy}</Copy>
      <Modal>
        <p>
          Pariatur incididunt reprehenderit aliqua sit mollit proident magna
          cupidatat duis non. Ex minim incididunt ut quis aliqua in ad non
          tempor do laborum ea. Eu veniam et do et magna consequat excepteur
          voluptate commodo. Exercitation excepteur incididunt occaecat minim
          adipisicing ea ex veniam aute fugiat sunt occaecat.
        </p>
      </Modal>
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
