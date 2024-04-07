import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CInputGroup,
  CFormTextarea,

} from '@coreui/react'
import Select from 'react-select';

const UserEdit = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }

  return (
    <CRow>
      <CCol xs={12}>
      <CCard className="mb-4">
          <CCardHeader>
            <strong>User Update</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Update User here
            </p>
            <div >

            <CForm
                    className="row g-3 needs-validation"
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustomUsername">First Name</CFormLabel>
                      <CInputGroup className="has-validation">
                        <CFormInput
                          type="text"
                          id="validationCustomUsername"
                          defaultValue=""
                          aria-describedby="inputGroupPrepend"
                          required
                        />
                        <CFormFeedback invalid>Please choose a name for the product.</CFormFeedback>
                      </CInputGroup>
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustom01">Last Name</CFormLabel>
                      <CFormInput type="text" id="validationCustom01" defaultValue="" required />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustom02">Mobile Number</CFormLabel>
                      <CFormInput type="text" id="validationCustom02" defaultValue="" required />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustom02">Email</CFormLabel>
                      <CFormInput type="text" id="validationCustom02" defaultValue="" required />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CCol>

                    <CCol xs={12}>
                      <CButton color="primary" type="submit">
                        Update User
                      </CButton>
                    </CCol>
                  </CForm>
            </div>
          </CCardBody>
        </CCard>

      </CCol>
    </CRow>
  )
}

export default UserEdit
