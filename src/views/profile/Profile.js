import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from '@coreui/react'


const Profile = () => {
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
            <strong>Profile</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              View and update your profile detailes here
            </p>
            <div>
              <CAccordion activeItemKey={1}>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>Profile Details</CAccordionHeader>
                  <CAccordionBody>
                  <CForm
                    className="row g-3 needs-validation"
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustomUsername">Username</CFormLabel>
                      <CInputGroup className="has-validation">
                        <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
                        <CFormInput
                          type="text"
                          id="validationCustomUsername"
                          defaultValue=""
                          aria-describedby="inputGroupPrepend"
                          required
                        />
                        <CFormFeedback invalid>Please choose a username.</CFormFeedback>
                      </CInputGroup>
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustom01">Email</CFormLabel>
                      <CFormInput type="text" id="validationCustom01" defaultValue="Mark" required />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustom02">Phone</CFormLabel>
                      <CFormInput type="text" id="validationCustom02" defaultValue="Otto" required />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustom03">Profile image</CFormLabel>
                      <CFormInput
                        type="file"
                        id="validationTextarea"
                        aria-label="file example"
                        required
                      />
                      <CFormFeedback invalid>Example invalid form file feedback</CFormFeedback>
                    </CCol>
                    <CCol xs={12}>
                      <CButton color="primary" type="submit">
                        Update Profile
                      </CButton>
                    </CCol>
                  </CForm>
                  </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                  <CAccordionHeader>Password update</CAccordionHeader>
                  <CAccordionBody>
                  <CForm
                    className="row g-3 needs-validation"
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <CCol md={12}>
                      <CFormLabel htmlFor="validationCustom01">Current Password</CFormLabel>
                      <CFormInput type="password" id="validationCustom01" defaultValue="" required />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustom02">Password</CFormLabel>
                      <CFormInput type="password" id="validationCustom02" defaultValue="" required />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustom03">Confirm Password</CFormLabel>
                      <CFormInput type="password" id="validationCustom03" defaultValue="" required />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CCol>

                    <CCol xs={12}>
                      <CButton color="primary" type="submit">
                        Change Password
                      </CButton>
                    </CCol>
                  </CForm>
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
            </div>
          </CCardBody>
        </CCard>

      </CCol>
    </CRow>
  )
}

export default Profile
