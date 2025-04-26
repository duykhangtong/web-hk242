import React from "react";
import { FaEdit, FaEye, FaSearch, FaStar, FaTrash } from "react-icons/fa";
import Titan18x from "../../assets/img/Titan18x.png";
import Titan18x2 from "../../assets/img/Titan18x2.png";
import './ProductList.css';

const products = [
  {
    id: 1,
    uid: "#1",
    name: "Titan18x",
    category: "laptop",
    brand: "DELL",
    price: 21,
    salePrice: 19,
    stock: 30,
    rating: 4.9,
    reviews: 16,
    orders: 380,
    sales: "38k",
    image: Titan18x,
  },
  {
    id: 2,
    uid: "#2",
    name: "Titan18x2",
    category: "laptop",
    brand: "DELL",
    price: 14,
    salePrice: 14,
    stock: 23,
    rating: 4.5,
    reviews: 38,
    orders: 189,
    sales: "9k",
    image: Titan18x2,
  },
];

const ProductList = ({ onViewDetail }) => {
  return (
    <div className="p-3">
      <h5 className="fw-bold mb-4">Best Selling Products</h5>

      <div className="row g-2 mb-3">
        <div className="col-md-3">
          <select className="form-select">
            <option>Show by: 36 Row</option>
            <option>12</option>
            <option>24</option>
          </select>
        </div>
        <div className="col-md-3">
          <select className="form-select">
            <option>Category by:</option>
            <option>Mens</option>
            <option>Womens</option>
          </select>
        </div>
        <div className="col-md-3">
          <select className="form-select">
            <option>Brand by:</option>
            <option>DELL</option>
            <option>HP</option>
          </select>
        </div>
        <div className="col-md-3">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search by ID, name..." />
            <span className="input-group-text"><FaSearch /></span>
          </div>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead className="table-primary">
            <tr>
              <th><input className="form-check-input" type="checkbox" /></th>
              <th>UID</th>
              <th>Product</th>
              <th>Category</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Rating</th>
              <th>Order</th>
              <th>Sales</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => (
              <tr key={prod.id}>
                <td><input className="form-check-input" type="checkbox" /></td>
                <td>{prod.uid}</td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <img src={prod.image} alt={prod.name} width="32" height="32" />
                    <div>
                      <div className="fw-semibold">{prod.name}</div>
                      <small className="text-muted">Description...</small>
                    </div>
                  </div>
                </td>
                <td>{prod.category}</td>
                <td>{prod.brand}</td>
                <td>
                  {prod.price !== prod.salePrice && (
                    <del className="text-muted me-1">${prod.price}</del>
                  )}
                  <span className="text-danger fw-bold">${prod.salePrice}</span>
                </td>
                <td>{prod.stock}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <FaStar className="text-warning me-1" />
                    <div>
                    {prod.rating} <small className="text-muted">({prod.reviews})</small>
                    </div>
                  </div>
                </td>
                <td>{prod.orders}</td>
                <td>${prod.sales}</td>
                <td>
                  <div className="d-flex gap-2">
                    <button
                      type="button"
                      className="btn btn-light btn-sm"
                      onClick={() => onViewDetail(prod)}
                    >
                      <FaEye className="text-primary" />
                    </button>
                    <button type="button" className="btn btn-light btn-sm">
                      <FaEdit className="text-success" />
                    </button>
                    <button type="button" className="btn btn-light btn-sm">
                      <FaTrash className="text-danger" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <nav aria-label="Page navigation example" className="d-flex justify-content-center mt-3">
        <ul className="pagination pagination-primary">
          <li className="page-item me-2">
            <a className="page-link" href="#">Prev</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">1</a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">2</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">3</a>
          </li>
          <li className="page-item ms-2">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ProductList;
