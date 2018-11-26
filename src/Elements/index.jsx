import React, { Fragment } from 'react';

import { Text } from './Text';

const Input = props => {

  let theInput = textTypes.includes(props.field.type)
    ? <Text field={props.field} value={props.value} />
    : props.field.type === 'select'
      ? <Select field={props.field} value={props.value} />
      : null;

  if (props.field.label) {

    return (

      <Label htmlFor={props.field.id || props.field.name}>

        {theInput}

      </Label>

    );

  } else {

    return (

      <Fragment>

        {theInput}

      </Fragment>

    );

  }

};

const textTypes = [
  'text',
  'email',
  'tel',
  'color',
  'url',
  'search',
  'number',
  'month',
  'date',
  'time',
  'week',
  'password'
];

const Label = props => (

  <label htmlFor={props.htmlFor}>

    {props.children}

  </label>

);

export default Input;