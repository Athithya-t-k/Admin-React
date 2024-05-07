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

const ProductCreate = () => {
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    // const form = event.currentTarget
    // if (form.checkValidity() === false) {
    //   event.preventDefault()
    //   event.stopPropagation()
    // }
    // setValidated(true)

    try{
      // let
    } catch(error) {

    }
    console.log(productFormData)
  }
  const options = [
    { value: 'image1', label: 'Image 1' },
    { value: 'image2', label: 'Image 2' },
    { value: 'image3', label: 'Image 3' },
    // Add more options as needed
  ];

  const [productFormData,setProductFormData] = useState({
    name: "",
    tagLine: "",
    description: "",
    priceByMl: "",
    relatedProducts: [],
    applicableOffers: [],
    categories: [],
    tags: [],
    fragrance: "",
    bottleColor: "",
    offerDeductionPercentage: "",
    itemsInTheBox: "",
    mainImage: {},
    otherImage: []
  })

  const handleProductInputChange = (e) => {
    setProductFormData({
      ...productFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleTagsInput = (e) => {
    setProductFormData({
      ...productFormData,
      ['tags']: e
    });
  }
  const handleRelatedProductsInput = (e) => {
    setProductFormData({
      ...productFormData,
      ['relatedProducts']: e
    });
  }
  const handleApplicableOffersInput = (e) => {
    setProductFormData({
      ...productFormData,
      ['applicableOffers']: e
    });
  }
  const handleCategoriesInput = (e) => {
    setProductFormData({
      ...productFormData,
      ['categories']: e
    });
  }
  // const handleMainImageInput = (e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   console.log(reader.result)

  //   setProductFormData({
  //     ...productFormData,
  //     ['mainImage']: reader.result
  //   });
  // }
  const handleMainImageInput = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      // When FileReader finishes reading the file, update the state
      setProductFormData({
        ...productFormData,
        mainImage: reader.result
      });
    };

    // Start reading the file
    reader.readAsDataURL(file);
  };
  return (
    <CRow>
      <CCol xs={12}>
      <CCard className="mb-4">
          <CCardHeader>
            <strong>Products Create</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Create new products here
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
                          name='name'
                          onChange={handleProductInputChange}
                        />
                        <CFormFeedback invalid>Please choose a name for the product.</CFormFeedback>
                      </CInputGroup>
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustom01">Tag Line</CFormLabel>
                      <CFormInput type="text" onChange={handleProductInputChange} id="validationCustom01" name='tagLine' defaultValue="" required />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustom02">Description</CFormLabel>
                      <CFormTextarea type="text" onChange={handleProductInputChange} name='description' id="validationCustom02" defaultValue="" required />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustom02">Price By ML</CFormLabel>
                      <CFormInput type="number" onChange={handleProductInputChange} name='priceByMl' id="validationCustom02" defaultValue="" required />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustom03">Main image</CFormLabel>
                      <CFormInput
                        type="file"
                        id="validationTextarea"
                        name='mainImage'
                        onChange={handleMainImageInput}
                        aria-label="file example"
                        // required
                      />
                      <CFormFeedback invalid>Example invalid form file feedback</CFormFeedback>
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustom03">Other images</CFormLabel>
                      <CFormInput
                        type="file"
                        id="validationTextarea"
                        aria-label="file example"
                        name='otherImage'
                        // required
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
                        onChange={handleRelatedProductsInput}
                        name='relatedProducts'
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
                        onChange={handleApplicableOffersInput}
                        name='applicableOffers'
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
                        name='categories'
                        onChange={handleCategoriesInput}
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
                        onChange={handleTagsInput}
                        name='tags'
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
                      <CFormInput type="text" onChange={handleProductInputChange} name='fragrance' id="validationCustom02" defaultValue="" required />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustom02">Bottle Color</CFormLabel>
                      <CFormInput type="text" onChange={handleProductInputChange} name='bottleColor' id="validationCustom02" defaultValue="" required />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustom02">Offer Deduction Percentage</CFormLabel>
                      <CFormInput type="number" onChange={handleProductInputChange} name='offerDeductionPercentage' id="validationCustom02" defaultValue="" required />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustom02">Items In The Box</CFormLabel>
                      <CFormTextarea type="text" onChange={handleProductInputChange} name='itemsInTheBox' id="validationCustom02" defaultValue="" required />
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

export default ProductCreate
