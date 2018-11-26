import React, { Component } from 'react';

// For types: text, email, tel, color, url, search, number, month, date, time, week, password

export const Text = props => {

  let theType = props.field.type ? props.field.type : 'text';

  return (

    <input
      type={theType}
      name={props.field.name || props.field.id}
      id={props.field.id || props.field.name}
      value={props.field.value}
      placeholder={props.field.placeholder || ``}
      pattern={props.field.pattern ? props.field.pattern : ''}
      onChange={props.field.handler}
      required={props.field.required}
      className={`form_jack__${theType} ${props.field.className ? props.field.className : ''}`}
    />

  );

};