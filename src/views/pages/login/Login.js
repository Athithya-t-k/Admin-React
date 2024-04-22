import React, { Fragment, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CButton, CCard, CCardBody, CCardGroup, CCol, CContainer, CForm, CFormInput, CInputGroup, CInputGroupText, CRow } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilLockLocked, cilUser } from '@coreui/icons';
import AuthController from '../../../controller/AuthController';
import cogoToast from 'cogo-toast';
import AuthManagement from '../../../utilities/AuthManagement';
const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    async function retrieveToken() {
      const token = await AuthManagement.getToken();
      if (token) {
        let tokenVerify = await AuthController.tokenVerify({ token: token });
        if (tokenVerify.success) {
          navigate('/dashboard', { state: { state: tokenVerify.user } });
        }
      }
    }
    retrieveToken();
  }, [navigate]);

  const [loginFormError, setLoginFormError] = useState({
    email: false,
    password: false
  });

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = await AuthController.login(loginData);
      console.log(loginUser)
      if (loginUser.success) {
        await AuthManagement.setToken(loginUser.data.token);
        cogoToast.success('Login successful', { position: 'bottom-left' });
        navigate('/dashboard', { state: { data: loginUser.user, token: loginUser.token } });
      } else {
        if(loginUser.status === 400) {
          console.log(loginUser.data.errors)
          let updatedErrors = { ...loginFormError}
          updatedErrors.email = false;
          updatedErrors.password = false;
          let errors = loginUser.data.errors;
          for (let error in errors) {
            updatedErrors[errors[error].path] = updatedErrors[errors[error].path]
              ? updatedErrors[errors[error].path] + '. ' + errors[error].msg
              : errors[error].msg;
          }
          setLoginFormError(updatedErrors)
        } else if(loginUser.status === 401){
          cogoToast.error('Invalid email or password', { position: 'bottom-left' });
        } else {
          cogoToast.error('Internal error occured', { position: 'bottom-left' });
        }
      }
    } catch (error) {
      console.log(error, '<=ax err');
    }
  };

  const handleInputChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Fragment>
      <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={8}>
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm onSubmit={handleLoginSubmit}>
                      <h1>Login</h1>
                      <p className="text-body-secondary">Sign In to your account</p>
                      {loginFormError ? (
                          <>
                            <label style={{marginBottom:'8px', color:'red'}}>{loginFormError.email}</label><br></br>
                            <label style={{marginBottom:'8px', color:'red'}}>{loginFormError.password}</label>
                          </>
                        ) : (
                          <label></label>
                        )}
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput
                          type="text"
                          name="email"
                          placeholder="Email"
                          autoComplete="email"
                          value={loginData.email}
                          onChange={handleInputChange}
                        />

                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          name="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          value={loginData.password}
                          onChange={handleInputChange}
                        />
                      </CInputGroup>
                      <CRow>
                        <CCol xs={6}>
                          <CButton type="submit" color="primary" className="px-4">
                            Login
                          </CButton>
                        </CCol>
                        <CCol xs={6} className="text-right">
                          <CButton color="link" className="px-0">
                            Forgot password?
                          </CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
                <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                  <CCardBody className="text-center">
                    <div>
                      <h2>Alweena</h2>
                      <p>
                        Our company is dedicated to providing high-quality perfumes and fragrances that make our customers feel confident and beautiful.
                      </p>

                    </div>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </Fragment>
  );
};

export default Login;
