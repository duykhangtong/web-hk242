import React, { useState } from "react";
import { FaImages } from "react-icons/fa";
import "./ProductUpload.css";

const ProductUpload = () => {
  const [images, setImages] = useState([]);

  const handleImg = (e) => {
    const files = Array.from(e.target.files);
    const newImg = files.map((file) => ({
      url: URL.createObjectURL(file),
      file,
    }));
    setImages((prev) => [...prev, ...newImg].slice(0, 6));
  };

  return (
    <div className="container-fluid p-4">
      <h4 className="mb-4 fw-bold">Product Upload</h4>

      <div className="row">
        <div className="col-md-8">
          <div className="card mb-4 h-100">
            <div className="card-body h-100">
              <h5 className="fw-bold mb-3">Basic Information</h5>
              <form className="d-flex flex-column h-100">

                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input type="text" className="form-control" placeholder="Enter product title" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea className="form-control" rows="3" placeholder="Enter product description"></textarea>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="mb-3">
                      <label className="form-label">Category</label>
                      <select className="form-select">
                        <option>Laptop</option>
                        <option>Gaming Console</option>
                        <option>Smartphone</option>
                        <option>Tablet</option>
                      </select>
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-3">
                      <label className="form-label">Brand</label>
                      <select className="form-select">
                        <option>Apple</option>
                        <option>Samsung</option>
                        <option>Lenovo</option>
                        <option>Microsoft</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="mb-3">
                      <label className="form-label">Regular Price</label>
                      <input type="text" className="form-control" placeholder="USD" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-3">
                      <label className="form-label">Discount Price</label>
                      <input type="text" className="form-control" placeholder="USD" />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="mb-3">
                      <label className="form-label">Shipping Fee</label>
                      <input type="text" className="form-control" placeholder="USD" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-3">
                      <label className="form-label">Tax Rate (%)</label>
                      <input type="text" className="form-control" placeholder="Enter tax rate" />
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-column flex-grow-1">
                  <label className="form-label">Tags</label>
                  <textarea
                    className="form-control h-100"
                    placeholder="e.g. gaming, 4K display, SSD"
                    style={{ resize: "none" }}
                  ></textarea>
                </div>

              </form>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="fw-bold mb-3">Organization</h5>
              {["Category", "Brand", "Color", "Size"].map((item, idx) => (
                <div className="input-group mb-3" key={idx}>
                  <input type="text" className="form-control" placeholder={`Add ${item.toLowerCase()}`} />
                  <button className="btn btn-primary" type="button">Add</button>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h5 className="fw-bold mb-3">Specification</h5>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label className="form-label">RAM</label>
                    <input type="text" className="form-control" placeholder="e.g. 16GB" />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label className="form-label">Storage</label>
                    <input type="text" className="form-control" placeholder="e.g. 512GB SSD" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label className="form-label">Stock</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label className="form-label">Weight</label>
                    <input type="text" className="form-control" placeholder="in kg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-4 card-submit">
        <div className="card-body">
          <h5 className="fw-bold mb-5">Media And Published</h5>
          <div className="mb-0 row card-submit-row">
            {images.map((img, idx) => (
              <div key={idx} className="col-6 col-md-3 mb-3">
                <div
                  style={{
                    border: "1px dashed #ccc",
                    padding: 10,
                    textAlign: "center",
                    borderRadius: 8,
                    cursor: "pointer",
                    height: "200px",
                    width: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={img.url}
                    alt={`Uploaded ${idx}`}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            ))}

            {images.length < 6 && (
              <div className="col-6 col-md-3 d-flex align-items-center">
                <div
                  style={{
                    border: "2px dashed rgba(87, 84, 84, 0.5)",
                    padding: 10,
                    textAlign: "center",
                    borderRadius: 8,
                    cursor: "pointer",
                    height: "200px",
                    width: "200px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                  onClick={() => document.getElementById("fileInput").click()}
                >
                  <FaImages style={{ width: "80px", height: "80px", marginBottom: "10px" }} />
                  <span>Image Upload</span>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    hidden
                    id="fileInput"
                    onChange={handleImg}
                  />
                </div>
              </div>
            )}
          </div>

          <button className="btn btn-primary w-100 button-publish-view">
            Publish and View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductUpload;
