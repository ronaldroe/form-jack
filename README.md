# FormJack.js

### *AJAX-enabled React library for dynamic form generation*

## Table of Contents

- [Introduction](#introduction)
- [Usage](#usage)
  - [The Form Descriptor Object](#the-form-descriptor-object)

## Introduction

**FormJack.js** is a dynamic form generation library for React. The API exposes a component that receives an object that describes a form. All of the functionality for the form is self-contained, including AJAX submission and internal state management.

The base component builds forms, handles state and session storage and sends data to the endpoint of choice using the `fetch` API. 

Further options include passing custom data for inclusion (session tokens, etc.,) and data output to higher level component state.

## Usage

### The Form Descriptor Object

The form descriptor object describes the form and it's fields. The object is passed to the FormJack component.

#### Example:

```
let newForm = {
  endpoint: '/',
  formElement: false,
  fields: [
    {
      type: 'text',
      name: 'first_name',
      id: 'first_name'
      placeholder: "First Name"
      label: true,
      required: true,
    },
    {
      type: 'select',
      name: 'state',
      id: 'state',
      label: true,
      required: true,
      options: [
        {
          name: "AL",
          default: true
        },
        {
          name: "AK"
        },
        {
          name: "AZ"
        }
      ]
    }
  ]
}
```