import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Anocompleto = new Date();
const AnoGral = Anocompleto.getFullYear();



export default function AppsFooters() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section  className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span></span>
        </div>

       
      </section>

      <section id='footer' className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                  SOPROSOF
              </h6>
              <p style={{textAlign:"justify"}}>
              At Soprosof, we specialize in the development of exceptional quality software, especially in Microsoft technologies. Our team is comprised of an elite group of FullStack developers with extensive expertise in the technologies mentioned on this site.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  .Net Core
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Sharepoint 365
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Power Platform
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>&nbsp; </h6>
              <p>
              
                <a href='#!' className='text-reset'>
                  .Net Core api rest
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  .Net Core blazor
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Azure, SQL
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Oracle
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>CONTACTS</h6>
              
              <p>
                <MDBIcon color='light' icon='home' className='me-2' />
                Melipilla, Chile. Metropolitan Region
              </p>
              <p>
              <a href="mailto:contactos@soprosof.com" target='_blank' style={{color:"white"}}>
                <MDBIcon color='light' icon='envelope' className='me-2' />
                contactos@soprosof.com</a>
              </p>
              <p>
              <a href="https://wa.me/+56931081928" target='_blank' style={{color:"white"}}>
                <MDBIcon color='light' icon='phone' className='me-2' /> +56 9 3108 1928</a>

              </p>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © {AnoGral} Copyright.
       
       
      </div>
    </MDBFooter>
  );
}