//import { memo } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

export const Small = React.memo(({ value }) => {


    console.log("Me volvi a dibujar :(");
  
    return (
          <small>{value}</small>
  
    )
  } )

Small.propTypes = {
    value: PropTypes.number.isRequired,
}
Small.displayName = 'Small';