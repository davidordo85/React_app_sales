import React from 'react';
import moment from 'moment';

const FormattedDate = ({ date }) => {
  const formattedDate = moment(date).format('MMMM Do, YYYY');

  return (
    <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#0000FF' }}>
      {formattedDate}
    </p>
  );
};

export default FormattedDate;
