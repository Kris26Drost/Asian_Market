// import { Container, Row, Col } from "react-bootstrap";
import "./shrine.scss";

const Shrine = () => {
  return (
  <>
          <div className="background">
            <h1 className="text-white main-title">WELCOME</h1>

            <div className="sun"></div>
            <div className="wave"></div>

            <img
              src="img/shrine.png"
              style={{
                width: "16%",
                height: "45%",
              }}
              className="shrine1 mx-3"
            />

            <img
              src="img/shrine.png"
              style={{
                width: "20%",
                height: "55%",
              }}
              className="shrine2"
            />

            <img
              src="img/shrine.png"
              style={{
                width: "16%",
                height: "45%",
              }}
              className="shrine3 mx-3"
            />
          </div>
     
          <div className="mirror">
            <div className="sun-mirror"></div>
            <img
              src="img/shrine.png"
              style={{
                width: "16%",
                height: "45%",
              }}
              className="shrine-mirror1 mx-1"
            />
            <img
              src="img/shrine.png"
              style={{
                width: "20%",
                height: "55%",
              }}
              className="shrine-mirror2"
            />
            <img
              src="img/shrine.png"
              style={{
                width: "16%",
                height: "45%",
              }}
              className="shrine-mirror3 mx-4"
            />
          </div>
    
          <div className="info">
            <h1 className="text-light">hello</h1>
          </div>
          </>
  
  );
};

export default Shrine;
