import React from "react";
import { Container, Row, Col, Card, Button, Badge, Image } from "react-bootstrap";
import Titan18x from "../../assets/Titan18x.png"
import Titan18x2 from "../../assets/Titan18x2.png"
import Titan18x3 from "../../assets/Titan18x3.png"
const ProductDetail = () => {
  return (
    <Container fluid className="p-4">
      <Row>
        <Col md={6} className="text-center">
          <Card className="p-3">
            <Image
              src={Titan18x}
              fluid
              rounded
            />
            <div className="d-flex justify-content-center gap-2 mt-3">
              <Image
                src={Titan18x2}
                thumbnail
              />
              <Image
                src={Titan18x3}
                thumbnail
              />
              <Image
                src={Titan18x3}
                thumbnail
              />
              <Image
                src={Titan18x3}
                thumbnail
              />
            </div>
          </Card>
        </Col>

        <Col md={6}>
          <h5 className="fw-bold">
            Gaming Laptop - Ryzen 7, RTX 4060, 16GB RAM, 512GB SSD
          </h5>
          <hr />
          <p>
            <i className="bi bi-tags"></i> <strong>Brand:</strong> ASUS
          </p>
          <p>
            <i className="bi bi-grid"></i> <strong>Category:</strong> Laptop
          </p>
          <p>
            <i className="bi bi-ui-checks"></i> <strong>Tags:</strong>{" "}
            <Badge bg="secondary" className="me-1">GAMING</Badge>
            <Badge bg="secondary" className="me-1">LAPTOP</Badge>
            <Badge bg="secondary" className="me-1">HIGH-PERFORMANCE</Badge>
            <Badge bg="secondary" className="me-1">ASUS</Badge>
          </p>
          <p>
            <i className="bi bi-palette"></i> <strong>Color:</strong>{" "}
            <Badge bg="light" text="dark" className="me-1">Black</Badge>
            <Badge bg="light" text="dark" className="me-1">Gray</Badge>
          </p>
          <p>
            <i className="bi bi-hdd"></i> <strong>Storage:</strong>{" "}
            <Badge bg="light" text="dark" className="me-1">512GB</Badge>
            <Badge bg="light" text="dark" className="me-1">1TB</Badge>
          </p>
          <p>
            <i className="bi bi-currency-dollar"></i> <strong>Price:</strong>{" "}
            <span className="fw-bold text-success">$1199.00</span>{" "}
            <del className="text-muted">$1399.00</del>
          </p>
          <p>
            <i className="bi bi-box"></i> <strong>Stock:</strong> (24) Units
          </p>
          <p>
            <i className="bi bi-star"></i> <strong>Review:</strong> (15) Reviews
          </p>
          <p>
            <i className="bi bi-calendar"></i> <strong>Published:</strong> 15 Mar 2025
          </p>
          <Button variant="primary">Add to Cart</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
