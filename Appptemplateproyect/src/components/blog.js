import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import moment from 'moment';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


let currentDate = moment().format('MM/DD/yyyy, h:mm:ss a');

//className="btn btn-primary"  href="https://wa.me/+56931081928"
       
        

const blogData = [
  {
    id: 1,
    image: require('../assets/images/LoretsumtwoPartsOne.jpg'),
    referencia:"https://wa.me/+56931081928",
    time:currentDate,
    title: 'Lorem one',
    tarjeta:'_blank',
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    link: 'https://www.google.com'
  },
  {
    id: 2,
    image: require('../assets/images/LoretsumtwoPartsTwo.jpg'),
    referencia:"https://wa.me/+56931081928",
    time:  currentDate,
    title: 'Lorem Two',
    tarjeta:'_blank',
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    link: 'https://www.google.com'
  },
  {
    id: 3,
    image: require('../assets/images/LoretsumtwoPartsThree.jpg'),
    referencia:"https://wa.me/+56931081928",
    time: currentDate,
    title: 'Lorem Three',
    tarjeta:'_blank',
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    link: 'https://www.google.com'  }
]

export default function AppBlog() {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>OUR EXPERIENCE</h2>
          <div className="subtitle">Our experience over time</div>
        </div>
        <Row>
          {
            blogData.map(blog => {
              return (
                <Col sm={4} key={blog.id}>
                  <div className='holder'>
                    <Card>
                      <Card.Img variant="top" src={blog.image} />
                      <Card.Body>
                        <time>{blog.time}</time>
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text>
                          {blog.description}
                        </Card.Text>
                        <a href={blog.referencia} target={blog.tarjeta} className="btn btn-primary">{blog.title}&nbsp;&nbsp;<MDBIcon color='light' icon='phone' className='me-2' /></a>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}

