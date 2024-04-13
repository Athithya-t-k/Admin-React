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


const OrderList = () => {

  return (
    <CRow>
      <CCol xs={12}>
      <CCard className="mb-4">
          <CCardHeader>
            <strong>Orders List</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              View all orders here
            </p>
            <div style={{overflowX:'auto'}}>
            <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">User Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Product</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Quantity</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Order ID
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>3</CTableDataCell>
                    <CTableDataCell>45</CTableDataCell>
                    <CTableDataCell style={{width:'300px'}}>
                    <Link to="/order/view">

                      <CButton
                          color='success'
                          active={true}
                          className='me-2 mb-2'
                        >
                          <CIcon icon={cilLowVision} className="me-2" />
                          View
                        </CButton>
                        </Link>
                    </CTableDataCell>

                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>3</CTableDataCell>
                    <CTableDataCell>45</CTableDataCell>
                    <CTableDataCell style={{width:'300px'}}>
                    <Link to='/order/view'>

                      <CButton
                          color='success'
                          active={true}
                          className='me-2 mb-2'
                        >
                          <CIcon icon={cilLowVision} className="me-2" />
                          View
                        </CButton>
                        </Link>

                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>3</CTableDataCell>
                    <CTableDataCell>45</CTableDataCell>
                    <CTableDataCell style={{width:'300px'}}>
                    <Link to='/order/view'>
                      <CButton
                          color='success'
                          active={true}
                          className='me-2 mb-2'
                        >
                          <CIcon icon={cilLowVision} className="me-2" />
                          View
                        </CButton>
                        </Link>

                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>3</CTableDataCell>
                    <CTableDataCell>45</CTableDataCell>
                    <CTableDataCell style={{width:'300px'}}>
                    <Link to='/order/view'>
                      <CButton
                          color='success'
                          active={true}
                          className='me-2 mb-2'
                        >
                          <CIcon icon={cilLowVision} className="me-2" />
                          View
                        </CButton>
                        </Link>

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

export default OrderList
