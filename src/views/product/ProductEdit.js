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

const ProductEdit = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }
  const options = [
    { value: 'image1', label: 'Image 1' },
    { value: 'image2', label: 'Image 2' },
    { value: 'image3', label: 'Image 3' },
    // Add more options as needed
  ];

  return (
    <CRow>
      <CCol xs={12}>
      <CCard className="mb-4">
          <CCardHeader>
            <strong>Products Update</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Update products here
            </p>
            <div >

            <CForm
                    className="row g-3 needs-validation"
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustomUsername">Name</CFormLabel>
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
                      <CFormLabel htmlFor="validationCustom01">Tag Line</CFormLabel>
                      <CFormInput type="text" id="validationCustom01" defaultValue="" required />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustom02">Description</CFormLabel>
                      <CFormTextarea type="text" id="validationCustom02" defaultValue="" required />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustom02">Price By ML</CFormLabel>
                      <CFormInput type="number" id="validationCustom02" defaultValue="" required />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustom03">Main image</CFormLabel>
                      <CFormInput
                        type="file"
                        id="validationTextarea"
                        aria-label="file example"
                        required
                      />
                      <CFormFeedback invalid>Example invalid form file feedback</CFormFeedback>
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustom03">Other images</CFormLabel>
                      <CFormInput
                        type="file"
                        id="validationTextarea"
                        aria-label="file example"
                        required
                        multiple
                      />
                      <CFormFeedback invalid>Example invalid form file feedback</CFormFeedback>
                    </CCol>

                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustom03">Related Products</CFormLabel>
                      <Select
                        id="validationTextarea"
                        aria-label="file example"
                        options={options}
                        isMulti
                        required
                        styles={{
                          control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: state.isFocused ? 'white' : '#323a49',
                            backgroundColor: '#212631',
                          }),
                          menu: (provided) => ({
                            ...provided,
                            background: '#212631',
                          }),
                          input: (base, state) => ({
                            ...base,
                            color: 'white',
                          }),
                          multiValue: (base, state) => ({
                            ...base,
                            color: 'black',
                          }),
                        }}
                        theme={(theme) => ({
                          ...theme,
                          colors: {
                            ...theme.colors,
                            primary25: '#6261cc',
                            primary: '#6261cc',
                          },
                        })}
                      />
                      <CFormFeedback invalid>Example invalid form file feedback</CFormFeedback>
                    </CCol>

                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustom03">Applicable Offers</CFormLabel>
                      <Select
                        id="validationTextarea"
                        aria-label="file example"
                        options={options}
                        isMulti
                        required
                        styles={{
                          control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: state.isFocused ? 'white' : '#323a49',
                            backgroundColor: '#212631',
                          }),
                          menu: (provided) => ({
                            ...provided,
                            background: '#212631',
                          }),
                          input: (base, state) => ({
                            ...base,
                            color: 'white',
                          }),
                          multiValue: (base, state) => ({
                            ...base,
                            color: 'black',
                          }),
                        }}
                        theme={(theme) => ({
                          ...theme,
                          colors: {
                            ...theme.colors,
                            primary25: '#6261cc',
                            primary: '#6261cc',
                          },
                        })}
                      />
                      <CFormFeedback invalid>Example invalid form file feedback</CFormFeedback>
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustom03">Categories</CFormLabel>
                      <Select
                        id="validationTextarea"
                        aria-label="file example"
                        options={options}
                        isMulti
                        required
                        styles={{
                          control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: state.isFocused ? 'white' : '#323a49',
                            backgroundColor: '#212631',
                          }),
                          menu: (provided) => ({
                            ...provided,
                            background: '#212631',
                          }),
                          input: (base, state) => ({
                            ...base,
                            color: 'white',
                          }),
                          multiValue: (base, state) => ({
                            ...base,
                            color: 'black',
                          }),
                        }}
                        theme={(theme) => ({
                          ...theme,
                          colors: {
                            ...theme.colors,
                            primary25: '#6261cc',
                            primary: '#6261cc',
                          },
                        })}
                      />
                      <CFormFeedback invalid>Example invalid form file feedback</CFormFeedback>
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustom03">Tags</CFormLabel>
                      <Select
                        id="validationTextarea"
                        aria-label="file example"
                        options={options}
                        isMulti
                        required
                        styles={{
                          control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: state.isFocused ? 'white' : '#323a49',
                            backgroundColor: '#212631',
                          }),
                          menu: (provided) => ({
                            ...provided,
                            background: '#212631',
                          }),
                          input: (base, state) => ({
                            ...base,
                            color: 'white',
                          }),
                          multiValue: (base, state) => ({
                            ...base,
                            color: 'black',
                          }),
                        }}
                        theme={(theme) => ({
                          ...theme,
                          colors: {
                            ...theme.colors,
                            primary25: '#6261cc',
                            primary: '#6261cc',
                          },
                        })}
                      />
                      <CFormFeedback invalid>Example invalid form file feedback</CFormFeedback>
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustom02">Fragrance</CFormLabel>
                      <CFormInput type="text" id="validationCustom02" defaultValue="" required />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustom02">Bottle Color</CFormLabel>
                      <CFormInput type="text" id="validationCustom02" defaultValue="" required />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustom02">Offer Deduction Percentage</CFormLabel>
                      <CFormInput type="number" id="validationCustom02" defaultValue="" required />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustom02">Items In The Box</CFormLabel>
                      <CFormTextarea type="text" id="validationCustom02" defaultValue="" required />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CCol>
                    <CCol xs={12}>
                      <CButton color="primary" type="submit">
                        Update Product
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

export default ProductEdit
