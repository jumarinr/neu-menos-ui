import React from 'react';
import PropTypes from 'prop-types';

// material ui core
import CardMUI from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Card = ({ children }) => (
  <CardMUI variant="outlined">
    <CardContent>
      {children}
    </CardContent>
  </CardMUI>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
