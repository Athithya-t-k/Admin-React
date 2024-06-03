import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CPagination,
  CPaginationItem,
  CAvatar,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CDropdownItem,
  CNavLink
} from '@coreui/react'
import { Link, useNavigate } from 'react-router-dom'

import avatar8 from './../../assets/images/avatars/8.jpg'
import { cilLowVision, cilTextShapes, cilDelete, cilPlus } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import AuthController from '../../controller/AuthController'
import AuthManagement from '../../utilities/AuthManagement'
import cogoToast from 'cogo-toast';
import UserController from '../../controller/UserController'
import UserDeleteConfirmationModal from './modals/UserDeleteConfirmationModal'

const UserList = () => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([])

  useEffect(() => {
    const retrieveToken = async () => {
      const token = await AuthManagement.getToken();
      if (token) {
        let getUsers = await UserController.getUsers({ token: token });
        console.log(getUsers)
        if (getUsers.success) {
          setUserList(getUsers.data)
          navigate('/user', { state: { state: getUsers.user } });
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



  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>User List</strong>
          </CCardHeader>
          <CCardBody>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p className="text-body-secondary small">
                View all users here
              </p>
              <Link to='/user/create' style={{ marginLeft: 'auto' }}>
                <CButton
                  color='primary'
                  active={true}
                  className='me-2 mb-2'
                >
                  <CIcon icon={cilPlus} className="me-2" />
                  Add User
                </CButton>
              </Link>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {userList.map((user, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                      <CTableDataCell>{user.firstName} {user.lastName}</CTableDataCell>
                      <CTableDataCell>{user.mobileNumber}</CTableDataCell>
                      <CTableDataCell>{user.email}</CTableDataCell>
                      <CTableDataCell style={{ width: '300px' }}>
                        <Link to={`/user/view/${user._id}`}>

                        </Link>
                        <Link to={`/user/edit/${user._id}`}>
                          <CButton
                            color='primary'
                            active={true}
                            className='me-2 mb-2'
                          >
                            <CIcon icon={cilTextShapes} className="me-2" />
                            Edit
                          </CButton>
                        </Link>
                        <UserDeleteConfirmationModal userId = {user._id} />
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
              <CPagination className="justify-content-center" aria-label="Page navigation example">
                <CPaginationItem disabled>Previous</CPaginationItem>
                <CPaginationItem>1</CPaginationItem>
                <CPaginationItem>2</CPaginationItem>
                <CPaginationItem>3</CPaginationItem>
                <CPaginationItem>Next</CPaginationItem>
              </CPagination>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default UserList
