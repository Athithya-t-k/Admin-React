import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CCardImage,
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
  CImage
} from '@coreui/react'
import ReactImg from 'src/assets/images/react.jpg'

import AngularImg from 'src/assets/images/angular.jpg'
import VueImg from 'src/assets/images/vue.jpg'
import { Link } from 'react-router-dom'

const OrderView = () => {


  return (
    <CRow>
      <CCol xs={12}>
      <CCard className="mb-4">
          <CCardHeader>
            <strong>Order</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              View Order here
            </p>
            <div >
            <CCol lg={12}>
                  <CCard className="mb-3">
                    <CCardBody>
                      <CCardTitle><u>Order Details</u></CCardTitle>
                      <CRow>
                        <CCol className='mt-4 mb-4' xs={12}>
                          <CRow>
                            <CCol xs={6}>
                              <CRow>
                                <CCol xs={6}>
                                  <CCardText>
                                    User Name
                                  </CCardText>
                                </CCol>
                                <CCol className='mb-4' xs={6}>
                                  <CCardText>
                                      : <Link to='/user/view'>
                                           ABC perfume
                                      </Link>
                                    </CCardText>
                                </CCol>
                                <CCol xs={6}>
                                  <CCardText>
                                    Order ID
                                  </CCardText>
                                </CCol>
                                <CCol className='mb-4' xs={6}>
                                  <CCardText>
                                      : df23213ds3
                                    </CCardText>
                                </CCol>
                                <CCol xs={6}>
                                  <CCardText>
                                    Product Id
                                  </CCardText>
                                </CCol>
                                <CCol className='mb-4' xs={6}>
                                  <CCardText>
                                      : <Link to='/product/view'>sdf234c234</Link>
                                    </CCardText>
                                </CCol>

                              </CRow>
                            </CCol>
                            <CCol xs={6}>
                              <CRow>
                                <CCol xs={6}>
                                    <CCardText>
                                      Purchesed On
                                    </CCardText>
                                  </CCol>
                                  <CCol className='mb-4' xs={6}>
                                    <CCardText>
                                        : 25/10/1997
                                      </CCardText>
                                  </CCol>
                                  <CCol xs={6}>
                                  <CCardText>
                                    Quantity
                                  </CCardText>
                                </CCol>
                                <CCol className='mb-4' xs={6}>
                                  <CCardText>
                                      : 23 ML
                                    </CCardText>
                                </CCol>
                                <CCol xs={6}>
                                  <CCardText>
                                    Amount Paid
                                  </CCardText>
                                </CCol>
                                <CCol className='mb-4' xs={6}>
                                  <CCardText>
                                      : 123 AED
                                    </CCardText>
                                </CCol>
                                </CRow>
                            </CCol>
                          </CRow>
                        </CCol>
                        <CCol lg={6} >
                          <CCard textColor='warning' className={`mb-3 border-primary`}>
                            <CCardHeader>User Details</CCardHeader>
                            <CCardBody>
                              <CCardTitle>Arjun P S</CCardTitle>
                              <CRow>
                              <CCol className='mt-2 mb-2' xs={12}>
                                <CImage style={{position:'relative',left:'25%', marginTop:'10px'}} src={AngularImg} width='46%'></CImage>
                              </CCol>
                              <CCol className='mt-4 mb-4' xs={12}>
                                <CRow>
                                  <CCol className='mt-1 mb-1' xs={6}>
                                    ID
                                  </CCol>
                                  <CCol className='mt-1 mb-1' xs={6}>
                                    : <Link to='/user/view'>2jg3yghjy</Link>
                                  </CCol>
                                  <CCol className='mt-1 mb-1' xs={6}>
                                    Name
                                  </CCol>
                                  <CCol className='mt-1 mb-1' xs={6}>
                                    : Arjun
                                  </CCol>
                                  <CCol className='mt-1 mb-1' xs={6}>
                                    Total Number of orders
                                  </CCol>
                                  <CCol className='mt-1 mb-1' xs={6}>
                                    : 34
                                  </CCol>
                                  <CCol className='mt-1 mb-1' xs={6}>
                                    Total amount spent on Alweena
                                  </CCol>
                                  <CCol className='mt-1 mb-1' xs={6}>
                                    : 8778 AED
                                  </CCol>
                                  <CCol className='mt-1 mb-1' xs={6}>
                                    Joined On
                                  </CCol>
                                  <CCol className='mt-1 mb-1' xs={6}>
                                    : 10/10/2000
                                  </CCol>
                                  <CCol className='mt-1 mb-1' xs={6}>
                                    Mobile Number
                                  </CCol>
                                  <CCol className='mt-1 mb-1' xs={6}>
                                    : 1234567889
                                  </CCol>
                                  <CCol className='mt-1 mb-1' xs={6}>
                                    email
                                  </CCol>
                                  <CCol className='mt-1 mb-1' xs={6}>
                                    : arjun@gmail.com
                                  </CCol>
                                </CRow>
                              </CCol>
                              </CRow>
                            </CCardBody>
                          </CCard>
                        </CCol>
                        <CCol lg={6} >
                          <CCard textColor='success' className={`mb-3 border-success`}>
                            <CCardHeader>Order Detail</CCardHeader>
                            <CCardBody>
                              <CCardTitle>s2jjks33</CCardTitle>
                              <CCol className='mt-2 mb-2' xs={12}>
                              <CCarousel controls transition="crossfade">
                                  <CCarouselItem>
                                    <img className="d-block w-50 h-50" style={{position:'relative',left:'25%', marginTop:'10px'}} src={ReactImg} alt="slide 1" />

                                  </CCarouselItem>
                                  <CCarouselItem>
                                    <img className="d-block w-50 h-50" style={{position:'relative',left:'25%', marginTop:'10px'}} src={AngularImg} alt="slide 2" />

                                  </CCarouselItem>
                                  <CCarouselItem>
                                    <img className="d-block w-50 h-50" style={{position:'relative',left:'25%', marginTop:'10px'}} src={VueImg} alt="slide 3" />

                                  </CCarouselItem>
                                </CCarousel>
                              </CCol>
                              <CCol className='mt-4 mb-4' xs={12}>
                                <CRow>
                                  <CCol className='mt-1 mb-1' xs={6}>
                                    ID
                                  </CCol>
                                  <CCol className='mt-1 mb-1' xs={6}>
                                    : <Link to='/product/view'>s2jjks33</Link>
                                  </CCol>
                                  <CCol className='mt-1 mb-1' xs={6}>
                                    Name
                                  </CCol>
                                  <CCol className='mt-1 mb-1' xs={6}>
                                    : Gold perfume
                                  </CCol>
                                  <CCol className='mt-1 mb-1' xs={6}>
                                    Price By ML
                                  </CCol>
                                  <CCol className='mt-1 mb-1' xs={6}>
                                    : 34
                                  </CCol>
                                  <CCol className='mt-1 mb-1' xs={6}>
                                    Rating
                                  </CCol>
                                  <CCol className='mt-1 mb-1' xs={6}>
                                    : 4/5
                                  </CCol>
                                  <CCol className='mt-1 mb-1' xs={6}>
                                    Offer Percentage
                                  </CCol>
                                  <CCol className='mt-1 mb-1' xs={6}>
                                    : 20
                                  </CCol>
                                  <CCol className='mt-1 mb-1' xs={12}>
                                    <Link to='/order/invoice'>View Invoice</Link>
                                  </CCol>

                                </CRow>
                              </CCol>
                            </CCardBody>
                          </CCard>
                        </CCol>
                      </CRow>
                    </CCardBody>
                  </CCard>
            </CCol>
            </div>
          </CCardBody>
        </CCard>

      </CCol>
    </CRow>
  )
}

export default OrderView
