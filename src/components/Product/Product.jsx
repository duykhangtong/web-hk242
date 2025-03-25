import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Pagination } from 'react-bootstrap';
import './Product.css'; // CSS riêng

import Titan18x from '../../assets/Titan18x.png';
import Titan18x2 from '../../assets/Titan18x2.png';
import Titan18x3 from '../../assets/Titan18x3.png';

const LeftSidebar = () => {
  const [openSections,setOpenSection] = useState({
    productLine:false,
    geForce50: false,
    geForce40: false,
    geForce30: false,
    geForce20: false,
    geForce6000: false,
    screenSize:false

  })
  const toggleSection = (sectionName) =>
  {
    setOpenSection((prev) => (
      {
        ...prev,
        [sectionName]: !prev[sectionName],
      }
    ))
  }

  return (
    <>
      {/* Section toggle */}
      <div className="filter-section">
        <h5 onClick={()=>toggleSection('productLine')} className="toggle-header">
          <span>
          <i className="fa-solid fa-computer"></i> Dòng sản phẩm Gaming
          </span>
          <span className={`toggle-icon ${openSections.productLine ? 'rotate' : ''}`}>
            <i className="fa-solid fa-chevron-right"></i>
          </span>
        </h5>

        <div className={`filter-content ${openSections.productLine ? 'open' : 'closed'}`}>
          <Form.Check label="Titan GT Series" type="checkbox" defaultChecked />
          <Form.Check label="Stealth Series" type="checkbox" />
          <Form.Check label="Raider GE Series" type="checkbox" />
          <Form.Check label="Vector GP Series" type="checkbox" />
          <Form.Check label="Crosshair / Pulse GL Series" type="checkbox" />
          <Form.Check label="Sword / Katana GF Series" type="checkbox" />
          <a href="#" className="see-more">
            <i className="fa-solid fa-arrow-down"></i> Xem tất cả...
          </a>
        </div>
      </div>

      {/* Các filter khác */}
      <div className="filter-section">
        <h5>Dòng GPU</h5>
        <ul className="gpu-list">
          <li><h6 className="mb-2"><i className="fa-solid fa-chevron-right"></i> GeForce RTX™ 50 Series</h6>
          <div className='sublist'>
          <Form.Check label="GeForce RTX™ 5090" type="checkbox" className="mb-2"/>
          <Form.Check label="GeForce RTX™ 5080" type="checkbox" className="mb-2"/>
          </div ></li>

          <li><h6 className="mb-2"><i className="fa-solid fa-chevron-right"></i> GeForce RTX™ 40 Series</h6>
          <div className='sublist'>
          <Form.Check label="GeForce RTX™ 5090" type="checkbox"  className="mb-2"/>
          <Form.Check label="GeForce RTX™ 5080" type="checkbox" className="mb-2"/>
          </div></li>

          <li><i className="fa-solid fa-chevron-right"></i> GeForce RTX™ 30 Series
          <div className='sublist'>
          <Form.Check label="GeForce RTX™ 5090" type="checkbox"  className="mb-2"/>
          <Form.Check label="GeForce RTX™ 5080" type="checkbox" className="mb-2"/>
          </div></li>

          <li><i className="fa-solid fa-chevron-right"></i> GeForce RTX™ 20 Series
          <div className='sublist'>
          <Form.Check label="GeForce RTX™ 5090" type="checkbox"  className="mb-2"/>
          <Form.Check label="GeForce RTX™ 5080" type="checkbox" className="mb-2"/>
          </div></li>

          <li><i className="fa-solid fa-chevron-right"></i> AMD Radeon™ 6000M Series
          <div className='sublist'>
          <Form.Check label="GeForce RTX™ 5090" type="checkbox"  className="mb-2"/>
          <Form.Check label="GeForce RTX™ 5080" type="checkbox" className="mb-2"/>
          </div></li>
        </ul>
      </div>

      <div className="filter-section">
        <h5>Dòng CPU</h5>
        <ul className="gpu-list">
          <li><i className="fa-solid fa-chevron-right"></i> Intel Core™ Ultra</li>
          <li><i className="fa-solid fa-chevron-right"></i> Intel Core™ Gen 14</li>
        </ul>
      </div>
      <div className="filter-section">
        <h5 onClick={()=>toggleSection('screenSize')} className="toggle-header">
          <span>
          <i className="fa-solid fa-desktop"></i> Kích cỡ màn hình
          </span>
          <span className={`toggle-icon ${openSections.screenSize ? 'rotate' : ''}`}>
            <i className="fa-solid fa-chevron-right"></i>
          </span>
        </h5>

        <div className={`filter-content ${openSections.screenSize ? 'open' : 'closed'}`}>
          <Form.Check label="14" type="checkbox" defaultChecked />
          <Form.Check label="15.6" type="checkbox" />
          <Form.Check label="15.6 4K" type="checkbox" />
          <Form.Check label="16" type="checkbox" />
          <Form.Check label="17 Series" type="checkbox" />
          <Form.Check label="18" type="checkbox" />
          <a href="#" className="see-more">
            <i className="fa-solid fa-arrow-down"></i> Xem tất cả...
          </a>
        </div>
      </div>
    </>
  );
};
const RightSidebar = () => {
  return (
    <>
      <div className='container-card'>
        {/* Card 1 */}
        <div className="card">
          <Card className="product-card">
          <div className="prod__tag"><div className="triangle"></div><span className="tagTitle">MỚI</span></div>
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
        <div className="card">
          <Card className="product-card">
          <div className="prod__tag"><div className="triangle"></div><span className="tagTitle">MỚI</span></div>
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
          <div className="prod__tag"><div className="triangle"></div><span className="tagTitle">HOT</span></div>
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
    </>
  );
};



const Product = () => {
  return (
    <div className="product-page">
      <Container className='main-products'>

        {/* Header */}
        <Container fluid>
          <div className="product-header">
            <h2>MÁY TÍNH XÁCH TAY (3)</h2>
            <div className="sort-buttons">
              <button className="btn btn-dark">↕ Sắp xếp theo</button>
              <button className="btn btn-secondary">Độ phổ biến</button>
            </div>
          </div>
        </Container>

        {/* Layout */}
        <Row className='row-products'>
          <Col lg={3} md={3} sm={12} className="leftsidebar-product">
            <LeftSidebar />
          </Col>

          <Col lg={9} md={9} sm={12} className='rightsidebar-product'>
            <RightSidebar />
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default Product;