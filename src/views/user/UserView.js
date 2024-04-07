import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CCardImage,
  CWidgetStatsD,
  CCardText,
  CCardTitle,
  CCarouselItem,
  CCarousel,
  CCarouselCaption,
  CAccordion,
  CAccordionBody,
  CAccordionItem,
  CAccordionHeader,
  CPaginationItem,
  CPagination,
  CWidgetStatsC,
  CTableHeaderCell,
  CTableRow,
  CTable,
  CTableHead,
  CTableBody,
  CTableDataCell,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter
} from '@coreui/react'
import ReactImg from 'src/assets/images/react.jpg'
import {
  cilCheck,
  cilCalendar,cilLowVision,
  cilBasket,
  cilTextShapes,
  cilHome,
  cilDelete
} from '@coreui/icons'
import AngularImg from 'src/assets/images/angular.jpg'
import { Link } from 'react-router-dom'
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

const UserView = () => {

  return (
    <CRow>
      <CCol xs={12}>
      <CCard className="mb-4">
          <CCardHeader>
            <strong>User</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              View User here
            </p>
            <div >
            <CCol style={{overflowX:'auto'}} lg={12}>
              <CRow>
                <CCol lg={5}>
                  <CCol className='m-4' xs={3}>
                    <CCard style={{ width: '25rem' }}>
                      <CCardImage orientation="top" src={ReactImg} />
                      <CCardBody>
                        <CCardTitle><u>User Details</u></CCardTitle>
                        <CRow>
                          <CCol lg={6} xs={6}>
                            First Name
                          </CCol>
                          <CCol className='mb-2' lg={6} xs={6}>
                            : Arjun
                          </CCol>
                          <CCol lg={6} xs={6}>
                            Last Name
                          </CCol>
                          <CCol className='mb-2' xs={6} lg={6}>
                            : P S
                          </CCol>
                          <CCol lg={6} xs={6}>
                            Mobile Number
                          </CCol>
                          <CCol className='mb-2' xs={6} lg={6}>
                            : 9633972298
                          </CCol>
                          <CCol  xs={6} lg={6}>
                            Email
                          </CCol>
                          <CCol className='mb-2' xs={6} lg={6}>
                            : arjun@gmail.com
                          </CCol>
                          <CCol lg={6} xs={6}>
                            Verification Status
                          </CCol>
                          <CCol className='mb-2' xs={6} lg={6}>
                            : <CIcon icon={cilCheck} width={25} style={{color:'green'}} customClassName="nav-icon" /> <small style={{color: 'green'}}>Verified</small>
                          </CCol>
                        </CRow>

                      </CCardBody>
                    </CCard>
                  </CCol>
                </CCol>
                <CCol lg={7}>
                  <CRow>
                    <CCol xs={6}>
                      <CWidgetStatsD
                        icon={<CIcon icon={cilCalendar} height={52} className="my-4 text-white" />}
                        values={[
                          { title: 'Joined On', value: '12/10/2056' },
                          { title: 'Verified At', value: '06/08/2060' },
                        ]}
                        style={{
                          '--cui-card-cap-bg': '#6261cc',
                        }}
                      />
                    </CCol>
                    <CCol xs={6}>
                    <CWidgetStatsC
                      icon={<CIcon icon={cilBasket} style={{color:'yellow'}} height={36} />}
                      value="1238"
                      title="Products buyed"
                      progress={{ color: 'warning', value: 75 }}
                    />
                    </CCol>
                    <CCol className='mt-3' xs={12}>
                      <CCard textColor='success' className={`mb-3 border-success`}>
                        <CCardHeader>Delivery Addresses</CCardHeader>
                        <CCardBody>
                          <CCard className='mb-2'>
                            <CCardBody>
                              <CRow>
                              <CCol xs={1}>
                                <CIcon icon={cilHome} style={{color:'primary'}} height={26} />
                              </CCol>
                              <CCol xs={8}>
                                  abcdefg
                              </CCol>
                              <CCol xs={3}>
                                <CButton
                                  color='primary'
                                  active={true}
                                  className='me-2 mb-2'
                                >
                                  <CIcon icon={cilTextShapes} className="me-2" />
                                  Edit
                                </CButton>
                              </CCol>
                            </CRow>
                            </CCardBody>
                          </CCard>
                          <CCard className='mb-2'>
                            <CCardBody>
                              <CRow>
                              <CCol xs={1}>
                                <CIcon icon={cilHome} style={{color:'primary'}} height={26} />
                              </CCol>
                              <CCol xs={8}>
                                  abcdefg
                              </CCol>
                              <CCol xs={3}>
                                <CButton
                                  color='primary'
                                  active={true}
                                  className='me-2 mb-2'
                                >
                                  <CIcon icon={cilTextShapes} className="me-2" />
                                  Edit
                                </CButton>
                              </CCol>
                            </CRow>
                            </CCardBody>
                          </CCard>
                          <CPagination className="justify-content-center" aria-label="Page navigation example">
                            <CPaginationItem disabled>Previous</CPaginationItem>
                            <CPaginationItem>1</CPaginationItem>
                            <CPaginationItem>2</CPaginationItem>
                            <CPaginationItem>3</CPaginationItem>
                            <CPaginationItem>Next</CPaginationItem>
                          </CPagination>
                        </CCardBody>
                      </CCard>
                    </CCol>
                  </CRow>
                </CCol>
                <CCol lg={12}>
                  <CCard>
                    <CCardHeader>
                      <u>Order Details</u>
                    </CCardHeader>
                    <CCardBody>
                    <CTable>
                      <CTableHead>
                        <CTableRow>
                          <CTableHeaderCell scope="col">#</CTableHeaderCell>
                          <CTableHeaderCell scope="col">Product ID</CTableHeaderCell>
                          <CTableHeaderCell scope="col">Payment ID</CTableHeaderCell>
                          <CTableHeaderCell scope="col">Amount</CTableHeaderCell>
                          <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                          <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                        </CTableRow>
                      </CTableHead>
                      <CTableBody>
                        <CTableRow>
                          <CTableHeaderCell scope="row">1</CTableHeaderCell>
                          <CTableDataCell>323rfdsf3w</CTableDataCell>
                          <CTableDataCell>das34534dfs</CTableDataCell>
                          <CTableDataCell>1000</CTableDataCell>
                          <CTableDataCell>21</CTableDataCell>
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
                          <CTableDataCell>323rfdsf3w</CTableDataCell>
                          <CTableDataCell>das34534dfs</CTableDataCell>
                          <CTableDataCell>1000</CTableDataCell>
                          <CTableDataCell>21</CTableDataCell>
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
                          <CTableDataCell>323rfdsf3w</CTableDataCell>
                          <CTableDataCell>das34534dfs</CTableDataCell>
                          <CTableDataCell>1000</CTableDataCell>
                          <CTableDataCell>21</CTableDataCell>
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
                          <CTableDataCell>323rfdsf3w</CTableDataCell>
                          <CTableDataCell>das34534dfs</CTableDataCell>
                          <CTableDataCell>1000</CTableDataCell>
                          <CTableDataCell>21</CTableDataCell>
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
                    </CCardBody>
                  </CCard>
                </CCol>
                <CCol className='mt-4 mb-4' xs={12}>
                <CAccordion activeItemKey={1}>
                  <CAccordionItem itemKey={1}>
                    <CAccordionHeader><b><i><u>Cart Products</u></i></b></CAccordionHeader>
                      <CAccordionBody>
                      <CRow>
                        <CCol className='mr-1 mb-1 mt-1' xs={3}>
                          <CCard style={{ width: '15rem' }}>
                            <CCardImage orientation="top" src={ReactImg} />
                            <CCardBody>
                              <CCardTitle>Card title</CCardTitle>
                              <CCardText>
                                Some quick example text to build on the card title and make up the bulk of the
                                card&#39;s content.
                              </CCardText>
                              <CButton color="primary" href="#">
                                Go somewhere
                              </CButton>
                            </CCardBody>
                          </CCard>
                        </CCol>
                        <CCol className='mr-1 mb-1 mt-1' xs={3}>
                          <CCard style={{ width: '15rem' }}>
                            <CCardImage orientation="top" src={ReactImg} />
                            <CCardBody>
                              <CCardTitle>Card title</CCardTitle>
                              <CCardText>
                                Some quick example text to build on the card title and make up the bulk of the
                                card&#39;s content.
                              </CCardText>
                              <CButton color="primary" href="#">
                                Go somewhere
                              </CButton>
                            </CCardBody>
                          </CCard>
                        </CCol>
                        <CCol className='mr-1 mb-1 mt-1' xs={3}>
                          <CCard style={{ width: '15rem' }}>
                            <CCardImage orientation="top" src={ReactImg} />
                            <CCardBody>
                              <CCardTitle>Card title</CCardTitle>
                              <CCardText>
                                Some quick example text to build on the card title and make up the bulk of the
                                card&#39;s content.
                              </CCardText>
                              <CButton color="primary" href="#">
                                Go somewhere
                              </CButton>
                            </CCardBody>
                          </CCard>
                        </CCol>
                        <CCol className='mr-1 mb-1 mt-1' xs={3}>
                          <CCard style={{ width: '15rem' }}>
                            <CCardImage orientation="top" src={ReactImg} />
                            <CCardBody>
                              <CCardTitle>Card title</CCardTitle>
                              <CCardText>
                                Some quick example text to build on the card title and make up the bulk of the
                                card&#39;s content.
                              </CCardText>
                              <CButton color="primary" href="#">
                                Go somewhere
                              </CButton>
                            </CCardBody>
                          </CCard>
                        </CCol>
                        <CCol className='mr-1 mb-1 mt-1' xs={3}>
                          <CCard style={{ width: '15rem' }}>
                            <CCardImage orientation="top" src={ReactImg} />
                            <CCardBody>
                              <CCardTitle>Card title</CCardTitle>
                              <CCardText>
                                Some quick example text to build on the card title and make up the bulk of the
                                card&#39;s content.
                              </CCardText>
                              <CButton color="primary" href="#">
                                Go somewhere
                              </CButton>
                            </CCardBody>
                          </CCard>
                        </CCol>
                        <CPagination className="justify-content-center mt-2" aria-label="Page navigation example">
                          <CPaginationItem disabled>Previous</CPaginationItem>
                          <CPaginationItem>1</CPaginationItem>
                          <CPaginationItem>2</CPaginationItem>
                          <CPaginationItem>3</CPaginationItem>
                          <CPaginationItem>Next</CPaginationItem>
                        </CPagination>
                      </CRow>
                      </CAccordionBody>
                    </CAccordionItem>
                    <CAccordionItem itemKey={2}>
                      <CAccordionHeader><b><i><u>WishList Products</u></i></b></CAccordionHeader>
                      <CAccordionBody>
                      <CRow>
                        <CCol className='mr-1 mb-1 mt-1' xs={3}>
                          <CCard style={{ width: '15rem' }}>
                            <CCardImage orientation="top" src={ReactImg} />
                            <CCardBody>
                              <CCardTitle>Card title</CCardTitle>
                              <CCardText>
                                Some quick example text to build on the card title and make up the bulk of the
                                card&#39;s content.
                              </CCardText>
                              <CButton color="primary" href="#">
                                Go somewhere
                              </CButton>
                            </CCardBody>
                          </CCard>
                        </CCol>
                        <CCol className='mr-1 mb-1 mt-1' xs={3}>
                          <CCard style={{ width: '15rem' }}>
                            <CCardImage orientation="top" src={ReactImg} />
                            <CCardBody>
                              <CCardTitle>Card title</CCardTitle>
                              <CCardText>
                                Some quick example text to build on the card title and make up the bulk of the
                                card&#39;s content.
                              </CCardText>
                              <CButton color="primary" href="#">
                                Go somewhere
                              </CButton>
                            </CCardBody>
                          </CCard>
                        </CCol>
                        <CCol className='mr-1 mb-1 mt-1' xs={3}>
                          <CCard style={{ width: '15rem' }}>
                            <CCardImage orientation="top" src={ReactImg} />
                            <CCardBody>
                              <CCardTitle>Card title</CCardTitle>
                              <CCardText>
                                Some quick example text to build on the card title and make up the bulk of the
                                card&#39;s content.
                              </CCardText>
                              <CButton color="primary" href="#">
                                Go somewhere
                              </CButton>
                            </CCardBody>
                          </CCard>
                        </CCol>
                        <CCol className='mr-1 mb-1 mt-1' xs={3}>
                          <CCard style={{ width: '15rem' }}>
                            <CCardImage orientation="top" src={ReactImg} />
                            <CCardBody>
                              <CCardTitle>Card title</CCardTitle>
                              <CCardText>
                                Some quick example text to build on the card title and make up the bulk of the
                                card&#39;s content.
                              </CCardText>
                              <CButton color="primary" href="#">
                                Go somewhere
                              </CButton>
                            </CCardBody>
                          </CCard>
                        </CCol>
                        <CCol className='mr-1 mb-1 mt-1' xs={3}>
                          <CCard style={{ width: '15rem' }}>
                            <CCardImage orientation="top" src={ReactImg} />
                            <CCardBody>
                              <CCardTitle>Card title</CCardTitle>
                              <CCardText>
                                Some quick example text to build on the card title and make up the bulk of the
                                card&#39;s content.
                              </CCardText>
                              <CButton color="primary" href="#">
                                Go somewhere
                              </CButton>
                            </CCardBody>
                          </CCard>
                        </CCol>
                        <CCol className='mr-1 mb-1 mt-1' xs={3}>
                          <CCard style={{ width: '15rem' }}>
                            <CCardImage orientation="top" src={ReactImg} />
                            <CCardBody>
                              <CCardTitle>Card title</CCardTitle>
                              <CCardText>
                                Some quick example text to build on the card title and make up the bulk of the
                                card&#39;s content.
                              </CCardText>
                              <CButton color="primary" href="#">
                                Go somewhere
                              </CButton>
                            </CCardBody>
                          </CCard>
                        </CCol>
                        <CCol className='mr-1 mb-1 mt-1' xs={3}>
                          <CCard style={{ width: '15rem' }}>
                            <CCardImage orientation="top" src={ReactImg} />
                            <CCardBody>
                              <CCardTitle>Card title</CCardTitle>
                              <CCardText>
                                Some quick example text to build on the card title and make up the bulk of the
                                card&#39;s content.
                              </CCardText>
                              <CButton color="primary" href="#">
                                Go somewhere
                              </CButton>
                            </CCardBody>
                          </CCard>
                        </CCol>
                        <CCol className='mr-1 mb-1 mt-1' xs={3}>
                          <CCard style={{ width: '15rem' }}>
                            <CCardImage orientation="top" src={ReactImg} />
                            <CCardBody>
                              <CCardTitle>Card title</CCardTitle>
                              <CCardText>
                                Some quick example text to build on the card title and make up the bulk of the
                                card&#39;s content.
                              </CCardText>
                              <CButton color="primary" href="#">
                                Go somewhere
                              </CButton>
                            </CCardBody>
                          </CCard>
                        </CCol>
                        <CPagination className="justify-content-center mt-2" aria-label="Page navigation example">
                          <CPaginationItem disabled>Previous</CPaginationItem>
                          <CPaginationItem>1</CPaginationItem>
                          <CPaginationItem>2</CPaginationItem>
                          <CPaginationItem>3</CPaginationItem>
                          <CPaginationItem>Next</CPaginationItem>
                        </CPagination>
                      </CRow>
                      </CAccordionBody>
                    </CAccordionItem>
                  </CAccordion>
                </CCol>
              </CRow>

              </CCol>
            </div>
          </CCardBody>
        </CCard>

      </CCol>
    </CRow>
  )
}

export default UserView
