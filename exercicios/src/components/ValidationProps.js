import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

const ValidationProps = (props) => (
  <Text style={{fontSize: 35}}>
    {props.label}
    {props.year + 2000}
  </Text>
);

ValidationProps.defaultProps = {
  label: 'Year: ',
};

ValidationProps.propTypes = {
  year: PropTypes.number.isRequired,
};

export default ValidationProps;
