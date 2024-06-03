import React, { useEffect, useState } from 'react'
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
import AuthManagement from '../../utilities/AuthManagement';
import AuthController from '../../controller/AuthController';
import { useNavigate } from 'react-router-dom';
import cogoToast from 'cogo-toast';
import UserController from '../../controller/UserController';
const UserCreate = () => {
  const navigate = useNavigate();
  const [userCreateFormData, setUserCreateFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  })
  const [userCreateFormDataError, setUserCreateFormDataError] = useState({
    firstName: false,
    lastName: false,
    mobileNumber: false,
    email: false,
    password: false,
    passwordConfirmation: false
  })
  const handleInputChange = (e) => {
    setUserCreateFormData({
      ...userCreateFormData,
      [e.target.name]: e.target.value
    });
  };
  useEffect(() => {
    const retrieveToken = async () => {
      const token = await AuthManagement.getToken();
      if (token) {
        let tokenVerify = await AuthController.tokenVerifier({ token: token });
        if (tokenVerify.success) {
          // setUserList(tokenVerify.data)
          navigate('/user/create', { state: { state: tokenVerify.user } });
        } else {
          cogoToast.error('Invalid token, please login again', { position: 'bottom-left' });
          navigate('/login');
        }
      } else {
        cogoToast.error('You need to login for accessing this page', { position: 'bottom-left' });
        navigate('/login');
      }
    }
    retrieveToken();
  }, [navigate]);

  const [validated, setValidated] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const token = await AuthManagement.getToken();
      const createUser = await UserController.createUser(token,userCreateFormData)
      console.log('createUser=>?',createUser)
      if (createUser.success) {
        cogoToast.success('User created successfuly', { position: 'bottom-left' });
        navigate('/user', { state: { data: createUser.user, token: createUser.token } });
      } else {
        if(createUser.status === 400) {
          console.log(createUser.data.errors)
          let updatedErrors = { ...userCreateFormDataError}
          updatedErrors.firstName =  false;
          updatedErrors.lastName =  false;
          updatedErrors.mobileNumber =  false;
          updatedErrors.email =  false;
          updatedErrors.password =  false;
          updatedErrors.passwordConfirmation =  false;
          let errors = createUser.data.errors;
          for (let error in errors) {
            updatedErrors[errors[error].path] = updatedErrors[errors[error].path]
              ? updatedErrors[errors[error].path] + '. ' + errors[error].msg
              : errors[error].msg;
          }
          setUserCreateFormDataError(updatedErrors)
        } else if(createUser.status === 401){
          cogoToast.error('Invalid email or password', { position: 'bottom-left' });
        } else {
          cogoToast.error('Internal error occured', { position: 'bottom-left' });
        }
      }
    }catch(error){
      console.log(error, '<=ax err');
      cogoToast.error('Internal error occured!', { position: 'bottom-left' });
    }
  }

  return (
    <CRow>
      <CCol xs={12}>
      <CCard className="mb-4">
          <CCardHeader>
            <strong>Create USer</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Add New User
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
                          name="firstName"
                          onChange={handleInputChange}
                        />
                        <CFormFeedback invalid>Please choose a name for the product.</CFormFeedback>
                      </CInputGroup>
                      {userCreateFormDataError ? (
                          <>
                            <label style={{marginBottom:'8px', color:'red'}}>{userCreateFormDataError.firstName}</label><br></br>
                          </>
                        ) : (
                          <label></label>
                        )}
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustom01">Last Name</CFormLabel>
                      <CFormInput
                        type="text"
                        id="validationCustom01"
                        defaultValue=""
                        required
                        name="lastName"
                        onChange={handleInputChange}
                      />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                      {userCreateFormDataError ? (
                          <>
                            <label style={{marginBottom:'8px', color:'red'}}>{userCreateFormDataError.lastName}</label><br></br>
                          </>
                        ) : (
                          <label></label>
                        )}
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustom02">Mobile Number</CFormLabel>
                      <CFormInput
                        type="text"
                        id="validationCustom02"
                        defaultValue=""
                        required
                        name="mobileNumber"
                        onChange={handleInputChange}
                      />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                      {userCreateFormDataError ? (
                          <>
                            <label style={{marginBottom:'8px', color:'red'}}>{userCreateFormDataError.mobileNumber}</label><br></br>
                          </>
                        ) : (
                          <label></label>
                        )}
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustom02">Email</CFormLabel>
                      <CFormInput
                        type="text"
                        id="validationCustom02"
                        defaultValue=""
                        required
                        name="email"
                        onChange={handleInputChange}
                      />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                      {userCreateFormDataError ? (
                          <>
                            <label style={{marginBottom:'8px', color:'red'}}>{userCreateFormDataError.email}</label><br></br>
                          </>
                        ) : (
                          <label></label>
                        )}
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustom02">Password</CFormLabel>
                      <CFormInput
                        type="password"
                        id="validationCustom03"
                        defaultValue=""
                        required
                        name="password"
                        onChange={handleInputChange}
                      />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                      {userCreateFormDataError ? (
                          <>
                            <label style={{marginBottom:'8px', color:'red'}}>{userCreateFormDataError.password}</label><br></br>
                          </>
                        ) : (
                          <label></label>
                        )}
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel htmlFor="validationCustom02">Confirm Password</CFormLabel>
                      <CFormInput
                        type="password"
                        id="validationCustom04"
                        defaultValue=""
                        required
                        name="passwordConfirmation"
                        onChange={handleInputChange}
                      />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                      {userCreateFormDataError ? (
                          <>
                            <label style={{marginBottom:'8px', color:'red'}}>{userCreateFormDataError.passwordConfirmation}</label><br></br>
                          </>
                        ) : (
                          <label></label>
                        )}
                    </CCol>

                    <CCol xs={12}>
                      <CButton color="primary" type="submit">
                        Create User
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

export default UserCreate
