import React from 'react';
import moment from 'moment';

const FormattedDate = ({ date }) => {
  const formattedDate = moment(date).format('MMMM Do, YYYY');

  return <p>{formattedDate}</p>;
};

export default FormattedDate;
