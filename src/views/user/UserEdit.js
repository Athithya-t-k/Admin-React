import React, { useEffect, useState } from 'react';
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
} from '@coreui/react';
import { useNavigate, useParams } from 'react-router-dom';
import AuthManagement from '../../utilities/AuthManagement';
import AuthController from '../../controller/AuthController';
import UserController from '../../controller/UserController';
import cogoToast from 'cogo-toast';

const UserEdit = () => {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});
  const { id } = useParams();

  const [userEditFormData, setUserEditFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
  });

  const [userEditFormDataError, setUserEditFormDataError] = useState({
    firstName: false,
    lastName: false,
    mobileNumber: false,
    email: false,
  });

  useEffect(() => {
    const retrieveToken = async () => {
      const token = await AuthManagement.getToken();
      if (token) {
        let tokenVerify = await AuthController.tokenVerifier({ token });
        if (tokenVerify.success) {
          const userDetails = await UserController.getUser(token, id);
          if (userDetails.success) {
            setUserDetails(userDetails.data);
            setUserEditFormData({
              firstName: userDetails.data.firstName || '',
              lastName: userDetails.data.lastName || '',
              mobileNumber: userDetails.data.mobileNumber || '',
              email: userDetails.data.email || '',
            });
          } else {
            cogoToast.error('Failed to fetch user details', { position: 'bottom-left' });
          }
        } else {
          cogoToast.error('Invalid token, please login again', { position: 'bottom-left' });
          navigate('/login');
        }
      } else {
        cogoToast.error('You need to login for accessing this page', { position: 'bottom-left' });
        navigate('/login');
      }
    };
    retrieveToken();
  }, [id, navigate]);

  const handleInputChange = (e) => {
    setUserEditFormData({
      ...userEditFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = await AuthManagement.getToken();
      const editUser = await UserController.editUser(token, userEditFormData, id);
      if (editUser.success) {
        cogoToast.success('User edited successfully', { position: 'bottom-left' });
        navigate('/user', { state: { data: editUser.user, token: editUser.token } });
      } else {
        if (editUser.status === 400) {
          let updatedErrors = { ...userEditFormDataError };
          updatedErrors.firstName = false;
          updatedErrors.lastName = false;
          updatedErrors.mobileNumber = false;
          updatedErrors.email = false;
          let errors = editUser.data.errors;
          for (let error in errors) {
            updatedErrors[errors[error].path] = errors[error].msg;
          }
          setUserEditFormDataError(updatedErrors);
        } else if (editUser.status === 401) {
          cogoToast.error('Invalid email or password', { position: 'bottom-left' });
        } else {
          cogoToast.error('Internal error occurred', { position: 'bottom-left' });
        }
      }
    } catch (error) {
      console.log(error, '<=ax err');
      cogoToast.error('Internal error occurred!', { position: 'bottom-left' });
    }
  };

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
            <div>
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
                      value={userEditFormData.firstName}
                      aria-describedby="inputGroupPrepend"
                      required
                      name="firstName"
                      onChange={handleInputChange}
                    />
                    <CFormFeedback invalid>Please enter a first name.</CFormFeedback>
                  </CInputGroup>
                  {userEditFormDataError.firstName && (
                    <label style={{ marginBottom: '8px', color: 'red' }}>{userEditFormDataError.firstName}</label>
                  )}
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="validationCustom01">Last Name</CFormLabel>
                  <CFormInput type="text" id="validationCustom01" onChange={handleInputChange} name="lastName" value={userEditFormData.lastName} required />
                  <CFormFeedback valid>Looks good!</CFormFeedback>
                  {userEditFormDataError.lastName && (
                    <label style={{ marginBottom: '8px', color: 'red' }}>{userEditFormDataError.lastName}</label>
                  )}
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="validationCustom02">Mobile Number</CFormLabel>
                  <CFormInput type="text" id="validationCustom02" onChange={handleInputChange} name="mobileNumber" value={userEditFormData.mobileNumber} required />
                  <CFormFeedback valid>Looks good!</CFormFeedback>
                  {userEditFormDataError.mobileNumber && (
                    <label style={{ marginBottom: '8px', color: 'red' }}>{userEditFormDataError.mobileNumber}</label>
                  )}
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="validationCustom02">Email</CFormLabel>
                  <CFormInput type="email" id="validationCustom02" onChange={handleInputChange} name="email" value={userEditFormData.email} required />
                  <CFormFeedback valid>Looks good!</CFormFeedback>
                  {userEditFormDataError.email && (
                    <label style={{ marginBottom: '8px', color: 'red' }}>{userEditFormDataError.email}</label>
                  )}
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
  );
};

export default UserEdit;
