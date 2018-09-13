import React from 'react'
import PropTypes from 'prop-types'

const Hello = ({ title }) => (
  <h1>{title}</h1>
);

Hello.PropTypes = {
  title: PropTypes.string
};

export default Hello;