import React from 'react'
import { Field, reduxForm } from 'redux-form'

let ContactForm = props => {
  const { handleSubmit } = props
  return (
    <form name="checkout" id="contact-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="first_name">First Name</label>
        <Field name="first_name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="last_name">Last Name</label>
        <Field name="last_name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <Field name="phone" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <Field name="country" component="select" defaultValue="estonia">
          <option value="estonia">Estonia</option>
        </Field>
      </div>
      <div>
        <label htmlFor="address_1">Address</label>
        <Field name="address_1" component="input" type="text" />

      </div>
      <div>
        <Field name="address_2" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="postcode">Postcode / ZIP</label>
        <Field name="postcode" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="city">Town / City</label>
        <Field name="city" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)

export default ContactForm;
