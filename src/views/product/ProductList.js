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
  CDropdownToggle,
} from '@coreui/react'
import avatar8 from './../../assets/images/avatars/8.jpg'
import { cilLowVision,cilTextShapes,cilDelete } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const ProductList = () => {

  return (
    <CRow>
      <CCol xs={12}>
      <CCard className="mb-4">
          <CCardHeader>
            <strong>Products List</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              View all products here
            </p>
            <div style={{overflowX:'auto'}}>
            <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Price By ML</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Rating</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Offer Percentage
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col">Main Image</CTableHeaderCell>
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
                    <CTableDataCell>
                        <CAvatar src={avatar8} size="md" />
                    </CTableDataCell>
                    <CTableDataCell style={{width:'300px'}}>
                      <CButton
                          color='success'
                          active={true}
                          className='me-2 mb-2'
                        >
                          <CIcon icon={cilLowVision} className="me-2" />
                          View
                        </CButton>
                        <CButton
                        color='primary'
                        active={true}
                        className='me-2 mb-2'
                      >
                        <CIcon icon={cilTextShapes} className="me-2" />
                        Edit
                      </CButton>
                      <CButton
                        color='danger'
                        active={true}
                        className='me-2 mb-2'
                      >
                        <CIcon icon={cilDelete} className="me-2" />
                        Delete
                      </CButton>
                    </CTableDataCell>

                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>3</CTableDataCell>
                    <CTableDataCell>45</CTableDataCell>
                    <CTableDataCell>
                        <CAvatar src={avatar8} size="md" />
                    </CTableDataCell>
                    <CTableDataCell style={{width:'300px'}}>
                      <CButton
                          color='success'
                          active={true}
                          className='me-2 mb-2'
                        >
                          <CIcon icon={cilLowVision} className="me-2" />
                          View
                        </CButton>
                        <CButton
                        color='primary'
                        active={true}
                        className='me-2 mb-2'
                      >
                        <CIcon icon={cilTextShapes} className="me-2" />
                        Edit
                      </CButton>
                      <CButton
                        color='danger'
                        active={true}
                        className='me-2 mb-2'
                      >
                        <CIcon icon={cilDelete} className="me-2" />
                        Delete
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>3</CTableDataCell>
                    <CTableDataCell>45</CTableDataCell>
                    <CTableDataCell>
                        <CAvatar src={avatar8} size="md" />
                    </CTableDataCell>
                    <CTableDataCell style={{width:'300px'}}>
                      <CButton
                          color='success'
                          active={true}
                          className='me-2 mb-2'
                        >
                          <CIcon icon={cilLowVision} className="me-2" />
                          View
                        </CButton>
                        <CButton
                        color='primary'
                        active={true}
                        className='me-2 mb-2'
                      >
                        <CIcon icon={cilTextShapes} className="me-2" />
                        Edit
                      </CButton>
                      <CButton
                        color='danger'
                        active={true}
                        className='me-2 mb-2'
                      >
                        <CIcon icon={cilDelete} className="me-2" />
                        Delete
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>3</CTableDataCell>
                    <CTableDataCell>45</CTableDataCell>
                    <CTableDataCell>
                        <CAvatar src={avatar8} size="md" />
                    </CTableDataCell>
                    <CTableDataCell style={{width:'300px'}}>
                      <CButton
                          color='success'
                          active={true}
                          className='me-2 mb-2'
                        >
                          <CIcon icon={cilLowVision} className="me-2" />
                          View
                        </CButton>
                        <CButton
                        color='primary'
                        active={true}
                        className='me-2 mb-2'
                      >
                        <CIcon icon={cilTextShapes} className="me-2" />
                        Edit
                      </CButton>
                      <CButton
                        color='danger'
                        active={true}
                        className='me-2 mb-2'
                      >
                        <CIcon icon={cilDelete} className="me-2" />
                        Delete
                      </CButton>
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

export default ProductList
