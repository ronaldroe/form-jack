import React, { Component } from 'react';

// For types: text, email, tel, color, url, search, number, month, date, time, week

export class Text extends Component{

  render(){

    let theType = this.props.type ? this.props.type : 'text';

    return(

      <input
        type={theType}
        name={this.props.name || this.props.id}
        id={this.props.id || this.props.name}
        value={this.props.value}
        placeholder={this.props.placeholder || ``}
        onChange={this.props.handler}
        required={this.props.required}
        className={`form_jack_${theType} ${this.props.className ? this.props.className : ''}`}
      />

    );

  }

};