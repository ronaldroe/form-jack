import React, { Component } from 'react';
import Input from './Elements';

class FormJack extends Component {

  constructor() {

    super();

    this.state = {



    };

  }

  componentDidMount() {

    // Create a state control for each field in the form
    let fieldValues = {};

    this.props.form.fields.forEach(field => {

      // checkboxes have an optional default
      fieldValues[field.name ? field.name : field.id] = field.type === 'checkbox' ? field.default || false : '';

    });

    // Push the values into the state and then build the form.
    this.setState({
      ...fieldValues
    }, () => this.buildForm(this.props.form));

  }

  buildForm = formData => {

    if (formData.formElement) {

      return (
        <form className={`form_jack__form ${formData.formClassName ? formData.formClassName : ''}`} id={formData.formId ? formData.formId : 'form_jack__form'} >
          {formData.fields.map(field => (
            <Input field={field} value={this.state[field.name]} />
          ))}
        </form>
      );

    } else {

      return (
        formData.fields.map(field => (
          <Input field={field} value={this.state[field.name]} />
        ))
      );

    }

  }

  formSubmit = evt => {



  }

}

export default FormJack;