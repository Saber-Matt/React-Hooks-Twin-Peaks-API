import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ currentQuote }) => {
  return (
    
    <p>
      {currentQuote}
    </p>
  );
};
Quote.propTypes = { currentQuote: PropTypes.string };
export default Quote;
