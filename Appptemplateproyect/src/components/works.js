import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';

const worksData = [
  {
    id: 1,
    link: 'https://www.soprosof.com/',
    target:"_blank",
    image: require('../assets/images/LoretsumFourPartOne.jpg'),
    title: 'What is Lorem Ipsum?',
    subtitle: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
  },
  {
    id: 2,
    link: 'https://www.soprosof.com/',
    target:"_blank",
    image: require('../assets/images/LoretsumFourPartTwo.jpg'),
    title: 'What is Lorem Ipsum?',
    subtitle: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
  },
  {
    id: 3,
    link: 'https://www.soprosof.com/',
    target:"_blank",
    image: require('../assets/images/LoretsumFourPartThree.jpg'),
    title: 'What is Lorem Ipsum?',
    subtitle: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
  },
  {
    id: 4,
    link: 'https://www.soprosof.com/',
    target:"_blank",
    image: require('../assets/images/LoretsumFourPartFour.jpg'),
    title: 'What is Lorem Ipsum?',
    subtitle: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
  },
  {
    id: 5,
    link: 'https://www.soprosof.com/',
    target:"_blank",
    image: require('../assets/images/LoretsumFourPartFive.jpg'),
    title: 'What is Lorem Ipsum?',
    subtitle: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
  },
  {
    id: 6,
    link: 'https://www.soprosof.com/',
    target:"_blank",
    image: require('../assets/images/LoretsumFourPartSix.jpg'),
    title: 'What is Lorem Ipsum?',
    subtitle: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
  }
]

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

export default function AppWorks() {
  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>customers</h2>
          <div className="subtitle">Our distinguished clientele, to whom we provide our services with dedication and excellence</div>
        </div>
        <Row className='portfoliolist'>
          {
            worksData.map(works => {
              return (
                <Col sm={4} key={works.id}>
                  <div  className='portfolio-wrapper shadow-lg p-3 mb-5 bg-white rounded'>
                    <a href={works.link} target={works.target}>
                      <Image   src={works.image} />
                      <div className='label text-center'>
                        <h3>{works.title}</h3>
                        <p>{works.subtitle}</p>
                      </div>
                    </a>
                  </div>
                </Col>
              );
            })
          }
        </Row>
        
      </Container>  
    </section>
  );
}

 