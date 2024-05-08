import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function AppContact() {
  return (
    <section id="contact" className="block contact-block">
     <Container fluid>
        <div className="title-holder">
          <h2>CONTACT US</h2>
          <div className="subtitle">If you need a quote for your project, contact us. We're here to help.</div>
        </div>
       
      </Container>
      <div className='google-map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.4859849244467!2d-71.22410117457108!3d-33.69637151014819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966255bc80e0c375%3A0x996523131274a330!2s9581567%20Melipilla%2C%20Santiago%20Metropolitan%20Region!5e0!3m2!1sen!2scl!4v1715058623784!5m2!1sen!2scl" ></iframe>
      </div>
      <Container fluid>
        
      </Container>
    </section>
  );
}

