import React from 'react';

export const Select = props => {

  let theOptions = renderOptions(props.field.options);

  return (

    <select value={props.value} name={props.field.name ? props.field.name : props.field.id} id={props.field.id ? props.field.id : props.field.name}>

      {theOptions}

    </select>

  );

};

const renderOptions = options => {

  return options.map((option, i) => (
    <Option option={option} key={i} />
  ));

}

const Option = props => (

  <option selected={props.default ? true : false} value={props.value ? props.value : props.name}>{props.name ? props.name : props.value}</option>

);
