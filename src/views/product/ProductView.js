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
  CPagination
} from '@coreui/react'
import ReactImg from 'src/assets/images/react.jpg'
import Star from './Star'
import FilledStar from './FilledStar'

import AngularImg from 'src/assets/images/angular.jpg'
import VueImg from 'src/assets/images/vue.jpg'

const ProductView = () => {


  return (
    <CRow>
      <CCol xs={12}>
      <CCard className="mb-4">
          <CCardHeader>
            <strong>Product</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              View product here
            </p>
            <div >
            <CCol lg={12}>
                  <CCard className="mb-3">
                  <CCarousel controls transition="crossfade">
                    <CCarouselItem>
                      <img className="d-block w-50 h-50" style={{position:'relative',left:'25%', marginTop:'10px'}} src={ReactImg} alt="slide 1" />
                      <CCarouselCaption className="d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                      </CCarouselCaption>
                    </CCarouselItem>
                    <CCarouselItem>
                      <img className="d-block w-50 h-50" style={{position:'relative',left:'25%', marginTop:'10px'}} src={AngularImg} alt="slide 2" />
                      <CCarouselCaption className="d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                      </CCarouselCaption>
                    </CCarouselItem>
                    <CCarouselItem>
                      <img className="d-block w-50 h-50" style={{position:'relative',left:'25%', marginTop:'10px'}} src={VueImg} alt="slide 3" />
                      <CCarouselCaption className="d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                      </CCarouselCaption>
                    </CCarouselItem>
                  </CCarousel>
                    {/* <CCardImage orientation="top" src={ReactImg} /> */}
                    <CCardBody>
                      <CCardTitle><u>Product Details</u></CCardTitle>
                      <CRow>
                        <CCol className='mt-4 mb-4' xs={12}>
                          <CRow>
                            <CCol xs={6}>
                              <CRow>
                                <CCol xs={6}>
                                  <CCardText>
                                    Name
                                  </CCardText>
                                </CCol>
                                <CCol className='mb-4' xs={6}>
                                  <CCardText>
                                      : ABC perfume
                                    </CCardText>
                                </CCol>
                                <CCol xs={6}>
                                  <CCardText>
                                    Tag Line
                                  </CCardText>
                                </CCol>
                                <CCol className='mb-4' xs={6}>
                                  <CCardText>
                                      : Best in the world 🤣
                                    </CCardText>
                                </CCol>
                                <CCol xs={6}>
                                  <CCardText>
                                    Price By ML
                                  </CCardText>
                                </CCol>
                                <CCol className='mb-4' xs={6}>
                                  <CCardText>
                                      : 20 AED
                                    </CCardText>
                                </CCol>
                                <CCol xs={6}>
                                  <CCardText>
                                    Rating
                                  </CCardText>
                                </CCol>
                                <CCol className='mb-4' xs={6}>
                                  <CCardText>
                                      : 3 / 5
                                    </CCardText>
                                </CCol>
                                <CCol xs={6}>
                                  <CCardText>
                                    Categories
                                  </CCardText>
                                </CCol>
                                <CCol className='mb-4' xs={6}>
                                  <CCardText>
                                      : Golden, Royal
                                    </CCardText>
                                </CCol>
                              </CRow>
                            </CCol>
                            <CCol xs={6}>
                              <CRow>
                                <CCol xs={6}>
                                    <CCardText>
                                      Tags
                                    </CCardText>
                                  </CCol>
                                  <CCol className='mb-4' xs={6}>
                                    <CCardText>
                                        : Golden, Brown, Sweet
                                      </CCardText>
                                  </CCol>
                                  <CCol xs={6}>
                                    <CCardText>
                                      Fragrance
                                    </CCardText>
                                  </CCol>
                                  <CCol className='mb-4' xs={6}>
                                    <CCardText>
                                        : Royal
                                      </CCardText>
                                  </CCol>
                                  <CCol xs={6}>
                                    <CCardText>
                                      Bottle Colour
                                    </CCardText>
                                  </CCol>
                                  <CCol className='mb-4' xs={6}>
                                    <CCardText>
                                        : Red
                                      </CCardText>
                                  </CCol>
                                  <CCol xs={6}>
                                    <CCardText>
                                      Items In The Box
                                    </CCardText>
                                  </CCol>
                                  <CCol className='mb-4' xs={6}>
                                    <CCardText>
                                        : Perfume, Bottle, Cap, Card
                                      </CCardText>
                                  </CCol>
                                  <CCol xs={6}>
                                    <CCardText>
                                      Offers
                                    </CCardText>
                                  </CCol>
                                  <CCol className='mb-4' xs={6}>
                                    <CCardText>
                                        : 40% off, Ifthar Offer
                                      </CCardText>
                                  </CCol>
                                </CRow>
                            </CCol>
                          </CRow>
                        </CCol>
                        <CCol className='mt-2 mb-4' xs={12}>
                          <CCardTitle>
                            Description
                          </CCardTitle>
                          <CCardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                          </CCardText>
                        </CCol>
                        <CCol className='mt-4 mb-4' xs={12}>
                          <CAccordion activeItemKey={1}>
                            <CAccordionItem itemKey={1}>
                              <CAccordionHeader>Reviews</CAccordionHeader>
                              <CAccordionBody>
                                <CRow>
                                  <CCard className="mb-4">
                                    <CCol xs={12}>
                                      <CRow>
                                        <CCol xs={6}>
                                          <CRow>
                                            <CCol xs={6}>
                                              User Name
                                            </CCol>
                                            <CCol xs={6}>
                                              : Arjun
                                            </CCol>
                                            <CCol sx={6}>
                                              Rating
                                            </CCol>
                                            <CCol xs={6}>
                                              : {FilledStar()}{FilledStar()}{Star()}{Star()}{Star()}
                                            </CCol>
                                          </CRow>
                                        </CCol>
                                        <CCol className='mt-2' xs={12}>
                                        <CRow>
                                            <CCol xs={12}>
                                              <u>Review</u>
                                            </CCol>
                                            <CCol xs={12}>
                                              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                            </CCol>

                                          </CRow>
                                        </CCol>
                                      </CRow>
                                    </CCol>
                                  </CCard>
                                  <CCard className="mb-4">
                                    <CCol xs={12}>
                                      <CRow>
                                        <CCol xs={6}>
                                          <CRow>
                                            <CCol xs={6}>
                                              User Name
                                            </CCol>
                                            <CCol xs={6}>
                                              : Arjun
                                            </CCol>
                                            <CCol sx={6}>
                                              Rating
                                            </CCol>
                                            <CCol xs={6}>
                                              : {FilledStar()}{FilledStar()}{Star()}{Star()}{Star()}
                                            </CCol>
                                          </CRow>
                                        </CCol>
                                        <CCol className='mt-2' xs={12}>
                                        <CRow>
                                            <CCol xs={12}>
                                              <u>Review</u>
                                            </CCol>
                                            <CCol xs={12}>
                                              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                            </CCol>

                                          </CRow>
                                        </CCol>
                                      </CRow>
                                    </CCol>
                                  </CCard>
                                  <CCard className="mb-4">
                                    <CCol xs={12}>
                                      <CRow>
                                        <CCol xs={6}>
                                          <CRow>
                                            <CCol xs={6}>
                                              User Name
                                            </CCol>
                                            <CCol xs={6}>
                                              : Arjun
                                            </CCol>
                                            <CCol sx={6}>
                                              Rating
                                            </CCol>
                                            <CCol xs={6}>
                                              : {FilledStar()}{FilledStar()}{Star()}{Star()}{Star()}
                                            </CCol>
                                          </CRow>
                                        </CCol>
                                        <CCol className='mt-2' xs={12}>
                                        <CRow>
                                            <CCol xs={12}>
                                              <u>Review</u>
                                            </CCol>
                                            <CCol xs={12}>
                                              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                            </CCol>

                                          </CRow>
                                        </CCol>
                                      </CRow>
                                    </CCol>
                                  </CCard>
                                  <CCard className="mb-4">
                                    <CCol xs={12}>
                                      <CRow>
                                        <CCol xs={6}>
                                          <CRow>
                                            <CCol xs={6}>
                                              User Name
                                            </CCol>
                                            <CCol xs={6}>
                                              : Arjun
                                            </CCol>
                                            <CCol sx={6}>
                                              Rating
                                            </CCol>
                                            <CCol xs={6}>
                                              : {FilledStar()}{FilledStar()}{Star()}{Star()}{Star()}
                                            </CCol>
                                          </CRow>
                                        </CCol>
                                        <CCol className='mt-2' xs={12}>
                                        <CRow>
                                            <CCol xs={12}>
                                              <u>Review</u>
                                            </CCol>
                                            <CCol xs={12}>
                                              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                            </CCol>

                                          </CRow>
                                        </CCol>
                                      </CRow>
                                    </CCol>
                                  </CCard>

                                  <CPagination className="justify-content-center" aria-label="Page navigation example">
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
                              <CAccordionHeader>Related Products</CAccordionHeader>
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
                              </CRow>
                              </CAccordionBody>
                            </CAccordionItem>
                          </CAccordion>
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

export default ProductView
