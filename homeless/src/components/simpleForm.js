import React, { Component, PropTypes }  from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';

export const fields = [ 'url', 'description', 'email']


let SimpleForm = props => {
  const { fields: {url,description, email,organizationName}, handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Organization name</label>
        <div>
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="my Org" {...organizationName}
          />
        </div>
      </div>
      <div>
        <label>Alternate Name</label>
        <div>
          <Field
            name="alternate_name"
            component="input"
            type="text"
            placeholder="Alternate Name"
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email" {...email}
          />
        </div>
      </div>

        <div>
        <label>URL</label>
        <div>
          <Field
            name="url"
            component="input"
            type="url"
            placeholder="https://www.mygreat.org" {...url}
          />
        </div>
      </div>
      <div>
        <label>description</label>
        <div>
          <Field name="description" component="textarea"  placeholder="" {...description} />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}


// SimpleForm.propTypes = {
//   fields: PropTypes.object.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   load: PropTypes.func.isRequired,
//   submitting: PropTypes.bool.isRequired
// }

// export default reduxForm({
//     form: 'simple', // a unique identifier for this form,
//     enableReinitialize : true,
//     fields
// },
//     state => ({ // mapStateToProps
//   initialValues: state.organization // will pull state into form's initialValues
// }),
// //{ load: loadAccount }      // mapDispatchToProps (will bind action creator to dispatch)
// )(SimpleForm)
//

SimpleForm=reduxForm({
    form:'simple',
    enableReinitialize: true,
    })(SimpleForm)

SimpleForm= connect(mapStateToProps, actions)(reduxForm(SimpleForm));

export default SimpleForm

function mapStateToProps(state){
    return {
         url: state.organization.url,
          description: state.organization.description,
        email:state.organization.email,
        organizationName:state.organization.name
    }
}

//export default connect(mapStateToProps, actions)(reduxform(SimpleForm));
