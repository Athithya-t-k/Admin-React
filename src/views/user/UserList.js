import React, { useState } from 'react'
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
import { Link } from 'react-router-dom'

import avatar8 from './../../assets/images/avatars/8.jpg'
import { cilLowVision,cilTextShapes,cilDelete } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const VerticallyCentered = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>

      <CButton
        color='danger'
        active={true}
        className='me-2 mb-2'
        onClick={() => setVisible(!visible)}
      >
        <CIcon icon={cilDelete} className="me-2" />
        Delete
      </CButton>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Are you sure ?</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Are you sure to delete this user?
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}


const UserList = () => {

  return (
    <CRow>
      <CCol xs={12}>
      <CCard className="mb-4">
          <CCardHeader>
            <strong>User List</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              View all users here
            </p>
            <div style={{overflowX:'auto'}}>
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
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>20222133</CTableDataCell>
                    <CTableDataCell>ahhh@ads.ss</CTableDataCell>
                    <CTableDataCell style={{width:'300px'}}>
                    <Link to="/user/view">

                      <CButton
                          color='success'
                          active={true}
                          className='me-2 mb-2'
                        >
                          <CIcon icon={cilLowVision} className="me-2" />
                          View
                        </CButton>
                        </Link>
                        <Link to='/user/edit'>
                        <CButton
                          color='primary'
                          active={true}
                          className='me-2 mb-2'
                        >
                          <CIcon icon={cilTextShapes} className="me-2" />
                          Edit
                        </CButton>
                        </Link>
                        {VerticallyCentered()}
                    </CTableDataCell>

                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>20222133</CTableDataCell>
                    <CTableDataCell>ahhh@ads.ss</CTableDataCell>
                    <CTableDataCell style={{width:'300px'}}>
                    <Link to="/user/view">

                      <CButton
                          color='success'
                          active={true}
                          className='me-2 mb-2'
                        >
                          <CIcon icon={cilLowVision} className="me-2" />
                          View
                        </CButton>
                        </Link>
                        <Link to='/user/edit'>
                        <CButton
                          color='primary'
                          active={true}
                          className='me-2 mb-2'
                        >
                          <CIcon icon={cilTextShapes} className="me-2" />
                          Edit
                        </CButton>
                        </Link>
                        {VerticallyCentered()}
                    </CTableDataCell>

                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>20222133</CTableDataCell>
                    <CTableDataCell>ahhh@ads.ss</CTableDataCell>
                    <CTableDataCell style={{width:'300px'}}>
                    <Link to="/user/view">

                      <CButton
                          color='success'
                          active={true}
                          className='me-2 mb-2'
                        >
                          <CIcon icon={cilLowVision} className="me-2" />
                          View
                        </CButton>
                        </Link>
                        <Link to='/user/edit'>
                        <CButton
                          color='primary'
                          active={true}
                          className='me-2 mb-2'
                        >
                          <CIcon icon={cilTextShapes} className="me-2" />
                          Edit
                        </CButton>
                        </Link>
                        {VerticallyCentered()}
                    </CTableDataCell>

                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>20222133</CTableDataCell>
                    <CTableDataCell>ahhh@ads.ss</CTableDataCell>
                    <CTableDataCell style={{width:'300px'}}>
                    <Link to="/user/view">

                      <CButton
                          color='success'
                          active={true}
                          className='me-2 mb-2'
                        >
                          <CIcon icon={cilLowVision} className="me-2" />
                          View
                        </CButton>
                        </Link>
                        <Link to='/user/edit'>
                        <CButton
                          color='primary'
                          active={true}
                          className='me-2 mb-2'
                        >
                          <CIcon icon={cilTextShapes} className="me-2" />
                          Edit
                        </CButton>
                        </Link>
                        {VerticallyCentered()}
                    </CTableDataCell>

                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>20222133</CTableDataCell>
                    <CTableDataCell>ahhh@ads.ss</CTableDataCell>
                    <CTableDataCell style={{width:'300px'}}>
                    <Link to="/user/view">

                      <CButton
                          color='success'
                          active={true}
                          className='me-2 mb-2'
                        >
                          <CIcon icon={cilLowVision} className="me-2" />
                          View
                        </CButton>
                        </Link>
                        <Link to='/user/edit'>
                        <CButton
                          color='primary'
                          active={true}
                          className='me-2 mb-2'
                        >
                          <CIcon icon={cilTextShapes} className="me-2" />
                          Edit
                        </CButton>
                        </Link>
                        {VerticallyCentered()}
                    </CTableDataCell>

                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>20222133</CTableDataCell>
                    <CTableDataCell>ahhh@ads.ss</CTableDataCell>
                    <CTableDataCell style={{width:'300px'}}>
                    <Link to="/user/view">

                      <CButton
                          color='success'
                          active={true}
                          className='me-2 mb-2'
                        >
                          <CIcon icon={cilLowVision} className="me-2" />
                          View
                        </CButton>
                        </Link>
                        <Link to='/user/edit'>
                        <CButton
                          color='primary'
                          active={true}
                          className='me-2 mb-2'
                        >
                          <CIcon icon={cilTextShapes} className="me-2" />
                          Edit
                        </CButton>
                        </Link>
                        {VerticallyCentered()}
                    </CTableDataCell>

                  </CTableRow>

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
