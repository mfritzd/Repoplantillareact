import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';

import img1 from '../assets/images/LoretsumthreePartsOne.jpg';

const html = 90;
const responsive = 95;
const photoshop = 98;

export default function AppAbout() {
 

  return (
    <section id="doit" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Who we are</h2>
          <div className="subtitle">Who we are and what we have done</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p style={{textAlign:"justify"}}>We are an institution specialized in the analysis, updating, and development of high-quality software. During the period of 2023 and early 2024, we have collaborated with a wide range of clients in sectors as varied as government, retail, mining, fishing, and banking. Our expertise has allowed us to implement various technologies to effectively meet the specific needs of each client and sector..</p>
            <p style={{textAlign:"justify"}}>We adapt technologies to various institutional needs, including communication, document management, APIs, and Power Platform for diverse clients..</p>
            <div className='progress-block' style={{height:"140"}} >
              <h4>html / css / javascript </h4>
              <ProgressBar  now={html} label={`${html}%`} />
            </div>
            <div className='progress-block'>
              <h4>Visual studio</h4>
              <ProgressBar now={responsive} label={`${responsive}%`} />
            </div>
            <div className='progress-block'>
              <h4>Power Platform</h4>
              <ProgressBar now={photoshop} label={`${photoshop}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

