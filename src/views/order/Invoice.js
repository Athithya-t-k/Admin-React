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

const Invoice = () => {


  return (
    <CRow>
      <CCol xs={12}>
      <CCard className="mb-4">
          <CCardHeader>
            <strong>Invoice</strong>
          </CCardHeader>
          <CCardBody>

          </CCardBody>
        </CCard>

      </CCol>
    </CRow>
  )
}

export default Invoice
