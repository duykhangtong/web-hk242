import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Pagination } from 'react-bootstrap';
import './Product.css'; // CSS riêng

import Titan18x from '../../assets/Titan18x.png';
import Titan18x2 from '../../assets/Titan18x2.png';
import Titan18x3 from '../../assets/Titan18x3.png';

const Product = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="product-page">
      <Container className='main-products'>
        {/* Header */}
        <Container fluid>
          <div className="product-header">
            <h2>MÁY TÍNH XÁCH TAY (3)</h2>
            <div className="sort-buttons">
              <Button variant="dark">↕ Sắp xếp theo</Button>
              <Button variant="secondary">Độ phổ biến</Button>
            </div>
          </div>
        </Container>

        {/* Layout */}
        <Row className='row-products'>
          {/* Sidebar */}
          <Col lg={3} md={3} sm={12} className="leftsidebar-product">
            {/* Section toggle */}
            <div className="filter-section">
              <h5
                onClick={toggleSection}
                className="toggle-header"
              >
                Dòng sản phẩm Gaming
                <span
                  className={`toggle-icon ${isOpen ? 'rotate' : ''}`}
                >
                  ▶
                </span>
              </h5>

              {/* Nội dung toggle */}
              <div className={`filter-content ${isOpen ? 'open' : 'closed'}`}>
                <Form.Check label="Titan GT Series" type="checkbox" defaultChecked />
                <Form.Check label="Stealth Series" type="checkbox" />
                <Form.Check label="Raider GE Series" type="checkbox" />
                <Form.Check label="Vector GP Series" type="checkbox" />
                <Form.Check label="Crosshair / Pulse GL Series" type="checkbox" />
                <Form.Check label="Sword / Katana GF Series" type="checkbox" />
                <a href="#" className="see-more">↘ Xem tất cả...</a>
              </div>
            </div>

            {/* Các filter khác */}
            <div className="filter-section">
              <h5>Dòng GPU</h5>
              <ul className="gpu-list">
                <li><i class="fa-solid fa-chevron-right"></i> GeForce RTX™ 50 Series</li>
                <li><i class="fa-solid fa-chevron-right"></i> GeForce RTX™ 40 Series</li>
                <li><i class="fa-solid fa-chevron-right"></i> GeForce RTX™ 30 Series</li>
                <li><i class="fa-solid fa-chevron-right"></i> GeForce RTX™ 20 Series</li>
                <li><i class="fa-solid fa-chevron-right"></i> AMD Radeon™ 6000M Series</li>
              </ul>
            </div>

            <div className="filter-section">
              <h5>Dòng CPU</h5>
              <ul className="gpu-list">
                <li><i class="fa-solid fa-chevron-right"></i> Intel Core™ Ultra</li>
                <li><i class="fa-solid fa-chevron-right"></i> Intel Core™ Gen 14</li>
              </ul>
            </div>
          </Col>

          {/* Product List */}
          <Col lg={9} md={9} sm={12} className='rightsidebar-product'>
            <div className='conainter-card'>
              {/* Card 1 */}
              <div className="card">
                <Card className="product-card">
                  <div className="corner-label">MỚI</div>
                  <Card.Img variant="top" src={Titan18x} />
                  <Card.Body>
                    <Form.Check label="Thêm vào phần so sánh" />
                    <Card.Title className="product-title">Titan 18 HX Dragon Edition Norse Myth</Card.Title>
                    <Card.Text className="product-desc">
                      Bộ xử lý Intel® Core™ Ultra (chuỗi 2) / card đồ họa GeForce RTX™ 50 Series
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="card">
                <Card className="product-card">
                  <div className="corner-label">MỚI</div>
                  <Card.Img variant="top" src={Titan18x} />
                  <Card.Body>
                    <Form.Check label="Thêm vào phần so sánh" />
                    <Card.Title className="product-title">Titan 18 HX Dragon Edition Norse Myth</Card.Title>
                    <Card.Text className="product-desc">
                      Bộ xử lý Intel® Core™ Ultra (chuỗi 2) / card đồ họa GeForce RTX™ 50 Series
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              {/* Card 2 */}
              <div  className="card">
                <Card className="product-card">
                  <div className="corner-label">MỚI</div>
                  <Card.Img variant="top" src={Titan18x2} />
                  <Card.Body>
                    <Form.Check label="Thêm vào phần so sánh" />
                    <Card.Title className="product-title">Titan 18 HX AI A2XW</Card.Title>
                    <Card.Text className="product-desc">
                      Bộ xử lý Intel® Core™ Ultra (Chuỗi 2) / card đồ họa GeForce RTX™ 50 Series
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              {/* Card 3 */}
              <div className="card">
                <Card className="product-card">
                  <div className="corner-label hot">HOT</div>
                  <Card.Img variant="top" src={Titan18x3} />
                  <Card.Body>
                    <Form.Check label="Thêm vào phần so sánh" />
                    <Card.Title className="product-title">Titan 18 HX A14V</Card.Title>
                    <Card.Text className="product-desc">
                      Vi xử lý Intel® Core™ (thế hệ 14) / card đồ họa GeForce RTX™ 40 Series
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              </div>

            {/* Pagination */}
            <div className="pagination-container">
              <Pagination>
                <Pagination.Prev />
                <Pagination.Item active>1</Pagination.Item>
                <Pagination.Next />
              </Pagination>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Product;
