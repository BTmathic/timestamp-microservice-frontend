import React from 'react';

export default class Timestamp extends React.Component {

  handleParameter = (timestamp) => {
    let isValid = true;
    let date;
    if (timestamp === undefined) {
      date = new Date();
    } else {
      if (timestamp.includes('-')) {
        date = new Date(timestamp);
      } else {
        date = new Date(parseInt(timestamp));
      }
      if (isNaN(date.getTime())) {
        date = new Date();
        isValid = false;
      }
    }

    if (isValid) {
      return '{"unix":'.concat(date.getTime()).concat(',"utc":"').concat(date.toUTCString()).concat('"}');
    } else {
      return '{"error":"Invalid Date"}'
    }    
  }

  render() {
    return (
      <div>
        {this.handleParameter(this.props.match.params.id)}
      </div>
    );
  }
}