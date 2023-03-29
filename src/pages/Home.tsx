import { Container, Row, Col } from "react-bootstrap";
import "../components/Shrine";
import Shrine from "../components/Shrine";

const Home = () => {
  return (
    <>
      <Shrine />

      <Container>
        <Row>
          <Col>
            <h1 className='text-white'>Hello</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
